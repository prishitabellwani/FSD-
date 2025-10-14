import React, { useState } from 'react';
import { useTranslation } from '../../context/TranslationContext';

const TranslateButton: React.FC = () => {
  const { setLanguage, currentLanguage, translateWebsite } = useTranslation();
  const [isTranslating, setIsTranslating] = useState(false);

  const handleTranslate = async (targetLanguage: string) => {
    if (targetLanguage === currentLanguage) return;
    
    setIsTranslating(true);
    
    try {
      // Change the language in context
      setLanguage(targetLanguage);
      
      // Translate all DOM content
      await translateWebsite(targetLanguage);
      
    } catch (error) {
      console.error('Translation failed:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  ];

  return (
    <div className="relative group">
      <button
        className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
          isTranslating 
            ? 'bg-gray-300 cursor-not-allowed' 
            : 'bg-primary-600 hover:bg-primary-700 text-white'
        }`}
        disabled={isTranslating}
      >
        <span className="text-lg">🌐</span>
        <span>{isTranslating ? 'Translating...' : 'Translate'}</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div className="py-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleTranslate(lang.code)}
              disabled={isTranslating}
              className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed ${
                currentLanguage === lang.code ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TranslateButton;
