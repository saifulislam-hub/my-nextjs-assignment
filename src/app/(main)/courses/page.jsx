"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import courses from ""; <- এই লাইনটি ডিলিট করা হয়েছে

export default function CoursesPage() {
  const [courses, setCourses] = useState([]); // ডেটা রাখার জন্য স্টেট
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // ১. JSON ফাইল থেকে ডেটা ফেচ করার জন্য useEffect
  useEffect(() => {
    const loadCourses = async () => {
      try {
        // স্ক্রিনশট "Screenshot 2026-05-03 203726.png" অনুযায়ী পাথ
        const response = await fetch("/data/courses.json"); 
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error loading courses:", error);
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  // ২. সার্চ ফিল্টারিং লজিক
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <div className="p-6 text-center">Loading courses...</div>;
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between">
      <h1 className="text-3xl font-bold mb-6">All Courses</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by course title..."
        className=" p-3 border rounded-lg mb-6 outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      

      {/* Courses Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >
            {/* Image Handling */}
            <div className="relative h-48 w-full">
               <Image
                src={course.image}
                alt={course.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-4">
              <h2 className="text-lg font-semibold line-clamp-1">{course.title}</h2>
              <p className="text-sm text-gray-600">
                Instructor: {course.instructor}
              </p>
              <p className="text-yellow-500 font-medium">
                ⭐ {course.rating}
              </p>

              <Link href={`/courses/${course.id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center mt-12 py-10 bg-gray-50 rounded-xl">
          <p className="text-gray-500">No courses found matching your search.</p>
          <button 
            onClick={() => setSearch("")} 
            className="mt-2 text-blue-600 hover:underline"
          >
            Clear search
          </button>
        </div>
      )}
    </div>
  );
}