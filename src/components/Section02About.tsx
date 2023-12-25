import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const texts = [
    "Hello! I am Wojciech Woźniak. I am a software engineer specializing in web development.",
    "My professional journey started few years back, when I first stumbled upon basic HTML&CSS course. Soon after I started building my first websites.",
    "Since then I started studying Computer Science and have worked on many projects, both commercial and not.",
    "In free time I enjoy playing chess and hiking."
  ]

  const favTechs = [
    "React",
    "TypeScript",
    "Next.js",
    "Node.js",
    "C#",
    "Blazor"
  ]

  return (
    <section id="about" className='w-screen bg-transparent z-2 relative pt-18'>
      <div className='bg-background-light pt-10 w-full h-auto flex flex-col pl-14 pr-14 pb-20'>
        <h2 className="text-4xl">
          About me
        </h2>
        {texts.map((text, index) => (
          <p key={index} className="font-light z-5 mt-5">
            {text}
          </p>
        )
        )}
        <h3 className="z-5 mt-10 font-semibold text-xl">
          Technologies I work most often with:
        </h3>
        <div className="grid grid-cols-3 gap-4 mt-5">
          {favTechs.map((tech, index) => {
            return (
              <p key={index} className="font-light z-5">
                {tech}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About