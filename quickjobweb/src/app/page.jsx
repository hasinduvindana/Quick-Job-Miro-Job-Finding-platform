"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [heroTitle, setHeroTitle] = useState("");
  const texts = [
    " Welcome to QuickJob...!",
    " Sri Lanka's NO: 01 Micro Job Platform...",
  ];
  const [textIndex, setTextIndex] = useState(0);

  // Image slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTransitioning(false);
      }, 800);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Typing effect for hero title
  useEffect(() => {
    let currentText = texts[textIndex];
    let currentLength = 0;
    const typingInterval = setInterval(() => {
      setHeroTitle((prev) => prev + currentText[currentLength]);
      currentLength++;
      if (currentLength === currentText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setHeroTitle("");
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 1000);
      }
    }, 300);
    return () => clearInterval(typingInterval);
  }, [textIndex]);

  return (
    <>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <Image src="/quickjoblogo.png" alt="QuickJob Logo" width={100} height={100} />
        </div>
        <div style={styles.links}>
          {["home", "about", "contact"].map((section) => (
            <Link key={section} href={`#${section}`} style={styles.navLink}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        <div style={styles.buttons}>
          <Link href="/login" style={styles.buttonLink}>
            Sign In
          </Link>
          <Link href="/register" style={styles.buttonLink}>
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.slider}>
          <div
            style={{
              ...styles.imageWrapper,
              opacity: isTransitioning ? 0 : 1,
              transform: isTransitioning ? "scale(1.1)" : "scale(1)",
              transition: "transform 1.5s ease-in-out, opacity 1.5s ease-in-out",
            }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              width={1920}
              height={800}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* Hero Text */}
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>{heroTitle}</h1>
          <p style={styles.heroSubtitle}>
            Join QuickJob and connect with top job suppliers and skilled employees in Sri Lanka.
            Get started today to grow your microjob opportunities!!!
          </p>

          {/* Sign Up Button and "It's free..." text */}
          <div style={styles.ctaContainer}>
            <Link href="/login" style={styles.ctaButton}>
              Sign Up
            </Link>
            <p style={styles.freeText}>It&apos;s free...</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.aboutSection}>
        <div style={styles.imageContainer}>
          <Image
            src="/aboutimg.png"
            alt="About Image"
            width={600}
            height={400}
            style={styles.aboutImage}
          />
        </div>
        <div style={styles.aboutText}>
          <h2 style={styles.aboutTitle}>About Us</h2>
          <div style={styles.aboutParagraph}>
            We are the one and only Microjob finding platform in Sri Lanka. There are two parties
            who can benefit from our platform. Job suppliers can find qualified employees
            instantly, and employees can find jobs suitable for their qualifications.
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactLeft}>
          <h2 style={styles.contactTitle}>Contact Us</h2>
          <div style={styles.contactInfo}>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <span>Tel: 011 1100 110</span>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>💬</span>
              <Link href="https://wa.me/94764787444" target="_blank" style={styles.contactLink}>
                WhatsApp: (+94) 764787444
              </Link>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>✉️</span>
              <span>Email: info.quickjob@gmail.com</span>
            </div>
          </div>
        </div>

        <div style={styles.contactRight}>
          <form style={styles.contactForm}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              style={styles.contactInput}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              style={styles.contactInput}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              style={styles.contactTextarea}
              required
            />
            <button type="submit" style={styles.contactButton}>
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

// Styles
const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    position: "fixed",
    width: "100%",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "#fff",
    zIndex: 1000,
  },
  logo: { display: "flex", alignItems: "center" },
  links: {
    display: "flex",
    gap: "2rem",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "color 0.3s ease",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
  },
  buttonLink: {
    backgroundColor: "#32CD32",
    color: "#fff",
    padding: "0.5rem 1.5rem",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  heroSection: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    overflow: "hidden",
    textAlign: "center",
  },
  slider: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  },
  imageWrapper: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  heroContent: {
    position: "relative",
    zIndex: 1,
    color: "white",
    padding: "0 20px",
  },
  heroTitle: {
    fontSize: "4.5rem",
    fontWeight: "bold",
    marginBottom: "3rem",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
  },
  heroSubtitle: {
    fontSize: "2rem",
    lineHeight: "1.5",
    marginBottom: "2rem",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 400,
    textShadow: "1px 1px 5px rgba(0, 0, 0, 0.7)",
    color: "#F0F0F0",
  },
  ctaContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  ctaButton: {
    backgroundColor: "#32CD32",
    color: "#fff",
    padding: "0.8rem 2rem",
    borderRadius: "25px",
    textDecoration: "none",
    fontWeight: "bold",
    marginBottom: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  freeText: {
    fontSize: "1.5rem",
    color: "#fff",
  },
  aboutSection: {
    padding: "4rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "4rem",
    backgroundColor: "#F4F4F9",
    backgroundImage:"url(/background.png)",
  },
  aboutImage: {
    maxWidth: "100%",
    borderRadius: "8px",
  },
  aboutTitle: {
    fontSize: "3.5rem",
    fontWeight: "600",
  },
  aboutParagraph: {
    fontSize: "1.8rem",
    lineHeight: "1.3",
    maxWidth: "600px",
  },
  aboutText: {
    backgroundColor: "#ffffff",  // Background color (you can customize this)
    padding: "2.5rem",  // Padding for spacing
    borderRadius: "15px",  // Rounded corners
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",  // Optional: adds subtle shadow for effect
    maxWidth: "600px",  // Optional: limits the width of the container
    margin: "auto",  // Centers the text container
  },

  //Contact Section Styles
  contactSection: {
    display: "flex",
    justifyContent: "space-between",
    padding: "4rem 2rem",
    backgroundColor: "#F9F9F9",
    backgroundImage:"url(/background.png)",
  },
  contactTitle: {
    fontSize: "3rem",
    fontWeight: "600",
  },
  contactLeft: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  contactRight: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contactInfo: {
    fontSize: "1.2rem",
    color: "#FFFFFF",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  contactIcon: {
    fontSize: "1.5rem",
  },
  contactLink: {
    color: "#FFFFFF",
    textDecoration: "none",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "80%",
  },
  contactInput: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  contactTextarea: {
    padding: "0.8rem",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ddd",
    resize: "vertical",
    minHeight: "150px",
  },
  contactButton: {
    padding: "1rem 2rem",
    backgroundColor: "#32CD32",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "1.2rem",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
};

export default HomePage;
