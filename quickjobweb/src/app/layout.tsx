// src/app/layout.tsx

"use client"; // Add this line at the top

import React from 'react';
<<<<<<< Updated upstream
import '../app/globals.css'; // Import global styles if you have any
=======
import NavBar from '@/components/NavBar';
import '../app/globals.css';
>>>>>>> Stashed changes

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <title>QuickJob</title>
      </head>
      <body>
        {/* Navigation Bar */}
      

        {/* Main Content */}
        <main style={{ marginTop: '80px' }}>
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
