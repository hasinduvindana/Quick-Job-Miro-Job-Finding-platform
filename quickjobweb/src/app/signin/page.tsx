'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { checkUserCredentials } from '../../firebase/firestoreService';

const SignInPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const user = await checkUserCredentials(email, password);
      if (!user) {
        setError('Invalid email or password');
        return;
      }

      const { username } = user;
      if (username.startsWith('emp')) {
        router.push('/empdashboard');
      } else if (username.startsWith('pub')) {
        router.push('/pubdashboard');
      } else {
        setError('Invalid user type');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/path-to-your-image.jpg')",
      }}
    >
      <div className="w-full max-w-md p-10 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-gray-800 mb-3">Sign In</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-black"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg text-black"
                placeholder="Your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-600"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-4">
          Don&apos;t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
