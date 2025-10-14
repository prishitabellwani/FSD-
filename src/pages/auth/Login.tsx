import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';
import Button from '../../components/common/Button';
import { useUser } from '../../context/UserContext';
import { useTranslation } from '../../context/TranslationContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, user } = useUser();
  const navigate = useNavigate();
  const { translate } = useTranslation();
  
  useEffect(() => {
    document.title = 'Sign In | Single Parent Support Hub';
    
    // Redirect if already logged in
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError(translate('Please fill in all fields'));
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(translate('Invalid email or password'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // If already logged in, don't render the login form
  if (user) return null;

  return (
    <div className="flex min-h-screen pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="flex-1 hidden lg:block relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary-600 to-purple-700"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-full text-white p-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-md"
          >
            <motion.h1
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {translate('Welcome Back')}
            </motion.h1>
            <motion.p
              className="text-xl mb-8 text-white/90 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {translate('Sign in to access your account and connect with our supportive community of single parents.')}
            </motion.p>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="flex items-center group">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">{translate('Access exclusive resources and tools')}</p>
              </div>
              <div className="flex items-center group">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">{translate('Connect with other single parents')}</p>
              </div>
              <div className="flex items-center group">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full mr-4 group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-white/90 group-hover:text-white transition-colors duration-300">{translate('Schedule consultations and join events')}</p>
              </div>
            </motion.div>
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
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                SingleParent<span className="text-primary-500">Hub</span>
              </span>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900 mb-2 dark:text-white">{translate('Sign In')}</h2>
            <p className="text-gray-700 dark:text-gray-300">
              {translate('Welcome back! Please sign in to your account')}
            </p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 flex items-start">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
          
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
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  {translate('Password')}
                </label>
                <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-500">
                  {translate('Forgot Password?')}
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  placeholder="••••••••"
                />
              </div>
              
              {/* Password Requirements Note */}
              <div className="mt-2 p-2 bg-gray-50 border border-gray-200 rounded-md">
                <p className="text-xs text-gray-600">
                  {translate('Forgot Password?')}{' '}
                  {translate('Password must contain:')}{' '}
                  {translate('At least 8 characters')}, {translate('One uppercase letter')}, {translate('One lowercase letter')}, {translate('One number')}, {translate('One special character')}
                </p>
              </div>
            </div>
            
            <Button
              type="submit"
              variant="secondary"
              fullWidth
              disabled={isSubmitting}
              icon={<LogIn className="h-5 w-5" />}
              className="block visible opacity-100 mt-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              {isSubmitting ? translate('Signing in...') : translate('Sign In')}
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600">
                {translate('Don\'t have an account?')}{' '}
                <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500">
                  {translate('Sign Up')}
                </Link>
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;