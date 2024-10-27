// src/components/NavBar.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <div style={styles.logo}>
        <Image src="/QuickJob.png" alt="QuickJob Logo" width={50} height={80} />
        <span style={styles.logoText}>QuickJob</span>
      </div>

      {/* Links */}
      <div style={styles.links}>
        <Link href="#home" style={styles.navLink}>Home</Link>
        <Link href="#about" style={styles.navLink}>About</Link>
        <Link href="#contact" style={styles.navLink}>Contact Us</Link>
      </div>

      {/* Buttons */}
      <div style={styles.buttons}>
        <Link  href="/login">Sign In</Link>
        <Link href="/register">Sign Up</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    position: 'fixed',
    width: '100%',
    top: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparent background
    color: '#fff',
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
  },
  logoText: {
    marginLeft: '0.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  buttons: {
    display: 'flex',
    gap: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default NavBar;
