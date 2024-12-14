'use client';

import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors((prevState) => ({ ...prevState, [name]: '' })); // Clear errors on change
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required.';
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email.';
    if (formData.password.length < 6)
      newErrors.password = 'Password must be at least 6 characters.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({}); // Clear existing errors

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    console.log('Form Submitted:', formData);

    // Simulate API call
    setTimeout(() => {
      alert('Registration successful!');
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="flex flex-col md:flex-row items-center w-full max-w-4xl p-8 bg-white rounded-3xl shadow-xl transform transition-all duration-500 ease-in-out">
        
        {/* Image Section for larger screens */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="register.png"
            alt="Illustrative registration image"
            className="rounded-3xl w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Create an Account</h2>
          <p className="text-gray-600 mb-6">
            Already have an account?{' '}
            <a href="/signin" className="text-purple-600 font-semibold hover:underline">
              Sign In
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className={`input-field ${errors.name ? 'border-red-500' : ''}`}
                required
                aria-label="Full Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                required
                aria-label="Email Address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="password">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                className={`input-field ${errors.password ? 'border-red-500' : ''}`}
                required
                aria-label="Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="block text-gray-700 font-medium" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`input-field ${
                  errors.confirmPassword ? 'border-red-500' : ''
                }`}
                required
                aria-label="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 mt-4 font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg shadow-lg ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
              } transition duration-300 transform`}
            >
              {isSubmitting ? 'Submitting...' : 'REGISTER'}
            </button>
          </form>

          {/* Social Media Section */}
          <div className="my-6 text-center text-gray-500 relative">
            <span className="bg-white px-2">or register with</span>
            <hr className="absolute inset-0 border-gray-300" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-between mt-4 space-x-3">
            <button
              className="social-button google-button"
              aria-label="Register with Google"
            >
              <img
                src="google.png"
                alt="Google icon"
                className="w-5 h-5 mr-2"
              />
              Google
            </button>

            <button
              className="social-button facebook-button"
              aria-label="Register with Facebook"
            >
              <img
                src="facebook.png"
                alt="Facebook icon"
                className="w-5 h-5 mr-2"
              />
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
