import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, Users, Calendar, Heart, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import CommunityChat from '../components/CommunityChat';
import { useUser } from '../context/UserContext';
import { useTranslation } from '../context/TranslationContext';
const Community: React.FC = () => {
  const { user } = useUser();
  const { translate } = useTranslation();

  useEffect(() => {
    document.title = 'Community | Single Parent Support Hub';
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-navy-700 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3807755/pexels-photo-3807755.jpeg"
            alt="Community gathering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-700 to-primary-700/90"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <motion.h1
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {translate('Join Our Supportive Community')}
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {translate('Connect with other single parents, share experiences, find support, and build lasting relationships.')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {!user ? (
                <Link to="/signup">
                  <Button size="lg" variant="primary" className="bg-white text-navy-700 hover:bg-gray-100">
                    {translate('Sign Up for Free')}
                  </Button>
                </Link>
              ) : (
                <Button size="lg" variant="primary" className="bg-white text-navy-700 hover:bg-gray-100">
                  {translate('Browse All Groups')}
                </Button>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-Time Chat Section */}
      {user && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {translate('Real-Time Community Chat')}
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {translate('Connect with other single parents in real-time. Share experiences, ask questions, and get support instantly.')}
                </p>
              </motion.div>
              <CommunityChat />
            </div>
          </div>
        </section>
      )}

      {/* Rest of the component remains unchanged */}
      {/* ... existing code ... */}
    </div>
  );
};

export default Community;
