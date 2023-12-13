import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Navbar from "./components/nav/Navbar"
import Footer from "./components/footer/Footer";
import Start from './components/sections/Start';
import About from './components/sections/About';
import Projects from './components/sections/Projects';

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
        <div className='sections'>
          <Start />
          <About />
          <Projects />
        </div>
        <Footer />
      </I18nextProvider>
    </div>
  )
}

export default App
