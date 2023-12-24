import Pustynna from '../assets/images/projects/screen-1.png'
import Zlota from '../assets/images/projects/screen-2.png'
import { useTranslation } from 'react-i18next'
import RenderProjectCard from '../ui/RenderProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className='projects'>
      <div className='content'>
        <h2 id="projects__title">{t('recentProjects')}</h2>
        <p id="projects__subtitle">Some of my recent projects</p>
        <div className='projects__container'>
          <RenderProjectCard 
            title={t("scoutWebsite")} 
            description={'exampledescription'} 
            image={Zlota} 
            link={'https://zlotaosemka.dabrowagornicza.zhp.pl/'} 
            githubLink={'https://github.com/wojwozniak/wp-zlotaosemka'} 
          />
          <RenderProjectCard 
            title={t("survivalScoutWebsite")} 
            description={'exampledescription'} 
            image={Pustynna} 
            link={'https://pustynnaburza.dabrowagornicza.zhp.pl/'} 
            githubLink={'https://github.com/wojwozniak/wp-pustynnaburza'} 
          />
        </div>
      </div>
    </section>
  )
}

export default Projects