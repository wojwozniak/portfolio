import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Navbar from "./components/nav/Navbar"
import Sections from "./components/sections/Sections"
import Footer from "./components/footer/Footer";

i18n.use(Backend).use(LanguageDetector).init({
  fallbackLng: 'en',
  detection: {
    order: ['localStorage', 'navigator'],
  },
  interpolation: {
    escapeValue: false,
  },
});

function App() {

  return (
    <div className='App'>
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <Sections />
        <Footer />
      </I18nextProvider>
    </div>
  )
}

export default App
