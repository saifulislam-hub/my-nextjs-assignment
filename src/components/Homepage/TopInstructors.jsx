import React from 'react';
import Image from 'next/image';

const TopInstructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Sarah Smith",
      role: "Lead JavaScript Expert",
      students: "15,000+",
      courses: 12,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Senior UI/UX Designer",
      students: "10,500+",
      courses: 8,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Laura Bennett",
      role: "Data Scientist & AI Lead",
      students: "22,000+",
      courses: 15,
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "John Doe",
      role: "Full Stack Developer",
      students: "18,200+",
      courses: 10,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className=" text-center mb-12 border-b border-gray-200 pb-8">
          <div>
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Meet Our Top Instructors</h2>
            <p className="text-gray-500 mt-2">Learn from industry professionals with years of experience.</p>
          </div>
        
        </div>

        {/* Instructor Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="group bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-indigo-500 rounded-full scale-105 opacity-0 group-hover:opacity-10 transition-all duration-300"></div>
                <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={500}
                     height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Text Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                <p className="text-sm font-medium text-indigo-600 mb-4">{instructor.role}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 py-3 px-4 bg-gray-50 rounded-2xl">
                  <div>
                    <p className="text-xs text-gray-500 uppercase">Students</p>
                    <p className="text-sm font-bold text-gray-800">{instructor.students}</p>
                  </div>
                  <div className="border-l border-gray-200">
                    <p className="text-xs text-gray-500 uppercase">Courses</p>
                    <p className="text-sm font-bold text-gray-800">{instructor.courses}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopInstructors;