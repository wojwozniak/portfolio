import { useState } from "react";
import Navbar from "./components/nav/Navbar"
import Sections from "./components/sections/Sections"
import Footer from "./components/Footer";

function App() {

  const [language, setLanguage] = useState('EN');

  return (
    <div className='App'>
        <Navbar language={language} setLanguage={setLanguage} />
        <Sections />
        <Footer />
    </div>
  )
}

export default App
