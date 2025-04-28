'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  color: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [isPaused, setIsPaused] = useState(false);
  
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div 
          className={`inner ${isPaused ? 'paused' : ''}`} 
          style={{'--quantity': testimonials.length} as React.CSSProperties}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="card" 
              style={{'--index': index, '--colorCard': testimonial.color} as React.CSSProperties}
            >
              <div className="card-content">
                <div className="quote-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 8.5H6.5C4.84 8.5 3.5 9.84 3.5 11.5V14.5C3.5 16.16 4.84 17.5 6.5 17.5H8.5C10.16 17.5 11.5 16.16 11.5 14.5V6.5M20.5 8.5H17.5C15.84 8.5 14.5 9.84 14.5 11.5V14.5C14.5 16.16 15.84 17.5 17.5 17.5H19.5C21.16 17.5 22.5 16.16 22.5 14.5V6.5" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="testimonial-content">{testimonial.content}</p>
                <div className="user-info">
                  <div className="user-avatar"></div>
                  <div className="user-details">
                    <h4 className="user-name">{testimonial.name}</h4>
                    <p className="user-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    width: 100%;
    height: 400px;
    position: relative;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .inner {
    --w: 300px;
    --h: 200px;
    --translateZ: calc(var(--w) * 1.5);
    --rotateX: -5deg;
    --perspective: 1600px;
    position: relative;
    width: var(--w);
    height: var(--h);
    z-index: 2;
    transform-style: preserve-3d;
    transform: perspective(var(--perspective));
    animation: rotating 30s linear infinite;
  }
  
  .inner.paused {
    animation-play-state: paused;
  }
  
  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(0);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX)) rotateY(1turn);
    }
  }

  .card {
    position: absolute;
    width: var(--w);
    height: var(--h);
    border: 3px solid black;
    border-radius: 16px;
    overflow: hidden;
    inset: 0;
    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));
    background: white;
    box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.9);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.9);
      transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
        translateZ(calc(var(--translateZ) + 20px));
    }
  }

  .card-content {
    padding: 1.5rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: radial-gradient(
      circle at center,
      rgba(var(--color-card), 0.15) 0%,
      rgba(var(--color-card), 0.05) 100%
    );
    border-radius: 12px;
  }
  
  .quote-icon {
    margin-bottom: 0.5rem;
  }
  
  .testimonial-content {
    flex: 1;
    font-size: 0.9rem;
    color: #333;
    margin-bottom: 1rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    line-height: 1.4;
    text-align: left;
    font-weight: 500;
  }
  
  .user-info {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
  
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(var(--color-card), 0.5);
    margin-right: 12px;
    border: 2px solid black;
  }
  
  .user-details {
    text-align: left;
  }
  
  .user-name {
    font-size: 0.9rem;
    font-weight: 700;
    color: #000;
    margin: 0 0 0.1rem;
  }
  
  .user-role {
    font-size: 0.75rem;
    color: #555;
    margin: 0;
    font-weight: 500;
  }
`;

export default TestimonialCarousel; 