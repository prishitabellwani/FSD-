import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useUser } from '../../context/UserContext';
import { useTranslation } from '../../context/TranslationContext';
import { useTheme } from '../../context/ThemeContext';
import LanguageSelector from '../common/LanguageSelector';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useUser();
  const { translate } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isLanguageSelectorOpen, setIsLanguageSelectorOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Community', path: '/community' },
    { name: 'Resources', path: '/resources' },
    { name: 'Mental Health', path: '/mental-health' },
    { name: 'Kids Corner', path: '/kids-corner' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-sm shadow-sm dark:bg-gray-800/90 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-2xl font-bold text-navy-700 dark:text-white">
              SingleParent<span className="text-primary-500">Hub</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-primary-500 ${
                  isActive(link.path)
                    ? 'text-primary-500 font-semibold'
                    : scrolled ? 'text-navy-700 dark:text-gray-300' : 'text-navy-700 dark:text-gray-300'
                }`}
              >
                {translate(link.name)}
              </Link>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="h-5 w-5 text-gray-600" />
              ) : (
                <Sun className="h-5 w-5 text-yellow-500" />
              )}
            </button>

            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageSelectorOpen(!isLanguageSelectorOpen)}
                className="flex items-center space-x-1 text-navy-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
              >
                <Globe size={20} />
              </button>
              {isLanguageSelectorOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 shadow-lg rounded-md py-1 z-20">
                  <LanguageSelector onSelect={() => setIsLanguageSelectorOpen(false)} />
                </div>
              )}
            </div>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="text-navy-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium"
                >
                  {translate('My Profile')}
                </Link>
                <button
                  onClick={logout}
                  className="bg-navy-600 hover:bg-navy-700 text-white px-4 py-2 rounded-md transition-colors"
                >
                  {translate('Sign Out')}
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-navy-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium"
                >
                  {translate('Sign In')}
                </Link>
                <Link
                  to="/signup"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {translate('Sign Up')}
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-navy-700 dark:text-gray-300 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-800 pb-4 animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium px-4 py-2 rounded-md transition-colors ${
                    isActive(link.path)
                      ? 'bg-navy-50 dark:bg-gray-700 text-primary-500 font-semibold'
                      : 'text-navy-700 dark:text-gray-300 hover:bg-navy-50 dark:hover:bg-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  {translate(link.name)}
                </Link>
              ))}

              <div className="px-4 py-2 flex items-center justify-between">
                <span className="text-navy-700 dark:text-gray-300">{translate('Theme')}</span>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-200"
                >
                  {theme === 'light' ? (
                    <Moon className="h-5 w-5 text-gray-600" />
                  ) : (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  )}
                </button>
              </div>

              <div className="px-4 py-2">
                <span className="text-navy-700 dark:text-gray-300">{translate('Language')}</span>
                <div className="mt-2">
                  <LanguageSelector onSelect={() => closeMenu()} />
                </div>
              </div>

              {user ? (
                <>
                  <Link
                    to="/profile"
                    className="px-4 py-2 text-navy-700 dark:text-gray-300 hover:bg-navy-50 dark:hover:bg-gray-700 rounded-md transition-colors"
                    onClick={closeMenu}
                  >
                    {translate('My Profile')}
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="mx-4 bg-navy-600 hover:bg-navy-700 text-white px-4 py-2 rounded-md transition-colors"
                  >
                    {translate('Sign Out')}
                  </button>
                </>
              ) : (
                <div className="space-y-2 px-4">
                  <Link
                    to="/login"
                    className="block w-full text-center text-navy-700 dark:text-gray-300 border border-navy-600 px-4 py-2 rounded-md transition-colors hover:bg-navy-50 dark:hover:bg-gray-700"
                    onClick={closeMenu}
                  >
                    {translate('Sign In')}
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full text-center bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-xl transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    onClick={closeMenu}
                  >
                    {translate('Sign Up')}
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
