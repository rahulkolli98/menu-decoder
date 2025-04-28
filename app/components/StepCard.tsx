'use client';

import React from 'react';
import styled from 'styled-components';

interface StepCardProps {
  number: number;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description }) => {
  return (
    <StyledWrapper description={description}>
      <div className="card">
        <div className="card-content">
          <div className="step-number">{number}</div>
          <div className="card-title">{title}</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

interface StyledWrapperProps {
  description: string;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .card {
    position: relative;
    width: 100%;
    height: 280px;
    background: #121212; /* Dark background from Menu Decoder palette */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: white;
    border-radius: 15px;
    padding: 1.5rem;
    cursor: pointer;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: all 0.4s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: all 0.4s ease;
    width: 100%;
    height: 100%;
  }

  .step-number {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #00c896;
    color: #121212;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.75rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }

  .card-title {
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 1.25rem;
    transition: all 0.3s ease;
  }

  .card::before,
  .card::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background-color: #00c896; /* Green accent from Menu Decoder palette */
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    color: white;
    text-align: center;
    opacity: 0.95;
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .card:hover .card-content {
    opacity: 0;
    visibility: hidden;
    transform: scale(0.9);
  }

  .card:hover::before,
  .card:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover::after {
    content: "${props => props.description}";
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;
    color: #121212; /* Dark text on green background */
    font-size: 1rem;
    font-weight: normal;
    line-height: 1.6;
  }

  /* Add a small hint that the card is interactive */
  &::after {
    content: "Hover for details";
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 0.7rem;
    color: rgba(255, 255, 255, 0.5);
    opacity: 0.7;
    pointer-events: none;
    z-index: 3;
  }
`;

export default StepCard; 