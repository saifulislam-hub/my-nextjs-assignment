// components/Hero.js
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
  return (
    <section className="relative bg-base-200 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:flex items-center">
        <div className="lg:w-1/2">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-base-content leading-tight">
            Upgrade Your <span className="text-primary">Skills</span> Today 🚀
          </h1>
          <p className="mt-6 text-lg text-base-content/70 max-w-lg">
            Master the most in-demand skills with SkillSphere. Learn from industry experts and join a community of 50,000+ learners worldwide.
          </p>
          <div className="mt-10 flex gap-4">
            <Link href="/courses" className="btn btn-primary px-8">Explore Courses</Link>
            <Link href="/register" className="btn btn-outline px-8">Get Started</Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
             {/* Replace with your professional dashboard or learning image */}
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000" 
              alt="Students learning" 
              className="w-full h-auto"
              width={500}
              height={500}
            />
          </div>
          {/* Decorative shapes for "Unique Design" */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}