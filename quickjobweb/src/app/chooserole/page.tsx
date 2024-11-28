"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ChooseRole: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const router = useRouter();

  const handleRoleSelection = (role: string) => {
    setSelectedRole(role);
  };

  const handleNext = () => {
    if (selectedRole === "Employee") {
      router.push('/emp_register');
    } else if (selectedRole === "Publisher") {
      router.push('/pub_register');
    } else {
      alert("Please select a role before proceeding!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-6">What is your Role?</h1>
      <div className="flex flex-col space-y-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="role"
            value="Employee"
            onChange={() => handleRoleSelection("Employee")}
            className="w-4 h-4"
          />
          <span>Employee</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="role"
            value="Publisher"
            onChange={() => handleRoleSelection("Publisher")}
            className="w-4 h-4"
          />
          <span>Publisher</span>
        </label>
      </div>
      <button
        onClick={handleNext}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Next
      </button>
    </div>
  );
};

export default ChooseRole;
