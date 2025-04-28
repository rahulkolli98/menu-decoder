'use client';

import React from 'react';
import Link from 'next/link';

// Define the expected shape of the post prop
interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  // Format the date for display
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article 
      className="flex flex-col h-full bg-white rounded-xl p-6 border-3 border-black 
                 shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)] 
                 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)] 
                 transition-all duration-200 transform hover:-translate-y-1"
    >
      <header className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
          <Link 
            href={`/blog/${post.slug}`} 
            className="hover:text-rose-600 transition-colors duration-150 line-clamp-2"
          >
            {post.title}
          </Link>
        </h2>
        <p className="text-sm text-gray-500 font-medium">
          Published on {formattedDate}
        </p>
      </header>
      <div className="text-gray-700 mb-5 flex-grow">
        <p className="line-clamp-4">{post.excerpt}</p> {/* Limits excerpt lines */}
      </div>
      <footer className="mt-auto text-right"> {/* mt-auto pushes footer down */}
        <Link 
          href={`/blog/${post.slug}`} 
          className="inline-flex items-center font-bold text-rose-500 hover:text-rose-700 transition-colors duration-150 border-b-2 border-transparent hover:border-rose-500"
        >
          Read More &rarr;
        </Link>
      </footer>
    </article>
  );
};

export default BlogCard; 