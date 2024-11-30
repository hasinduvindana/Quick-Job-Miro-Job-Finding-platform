/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component

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
  const [passwordMatched, setPasswordMatched] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === 'password' || name === 'confirmPassword') {
      setPasswordMatched(formData.password === formData.confirmPassword);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      console.log('Registering publisher with', formData);
      router.push('/signin');
    } catch (err) {
      setError('An error occurred. Please try again.');
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
    setPasswordMatched(true);
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ background: 'linear-gradient(135deg, #000000, #003300, #e6d300)' }}
    >
      <div className="flex flex-wrap w-full max-w-5xl bg-white bg-opacity-70 rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - GIF */}
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <Image
            src="https://quickboarding.com/wp-content/uploads/sites/27/2021/10/Onboarding.gif"
            alt="Onboarding GIF"
            width={300}
            height={300}
            className="object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-2/3 p-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Publisher Register</h2>
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

            {/* Username */}
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
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.972a11.045 11.045 0 0115.071 0m-15.07 6.056a11.045 11.045 0 0115.07 0m-9.82-4.47a2.992 2.992 0 114.242 4.242 2.992 2.992 0 01-4.243-4.242z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.972a11.045 11.045 0 0115.071 0m-15.07 6.056a11.045 11.045 0 0115.07 0m-9.82-4.47a2.992 2.992 0 114.242 4.242 2.992 2.992 0 01-4.243-4.242z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-900 font-medium">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full p-3 border rounded-lg text-black ${
                    passwordMatched ? 'border-green-500' : 'border-red-500'
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.972a11.045 11.045 0 0115.071 0m-15.07 6.056a11.045 11.045 0 0115.07 0m-9.82-4.47a2.992 2.992 0 114.242 4.242 2.992 2.992 0 01-4.243-4.242z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5 text-gray-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.972a11.045 11.045 0 0115.071 0m-15.07 6.056a11.045 11.045 0 0115.07 0m-9.82-4.47a2.992 2.992 0 114.242 4.242 2.992 2.992 0 01-4.243-4.242z"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {!passwordMatched && (
                <p className="text-red-500 text-sm">Passwords do not match.</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="w-full bg-green-500 text-white p-3 rounded-lg"
                disabled={!passwordMatched}
              >
                Register
              </button>
              <button
                type="button"
                onClick={clearForm}
                className="w-full bg-gray-300 text-black p-3 rounded-lg"
              >
                Clear
              </button>
            </div>
          </form>

          {/* Existing Links */}
          <div className="mt-4">
            <p className="text-gray-900">Already have an account?</p>
            <Link href="/signin" className="text-green-500">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PubRegisterPage;
