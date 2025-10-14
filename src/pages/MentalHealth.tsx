import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarCheck, Clock, Users, Heart, Star, Calendar } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useTranslation } from '../context/TranslationContext';

const MentalHealth: React.FC = () => {
  const { translate } = useTranslation();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  
  useEffect(() => {
    document.title = 'Mental Health | Single Parent Support Hub';
  }, []);

  const therapistProfiles = [
    {
      name: 'Dr. Maria Sanchez',
      title: 'Clinical Psychologist',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      specialties: ['Single Parent Challenges', 'Anxiety', 'Depression'],
      rating: 4.9,
      reviews: 127
    },
    {
      name: 'Dr. James Wilson',
      title: 'Family Therapist',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      specialties: ['Co-Parenting', 'Child Behavior', 'Life Transitions'],
      rating: 4.8,
      reviews: 94
    },
    {
      name: 'Sarah Johnson, LMFT',
      title: 'Licensed Marriage & Family Therapist',
      image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      specialties: ['Parenting Support', 'Grief & Loss', 'Stress Management'],
      rating: 4.9,
      reviews: 112
    }
  ];

  const supportGroups = [
    {
      title: 'Single Parent Support Circle',
      schedule: 'Every Tuesday, 7:00 PM',
      facilitator: 'Dr. Maria Sanchez',
      participants: 12,
      virtual: true
    },
    {
      title: 'Coping with Life Transitions',
      schedule: 'Every Thursday, 6:30 PM',
      facilitator: 'Sarah Johnson, LMFT',
      participants: 8,
      virtual: true
    },
    {
      title: 'Mindfulness for Parents',
      schedule: 'Every Saturday, 9:00 AM',
      facilitator: 'Dr. James Wilson',
      participants: 15,
      virtual: false
    }
  ];

  const selfCareResources = [
    {
      title: 'Stress Management Techniques',
      description: 'Learn practical techniques to manage stress in your busy life as a single parent.',
      link: '#'
    },
    {
      title: 'Self-Care on a Budget',
      description: 'Discover affordable self-care practices you can incorporate into your daily routine.',
      link: '#'
    },
    {
      title: 'Finding Time for Yourself',
      description: 'Strategies to carve out personal time when parenting responsibilities seem overwhelming.',
      link: '#'
    },
    {
      title: 'Handling Burnout',
      description: 'Recognize the signs of burnout and take steps to recover and prevent future episodes.',
      link: '#'
    }
  ];

  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      const formattedDate = date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
      });
      
      dates.push(formattedDate);
    }
    
    return dates;
  };
  
  const availableDates = generateAvailableDates();
  
  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'
  ];

  const handleBookAppointment = () => {
    alert(`Appointment booked for ${selectedDate} at ${selectedTime}`);
    setSelectedDate('');
    setSelectedTime('');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg"
            alt="Mental health support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-700/90"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {translate('Mental Health Support for Single Parents')}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-primary-foreground/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {translate('Access professional mental health services, support groups, and self-care resources designed specifically for the unique challenges single parents face.')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                variant="primary" 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => document.getElementById('schedule-consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {translate('Schedule a Consultation')}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Schedule Consultation Section */}
      <section id="schedule-consultation" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{translate('Schedule Your Consultation')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translate('Connect with a mental health professional who specializes in supporting single parents through their unique challenges.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">{translate('Select a Therapist')}</h3>
              
              <div className="space-y-6">
                {therapistProfiles.map((therapist, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                        <img 
                          src={therapist.image} 
                          alt={therapist.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-lg font-semibold text-foreground">{therapist.name}</h4>
                            <p className="text-muted-foreground">{therapist.title}</p>
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="ml-1 text-sm font-medium text-muted-foreground">
                              {therapist.rating} ({therapist.reviews})
                            </span>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm text-muted-foreground mb-2">{translate('Specialties')}:</p>
                          <div className="flex flex-wrap gap-2">
                            {therapist.specialties.map((specialty, i) => (
                              <span 
                                key={i} 
                                className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-6">{translate('Book Your Appointment')}</h3>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('Select Date')}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {availableDates.map((date, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`p-2 text-center text-sm rounded-md transition-colors ${
                        selectedDate === date
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background border border-border hover:border-primary text-foreground'
                      }`}
                      onClick={() => setSelectedDate(date)}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('Select Time')}
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableTimes.map((time, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`p-2 text-center text-sm rounded-md transition-colors ${
                        selectedTime === time
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-background border border-border hover:border-primary text-foreground'
                      }`}
                      onClick={() => setSelectedTime(time)}
                      disabled={!selectedDate}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  {translate('Consultation Type')}
                </label>
                <div className="flex items-center space-x-4">
                  <label className="inline-flex items-center">
                    <input type="radio" name="consultationType" className="text-primary" defaultChecked />
                    <span className="ml-2 text-foreground">{translate('Video Call')}</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="consultationType" className="text-primary" />
                    <span className="ml-2 text-foreground">{translate('Phone Call')}</span>
                  </label>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                fullWidth
                onClick={handleBookAppointment}
                disabled={!selectedDate || !selectedTime}
              >
                <CalendarCheck className="mr-2 h-5 w-5" />
                {translate('Book Appointment')}
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4 text-center">
                {translate('Free initial 15-minute consultation. Regular sessions are covered by most insurance plans.')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Groups Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{translate('Support Groups')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translate('Join our facilitated support groups to connect with other single parents facing similar challenges.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportGroups.map((group, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{group.title}</h3>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      <span>{group.schedule}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-2">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      <span>{group.participants} {translate('participants')}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground mb-4">
                      <Heart className="h-4 w-4 mr-2 text-primary" />
                      <span>{translate('Facilitated by')} {group.facilitator}</span>
                    </div>
                    <div className="mb-4">
                      {group.virtual ? (
                        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200">
                          {translate('Virtual Meeting')}
                        </span>
                      ) : (
                        <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full dark:bg-green-900 dark:text-green-200">
                          {translate('In-Person Meeting')}
                        </span>
                      )}
                    </div>
                    <Button variant="outline" fullWidth>
                      {translate('Join Group')}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Self-Care Resources */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{translate('Self-Care Resources')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translate('Explore resources designed to help you prioritize your mental wellbeing while navigating the challenges of single parenthood.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {selfCareResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card hover className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                    <a 
                    href={resource.link}
                    className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
                  >
                    {translate('Read More')}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="primary" size="lg">
              {translate('View All Resources')}
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6 text-primary-foreground/80" />
          <h2 className="text-3xl font-bold mb-6">{translate('Take the First Step Today')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {translate('Your mental health matters. Schedule a consultation with one of our professional therapists who understand the unique challenges of single parenthood.')}
          </p>
            <Button 
                variant="primary" 
                size="lg" 
                className="bg-background text-foreground hover:bg-background/90"
                onClick={() => document.getElementById('schedule-consultation')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {translate('Schedule Your Consultation')}
              </Button>
        </div>
      </section>
    </div>
  );
};

export default MentalHealth;