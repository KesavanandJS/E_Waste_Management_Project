import React from 'react';
import './Home.css';
import backgroundVideo from '../assets/background-video.mp4'; // Ensure you have the video file in your assets folder

function Home() {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <div className='content'>
        <h1>WasteAID</h1>
        <p>AI-Recycling and Waste Software</p>
        <p>Increase Your Revenue and Recycling through AI-powered Compliance Monitoring</p>
        <button className="learn-more-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
