'use client';

import React from 'react';
import styled from 'styled-components';

interface ProcessCardProps {
  items: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
  }[];
}

const ProcessCard: React.FC<ProcessCardProps> = ({ items }) => {
  return (
    <StyledWrapper>
      <div className="container">
        {items.map((item, index) => {
          // Define different colors for each card
          const colors = ["bg-rose-500", "bg-blue-500", "bg-purple-500"];
          const color = colors[index % colors.length];
          
          return (
            <div 
              key={item.id} 
              data-text={item.title} 
              data-color={color}
              style={{ '--r': (index === 0 ? -15 : index === 1 ? 5 : 25) } as React.CSSProperties} 
              className="glass"
            >
              <div className="icon-container">{item.icon}</div>
              <div className="card-description">{item.description}</div>
            </div>
          );
        })}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    perspective: 1000px;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .container .glass {
    position: relative;
    width: 350px;
    height: 260px;
    background: white;
    border: 3px solid black;
    box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    border-radius: 16px;
    margin: 0 -45px;
    transform: rotate(calc(var(--r) * 1deg));
    overflow: hidden;
    z-index: calc(3 - var(--r) / 10);
  }

  .container:hover .glass {
    transform: rotate(0deg);
    margin: 0 15px;
    box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.9);
  }

  .container .glass::before {
    content: attr(data-text);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    background: var(--color-accent, #000);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    letter-spacing: 1px;
    border-top: 3px solid black;
  }

  .container .glass[data-color="bg-rose-500"]::before {
    background: #f43f5e;
  }

  .container .glass[data-color="bg-blue-500"]::before {
    background: #3b82f6;
  }

  .container .glass[data-color="bg-purple-500"]::before {
    background: #8b5cf6;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    transition: 0.5s;
  }

  .container .glass svg {
    font-size: 2.8em;
    fill: #121212;
    transition: 0.5s;
  }
  
  .container .glass .card-description {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 45px);
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px;
    color: #333;
    font-size: 0.9rem;
    line-height: 1.6;
    opacity: 0;
    transition: 0.5s;
    transform: translateY(-100%);
    text-align: center;
    font-weight: 500;
    border-bottom: 3px solid black;
  }
  
  .container .glass:hover .icon-container {
    transform: translateY(100px);
    opacity: 0;
  }
  
  .container .glass:hover .card-description {
    opacity: 1;
    transform: translateY(0);
  }
  
  @media (max-width: 900px) {
    .container {
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .container .glass {
      margin: 10px;
      transform: rotate(0) !important;
    }
    
    .container:hover .glass {
      margin: 10px;
    }
  }
  
  @media (max-width: 600px) {
    .container {
      flex-direction: column;
      padding: 20px 0;
    }
    
    .container .glass {
      margin: -10px 0;
      transform: rotate(0) !important;
      width: 260px;
    }
    
    .container:hover .glass {
      margin: 10px 0;
    }
  }
`;

export default ProcessCard; 