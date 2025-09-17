import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../routes';

/**
 * Renders the bottom navigation bar for mobile devices.
 * The navigation items are dynamically generated from the routes configuration.
 *
 * @component
 * @returns {JSX.Element} The bottom navigation component.
 */
const BottomNav = () => {
  const navItems = routes.filter(route => route.nav);

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md text-white shadow-lg md:hidden">
      <div className="flex justify-around max-w-screen-sm mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-full pt-2 pb-1 text-xs transition-colors duration-200 ${
                isActive ? 'text-red-500' : 'text-gray-400 hover:text-white'
              }`
            }
          >
            {item.Icon && <item.Icon size={24} />}
            <span className="mt-1">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
