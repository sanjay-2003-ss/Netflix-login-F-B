import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // renamed for clarity
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      if (res.data && res.data.success) {
        navigate('/dashboard');
      } else {
        setError(res.data?.message || 'Invalid email or password.');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.response?.data?.message || 'Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  }

  return (
   <div className="relative w-screen h-screen overflow-hidden">
  {/* Background image with animation */}
  <img
    src="/images/netflix-logo.avif"
    alt="Netflix Background"
    className="fixed top-0 left-0 w-full h-full object-cover animate-bg-fade"
  />

  {/* Dark overlay */}
  <div className="fixed top-0 left-0 w-full h-full bg-black/60"></div>

  {/* Centered form */}
  <div className="fixed inset-0 flex justify-center items-center px-4">
    <form
      className="bg-black/75 p-8 sm:p-10 rounded-md w-full max-w-[400px] text-white"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>

      {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

      <input
        type="email"
        placeholder="Email or phone number"
        value={email}
        onChange={handleEmail}
        className="w-full p-3 mb-4 bg-[#333] rounded focus:outline-none text-white"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePassword}
        className="w-full p-3 mb-4 bg-[#333] rounded focus:outline-none text-white"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-red-600 py-2 rounded font-semibold hover:bg-red-700 transition disabled:opacity-60"
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </button>

      <div className="flex justify-between text-gray-400 text-sm mt-3">
        <label className="flex items-center gap-1">
          <input type="checkbox" className="accent-red-600" /> Remember Me
        </label>
        <p className="hover:underline cursor-pointer">Need help?</p>
      </div>

      <p className="text-gray-400 text-sm mt-6 text-center">
        New to Netflix?{' '}
        <span className="text-white hover:underline cursor-pointer">Sign up now</span>
      </p>

      <p className="text-gray-500 text-xs mt-4 text-center">
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
      </p>
    </form>
  </div>
</div>

  );
};

export default Login;
