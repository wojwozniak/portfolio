import { useState } from 'react';
import { Modal } from '@mui/material';
import { FaExternalLinkAlt, FaGithub, FaTimes } from 'react-icons/fa';
import './renderprojectcard.css';
import { useTranslation } from 'react-i18next';

type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    link: string;
    githubLink: string;
};

const RenderProjectCard = (props: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const { t } = useTranslation();

    return (
        <>
            <div className='projects__card' onClick={handleCardClick}>
                <div className='projects__card__image'>
                    <img src={props.image} alt='project' />
                    <h1 className='projects__card__title'>{props.title}</h1>
                </div>
            </div>
            <Modal
                open={isModalOpen}
                onClose={handleCloseModal}
                aria-labelledby='modal__title'
                aria-describedby='modal__description'
            >
                <div className='modal__content'>
                    <div className='modal__header'>
                        <button className='modal__close' onClick={handleCloseModal} >
                            <FaTimes />
                        </button>
                    </div>
                    <div className='modal__inside'>
                        <h2 id='modal__title'>{props.title}</h2>
                        <img className='projects__card__image--full' src={props.image} alt='project' />
                        <p id='modal__description'>{props.description}</p>
                        <div className='modal__links'>
                            <a
                                href={props.link}
                                className='modal__link'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaExternalLinkAlt />
                                {t('visitWebsite')}
                            </a>
                            <a
                                href={props.githubLink}
                                className='modal__link'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <FaGithub />
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default RenderProjectCard;