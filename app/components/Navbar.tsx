'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="w-full bg-[#f0f0f0] border-b-3 border-black shadow-md">
      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)",
        backgroundSize: "16px 16px"
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-black text-gray-900">Menu Decoder</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#features" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              Pricing
            </Link>
            <Link href="#faq" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              FAQ
            </Link>
          </nav>
          
          <div className="flex items-center">
            <a 
              href="#get-started" 
              className="inline-flex items-center justify-center rounded-md bg-rose-500 px-5 py-2 text-sm font-bold text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:translate-y-[-2px] transition-all duration-200"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </header>
  );
} 