import { useTranslation } from 'react-i18next';
import Pustynna from '../assets/images/projects/screen-1.png';
import Zlota from '../assets/images/projects/screen-2.png';
import { project } from '../types/project';
import Project from '../ui/Project';

const Projects = () => {
  const { t } = useTranslation();

  const projects: project[] = [
    {
      image: Zlota,
      title: 'Złota  Ósemka',
      description: 'exampledescription',
      link: 'https://zlotaosemka.dabrowagornicza.zhp.pl/',
      githubLink: "https://github.com/wojwozniak/wp-zlotaosemka"
    },
    {
      image: Pustynna,
      title: 'Pustynna Burza',
      description: 'exampledescription',
      link: 'https://pustynnaburza.dabrowagornicza.zhp.pl/',
      githubLink: "https://github.com/wojwozniak/wp-pustynnaburza"
    }
  ];

  return (
    <section id="projects" className='w-screen pb-5 bg-background pt-10'>
      <div className='p-7.5 flex flex-col justify-center z-5 w-full pl-14 pr-14'>
        <h2 className="text-4xl">{t('recentProjects')}</h2>
        <div className='flex flex-col items-center justify-center flex-wrap mt-16 mb-16 gap-12 md:flex-row'>
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects