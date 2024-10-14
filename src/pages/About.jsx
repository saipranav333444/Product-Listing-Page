import React from 'react';
import './About.css'; // Optional: Custom styles for the About component

import Layout from './Layout';

import Footer from './Footer';

const About = () => {
  return (
    <>
      <Layout/>
      <div className="about-container">

      <h1>About Our E-Commerce Platform</h1>
      <p>
        Welcome to our e-commerce platform, where you can explore a wide range of products, manage your shopping cart, and enjoy a seamless online shopping experience. Our application leverages the <strong>Fake Store API</strong> to provide a rich and interactive interface for users looking to purchase items across various categories.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>Product Catalog:</strong> Browse through an extensive collection of products with detailed descriptions, images, and pricing information.
        </li>
        <li>
          <strong>Category Filtering:</strong> Easily navigate through product categories such as electronics, clothing, and jewelry to find exactly what you need.
        </li>
        <li>
          <strong>Shopping Cart Management:</strong> Add products to your cart, adjust quantities, and view your selections before proceeding to checkout.
        </li>
        <li>
          <strong>User Authentication:</strong> Sign in to access your personalized shopping experience, save preferences, and manage your cart seamlessly.
        </li>
        <li>
          <strong>Responsive Design:</strong> Enjoy a user-friendly interface that adapts to various devices, ensuring a consistent experience on mobile and desktop.
        </li>
      </ul>

      <h2>Why Choose Us?</h2>
      <p>
        Our platform is designed to provide an enjoyable and efficient shopping experience. With a focus on user-friendly navigation and robust functionalities, we strive to meet your shopping needs in a fast and reliable manner. We believe in making online shopping accessible to everyone, which is why we've incorporated features that cater to a diverse range of users.
      </p>

      <h2>Get Started</h2>
      <p>
        Join us today and start exploring our exciting range of products! Whether you're looking for the latest gadgets or stylish apparel, we have something for everyone.
      </p>
    </div>
    <Footer/>
    </>
    
  );
};

export default About;
