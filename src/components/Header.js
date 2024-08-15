// src/components/Header.js
import React from 'react';
import { headerStyle, logoStyle } from '../styles';
import godwinsMarket from '../assets/Godwins Market.jpg';

const Header = () => (
  <header style={headerStyle}>
    <img src={godwinsMarket} alt="Godwin's Market" style={logoStyle} />
    <div>
      <h1>Godwin's Market</h1>
      <h2>721 South Anderson Boulevard, Topsail Beach, North Carolina 28445</h2>
      <h3>919-222-6310</h3>
    </div>
  </header>
);

export default Header;
