import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Palette, Play, Lightbulb, ChevronRight, Download, Heart, Brain, Sparkles, X } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useTranslation } from '../context/TranslationContext';
import { storybooks } from '../data/storybooks';
import { activities } from '../data/activities';

const KidsCorner: React.FC = () => {
  const { translate } = useTranslation();
  const [selectedBook, setSelectedBook] = useState<any>(null);
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    document.title = 'Kids Corner | Single Parent Support Hub';
  }, []);

  const handleReadBook = (book: any) => {
    setSelectedBook(book);
    setCurrentPage(0);
  };

  const handleDownloadBook = (book: any) => {
    const content = book.content.join('\n\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${book.title}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExploreActivity = (activity: any) => {
    setSelectedActivity(activity);
  };

  const nextPage = () => {
    if (selectedBook && currentPage < selectedBook.content.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="pt-16">
      {/* Enhanced Strengthening Minds Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-primary-500 to-primary-400 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex justify-center space-x-4 mb-6">
              <Heart className="h-12 w-12 text-primary-100" />
              <Brain className="h-12 w-12 text-primary-100" />
              <Sparkles className="h-12 w-12 text-primary-100" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {translate('Strengthening Young Minds')}
            </h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto text-primary-50">
              {translate('Building resilient, confident, and emotionally intelligent children through interactive learning, positive reinforcement, and supportive resources designed specifically for single-parent families.')}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <Heart className="h-10 w-10 mx-auto mb-4 text-primary-100" />
                <h3 className="text-xl font-bold mb-3">{translate('Emotional Intelligence')}</h3>
                <p className="text-sm opacity-90">{translate('Learn to understand and manage emotions')}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <Brain className="h-10 w-10 mx-auto mb-4 text-primary-100" />
                <h3 className="text-xl font-bold mb-3">{translate('Critical Thinking')}</h3>
                <p className="text-sm opacity-90">{translate('Develop problem-solving skills and creative thinking')}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl">
                <Sparkles className="h-10 w-10 mx-auto mb-4 text-primary-100" />
                <h3 className="text-xl font-bold mb-3">{translate('Self-Confidence')}</h3>
                <p className="text-sm opacity-90">{translate('Build self-esteem through positive activities')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-r from-primary-600 to-primary-400">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg"
            alt="Kids playing and learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/95 to-primary-400/90"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {translate('Kids Corner')}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-primary-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {translate('A safe space filled with age-appropriate stories, activities, and educational content designed to support children in single-parent families.')}
            </motion.p>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                variant="primary" 
                className="bg-white text-primary-600 hover:bg-white/90"
                onClick={() => document.getElementById('storybooks')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {translate('Explore Storybooks')}
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
                onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {translate('Browse Activities')}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storybooks Section */}
      <section id="storybooks" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{translate('Storybooks')}</h2>
              <p className="text-muted-foreground">
                {translate('Engaging stories that help children understand and navigate their emotions and family situations.')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {storybooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={book.coverImage} 
                      alt={book.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="inline-block bg-primary/10 text-primary-foreground text-xs px-2 py-1 rounded-full">
                        {book.ageRange}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {book.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{book.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{book.description}</p>
                    <div className="flex space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleReadBook(book)}
                      >
                        <BookOpen className="mr-1 h-4 w-4" />
                        {translate('Read')}
                      </Button>
                      <Button 
                        variant="primary" 
                        size="sm" 
                        className="flex-1"
                        onClick={() => handleDownloadBook(book)}
                      >
                        <Download className="mr-1 h-4 w-4" />
                        {translate('Download')}
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{translate('Kids Activities')}</h2>
              <p className="text-muted-foreground">
                {translate('Fun and educational activities to keep children engaged while developing important skills.')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-4 text-4xl">
                      {activity.icon}
                    </div>
                    <div className="inline-block bg-primary/10 text-primary-foreground text-xs px-2 py-1 rounded-full mb-2">
                      {activity.ageRange}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{activity.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{activity.description}</p>
                    <div className="text-xs text-muted-foreground mb-4">
                      Duration: {activity.duration}
                    </div>
                    <Button 
                      variant="primary" 
                      fullWidth
                      onClick={() => handleExploreActivity(activity)}
                    >
                      {translate('Explore')}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storybook Reader Modal */}
      {selectedBook && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="text-xl font-bold text-foreground">{selectedBook.title}</h3>
              <Button variant="text" onClick={() => setSelectedBook(null)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed text-foreground">{selectedBook.content[currentPage]}</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-border">
              <Button 
                variant="outline" 
                onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                disabled={currentPage === 0}
              >
                Previous
              </Button>
              <span className="text-sm text-muted-foreground">
                Page {currentPage + 1} of {selectedBook.content.length}
              </span>
              <Button 
                variant="outline" 
                onClick={() => setCurrentPage(Math.min(selectedBook.content.length - 1, currentPage + 1))}
                disabled={currentPage === selectedBook.content.length - 1}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Activity Modal */}
      {selectedActivity && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-border">
              <h3 className="text-xl font-bold text-foreground">{selectedActivity.title}</h3>
              <Button variant="text" onClick={() => setSelectedActivity(null)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <div className="mb-4">
                <div className="text-4xl mb-4 text-foreground">{selectedActivity.icon}</div>
                <p className="text-lg mb-4 text-foreground">{selectedActivity.content.join(' ')}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-foreground">Materials Needed:</h4>
                  <ul className="list-disc list-inside text-sm text-foreground">
                    {selectedActivity.materials.map((material: string, index: number) => (
                      <li key={index}>{material}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-foreground">Instructions:</h4>
                  <ol className="list-decimal list-inside text-sm text-foreground">
                    {selectedActivity.instructions.map((instruction: string, index: number) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ol>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-foreground">Duration:</h4>
                  <p className="text-sm text-foreground">{selectedActivity.duration}</p>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <Button 
                variant="primary" 
                fullWidth
                onClick={() => setSelectedActivity(null)}
              >
                Start Activity
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Educational Videos Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{translate('Educational Videos')}</h2>
              <p className="text-muted-foreground">
                {translate('Engaging videos that teach important life skills and emotional intelligence.')}
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Understanding Your Emotions',
                ageRange: '5-10 years',
                duration: '8 minutes',
                thumbnail: 'https://images.pexels.com/photos/8471739/pexels-photo-8471739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                title: 'Making New Friends',
                ageRange: '4-8 years',
                duration: '6 minutes',
                thumbnail: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              },
              {
                title: 'Taking Care of Our Planet',
                ageRange: '6-12 years',
                duration: '10 minutes',
                thumbnail: 'https://images.pexels.com/photos/2559749/pexels-photo-2559749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              }
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-background/80 rounded-full p-3 cursor-pointer hover:bg-background transition-colors">
                        <Play className="h-8 w-8 text-primary" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="inline-block bg-primary/10 text-primary-foreground text-xs px-2 py-1 rounded-full">
                        {video.ageRange}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {video.duration}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{video.title}</h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Printable Resources */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{translate('Printable Resources')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translate('Download and print these resources to engage with your children away from screens.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Coloring Book: Diverse Families',
                description: 'A collection of 20 coloring pages celebrating different family structures.',
                pages: 20
              },
              {
                title: 'Emotions Worksheet Bundle',
                description: 'Help children identify and express their feelings through guided activities.',
                pages: 15
              },
              {
                title: 'Family Activities Calendar',
                description: 'Monthly calendar with daily activity suggestions for families to do together.',
                pages: 12
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="h-full p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{resource.description}</p>
                  <p className="text-xs text-muted-foreground mb-4">{resource.pages} pages</p>
                  <Button variant="primary" fullWidth className="flex items-center justify-center">
                    <Download className="mr-2 h-4 w-4" />
                    {translate('Download PDF')}
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline">
              {translate('View All Printables')}
            </Button>
          </div>
        </div>
      </section>

      {/* For Parents Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-muted rounded-lg p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
                {translate('For Parents: How to Use These Resources')}
              </h2>
              <p className="text-muted-foreground mb-6 text-center">
                {translate('Guidance on how to effectively use these materials to support your children through various situations and emotions.')}
              </p>
              
              <div className="space-y-4">
                {[
                  {
                    title: 'Creating a Reading Routine',
                    content: 'Set aside 15-20 minutes each day to read together. The storybooks in our collection are designed to prompt discussions about feelings and experiences.'
                  },
                  {
                    title: 'Using Activities for Teachable Moments',
                    content: 'Our activities can be used to address specific challenges your child might be facing, from adapting to changes to expressing difficult emotions.'
                  },
                  {
                    title: 'Screen Time Management',
                    content: 'While our videos are educational, we recommend balancing screen time with other activities. Consider using our printable resources as alternatives.'
                  }
                ].map((tip, index) => (
                  <div key={index} className="bg-background p-4 rounded-md border border-border">
                    <h3 className="font-semibold text-foreground mb-1">{translate(tip.title)}</h3>
                    <p className="text-muted-foreground text-sm">{translate(tip.content)}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="primary">
                  {translate('Parent Resource Guide')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KidsCorner
