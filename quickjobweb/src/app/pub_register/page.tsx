/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { checkUsernameExists, addPubDetails, addUserLogin } from '../../firebase/firestoreService'; // Import Firebase functions

// Define types for data
interface PubDetails {
  name: string;
  phoneNumber: string;
  username: string;
}

interface UserLogin {
  username: string;
  email: string;
  password: string;
}

const PubRegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const usernameExists = await checkUsernameExists(formData.username);
      if (usernameExists) {
        setError('Username already exists. Please choose another.');
        return;
      }

      const pubData: PubDetails = {
        name: formData.name,
        phoneNumber: formData.phoneNumber,
        username: formData.username,
      };
      await addPubDetails(pubData);

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
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    });
    setError(null);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ background: 'linear-gradient(135deg, #000000, #003300, #e6d300)' }}
    >
      <div className="flex flex-wrap w-full max-w-5xl bg-white bg-opacity-70 rounded-lg shadow-lg overflow-hidden">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <img
            src="https://quickboarding.com/wp-content/uploads/sites/27/2021/10/Onboarding.gif"
            alt="Onboarding GIF"
            className="object-cover w-[300px] h-[300px]"
          />
        </div>

        <div className="w-full md:w-2/3 p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publisher Register</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
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

            <div>
              <label className="block text-gray-900 font-medium">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Choose a username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border rounded-lg text-black"
                required
              />
            </div>

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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-2 right-2 text-gray-600"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

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

            <button
              type="submit"
              className="w-full p-3 bg-green-600 text-white rounded-lg hover:bg-green-500"
            >
              Register
            </button>

            <button
              type="button"
              onClick={clearForm}
              className="w-full p-3 bg-gray-400 text-white rounded-lg hover:bg-gray-300 mt-4"
            >
              Clear
            </button>

            <p className="text-center mt-4">
              Already have an account?{' '}
              <Link href="/signin" className="text-green-600 font-bold">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PubRegisterPage;
