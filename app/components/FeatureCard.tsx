'use client';

import React from 'react';
import styled from 'styled-components';

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <StyledWrapper description={description}>
      <div className="card">
        <div className="card-content">
          {icon && <div className="card-icon">{icon}</div>}
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
    height: 300px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    color: #121212;
    border-radius: 16px;
    padding: 1.5rem;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid black;
    box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 0.9);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 8px 8px 0px 0px rgba(0, 0, 0, 0.9);
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

  .card-icon {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    color: #121212;
    transition: all 0.3s ease;
  }

  .card-title {
    text-align: center;
    color: #121212;
    font-weight: bold;
    font-size: 1.25rem;
    transition: all 0.3s ease;
    margin-bottom: 1rem;
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
    background-color: #fff;
    border: 3px solid black;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    color: #121212;
    text-align: center;
    opacity: 0;
  }

  .card::before {
    top: 0;
    right: 0;
    border-radius: 0 13px 0 100%;
  }

  .card::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 13px;
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
    border-radius: 13px;
    opacity: 1;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card:hover::after {
    content: "${props => props.description}";
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;
    color: #121212;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.6;
    background-color: white;
  }


`;

export default FeatureCard; 