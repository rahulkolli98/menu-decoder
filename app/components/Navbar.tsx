'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Outer header: Handles fixed positioning and width
    <header 
      className={clsx(
        "w-full transition-all duration-300 ease-in-out",
        // Add z-index and positioning when scrolled
        isScrolled ? "fixed top-0 left-0 right-0 z-50" : "relative"
      )}
    >
      {/* Static Grid Background (Only visible when not scrolled) */}
      <div 
        className={clsx(
          "absolute inset-0 transition-opacity duration-300",
          // Apply background and shadow only when NOT scrolled
          !isScrolled ? "opacity-100 bg-[#f0f0f0] border-b-3 border-black shadow-md" : "opacity-0"
        )}
        style={{
          backgroundImage: !isScrolled ? "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)" : 'none',
          backgroundSize: "16px 16px"
        }} 
      />
      
      {/* Inner container: Handles content alignment, padding, and scrolled appearance */}
      <div 
        className={clsx(
          // Common classes: Centering, padding, base transition
          "mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-300 ease-in-out",
          // Unscrolled state: Use Tailwind 'container' behavior (implicit max-width)
          !isScrolled && "container", 
          // Scrolled state: Apply specific max-width, background, shadow etc.
          isScrolled && "max-w-6xl bg-[#f0f0f0]/90 backdrop-blur-md shadow-lg rounded-b-xl border-b border-l border-r border-black/10 mt-2"
        )}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-black text-gray-900">Menu Decoder</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/#features" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              How It Works
            </Link>
            {/*
            <Link href="#testimonials" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              Testimonials
            </Link>
            */}
            <Link href="/#pricing" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              Pricing
            </Link>
            <Link href="/#faq" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              FAQ
            </Link>
            {/* Added Blog link */}
            <Link href="/blog" className="text-sm font-bold text-gray-700 hover:text-black hover:underline">
              Blog
            </Link>
          </nav>
          
          <div className="flex items-center">
            <Link 
              href="/#get-started" 
              className="inline-flex items-center justify-center rounded-md bg-rose-500 px-5 py-2 text-sm font-bold text-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.9)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] hover:translate-y-[-2px] transition-all duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 