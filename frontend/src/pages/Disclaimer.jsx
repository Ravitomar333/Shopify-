import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px',
  background: '#18181b',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  lineHeight: '1.8',
  color: '#a1a1aa'
};

const Disclaimer = () => {
  return (
    <div style={textualStyle}>
      <h2
        style={{
          color: '#fff',
          marginBottom: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '15px'
        }}
      >
        Legal & Site Disclaimer
      </h2>

      <p style={{ marginBottom: '20px' }}>
        Shopify is a full-stack e-commerce application developed as a
        portfolio and educational project. The platform demonstrates modern
        web development concepts including product management, user
        authentication, shopping functionality, REST APIs, database
        integration, and payment gateway integration.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        1. Accuracy of Materials
      </h4>

      <p style={{ marginBottom: '15px' }}>
        The products, descriptions, images, prices, and other information
        displayed on Shopify may be sample or demonstration data. These
        materials are used for development and testing purposes and should
        not be considered as representations of actual products, businesses,
        or commercial offers.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        2. Payment Processing
      </h4>

      <p style={{ marginBottom: '15px' }}>
        Shopify may use Razorpay or other payment services for demonstrating
        payment integration. Payment functionality may operate in a testing
        or sandbox environment. Users should not enter sensitive financial
        information unless the application explicitly indicates that a secure
        production payment environment is being used.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        3. External Links & Services
      </h4>

      <p style={{ marginBottom: '15px' }}>
        Shopify may contain links to external websites, APIs, cloud
        services, payment providers, or other third-party platforms. These
        services operate independently, and Shopify is not responsible for
        the content, availability, security, or policies of external
        platforms.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        4. Educational & Portfolio Purpose
      </h4>

      <p style={{ marginBottom: '15px' }}>
        This application is primarily created to demonstrate full-stack
        development skills, application architecture, API development,
        database management, authentication, and third-party service
        integration. It should not be considered a fully operational
        commercial marketplace unless explicitly stated otherwise.
      </p>

      <p
        style={{
          marginTop: '30px',
          fontStyle: 'italic',
          fontSize: '0.9rem'
        }}
      >
        By using Shopify, you acknowledge that this application is provided
        primarily for demonstration and educational purposes and that certain
        features, data, and services may differ from a production e-commerce
        platform.
      </p>
    </div>
  );
};

export default Disclaimer;