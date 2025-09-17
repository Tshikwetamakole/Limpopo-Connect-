import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeContext';
import { IoLogoFacebook, IoLogoTwitter, IoLogoInstagram, IoLogoLinkedin, IoMailOutline, IoCallOutline, IoLocationOutline } from 'react-icons/io5';

/**
 * Footer component with quick links, contact information, and social media links
 * @component
 * @returns {JSX.Element} The Footer component
 */
function Footer() {
  const { currentTheme } = useContext(ThemeContext);
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${currentTheme.navbar} border-t border-gray-700 mt-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Limpopo Connect</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting the Limpopo Province community through events, groups, and meaningful social interactions.
              Join thousands of residents building stronger local connections.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/limpopoconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <IoLogoFacebook size={24} />
              </a>
              <a
                href="https://twitter.com/limpopoconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <IoLogoTwitter size={24} />
              </a>
              <a
                href="https://instagram.com/limpopoconnect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <IoLogoInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com/company/limpopo-connect"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <IoLogoLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Community Events
                </Link>
              </li>
              <li>
                <Link to="/groups" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Groups
                </Link>
              </li>
              <li>
                <Link to="/hookups" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Hookups
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/settings" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Settings
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <IoLocationOutline className="text-gray-400 flex-shrink-0" size={20} />
                <span className="text-gray-300 text-sm">
                  Polokwane, Limpopo Province<br />
                  South Africa
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <IoCallOutline className="text-gray-400 flex-shrink-0" size={20} />
                <a
                  href="tel:+27123456789"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  +27 12 345 6789
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <IoMailOutline className="text-gray-400 flex-shrink-0" size={20} />
                <a
                  href="mailto:info@limpopoconnect.co.za"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  info@limpopoconnect.co.za
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Limpopo Connect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;