import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Book, HomeIcon, HeartHandshake, CalendarClock } from 'lucide-react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useTranslation } from '../context/TranslationContext';

const Home: React.FC = () => {
  const { translate } = useTranslation();
  
  useEffect(() => {
    document.title = 'Single Parent Support Hub';
  }, []);

  const features = [
    {
      icon: <Users className="w-8 h-8 text-primary-500" />,
      title: translate('Community'),
      description: translate('Connect with other single parents, share experiences, and build supportive relationships.'),
      link: '/community'
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-primary-500" />,
      title: translate('Resources'),
      description: translate('Access essential resources including employment, housing, legal support, childcare, and Indian government schemes tailored for single parents.'),
      link: '/resources'
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-primary-500" />,
      title: translate('Mental Health'),
      description: translate('Get support for your mental wellbeing through professional consultations and self-care resources.'),
      link: '/mental-health'
    },
    {
      icon: <Book className="w-8 h-8 text-primary-500" />,
      title: translate('Kids Corner'),
      description: translate('Explore educational content, activities, and storybooks designed to engage and support your children.'),
      link: '/kids-corner'
    }
  ];

  const testimonials = [
    {
      quote: "Finding this support hub changed everything for me and my kids. The resources helped me secure stable housing and the community has been incredibly supportive.",
      author: "Maria L.",
      role: "Mother of two"
    },
    {
      quote: "The mental health resources provided here have been invaluable. Being a single dad wasn't easy, but the consultations and community support made a world of difference.",
      author: "James T.",
      role: "Father of one"
    },
    {
      quote: "I was struggling with legal issues regarding custody, and the legal resources section pointed me in the right direction. Forever grateful for this platform.",
      author: "Sarah K.",
      role: "Mother of three"
    }
  ];

  const upcomingEvents = [
    {
      title: "Virtual Coffee Meetup",
      date: "June 15, 2025",
      time: "10:00 AM - 11:30 AM",
      description: "Join us for a casual virtual coffee chat with other single parents in your area."
    },
    {
      title: "Financial Planning Workshop",
      date: "June 22, 2025",
      time: "6:00 PM - 8:00 PM",
      description: "Learn essential financial planning tips specifically for single-parent households."
    },
    {
      title: "Kids Summer Activities Fair",
      date: "July 5, 2025",
      time: "1:00 PM - 4:00 PM",
      description: "Discover affordable summer activities and programs for kids in your community."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/hero-background.jpg')",
              backgroundColor: '#3b82f6', // Fallback color matching primary-500
            }}
          />
          {/* Overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-3xl mx-auto lg:mx-0">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {translate('Single Parent Support Hub')}
            </motion.h1>
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {translate('Find support, resources and connections to help navigate the journey of single parenthood with confidence and community.')}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/community">
                <Button variant="primary" size="lg">
                  {translate('Join Our Community')}
                </Button>
              </Link>
              <Link to="/resources">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
                  {translate('Explore Resources')}
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{translate('Support for Single Parents')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translate('Comprehensive resources, community connections, and support services designed specifically for the unique challenges single parents face.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={feature.link}>
                  <Card hover className="h-full p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 bg-primary/10 rounded-full">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">{translate('Stories from the Community')}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <div>
                    <div className="mb-4 text-primary">
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground mb-4 italic">{testimonial.quote}</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">{translate('Upcoming Events')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {translate('Upcoming events designed to connect, educate, and support single parents.')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full p-6">
                  <div>
                    <div className="flex items-center mb-4">
                      <CalendarClock className="w-5 h-5 text-primary mr-2" />
                      <div className="text-sm text-primary font-medium">
                        {event.date} | {event.time}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4">{event.description}</p>
                    <Button variant="outline" className="w-full">
                      {translate('Learn More')}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{translate('Connect with Single Parents')}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {translate('Sign up today to access resources, support, and connect with other single parents on similar journeys.')}
          </p>
          <Link to="/signup">
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary-600">
              {translate('Sign Up for Free')}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;