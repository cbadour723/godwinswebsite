import React from 'react';

const MainContent = () => {
  return (
    <main style={mainStyle}>
      <section id="home" style={homeSectionStyle}>
        <h2>Home</h2>
        <p>Welcome to our website. We offer a variety of services to help you achieve your goals.</p>
      </section>
      <section id="about" style={aboutSectionStyle}>
        <h2>About Us</h2>
        <p>
          Godwin's Market is a charming grocery store located in the serene town of Topsail Beach, North Carolina. 
          Situated at 721 South Anderson Boulevard, this market offers a wide range of fresh produce, meats, dairy products, 
          and pantry staples to meet all your grocery needs. With friendly staff and a welcoming atmosphere, 
          Godwin's Market is the perfect place to stock up on essentials or pick up a quick snack while visiting 
          the beautiful coastal town of Topsail Beach. Whether you're a local resident or a tourist exploring the area, 
          Godwin's Market is sure to provide a convenient and enjoyable shopping experience.
        </p>
      </section>
      <section id="services" style={servicesSectionStyle}>
        <h2>Testimonials</h2>
        <blockquote style={quoteStyle}>
          <p>Deanna Thomas: "So happy to have Godwin’s store back in Topsail Beach. The new owners have done a great job keeping the exterior true to what it used to look like while updating the inside to have essentials and more. We went 3 times during our trip last week and each time the clerks were friendly and the store was clean and well stocked!"</p>
        </blockquote>
        <blockquote style={quoteStyle}>
          <p>Thomas Laurence: "So glad to have this market on this side of the island. Now we don’t have to fight beach traffic to get what we need."</p>
        </blockquote>
        <blockquote style={quoteStyle}>
          <p>Yvonne schnieder: "This cute little market had everything we needed. It sure beats driving to surf city. The clerk was friendly and helpful and the surrounding area & stores is an adorable place to stroll around. Will definitely come back here next time we run out of something."</p>
        </blockquote>
      </section>
      <section id="contact" style={contactSectionStyle}>
        <h2>Contact Us</h2>
        <p>Get in touch with us for any inquiries or support.</p>
      </section>
    </main>
  );
};

const mainStyle = {
  fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  color: '#333',
  padding: '20px',
  maxWidth: '1200px',
  margin: '0 auto',
};

const sectionStyle = {
  padding: '20px',
  marginBottom: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const homeSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#f9f9f9',
};

const aboutSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#e9ecef',
};

const servicesSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#fff3cd',
};

const contactSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#d4edda',
};

const quoteStyle = {
  fontStyle: 'italic',
  borderLeft: '4px solid #ccc',
  paddingLeft: '10px',
  margin: '10px 0',
};

export default MainContent;

