'use client'; // This line tells Next.js that the file is a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation

export default function Dashboard() {
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  
  const router = useRouter(); // Initialize useRouter

  const locations = [
    'Galle', 'Colombo', 'Matara', 'Kandy', 'Nuwaraeliya', 
    'Gampaha', 'Hambantota', 'Jaffna'
  ];
  
  const categories = [
    'Helper', 'Driver', 'Mechanic', 'Carpenter', 
    'Tailor', 'Cook'
  ];

  const ad = {
    image: '/driver.jpg', // Example image
    title: 'Need Qualified Driver',
    category: 'Driver',
    location: 'Galle',
    date: '2024-11-16', // Example date
  };

  // Handle logout action
  const handleLogout = () => {
    // You can perform any logout logic here (like clearing session, etc.)
    router.push('/'); // Redirect to the homepage
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/quickjoblogo.png" alt="QuickJob Logo" />
        </div>
        <div className="welcome">
          <h1>Welcome to QuickJob</h1>
        </div>
        <div className="user-settings">
          <img 
            src="/usericon.png" 
            alt="User Icon" 
            className="user-icon"
          />
          <span>Account Settings</span>

          {/* Logout Button */}
          <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="search-section">
        <input 
          type="text" 
          placeholder="What are you looking for?" 
          className="search-bar" 
        />
        <div className="filters">
          <select 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
            className="dropdown"
          >
            <option value="">Select Location</option>
            {locations.map((loc, index) => (
              <option key={index} value={loc}>
                {loc}
              </option>
            ))}
          </select>
          
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="dropdown"
          >
            <option value="">Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button className="search-button">Search</button>
      </div>

      {/* Example Ad Below Search */}
      <div className="ad">
        <img src={ad.image} alt="Ad" className="ad-image" />
        <div className="ad-details">
          <h3>{ad.title}</h3>
          <p><strong>Job Category:</strong> {ad.category}</p>
          <p><strong>Location:</strong> {ad.location}</p>
          <p><strong>Date:</strong> {ad.date}</p>
        </div>
      </div>
      
      {/* Style */}
      <style jsx>{`
        .container {
          font-family: Arial, sans-serif;
          background-color: #f3f4f6;
          padding: 20px;
        }
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #2c7a7b;
          color: #fff;
        }
        .logo img {
          height: 50px;
        }
        .welcome h1 {
          margin: 0;
        }
        .user-settings {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .user-icon {
          border-radius: 50%;
          height: 40px;
        }

        /* Logout Button */
        .logout-button {
          background-color: red;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }

        .logout-button:hover {
          background-color: darkred;
        }

        /* Ad Section Styles */
        .ad {
          display: flex;
          align-items: center;
          gap: 10px;
          background-color: #fff;
          padding: 10px;
          margin-top: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .ad-image {
          width: 50px;
          height: 50px;
          border-radius: 5px;
        }
        .ad-details {
          display: flex;
          flex-direction: column;
        }
        .ad-details h3 {
          margin: 0;
          font-size: 16px;
          font-weight: bold;
        }
        .ad-details p {
          margin: 5px 0;
          font-size: 14px;
        }

        .search-section {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }
        .search-bar {
          flex: 1;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .filters {
          display: flex;
          gap: 10px;
        }
        .dropdown {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .search-button {
          background-color: #2c7a7b;
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 5px;
          cursor: pointer;
        }
        .search-button:hover {
          background-color: #285e5b;
        }
      `}</style>
    </div>
  );
}
