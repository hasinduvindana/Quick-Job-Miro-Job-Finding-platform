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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-[400px] h-[300px] flex flex-col justify-center items-center">
        <h1 className="text-xl font-semibold text-black mb-4">What is your Role?</h1>
        <div className="flex flex-col space-y-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="Employee"
              onChange={() => handleRoleSelection("Employee")}
              className="w-4 h-4"
            />
            <span className="text-black">Employee</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="role"
              value="Publisher"
              onChange={() => handleRoleSelection("Publisher")}
              className="w-4 h-4"
            />
            <span className="text-black">Publisher</span>
          </label>
        </div>
        <button
          onClick={handleNext}
          className="mt-6 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ChooseRole;
