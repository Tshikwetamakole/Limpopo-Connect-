
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
    <nav className="md:hidden fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur border-t border-gray-200 min-h-[60px] z-50" role="navigation" aria-label="Primary">
      <div className="grid grid-cols-5 max-w-screen-sm mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center py-2 gap-1 touch-manipulation ${
                isActive ? 'text-brand-purple' : 'text-gray-600 hover:text-brand-dark'
              }`
            }
            aria-label={item.label}
          >
            {item.Icon && <item.Icon className="w-12 h-12" />}
            <span className="text-xs leading-none">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
