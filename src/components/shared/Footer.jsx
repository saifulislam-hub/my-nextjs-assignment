import React from 'react';
import Link from 'next/link';
// Importing React Icons
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand/About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Skill<span className="text-indigo-500">Sphere</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Empowering learners worldwide with industry-leading courses and expert-led instruction. Start your journey today.
            </p>
          </div>

         

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Contact Info</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <HiOutlineLocationMarker className="text-indigo-500 text-xl mr-3 mt-0.5" /> 
                <span>Haldia Union, Raozan,<br/>Chittagong, Bangladesh</span>
              </li>
              <li className="flex items-center">
                <HiOutlineMail className="text-indigo-500 text-xl mr-3" /> 
                <span>support@skillsphere.com</span>
              </li>
              <li className="flex items-center">
                <HiOutlinePhone className="text-indigo-500 text-xl mr-3" /> 
                <span>+880 1234 567890</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-widest">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 text-white">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 text-white">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 text-white">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-all duration-300 text-white">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Terms & Privacy */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs uppercase tracking-widest">
          <p>&copy; {currentYear} SkillSphere. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;