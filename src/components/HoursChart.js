import React from 'react';

// Define some styles
const tableStyle = {
  width: '80%',              // Increase table width
  margin: '20px auto',       // Center the table with margin
  borderCollapse: 'collapse', // Collapse borders for a cleaner look
};

const headerStyle = {
  backgroundColor: '#0044cc', // Dark Blue background
  color: '#ffffff',           // White text
  textAlign: 'left',          // Left-align text in headers
  padding: '12px',           // Add padding for better spacing
  borderBottom: '2px solid #ffffff', // Bottom border for headers
};

const cellStyle = {
  border: '1px solid #e0e0e0', // Light gray border for cells
  padding: '12px',             // Add padding for better spacing
  textAlign: 'left',           // Left-align text in cells
};

const rowStyle = {
  '&:nth-child(even)': {      // Alternate row background color for readability
    backgroundColor: '#f9f9f9', // Light gray for even rows
  },
};

const HoursTable = () => {
  const hoursData = [
    { day: 'Monday', open: '9:00 AM', close: '6:00 PM' },
    { day: 'Tuesday', open: '9:00 AM', close: '6:00 PM' },
    { day: 'Wednesday', open: '9:00 AM', close: '6:00 PM' },
    { day: 'Thursday', open: '9:00 AM', close: '6:00 PM' },
    { day: 'Friday', open: '9:00 AM', close: '8:00 PM' },
    { day: 'Saturday', open: '10:00 AM', close: '8:00 PM' },
    { day: 'Sunday', open: '10:00 AM', close: '4:00 PM' },
  ];

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={headerStyle}>Day</th>
          <th style={headerStyle}>Opening Time</th>
          <th style={headerStyle}>Closing Time</th>
        </tr>
      </thead>
      <tbody>
        {hoursData.map((day, index) => (
          <tr key={index} style={rowStyle}>
            <td style={cellStyle}>{day.day}</td>
            <td style={cellStyle}>{day.open}</td>
            <td style={cellStyle}>{day.close}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default HoursTable;
