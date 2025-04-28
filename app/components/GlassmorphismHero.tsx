'use client';

import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface GlassmorphismHeroProps {
  title: string;
  subtitle: string;
}

const GlassmorphismHero: React.FC<GlassmorphismHeroProps> = ({ title, subtitle }) => {
  return (
    <StyledWrapper>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2 md:py-4">
        <div className="hero-container">
          <div className="hero-content">
            <div className="star-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#f43f5e" />
              </svg>
            </div>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <div className="hero-buttons">
              <a href="#get-started" className="primary-button">
                Get Started
              </a>
              <a href="#how-it-works" className="secondary-button">
                How It Works
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="glass-card">
              <div className="card-content">
                <div className="app-header">
                  <div className="app-logo">Menu Decoder</div>
                  <div className="camera-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5H16.83L15 3H9ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18Z" fill="#f43f5e" />
                      <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" fill="#f43f5e" />
                    </svg>
                  </div>
                </div>
                
                <div className="menu-scan">
                  <div className="scan-overlay">
                    <div className="scan-animation"></div>
                  </div>
                  <div className="menu-items">
                    <div className="menu-item">
                      <div className="term">Bouillabaisse</div>
                      <div className="definition">Mediterranean seafood stew with saffron</div>
                      <div className="safe-tag">Seafood</div>
                    </div>
                    <div className="menu-item highlighted">
                      <div className="term">Tartare</div>
                      <div className="definition">Raw, finely chopped meat or fish</div>
                      <div className="caution-tag">Raw</div>
                    </div>
                    <div className="menu-item">
                      <div className="term">Ratatouille</div>
                      <div className="definition">Provençal vegetable stew</div>
                      <div className="veg-tag">Vegan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="glow-circle pink"></div>
            <div className="glow-circle blue"></div>
            <div className="glow-circle green"></div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0.5rem 0;
  
  .hero-container {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    z-index: 10;
    margin: 0 auto;
    min-height: calc(100vh - 6rem);
    
    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      height: auto;
    }
  }
  
  .hero-content {
    position: relative;
    z-index: 10;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    max-width: 100%;
  }
  
  .star-icon {
    margin-bottom: 1.5rem;
  }
  
  .hero-title {
    font-size: 3rem;
    font-weight: 900;
    line-height: 1.1;
    color: #000;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
    
    @media (min-width: 768px) {
      font-size: 4.5rem;
    }
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: #333;
    margin-bottom: 2.5rem;
    max-width: 600px;
    line-height: 1.5;
  }
  
  .hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    
    @media (min-width: 640px) {
      flex-direction: row;
      margin-bottom: 0;
    }
  }
  
  .primary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #f43f5e;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
    border: 2px solid black;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.9);
    
    &:hover {
      background: #e11d48;
      transform: translateY(-2px);
      box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.9);
    }
  }
  
  .secondary-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
    color: #000;
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    border: 2px solid black;
    transition: all 0.3s ease;
    text-decoration: none;
    box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.9);
    
    &:hover {
      background: #f5f5f5;
      transform: translateY(-2px);
      box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.9);
    }
  }
  
  .hero-image {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    max-width: 100%;
    
    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
  
  .glass-card {
    position: relative;
    width: 280px;
    height: 400px;
    background: white;
    border-radius: 1rem;
    border: 3px solid black;
    overflow: hidden;
    z-index: 10;
    transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
    transition: all 0.5s ease;
    box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.9);
    
    &:hover {
      transform: perspective(1000px) rotateY(-5deg) rotateX(2deg) translateY(-10px);
      box-shadow: 12px 12px 0px 0px rgba(0, 0, 0, 0.9);
    }
    
    @media (min-width: 768px) {
      width: 320px;
      height: 450px;
    }
  }
  
  .card-content {
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
  
  .app-logo {
    font-weight: 700;
    font-size: 1.1rem;
    color: #000;
  }
  
  .menu-scan {
    flex: 1;
    position: relative;
    background: #f7f7f7;
    border-radius: 0.5rem;
    overflow: hidden;
    border: 2px solid black;
  }
  
  .scan-overlay {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 2;
  }
  
  .scan-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(to bottom, 
      rgba(244, 63, 94, 0) 0%,
      rgba(244, 63, 94, 0.3) 50%,
      rgba(244, 63, 94, 0) 100%
    );
    animation: scan 2s ease-in-out infinite;
  }
  
  @keyframes scan {
    0% {
      top: 0;
    }
    100% {
      top: calc(100% - 30px);
    }
  }
  
  .menu-items {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .menu-item {
    background: white;
    padding: 0.75rem;
    border-radius: 0.375rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }
  
  .menu-item.highlighted {
    border: 1px solid rgba(244, 63, 94, 0.5);
    box-shadow: 0 1px 3px rgba(244, 63, 94, 0.1);
  }
  
  .term {
    font-weight: 700;
    margin-bottom: 0.25rem;
    color: #000;
  }
  
  .definition {
    font-size: 0.875rem;
    color: #555;
    margin-bottom: 0.5rem;
  }
  
  .safe-tag, .caution-tag, .veg-tag {
    display: inline-block;
    padding: 0.125rem 0.5rem;
    border-radius: 0.25rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: white;
    border: 1px solid black;
  }
  
  .safe-tag {
    background: #3b82f6;
  }
  
  .caution-tag {
    background: #f43f5e;
  }
  
  .veg-tag {
    background: #10b981;
  }
  
  .glow-circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(50px);
    z-index: 0;
    opacity: 0.4;
  }
  
  .pink {
    background: rgba(244, 114, 182, 0.6);
    width: 200px;
    height: 200px;
    right: -20px;
    top: 20%;
  }
  
  .blue {
    background: rgba(59, 130, 246, 0.6);
    width: 250px;
    height: 250px;
    right: 30%;
    bottom: -50px;
  }
  
  .green {
    background: rgba(16, 185, 129, 0.6);
    width: 180px;
    height: 180px;
    left: 0;
    top: 10%;
  }
`;

export default GlassmorphismHero; 