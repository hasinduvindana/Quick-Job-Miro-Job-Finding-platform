// src/app/page.tsx

import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <h1
          style={styles.heroTitle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Welcome to QuickJob!
        </h1>
        <p
          style={styles.heroSubtitle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Sri Lanka&apos;s No: 01 Online Microjob Finding Platform...
        </p>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2>About Us</h2><br/>
        <p>We are one and only online Microjob Platform<br/> in Sri Lanka. Job Suppliers can find quality<br/> employees for their tasks easily with our platform.<br/> This is the best way for employees to find<br/> micro jobs suitable for their qualifications..</p>
      </section>

      {/* Contact Us Section */}
      <br/><br/><section id="contact" style={styles.section}>
        <h2>Contact Us</h2><br />
        <p>Hotline : 011 555 456 10<br />
        Whatsapp : 076 112 45 45<br/>
        Email : info.quickjob@gmail.com</p>
      </section>
    </div>
  );
};

const styles = {
  hero: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'white',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: 'fadeSlideUp 1.5s forwards',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  heroTitle: {
    fontSize: '4rem',
    fontWeight: 'bold',
    color: 'white',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: 'fadeSlideUp 1.5s forwards',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginTop: '1rem',
    color: 'white',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: 'fadeSlideUp 1.5s forwards 0.3s',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  section: {
    padding: '80px 20px',
    textAlign: 'center',
    fontSize: '3.5rem',
    fontWeight:'bold',
    color: 'white',
  },
};

export default HomePage;
