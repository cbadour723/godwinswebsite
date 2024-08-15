// src/App.js

import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import HoursChart from './components/HoursChart';
import godwinsFront from './assets/godwins-front.jpg';
import shirts from './assets/shirts.jpg';
import wine from './assets/wine.jpg';
import medicine from './assets/medicine.jpg';
import dog from './assets/dog.jpg';

import { headerStyle, footerStyle } from './styles';

const App = () => {
  return (
    <div style={outerContainerStyle}>
      <div style={innerContainerStyle}>
        <Header style={headerStyle} />
        <div style={imageGalleryStyle}>
          <img src={godwinsFront} alt="Godwins Front" style={imageStyle} />
          <img src={shirts} alt="Shirts" style={imageStyle} />
          <img src={medicine} alt="Medicine" style={imageStyle} />
          <img src={wine} alt="Wine" style={imageStyle} />
          <img src={dog} alt="Dog" style={imageStyle} />
        </div>
        <HoursChart />
        <MainContent />
        <Footer style={footerStyle} />
      </div>
    </div>
  );
};

// Inline styles for the outer container
const outerContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundColor: '#f4f4f4', // Light background color for the whole page
  padding: '20px', // Outer padding to ensure content doesn't touch the edges
};

// Inline styles for the inner container
const innerContainerStyle = {
  maxWidth: '1200px', // Maximum width of the main content
  width: '100%',
  backgroundColor: '#ffffff', // White background for the main content
  borderRadius: '8px', // Rounded corners
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
  padding: '20px', // Padding inside the container
};

// Inline styles for the image gallery
const imageGalleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '10px',
  padding: '20px',
};

// Inline styles for images
const imageStyle = {
  width: '100%',
  height: '400px', // Set a fixed height
  objectFit: 'cover', // Ensure the image covers the area without distortion
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

export default App;
