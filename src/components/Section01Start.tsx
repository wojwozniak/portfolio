import { useTranslation } from "react-i18next";
import AnimatedBackground from "../ui/three/AnimatedBackground";

const Start = () => {
  const { t } = useTranslation();
  const scrollToSection = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      const offsetTop = aboutSection.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return <section id="home"
    className='h-screen w-screen bg-background-light flex justify-center relative'>
    <div className='z-5 mt-[100px] font-medium w-full pl-14 pr-14'>
      <h1 className='mt-14 color-white font-bold text-xl'>{t("WELCOME")}<br />
        <span className="text-bright-blue text-5xl">Wojciech Woźniak</span>
      </h1>
      <p className="mt-5 w-3/5">
        {t("START_UNDER")} <a href="https://herp.pl/" target="_blank" className="text-bright-blue">HERP</a>.
      </p>
      <button onClick={(e) => scrollToSection(e)}
        className="mt-10 bg-transparent border-bright-blue border-2 text-white font-semibold py-2 px-6 rounded-sm">
        {t("TELL_ME_MORE")}
      </button>
    </div>
    <AnimatedBackground />
  </section>
}

export default Start