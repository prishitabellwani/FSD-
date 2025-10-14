import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ResourceService } from '../services/resourceService';
import { IndianResource } from '../data/indianResources';

interface ResourceFilters {
  category?: string;
  location?: string;
  type?: string;
}

interface ResourceContextType {
  resources: IndianResource[];
  loading: boolean;
  error: string | null;
  filters: ResourceFilters;
  setFilters: (filters: ResourceFilters) => void;
  refreshResources: () => Promise<void>;
  searchResources: (query: string) => void;
  filteredResources: IndianResource[];
}

const ResourceContext = createContext<ResourceContextType | undefined>(undefined);

export const useResources = () => {
  const context = useContext(ResourceContext);
  if (context === undefined) {
    throw new Error('useResources must be used within a ResourceProvider');
  }
  return context;
};

interface ResourceProviderProps {
  children: ReactNode;
}

export const ResourceProvider: React.FC<ResourceProviderProps> = ({ children }) => {
  const [resources, setResources] = useState<IndianResource[]>([]);
  const [filteredResources, setFilteredResources] = useState<IndianResource[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState<ResourceFilters>({});
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadResources();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [resources, filters, searchQuery]);

  const loadResources = async () => {
    setLoading(true);
    setError(null);
    try {
      const resourceService = ResourceService.getInstance();
      const data = await resourceService.getAllResources();
      setResources(data);
      setFilteredResources(data);
    } catch (err) {
      setError('Failed to load resources');
      console.error('Error loading resources:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...resources];

    if (filters.category) {
      filtered = filtered.filter(resource => 
        resource.category.toLowerCase().includes(filters.category!.toLowerCase())
      );
    }

    if (filters.location) {
      filtered = filtered.filter(resource => 
        resource.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }

    if (filters.type) {
      filtered = filtered.filter(resource => 
        resource.type.toLowerCase().includes(filters.type!.toLowerCase())
      );
    }

    if (searchQuery) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredResources(filtered);
  };

  const refreshResources = async () => {
    await loadResources();
  };

  const searchResources = (query: string) => {
    setSearchQuery(query);
  };

  const handleSetFilters = (newFilters: ResourceFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return (
    <ResourceContext.Provider value={{
      resources,
      loading,
      error,
      filters,
      setFilters: handleSetFilters,
      refreshResources,
      searchResources,
      filteredResources,
    }}>
      {children}
    </ResourceContext.Provider>
  );
};
