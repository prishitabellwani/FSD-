import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Briefcase as BriefcaseBusiness, Home, Scale, Baby, ExternalLink, Search } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { useTranslation } from '../context/TranslationContext';

import { IndianResourceService } from '../services/indianResourceService';

// Resource category components
const EmploymentSupport = () => {
  const { translate } = useTranslation();
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const resourceService = IndianResourceService.getInstance();
        const data = await resourceService.getResourcesByCategory('employment');
        setResources(data || []);
      } catch (err) {
        console.error('Error fetching employment resources:', err);
        setError('Failed to load resources');
        setResources([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">{translate('Loading resources...')}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-700 mb-6">{translate('Employment Support Resources')}</h2>
      <p className="text-gray-600 mb-8">
        {translate('Access job opportunities, career development resources, and training programs designed to help single parents build sustainable careers.')}
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {resources.length === 0 && !loading && !error ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">{translate('No resources available')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={resource._id || index}
              className="group relative p-6 h-full bg-gradient-to-br from-white via-white to-gray-50 shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl hover:border-primary-300 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.03] hover:rotate-1 overflow-hidden"
              hover
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {resource.image && (
                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-2xl transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-navy-800 mb-4 group-hover:text-primary-700 transition-colors duration-300 leading-tight group-hover:scale-105 transform origin-left">{resource.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">{resource.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.source && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border border-blue-200 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                      {resource.source}
                    </span>
                  )}
                  {resource.eligibility && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-green-50 to-green-100 text-green-800 border border-green-200 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      {resource.eligibility}
                    </span>
                  )}
                </div>

                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white font-bold rounded-xl hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-gray-500/25"
                  >
                    <span className="mr-2 group-hover/btn:translate-x-1 transition-transform duration-300">{translate('Visit Website')}</span>
                    <ExternalLink className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  </a>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/0 via-primary-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const HousingAssistance = () => {
  const { translate } = useTranslation();
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const resourceService = IndianResourceService.getInstance();
        const data = await resourceService.getResourcesByCategory('housing');
        setResources(data || []);
      } catch (err) {
        console.error('Error fetching housing resources:', err);
        setError('Failed to load resources');
        setResources([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">{translate('Loading resources...')}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-700 mb-6">{translate('Housing Assistance Resources')}</h2>
      <p className="text-gray-600 mb-8">
        {translate('Find resources for affordable housing, rental assistance, home buying programs, and emergency housing support for single parent families.')}
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {resources.length === 0 && !loading && !error ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">{translate('No resources available')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={resource._id || index}
              className="group relative p-6 h-full bg-gradient-to-br from-white via-white to-gray-50 shadow-xl rounded-2xl border border-gray-200 hover:shadow-2xl hover:border-primary-300 transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.03] hover:rotate-1 overflow-hidden"
              hover
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-200 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200 rounded-full translate-y-12 -translate-x-12"></div>
              </div>

              {resource.image && (
                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-2xl transform group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>
              )}

              <div className="relative z-10">
                <h3 className="text-xl font-bold text-navy-800 mb-4 group-hover:text-primary-700 transition-colors duration-300 leading-tight group-hover:scale-105 transform origin-left">{resource.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">{resource.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.source && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border border-blue-200 group-hover:from-blue-100 group-hover:to-blue-200 transition-all duration-300">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                      {resource.source}
                    </span>
                  )}
                  {resource.eligibility && (
                    <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-green-50 to-green-100 text-green-800 border border-green-200 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      {resource.eligibility}
                    </span>
                  )}
                </div>

                {resource.link && (
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white font-bold rounded-xl hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-gray-500/25"
                  >
                    <span className="mr-2 group-hover/btn:translate-x-1 transition-transform duration-300">{translate('Visit Website')}</span>
                    <ExternalLink className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  </a>
                )}
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-400/0 via-primary-400/5 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const LegalResources = () => {
  const { translate } = useTranslation();
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const resourceService = IndianResourceService.getInstance();
        const data = await resourceService.getResourcesByCategory('legal');
        setResources(data || []);
      } catch (err) {
        console.error('Error fetching legal resources:', err);
        setError('Failed to load resources');
        setResources([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">{translate('Loading resources...')}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-700 mb-6">{translate('Legal Resources for Single Parents')}</h2>
      <p className="text-gray-600 mb-8">
        {translate('Access legal assistance for custody arrangements, child support, divorce proceedings, and other legal matters affecting single parents.')}
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {resources.length === 0 && !loading && !error ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">{translate('No resources available')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={resource._id || index}
              className="group p-6 h-full bg-white shadow-lg rounded-xl border border-gray-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
              hover
            >
              {resource.image && (
                <div className="mb-5 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-primary-700 transition-colors duration-300 leading-tight">{resource.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">{resource.description}</p>
              {resource.source && (
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {resource.source}
                  </span>
                </div>
              )}
              {resource.eligibility && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {resource.eligibility}
                  </span>
                </div>
              )}
              {resource.link && (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {translate('Visit Website')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const ChildcareResources = () => {
  const { translate } = useTranslation();
  const [resources, setResources] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const resourceService = IndianResourceService.getInstance();
        const data = await resourceService.getResourcesByCategory('childcare');
        setResources(data || []);
      } catch (err) {
        console.error('Error fetching childcare resources:', err);
        setError('Failed to load resources');
        setResources([]);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">{translate('Loading resources...')}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-700 mb-6">{translate('Childcare Resources')}</h2>
      <p className="text-gray-600 mb-8">
        {translate('Find affordable childcare options, subsidy programs, and creative childcare solutions for single parent families.')}
      </p>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {resources.length === 0 && !loading && !error ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">{translate('No resources available')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card
              key={resource._id || index}
              className="group p-6 h-full bg-white shadow-lg rounded-xl border border-gray-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02]"
              hover
            >
              {resource.image && (
                <div className="mb-5 overflow-hidden rounded-xl shadow-md">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover rounded-xl transform group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}
              <h3 className="text-xl font-bold text-navy-800 mb-3 group-hover:text-primary-700 transition-colors duration-300 leading-tight">{resource.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed text-sm">{resource.description}</p>
              {resource.source && (
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {resource.source}
                  </span>
                </div>
              )}
              {resource.eligibility && (
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {resource.eligibility}
                  </span>
                </div>
              )}
              {resource.link && (
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white font-semibold rounded-lg hover:from-gray-600 hover:via-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  {translate('Visit Website')}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

const ResourcesDirectory = () => {
  const { translate } = useTranslation();

  const resourceCategories = [
    {
      title: translate('Employment Support'),
      description: translate('Job opportunities, career development, and training programs'),
      icon: <BriefcaseBusiness className="h-10 w-10 text-primary-500" />,
      link: '/resources/employment'
    },
    {
      title: translate('Housing Assistance'),
      description: translate('Affordable housing, rental assistance, and home buying programs'),
      icon: <Home className="h-10 w-10 text-primary-500" />,
      link: '/resources/housing'
    },
    {
      title: translate('Legal Resources'),
      description: translate('Custody, child support, and other legal assistance'),
      icon: <Scale className="h-10 w-10 text-primary-500" />,
      link: '/resources/legal'
    },
    {
      title: translate('Childcare Resources'),
      description: translate('Affordable childcare options and subsidy programs'),
      icon: <Baby className="h-10 w-10 text-primary-500" />,
      link: '/resources/childcare'
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-navy-700 mb-6">{translate('Resources for Single Parents')}</h2>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl">
        {translate('Browse essential resources for single parents covering employment, housing, legal assistance, childcare support, and Indian government schemes.')}
      </p>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={translate('Search for resources...')}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resourceCategories.map((category, index) => (
          <Link to={category.link} key={index}>
            <Card hover className="p-6 h-full">
              <div className="flex items-start">
                <div className="mr-4">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy-700 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button variant="text" className="text-primary-500 p-0">
                    {translate('Browse Resources')}
                  </Button>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-navy-700 mb-4">{translate('Resource Tips')}</h3>
        <p className="text-gray-600 mb-4">
          {translate('Use the search function above to find specific resources. All links are regularly verified to ensure they are working and up-to-date.')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {translate('Government schemes available')}
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {translate('NGO support services')}
          </div>
          <div className="flex items-center">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
            {translate('State-specific resources')}
          </div>
        </div>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const location = useLocation();
  const { translate } = useTranslation();
  const [pageTitle, setPageTitle] = useState('Resources');

  useEffect(() => {
    // Update page title based on current route
    const path = location.pathname;

    if (path.includes('/employment')) {
      setPageTitle('Employment Support');
      document.title = 'Employment Support | Single Parent Support Hub';
    } else if (path.includes('/housing')) {
      setPageTitle('Housing Assistance');
      document.title = 'Housing Assistance | Single Parent Support Hub';
    } else if (path.includes('/legal')) {
      setPageTitle('Legal Resources');
      document.title = 'Legal Resources | Single Parent Support Hub';
    } else if (path.includes('/childcare')) {
      setPageTitle('Childcare Resources');
      document.title = 'Childcare Resources | Single Parent Support Hub';
    } else {
      setPageTitle('Resources');
      document.title = 'Resources | Single Parent Support Hub';
    }
  }, [location]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920"
            alt="Resources and support"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-blue-500/10"></div>
        </div>
        <div className="relative container mx-auto px-4 py-12">
          <nav className="text-sm mb-6">
            <ol className="list-reset flex text-gray-600">
              <li>
                <Link to="/" className="text-primary-500 hover:text-primary-600">{translate('Home')}</Link>
              </li>
              <li><span className="mx-2">›</span></li>
              <li>
                <Link to="/resources" className="text-primary-500 hover:text-primary-600">{translate('Resources')}</Link>
              </li>
              {pageTitle !== 'Resources' && (
                <>
                  <li><span className="mx-2">›</span></li>
                  <li className="text-gray-700">{translate(pageTitle)}</li>
                </>
              )}
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-navy-700 mb-4">{translate(pageTitle)}</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        {translate('Find essential resources for employment, housing, legal assistance, and childcare support')}
      </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route index element={<ResourcesDirectory />} />
              <Route path="employment" element={<EmploymentSupport />} />
              <Route path="housing" element={<HousingAssistance />} />
              <Route path="legal" element={<LegalResources />} />
              <Route path="childcare" element={<ChildcareResources />} />
            </Routes>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
