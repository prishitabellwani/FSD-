import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Community from './pages/Community';
import Resources from './pages/Resources';
import MentalHealth from './pages/MentalHealth';
import KidsCorner from './pages/KidsCorner';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Profile from './pages/Profile';
import { UserProvider } from './context/UserContext';
import { ThemeProvider } from './context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';
import { ResourceProvider } from './context/ResourceContext';
import { KidsCornerProvider } from './context/KidsCornerContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { TranslationProvider } from './context/TranslationContext';

function App() {
  return (
    <TranslationProvider>
      <ThemeProvider>
        <NotificationProvider>
          <UserProvider>
            <ResourceProvider>
              <KidsCornerProvider>
                <Router>
                  <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                    <Navbar />
                    <main className="flex-grow">
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/community" element={<Community />} />
                        <Route path="/resources/*" element={<Resources />} />
                        <Route path="/mental-health" element={<MentalHealth />} />
                        <Route path="/kids-corner" element={<KidsCorner />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                          path="/profile"
                          element={
                            <ProtectedRoute>
                              <Profile />
                            </ProtectedRoute>
                          }
                        />
                        <Route path="*" element={<Navigate to="/" replace />} />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                </Router>
              </KidsCornerProvider>
            </ResourceProvider>
          </UserProvider>
        </NotificationProvider>
      </ThemeProvider>
    </TranslationProvider>
  );
}

export default App;