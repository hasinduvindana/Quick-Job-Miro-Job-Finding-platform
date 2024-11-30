"use client";

import { useState } from "react";

export default function JobListings() {
  const [applicationData, setApplicationData] = useState({
    name: "",
    contact: "",
    skills: "",
    experience: "",
    location: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setApplicationData((prev) => ({ ...prev, [name]: value }));
  };

  const handleViewAccountDetails = () => {
    alert(`Account Details:
      Name: ${applicationData.name}
      Contact: ${applicationData.contact}
      Skills: ${applicationData.skills}
      Experience: ${applicationData.experience} years
      Preferred Location: ${applicationData.location}
    `);
  };

  const handleEditAccount = () => {
    alert("Edit Account functionality coming soon!");
  };

  const handleDeleteAccount = () => {
    alert("Delete Account functionality coming soon!");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #000000, #003300, #e6d300)",
      }}
    >
      {/* Application Form */}
      <div className="max-w-md w-full p-6 rounded-xl shadow-xl bg-gray-800 border border-gray-600">
        <h2 className="text-2xl font-semibold mb-6 text-gray-200 text-center">
          Your Application
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={applicationData.name}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-700 text-gray-200"
        />
        <input
          type="text"
          name="contact"
          placeholder="Your Contact Number"
          value={applicationData.contact}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-700 text-gray-200"
        />
        <input
          type="text"
          name="skills"
          placeholder="Your Skills"
          value={applicationData.skills}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-700 text-gray-200"
        />
        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          value={applicationData.experience}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-700 text-gray-200"
        />
        <input
          type="text"
          name="location"
          placeholder="Preferred Location"
          value={applicationData.location}
          onChange={handleInputChange}
          className="w-full mb-4 px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-gray-700 text-gray-200"
        />

        <button
          onClick={handleViewAccountDetails}
          className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition duration-200 mb-4"
        >
          View Account Details
        </button>
        <button
          onClick={handleEditAccount}
          className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-200 mb-4"
        >
          Edit Account
        </button>
        <button
          onClick={handleDeleteAccount}
          className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition duration-200"
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
