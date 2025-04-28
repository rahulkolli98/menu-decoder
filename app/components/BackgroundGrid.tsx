'use client';

import React, { useState, useEffect } from 'react';

// Background Component that can be reused across sections
export const BackgroundGrid = () => {
  const [dotStyles, setDotStyles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    // Generate styles only on the client-side
    const styles = Array.from({ length: 30 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`,
    }));
    setDotStyles(styles);
  }, []); // Empty dependency array ensures this runs only once client-side after mount

  return (
    <>
      {/* Static Grid Background */}
      <div className="absolute inset-0 z-0" style={{
        backgroundImage: "linear-gradient(#00000008 1px, transparent 1px), linear-gradient(90deg, #00000008 1px, transparent 1px)",
        backgroundSize: "16px 16px"
      }} />
      {/* Floating Dots Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {dotStyles.map((style, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-black/5 rounded-full"
            style={style}
          />
        ))}
      </div>
    </>
  );
};

// Optional: Add default export if needed, though named export is fine
// export default BackgroundGrid; 