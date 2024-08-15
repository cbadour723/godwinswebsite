import React from 'react';
import { footerStyle } from '../styles';

const facebookButtonStyle = {
  backgroundColor: '#4267B2', // Facebook blue color
  color: '#ffffff', // White text
  padding: '10px 20px',
  textDecoration: 'none',
  borderRadius: '5px',
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  display: 'inline-flex',
  alignItems: 'center',
  transition: 'background-color 0.3s',
  marginTop: '10px', // Add some space between the text and button
};

const iconStyle = {
  marginRight: '8px',
};

const Footer = () => (
  <footer style={footerStyle}>
    <p>&copy; 2024 Godwin's Market. All rights reserved.</p>
    <a href="https://www.facebook.com/godwinsmarket" target="_blank" rel="noopener noreferrer" style={facebookButtonStyle}>
      <i className="fab fa-facebook-f" style={iconStyle}></i> Follow Us on Facebook
    </a>
  </footer>
);

export default Footer;
