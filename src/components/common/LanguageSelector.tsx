import React from 'react';
import { useTranslation } from '../../context/TranslationContext';

type LanguageSelectorProps = {
  onSelect?: () => void;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onSelect }) => {
  const { setLanguage, currentLanguage, translateWebsite } = useTranslation();
  
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'zh', name: '中文' },
    { code: 'ar', name: 'العربية' },
    { code: 'hi', name: 'हिंदी' },
  ];
  
  const handleSelect = async (code: string) => {
    setLanguage(code);
    await translateWebsite(code);
    if (onSelect) onSelect();
  };
  
  return (
    <div className="py-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => handleSelect(lang.code)}
          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
            currentLanguage === lang.code ? 'bg-primary-50 text-primary-700 font-medium' : 'text-gray-700'
          }`}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
