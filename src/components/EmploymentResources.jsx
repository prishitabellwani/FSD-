import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './common/Card';
import Button from './common/Button';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from '../context/TranslationContext';

const EmploymentResources = () => {
  const { translate } = useTranslation();
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:5000/api/resources/category/employment');
        setResources(response.data);
        setError(null);
      } catch (err) {
        console.error('Error fetching resources:', err);
        setError('Failed to load resources. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchResources();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>
          {translate('Try Again')}
        </Button>
      </div>
    );
  }

  if (resources.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">{translate('No resources available at this time.')}</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-navy-700 mb-6">{translate('Employment Support Resources')}</h2>
      <p className="text-gray-600 mb-8">
        {translate('Access job opportunities, career development resources, and training programs designed to help single parents build sustainable careers.')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <Card key={resource._id || index} className="p-5 h-full" hover>
            {resource.image && (
              <div className="mb-4">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
            <h3 className="text-lg font-semibold text-navy-700 mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            {resource.source && (
              <div className="mb-3">
                <span className="text-sm text-gray-500">Source: {resource.source}</span>
              </div>
            )}
            {resource.eligibility && (
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-700">Eligibility: {resource.eligibility}</span>
              </div>
            )}
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
            >
              {translate('Visit Website')}
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default EmploymentResources;
