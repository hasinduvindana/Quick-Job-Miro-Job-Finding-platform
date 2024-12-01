/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { checkUsernameExists, addEmpDetails, addUserLogin } from '../../firebase/firestoreService'; // Import Firebase functions

// Define types for data
interface EmpDetails {
  name: string;
  phoneNumber: string;
  location: string;
  skill: string[];
  experience: string;
  username: string;
}

interface UserLogin {
  username: string;
  email: string;
  password: string;
}

const EmpRegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    location: '',
    skill: [] as string[],
    experience: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'skill') {
      const selectedSkills = Array.from(
        (e.target as HTMLSelectElement).selectedOptions,
        (option) => (option as HTMLOptionElement).value
      );
      setFormData((prevState) => ({
        ...prevState,
        skill: selectedSkills,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!formData.username.startsWith('emp@')) {
      setError('Username must start with "emp@"');
      return;
    }

    try {
      const usernameExists = await checkUsernameExists(formData.username);
      if (usernameExists) {
        setError('Username already exists. Please choose another.');
        return;
      }

      // Create employee data object
      const empData: EmpDetails = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        location: formData.location,
        skill: formData.skill,
        experience: formData.experience,
        username: formData.username,
      };
      await addEmpDetails(empData);

      // Create user login data object
      const loginData: UserLogin = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
      };
      await addUserLogin(loginData);

      console.log('Data saved successfully!');
      router.push('/signin');
    } catch (error) {
      setError('An error occurred. Please try again.');
      console.error(error);
    }
  };

  const clearForm = () => {
    setFormData({
      name: '',
      phoneNumber: '',
      location: '',
      skill: [],
      experience: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
    setError(null);
  };

  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData((prevState) => ({
            ...prevState,
            location: `Lat: ${latitude}, Lon: ${longitude}`,
          }));
        },
        (error) => {
          console.error('Error fetching location:', error);
          setError('Unable to fetch location. Please try again.');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #000000, #003300, #e6d300)',
      }}
    >
      <div className="flex flex-wrap w-full max-w-5xl bg-white bg-opacity-70 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - GIF */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src="https://i.gifer.com/ZSj2.gif"
            alt="Registration GIF"
            className="object-cover w-[300px] h-[300px]"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-2/3 p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Employee Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-gray-900 font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-black"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-gray-900 font-medium">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-black"
                required
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-gray-900 font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Click to get your current location"
                value={formData.location}
                onFocus={fetchLocation}
                readOnly
                className="w-full p-3 border rounded-lg cursor-pointer text-black"
                required
              />
            </div>

            {/* Skill */}
            <div>
              <label className="block text-gray-900 font-medium">Skill</label>
              <select
                name="skill"
                multiple
                value={formData.skill}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-black"
              >
                <option value="Driver">Driver</option>
                <option value="Cook">Cook</option>
                <option value="Helper">Helper</option>
                <option value="Builder">Builder</option>
                <option value="Motor Mechanic">Motor Mechanic</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Electrician">Electrician</option>
                <option value="Computer Hardware Operator">Computer Hardware Operator</option>
              </select>
            </div>

            {/* Experience */}
            <div>
              <label className="block text-gray-900 font-medium">Experience</label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-black"
                required
              >
                <option value="">Select experience</option>
                <option value="less than 1">Less than 1 year</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 or more">5 or more years</option>
              </select>
            </div>

            {/* Username */}
            <div>
              <label className="block text-gray-900 font-medium">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Starts with emp@"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-black"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-900 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-black"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-900 font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg text-black"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-2 right-2 text-gray-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-900 font-medium">Confirm Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-black"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Register
            </button>

            {/* Clear Button */}
            <button
              type="button"
              onClick={clearForm}
              className="w-full p-3 bg-gray-400 text-white rounded-lg hover:bg-gray-300 mt-4"
            >
              Clear
            </button>

            <p className="text-center mt-4">
              Already have an account?{' '}
              <Link href="/signin" className="text-green-600 font-bold">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmpRegisterPage;
