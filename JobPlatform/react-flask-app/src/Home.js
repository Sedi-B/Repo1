import React from 'react';
import './Home.css'; 
import job from '../src/Pictures/job.jpeg'
const Home = () => {
  return (
    <div className="home-container">
      <div className="image-section">
        <img 
          src={job}
          alt="Welcome" 
          className="home-image" 
        />
      </div>
      <div className="text-section">
        <h1>Welcome to Our Job Listing Platform!</h1>
        <p>We are excited to have you here. Explore our website for different Job posts,search or applications!</p>
        <button className="get-started-btn">Get Started</button>
      </div>
    </div>
  );
};

export default Home;
