"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter, usePathname } from "next/navigation"; // useRouter এবং usePathname যোগ করা হয়েছে
import { authClient } from "@/lib/auth-client"; // Better-Auth ক্লায়েন্ট ইমপোর্ট করুন
import Link from "next/link";
import Image from "next/image";

export default function CourseDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const pathname = usePathname(); // বর্তমান পেজের পাথ (e.g., /courses/7) পাওয়ার জন্য

  const { data: session, isPending } = authClient.useSession();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // ১. প্রটেকশন এবং রিডাইরেক্ট লজিক
  useEffect(() => {
    if (!isPending && !session) {
      // লগইন না থাকলে /login এ পাঠাবে এবং callbackURL হিসেবে বর্তমান পাথ যোগ করে দিবে
      router.push(`/login?callbackURL=${pathname}`);
    }
  }, [session, isPending, router, pathname]);

  // ২. ডাটা ফেচিং লজিক
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch("/data/courses.json");
        const data = await response.json();
        const selectedCourse = data.find((c) => c.id === parseInt(id));
        setCourse(selectedCourse);
      } catch (error) {
        console.error("Error loading course details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (session) { // শুধুমাত্র লগইন থাকলেই ডাটা ফেচ হবে
      fetchCourse();
    }
  }, [id, session]);

  // সেশন চেক বা ডাটা লোড হওয়ার সময় লোডিং দেখানো
  if (isPending || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-dots loading-lg text-purple-600"></span>
      </div>
    );
  }

  // সেশন না থাকলে কন্টেন্ট রেন্ডার করবে না (রিডাইরেক্ট হওয়া পর্যন্ত)
  if (!session) return null;

  if (!course) return <div className="p-10 text-center">Course not found!</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 pt-24">
      <Link href="/courses" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to All Courses
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="w-full aspect-video relative overflow-hidden rounded-lg shadow-md"> 
          <Image 
            src={course.image} 
            alt={course.title}
            fill
            className="object-cover"
            priority // LCP ইমেজের জন্য প্রায়োরিটি যোগ করা হয়েছে
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold mt-4 text-gray-900 leading-tight">
            {course.title}
          </h1>

          <div className="flex items-center gap-4 text-gray-700 italic">
            <p className="text-lg">Instructor: <span className="font-semibold text-gray-900">{course.instructor}</span></p>
          </div>

          <div className="flex flex-wrap gap-6 border-y py-4 text-sm font-medium text-gray-600">
            <p>⏱ {course.duration}</p>
            <p>⭐ {course.rating} Rating</p>
            <p>📊 {course.level}</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-3">Course Description</h2>
            <p className="text-gray-700 leading-relaxed text-justify">
              {course.description}
            </p>
          </div>
          
          <button className="btn btn-primary w-full bg-purple-600 text-white border-none hover:bg-purple-700">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}