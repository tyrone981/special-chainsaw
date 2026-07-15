'use client';

import { useLanguage } from './LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={faGlobe} className="text-gray-400 text-sm" />
      <div className="flex gap-1">
        <button
          onClick={() => setLanguage('fr')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
            language === 'fr' 
              ? 'bg-gradient-to-r from-[#C9A84C] to-[#e8d08a] text-black shadow-lg shadow-[#C9A84C]/25' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          FR
        </button>
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-300 ${
            language === 'en' 
              ? 'bg-gradient-to-r from-[#C9A84C] to-[#e8d08a] text-black shadow-lg shadow-[#C9A84C]/25' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  );
}
