import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Activity } from '../data/activities';
import { Storybook } from '../data/storybooks';

interface KidsCornerContextType {
  activities: Activity[];
  storybooks: Storybook[];
  currentActivity: Activity | null;
  currentStorybook: Storybook | null;
  favorites: string[];
  loading: boolean;
  error: string | null;
  toggleFavorite: (id: string, type: 'activity' | 'storybook') => void;
  setCurrentActivity: (activity: Activity) => void;
  setCurrentStorybook: (storybook: Storybook) => void;
  loadActivities: () => Promise<void>;
  loadStorybooks: () => Promise<void>;
  isFavorite: (id: string, type: 'activity' | 'storybook') => boolean;
}

const KidsCornerContext = createContext<KidsCornerContextType | undefined>(undefined);

export const useKidsCorner = () => {
  const context = useContext(KidsCornerContext);
  if (context === undefined) {
    throw new Error('useKidsCorner must be used within a KidsCornerProvider');
  }
  return context;
};

interface KidsCornerProviderProps {
  children: ReactNode;
}

export const KidsCornerProvider: React.FC<KidsCornerProviderProps> = ({ children }) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [storybooks, setStorybooks] = useState<Storybook[]>([]);
  const [currentActivity, setCurrentActivity] = useState<Activity | null>(null);
  const [currentStorybook, setCurrentStorybook] = useState<Storybook | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('kidsCornerFavorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    loadActivities();
    loadStorybooks();
  }, []);

  useEffect(() => {
    localStorage.setItem('kidsCornerFavorites', JSON.stringify(favorites));
  }, [favorites]);

  const loadActivities = async () => {
    setLoading(true);
    try {
      const data = await import('../data/activities').then(mod => mod.activities);
      setActivities(data);
    } catch (err) {
      setError('Failed to load activities');
      console.error('Error loading activities:', err);
    } finally {
      setLoading(false);
    }
  };

  const loadStorybooks = async () => {
    setLoading(true);
    try {
      const data = await import('../data/storybooks').then(mod => mod.storybooks);
      setStorybooks(data);
    } catch (err) {
      setError('Failed to load storybooks');
      console.error('Error loading storybooks:', err);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (id: string, type: 'activity' | 'storybook') => {
    const favoriteId = `${type}_${id}`;
    setFavorites(prev => 
      prev.includes(favoriteId)
        ? prev.filter(f => f !== favoriteId)
        : [...prev, favoriteId]
    );
  };

  const isFavorite = (id: string, type: 'activity' | 'storybook') => {
    const favoriteId = `${type}_${id}`;
    return favorites.includes(favoriteId);
  };

  return (
    <KidsCornerContext.Provider value={{
      activities,
      storybooks,
      currentActivity,
      currentStorybook,
      favorites,
      loading,
      error,
      toggleFavorite,
      setCurrentActivity,
      setCurrentStorybook,
      loadActivities,
      loadStorybooks,
      isFavorite,
    }}>
      {children}
    </KidsCornerContext.Provider>
  );
};
