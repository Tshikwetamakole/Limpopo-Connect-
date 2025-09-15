import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';

function Login() {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <div className={`min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 ${currentTheme.gradient} ${currentTheme.text}`}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold">Sign in to your account</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className={`${currentTheme.cardBg} py-8 px-4 shadow-lg sm:rounded-lg sm:px-10`}>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-600 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-red-500 hover:text-red-400">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${currentTheme.button} ${currentTheme.buttonText}`}
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="mt-6">
            <p className="text-center text-sm">
              New to Limpopo Connect?{' '}
              <Link to="/signup" className="font-medium text-red-500 hover:text-red-400">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
