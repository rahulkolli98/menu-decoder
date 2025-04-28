"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/app/lib/utils';

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqProps {
  title?: string;
  items: FaqItem[];
  className?: string;
}

// Header Component
const FaqHeader = ({ title }: { title: string }) => (
  <div className="text-center mb-8 sm:mb-12 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="inline-block"
    >
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-800 
        bg-gradient-to-r from-white to-gray-100 px-8 py-4 rounded-xl border-4 border-black
        shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9),_15px_15px_15px_-3px_rgba(0,0,0,0.1)]
        transform transition-transform hover:translate-x-1 hover:translate-y-1 mb-3 relative
        before:absolute before:inset-0 before:bg-white/50 before:rounded-xl before:blur-sm before:-z-10">
        {title}
      </h1>
      <motion.div
        className="h-2 bg-gradient-to-r from-black via-gray-600 to-black rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5 }}
      />
    </motion.div>
  </div>
);

// Background Effects Component
const BackgroundEffects = () => (
  <>
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-black/5 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
    <div className="absolute inset-0" style={{
      backgroundImage: "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)",
      backgroundSize: "16px 16px"
    }} />
  </>
);

// FAQ Item Component
const FaqItem = ({ item, index }: { item: FaqItem; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colors = [
    "bg-rose-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-green-500",
    "bg-amber-500"
  ];
  const color = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative w-full bg-white rounded-xl p-6 border-3 border-black
        shadow-[6px_6px_0px_0px_rgba(0,0,0,0.9)]
        hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.9)]
        transition-all duration-200"
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-xl font-black text-black">{item.question}</h3>
        <motion.div
          className={cn("w-8 h-8 rounded-full flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]", color)}
          animate={{ rotate: isOpen ? 90 : 0 }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0V12M0 6H12" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          marginTop: isOpen ? 16 : 0
        }}
        style={{ overflow: 'hidden' }}
      >
        <div className="p-4 bg-gray-50 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.9)]">
          <p className="text-black font-medium">{item.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Main Container Component
export const FaqContainer = ({ title = "Frequently Asked Questions", items, className = "" }: FaqProps) => {
  return (
    <div className={`relative ${className}`}>
      <FaqHeader title={title} />

      <div className="w-[100%] max-w-3xl mx-auto space-y-6 relative z-10">
        {items.map((item, index) => (
          <FaqItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}; 