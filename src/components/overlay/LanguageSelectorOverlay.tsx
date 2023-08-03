import { useTranslation } from 'react-i18next';
import './overlay.css'

interface LanguageSelectorOverlayProps {
  onLanguageChange: (language: string) => void;
}

const LanguageSelectorOverlay: React.FC<LanguageSelectorOverlayProps> = ({ onLanguageChange }) => {
  const { t } = useTranslation();

  return (
    <div className="overlay">
      <div className="overlay-content">
        <h2>{t('greeting')}</h2>
        <p>{t('languageSelectionPrompt')}</p>
        <button onClick={() => onLanguageChange('en')}>English</button>
        <button onClick={() => onLanguageChange('pl')}>Polski</button>
        <button onClick={() => onLanguageChange('de')}>Deutsch</button>
      </div>
    </div>
  );
};

export default LanguageSelectorOverlay;