import React from 'react';
import { useUser } from '../context/UserContext';
import { useTranslation } from '../context/TranslationContext';
import { User, Mail, Calendar, LogOut, BookOpen, Heart, Settings, Shield, MessageCircle } from 'lucide-react';

const Profile: React.FC = () => {
  const { user, logout } = useUser();
  const { translate } = useTranslation();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          <Shield className="w-16 h-16 text-primary-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {translate('Please log in to view your profile')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {translate('Access your account to manage your profile and preferences')}
          </p>
        </div>
      </div>
    );
  }

  const handleLogout = () => {
    if (window.confirm(translate('Are you sure you want to sign out?'))) {
      logout();
    }
  };

  // Mock data for demonstration - in real app, this would come from API
  const userStats = {
    resourcesViewed: 24,
    favoriteResources: 8,
    communityPosts: 3,
    supportTickets: 1
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 py-8 pt-24">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Welcome Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg">
                <User className="w-12 h-12 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {translate('Welcome back')}, {user.username || 'User'}!
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {translate('Manage your account, view your activity, and access personalized resources')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                  {translate('Verified Member')}
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  {translate('Active User')}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Profile Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Account Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <User className="w-5 h-5 mr-2 text-primary-500" />
                {translate('Account Information')}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-center mb-2">
                    <User className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {translate('Username')}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {user.username || translate('Not provided')}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-center mb-2">
                    <Mail className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {translate('Email')}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {user.email}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {translate('Member Since')}
                    </span>
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {translate('Recently joined')}
                  </p>
                </div>

                <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                  <div className="flex items-center mb-2">
                    <Shield className="w-4 h-4 text-gray-500 mr-2" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {translate('Account Status')}
                    </span>
                  </div>
                  <p className="font-semibold text-green-600 dark:text-green-400">
                    {translate('Active')}
                  </p>
                </div>
              </div>
            </div>

            {/* Activity Statistics */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-primary-500" />
                {translate('Your Activity')}
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {userStats.resourcesViewed}
                  </div>
                  <div className="text-sm text-blue-600 dark:text-blue-400">
                    {translate('Resources Viewed')}
                  </div>
                </div>

                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                    {userStats.favoriteResources}
                  </div>
                  <div className="text-sm text-red-600 dark:text-red-400">
                    {translate('Favorites')}
                  </div>
                </div>

                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {userStats.communityPosts}
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400">
                    {translate('Community Posts')}
                  </div>
                </div>

                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <Settings className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                    {userStats.supportTickets}
                  </div>
                  <div className="text-sm text-purple-600 dark:text-purple-400">
                    {translate('Support Tickets')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2 text-primary-500" />
                {translate('Quick Actions')}
              </h2>

              <div className="space-y-3">
                <button className="w-full flex items-center px-4 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-200">
                  <Settings className="w-4 h-4 mr-3" />
                  {translate('Edit Profile')}
                </button>

                <button className="w-full flex items-center px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors duration-200">
                  <Heart className="w-4 h-4 mr-3" />
                  {translate('View Favorites')}
                </button>

                <button className="w-full flex items-center px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white rounded-lg transition-colors duration-200">
                  <BookOpen className="w-4 h-4 mr-3" />
                  {translate('My Resources')}
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors duration-200"
                >
                  <LogOut className="w-4 h-4 mr-3" />
                  {translate('Sign Out')}
                </button>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="font-semibold mb-3 flex items-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                {translate('Need Help?')}
              </h3>
              <p className="text-blue-100 mb-4 text-sm">
                {translate('Our support team is here to help you with any questions or issues.')}
              </p>
              <button className="w-full bg-white/20 hover:bg-white/30 text-white py-2 px-4 rounded-lg transition-colors duration-200 backdrop-blur-sm">
                {translate('Contact Support')}
              </button>
            </div>

            {/* Tips Card */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                💡 {translate('Pro Tips')}
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• {translate('Save resources to your favorites for quick access')}</li>
                <li>• {translate('Join community discussions to connect with others')}</li>
                <li>• {translate('Update your profile to get personalized recommendations')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
