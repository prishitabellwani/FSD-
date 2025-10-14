import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, AlertCircle } from 'lucide-react';
import Button from '../../components/common/Button';
import { useTranslation } from '../../context/TranslationContext';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const navigate = useNavigate();
  const { translate } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email) {
      setError(translate('Please enter your email'));
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSent(true);
    } catch (err) {
      setError(translate('Failed to send reset link. Please try again.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen pt-16">
      <div className="flex-1 hidden lg:block bg-primary-600 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 to-primary-500 opacity-90"></div>
        <div className="relative flex flex-col justify-center items-center h-full text-white p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-md"
          >
            <h1 className="text-4xl font-bold mb-6">{translate('Reset Password')}</h1>
            <p className="text-xl mb-8 text-white/90">
              {translate('We\'ll help you reset your password and get back into your account quickly and securely.')}
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p>{translate('Secure password reset process')}</p>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p>{translate('Quick access to your account')}</p>
              </div>
              <div className="flex items-center">
                <div className="bg-white/10 p-2 rounded-full mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <p>{translate('24/7 support available')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8 md:p-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-navy-700">
                SingleParent<span className="text-primary-500">Hub</span>
              </span>
            </Link>
            <h2 className="text-2xl font-bold text-navy-800 mb-2">{translate('Reset Password')}</h2>
            <p className="text-gray-600">
              {translate('Enter your email to reset your password')}
            </p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          
          {isSent ? (
            <div className="text-center">
              <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-700">
                <p>{translate('Reset link sent! Check your email for instructions.')}</p>
              </div>
              <Link to="/login">
                <Button variant="primary" icon={<ArrowLeft className="h-5 w-5" />}>
                  {translate('Back to Sign In')}
                </Button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {translate('Email')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              
              {/* Password Requirements */}
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-sm font-medium text-blue-800 mb-2">
                  {translate('Password Requirements')}
                </p>
                <p className="text-xs text-blue-700 mb-2">
                  {translate('Password must contain:')}
                </p>
                <ul className="text-xs text-blue-600 space-y-1">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {translate('At least 8 characters')}
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {translate('One uppercase letter')}
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {translate('One lowercase letter')}
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {translate('One number')}
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 mr-2 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {translate('One special character')}
                  </li>
                </ul>
              </div>
              
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isSubmitting}
                >
                  {isSubmitting ? translate('Sending...') : translate('Send Reset Link')}
                </Button>
              </div>
              
              <div className="text-center">
                <Link to="/login" className="text-sm text-primary-600 hover:text-primary-500 flex items-center justify-center">
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  {translate('Back to Sign In')}
                </Link>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;
