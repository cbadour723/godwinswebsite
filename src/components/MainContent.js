import React from 'react';
import kitchen from '../assets/kitchen.jpg';
import livingroom from '../assets/living room.jpg';
import bathroom from '../assets/bathroom.jpg';
import hallway from '../assets/hallway.jpg';
import washer from '../assets/washer.jpg';
import bedroom from '../assets/bedroom.jpg';

const MainContent = () => {
  return (
    <main style={mainStyle}>
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
  <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Testimonials</h2>
  
  <blockquote style={{ ...quoteStyle, fontSize: '18px', lineHeight: '1.8', padding: '15px' }}>
    <p>Deanna Thomas: "So happy to have Godwin’s store back in Topsail Beach. The new owners have done a great job keeping the exterior true to what it used to look like while updating the inside to have essentials and more. We went 3 times during our trip last week and each time the clerks were friendly and the store was clean and well stocked!"</p>
  </blockquote>
  
  <blockquote style={{ ...quoteStyle, fontSize: '18px', lineHeight: '1.8', padding: '15px' }}>
    <p>Thomas Laurence: "So glad to have this market on this side of the island. Now we don’t have to fight beach traffic to get what we need."</p>
  </blockquote>
  
  <blockquote style={{ ...quoteStyle, fontSize: '18px', lineHeight: '1.8', padding: '15px' }}>
    <p>Yvonne Schneider: "This cute little market had everything we needed. It sure beats driving to Surf City. The clerk was friendly and helpful and the surrounding area & stores is an adorable place to stroll around. Will definitely come back here next time we run out of something."</p>
  </blockquote>
</section>

<section id="home" style={homeSectionStyle}>

  <h2>History</h2>
  <p style={{ fontSize: '18px', lineHeight: '1.6', margin: '15px 0' }}>
  Godwin’s Market has a rich history that dates back to 1949. It all began when Bill Bland, a Fayetteville native, constructed the market building on Topsail and hired James Averon Godwin to manage the store during the summers, bringing him down from New England. Over time, J.A. Godwin decided to settle permanently in North Carolina, purchasing the store from Bland and running it alongside his wife until his passing in the mid-1970s. In 1977, their son, Bill Godwin, and his wife, Mary, moved from Graham, North Carolina, to Topsail to assist his mother in operating the market.
  </p>
</section>
      <section id="contact" style={contactSectionStyle}>
        <h2>Contact Us</h2>
        <p>721 S Anderson Blvd, Topsail Beach, NC, United States, North Carolina. 
          <p>
          (910) 523-8773.
          </p>

          Email: info@godwinsmarket.com</p>
      </section>
      <section id="apartment for rent" style={apartmentSectionStyle}>
        <h2>Apartment for rent</h2>
        <p>FOR RENT!!!
Long term rental right above Godwin’s.
2 Bedrooms.
1 Bath.
All new appliances and updates .
No pets.
$2000 a month.
Text or call 919-222-2220.</p>
        <div style={imageGalleryStyle}>
          <img src={kitchen} alt="Kitchen" style={imageStyle} />
          <img src={livingroom} alt="livingroom" style={imageStyle} />
          <img src={bathroom} alt="bathroom" style={imageStyle} />
          <img src={hallway} alt="hallway" style={imageStyle} />
          <img src={washer} alt="washer" style={imageStyle} />
        </div>
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
  fontSize: '18px',
  lineHeight: '1.8',
};

const aboutSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#e9ecef',
  fontSize: '18px',
  lineHeight: '1.8',
};

const servicesSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#fff3cd',
};

const contactSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#d4edda',
  fontSize: '18px',
  lineHeight: '1.8',
};

const apartmentSectionStyle = {
  ...sectionStyle,
  backgroundColor: '#F4F4F4',
  fontSize: '18px',
  lineHeight: '1.8',
};

const quoteStyle = {
  fontStyle: 'italic',
  borderLeft: '4px solid #ccc',
  paddingLeft: '10px',
  margin: '10px 0',
};

const imageGalleryStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '10px',
  padding: '20px',
};

const imageStyle = {
  width: '100%',
  height: '400px', // Set a fixed height
  objectFit: 'cover', // Ensure the image covers the area without distortion
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};


export default MainContent;

