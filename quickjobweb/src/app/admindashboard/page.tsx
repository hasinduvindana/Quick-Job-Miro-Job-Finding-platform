import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <nav className="bg-gray-800 text-white px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/quickjoblogo.png" alt="Logo" className="h-10 w-10 mr-4" />
          <span className="font-bold text-lg">Admin Dashboard</span>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">Edit Employee</a>
          <a href="#" className="hover:text-gray-300">Edit Publisher</a>
          <a href="#" className="hover:text-gray-300">Clients Count</a>
          <a href="#" className="hover:text-gray-300">Count of Job Posts</a>
        </div>

        {/* Logout Button */}
        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition">
          Logout
        </button>
      </nav>

      {/* Page Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to the Admin Dashboard</h1>
        {/* Add your dashboard content here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
