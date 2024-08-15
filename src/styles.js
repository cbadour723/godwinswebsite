export const colors = {
    primary: '#27419C',       // Marian Blue
    primaryDark: '#2A449C',   // Marian Blue 2
    secondary: '#E5E9F2',     // Alice Blue
    accent: '#27419A',        // Marian Blue 3
    white: '#FFFFFF',         // White
    text: '#333333',          // Dark Gray for text
    background: '#F4F4F4',    // Light Gray background
    border: '#E0E0E0',        // Light Gray for borders
};

export const appStyle = {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: colors.text,
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: colors.background,
    padding: '20px', // Added padding to ensure content does not touch the edges
};

export const headerStyle = {
    backgroundColor: colors.primary,
    color: '#ffffff', // White text for better contrast
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px 8px 0 0', // Rounded top corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
};

export const footerStyle = {
    backgroundColor: colors.primary,
    color: '#ffffff', // White text for better contrast
    padding: '20px',
    textAlign: 'center',
    borderRadius: '0 0 8px 8px', // Rounded bottom corners
    boxShadow: '0 -4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
};

// Styles for images and other elements
export const imageGalleryStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '10px',
    padding: '20px',
};

export const imageStyle = {
    width: '100%',
    height: '200px', // Set a fixed height
    objectFit: 'cover', // Ensure the image covers the area without distortion
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
};
// src/styles.js
export const logoStyle = {
    width: '50px',  // Set the width of the logo
    height: '50px', // Set the height of the logo
    borderRadius: '50%', // Optional: Make the image round
    marginRight: '15px', // Add space between the image and text
    verticalAlign: 'middle', // Align the image vertically with the text
};

