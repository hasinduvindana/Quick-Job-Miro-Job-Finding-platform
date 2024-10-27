// pages/signin.tsx
import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500">
      {/* Main Card */}
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-700">Login</h2>
        <p className="text-gray-500">
          Don’t have an account yet? <a href="#" className="text-indigo-600">Sign Up</a>
        </p>
        
        {/* Form */}
        <form className="mt-4">
          <label className="block text-gray-600">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full p-3 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <label className="block mt-4 text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter 6 characters or more"
            className="w-full p-3 mt-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          
          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center text-gray-500">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
          </div>
          
          {/* Login Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 mt-6 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:bg-indigo-700"
          >
            LOGIN
          </button>
        </form>
        
        {/* Social Login Options */}
        <div className="mt-6 text-center text-gray-500">or login with</div>
        <div className="flex justify-between mt-4 space-x-2">
          <button className="flex items-center justify-center w-full px-4 py-3 text-white bg-red-500 rounded-lg hover:bg-red-600">
            Google
          </button>
          <button className="flex items-center justify-center w-full px-4 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
