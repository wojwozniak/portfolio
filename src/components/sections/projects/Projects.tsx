import './projects.css'
import Pustynna from '../../../assets/images/projects/screen-1.png'
import Zlota from '../../../assets/images/projects/screen-2.png'
import { useTranslation } from 'react-i18next'
import RenderProjectCard from './RenderProjectCard';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className='projects'>
      <div className='content'>
        <h2 id="projects__title">{t('recentProjects')}</h2>
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