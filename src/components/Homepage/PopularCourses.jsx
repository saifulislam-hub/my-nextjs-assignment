"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PopularCourses = () => {
  const [topCourses, setTopCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetching from public/courses.json
    const fetchCourses = async () => {
      try {
        const response = await fetch('/data/courses.json');
        const data = await response.json();
        
        // Logic: Sort by rating (High to Low) and take the first 3
        const sorted = data
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 3);
          
        setTopCourses(sorted);
      } catch (error) {
        console.error("Failed to load courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <div className="text-center py-20 text-gray-500 text-xl">Loading Top Rated Courses...</div>;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Popular Courses</h2>
          <p className="mt-4 text-lg text-gray-600 font-medium">Explore our top 3 highest-rated learning experiences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {topCourses.map((course) => (
            <div 
              key={course.id} 
              className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                   width={300}
                  height={300}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center shadow-sm">
                  <span className="text-yellow-500 text-sm font-bold">★ {course.rating}</span>
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6 flex flex-col flex-grow">
                <span className="text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2">
                  {course.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6">
                  By <span className="text-gray-800 font-semibold">{course.instructor}</span>
                </p>

                <Link href={`/courses/${course.id}`} className="mt-auto">
                  <button className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div >
          <div className="mt-16 flex justify-center">
          <Link 
            href="/courses" 
            className="inline-flex items-center px-8 py-4 border-2 border-indigo-600 text-indigo-600 font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md"
          >
            Explore All Courses
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        </div>

      </div>
    </section>
  );
};

export default PopularCourses;