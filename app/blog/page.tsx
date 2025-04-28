import React from 'react';
import Link from 'next/link';
import { BackgroundGrid } from '../components/BackgroundGrid'; // Correct relative path
import BlogCard from '../components/BlogCard'; // Component to be created

// Mock data for blog posts (Replace with actual data fetching later)
const mockPosts = [
  {
    id: '1',
    slug: 'first-blog-post',
    title: 'My First Blog Post',
    date: '2024-07-28',
    excerpt: 'This is a short summary of the first blog post. Exciting things are coming!',
  },
  {
    id: '2',
    slug: 'understanding-menu-decoder',
    title: 'Understanding Menu Decoder Features',
    date: '2024-07-29',
    excerpt: 'Dive deep into the core features that make Menu Decoder an essential tool for diners.',
  },
  {
    id: '3',
    slug: 'the-future-of-dining',
    title: 'The Future of Dining with AI',
    date: '2024-07-30',
    excerpt: 'How technology like Menu Decoder is changing the way we experience food.',
  },
  // Add more mock posts if desired
];

export default function BlogPage() {
  return (
    // Added section wrapper, relative positioning, and background
    <section className="bg-[#f0f0f0] relative overflow-hidden min-h-screen">
      <BackgroundGrid /> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-12 text-center">
          Our Blog
        </h1>

        {/* Changed to grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockPosts.map((post) => (
            // Render BlogCard component for each post
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
} 