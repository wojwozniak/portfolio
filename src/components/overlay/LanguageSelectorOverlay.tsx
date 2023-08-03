import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './overlay.css';
import Flag from '../Flag';

const LanguageSelectorOverlay = () => {
  const { t, i18n } = useTranslation();
  const [showOverlay, setShowOverlay] = useState(false);

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language);
    setShowOverlay(false);
  };

  useEffect(() => {
    const overlayShownBefore = localStorage.getItem('overlayShown');
    if (!overlayShownBefore) {
      localStorage.setItem('overlayShown', 'true');
      setShowOverlay(true);
    }
  }, []);

  return showOverlay ? (
    <div className="overlay">
      <div className="overlay__content">
        <h2>{t('greeting')}</h2>
        <p>{t('languageSelectionPrompt')}</p>
        <div className="overlay__content__flags">
          <button onClick={() => handleLanguageChange('en')}>
            <Flag currentLang='en' /> English
          </button>
          <button onClick={() => handleLanguageChange('pl')}>
            <Flag currentLang='pl' /> Polski
          </button>
          <button onClick={() => handleLanguageChange('de')}>
            <Flag currentLang='de' /> Deutsch
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default LanguageSelectorOverlay;