"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function CourseDetailsPage() {
  const { id } = useParams(); // URL থেকে id নেয় (যেমন: /courses/1)
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch("/data/courses.json");
        const data = await response.json();
        
        // JSON থেকে সঠিক আইডি-র কোর্সটি খুঁজে বের করা
        const selectedCourse = data.find((c) => c.id === parseInt(id));
        setCourse(selectedCourse);
      } catch (error) {
        console.error("Error loading course details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;
  if (!course) return <div className="p-10 text-center">Course not found!</div>;

  return (
    <div className="max-w-5xl mx-auto p-6 pt-24">
      {/* Back Button */}
      <Link href="/courses" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to All Courses
      </Link>

      <div className="gap-10 items-start">
        {/* Image Section */}
        <div className="max-w-md w-full aspect-video relative overflow-hidden rounded-lg"> 
  <Image 
    src={course.image} 
    alt={course.title}
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, 400px"
  />
</div>

        {/* Text Content Section */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-extrabold mt-4 text-gray-900 leading-tight">
              {course.title}
            </h1>
          </div>

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
        </div>
      </div>
    </div>
  );
}