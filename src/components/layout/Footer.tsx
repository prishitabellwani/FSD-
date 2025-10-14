import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '../../context/TranslationContext';

const Footer: React.FC = () => {
  const { translate } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-700 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{translate('About Us')}</h3>
            <p className="text-gray-300 mb-4">
              {translate('Single Parent Support Hub is dedicated to providing resources, community, and support for single parents navigating the challenges of parenthood.')}
            </p>
            <div className="flex items-center">
              <Heart size={18} className="text-primary-400 mr-2" />
              <span className="text-gray-300">{translate('Made with love for single parents')}</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{translate('Quick Links')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {translate('Home')}
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-white transition-colors">
                  {translate('Community')}
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  {translate('Resources')}
                </Link>
              </li>
              <li>
                <Link to="/mental-health" className="text-gray-300 hover:text-white transition-colors">
                  {translate('Mental Health')}
                </Link>
              </li>
              <li>
                <Link to="/kids-corner" className="text-gray-300 hover:text-white transition-colors">
                  {translate('Kids Corner')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{translate('Contact Us')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-primary-400 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Support Street, Parentville, SP 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-primary-400 mr-3 flex-shrink-0" />
                <a href="mailto:info@singleparenthub.org" className="text-gray-300 hover:text-white transition-colors">
                  info@singleparenthub.org
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">{translate('Newsletter')}</h3>
            <p className="text-gray-300 mb-4">
              {translate('Subscribe to our newsletter for the latest updates, resources, and community events.')}
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder={translate('Your Email')}
                className="w-full px-4 py-2 rounded-md text-navy-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full bg-primary-500 hover:bg-primary-600 transition-colors px-4 py-2 rounded-md font-medium"
              >
                {translate('Subscribe')}
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-navy-600 mt-8 pt-6 text-center text-gray-400">
          <p>
            &copy; {currentYear} {translate('Single Parent Support Hub. All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;