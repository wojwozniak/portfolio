import i18n from 'i18next';
import { I18nextProvider } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Start from './components/Section01Start';
import About from './components/Section02About';
import Experience from './components/Section03Experience';
import Projects from './components/Section04Projects';
import Separator from './ui/Separator';
import { useEffect, useState } from 'react';
import Overlay from './ui/Overlay';

i18n.use(Backend).use(LanguageDetector).init({
  fallbackLng: 'en',
  detection: {
    order: ['localStorage', 'navigator'],
  },
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: '/portfolio-v2/locales/{{lng}}/{{ns}}.json',
  },
});

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <div className='App'>
      {loading && <Overlay />}
      <I18nextProvider i18n={i18n}>
        <Navbar />
        <div className='flex flex-col'>
          <Start />
          <Separator />
          <About />
          <div id="bg-photo" className='w-full h-[45vh] border-b-2 border-white border-t-2' />
          <Experience />
          <Separator />
          <Projects />
        </div>
        <Separator />
        <Footer />
      </I18nextProvider>
    </div>
  )
}

export default App

/*         <div className='highlight-green-big left-[-350px]' /> */