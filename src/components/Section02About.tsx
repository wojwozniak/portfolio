import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const texts = [ t("ABOUT_1"), t("ABOUT_2"), t("ABOUT_3"), t("ABOUT_4")];
  const favTechs = [ "React", "TypeScript", "Next.js", "Node.js", "C#", "Blazor"];

  return (
    <section id="about" className='w-screen bg-transparent z-2 relative pt-18'>
      <div className='bg-background-light pt-10 w-full h-auto flex flex-col pl-14 pr-14 pb-20'>
        <h2 className="text-4xl">
          {t("ABOUT").charAt(0) + t("ABOUT").slice(1).toLowerCase()}
        </h2>
        {texts.map((text, index) => (
          <p key={index} className="font-light z-5 mt-5">
            {text}
          </p>
        )
        )}
        <h3 className="z-5 mt-10 font-semibold text-xl">
          {t("FAV_TECHS")}
        </h3>
        <ul className="grid grid-cols-3 gap-4 mt-5">
          {favTechs.map((tech, index) => {
            return (
              <li key={index} className="font-light z-5">
                {tech}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default About