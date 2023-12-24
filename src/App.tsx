import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Start from './components/Section01Start';
import About from './components/Section02About';
import Projects from './components/Section03Projects';

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
        <div className='flex flex-col'>
          <Start />
          <div id="bg-photo" className='w-full h-[45vh]' />
          <About />
          <div className='h-[1px] w-full bg-background flex flex-row justify-center'>
            <div className='h-[1px] w-11/12 bg-white opacity-50' />
          </div>
          <Projects />
        </div>
        <Footer />
      </I18nextProvider>
    </div>
  )
}

export default App
