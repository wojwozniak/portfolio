import { AiFillGithub } from 'react-icons/ai';
import './footer.css'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    const { t } = useTranslation();

    const links = [
        {
            name: 'Email',
            link: '',
            icon: <IoIosMail size="32px" />
        },
        {
            name: 'Twitter',
            link: '',
            icon: <BsTwitter size="32px" />
        },
        {
            name: 'Github',
            link: '',
            icon: <AiFillGithub size="32px" />
        },
        {
            name: 'LinkedIn',
            link: '',
            icon: <BsLinkedin size="32px" />
        }
    ]

    return (
        <div id="contact" className='footer'>
            <div className='content'>
                <h2 id="footer__logo">Contact</h2>
                <p id="footer__logo--subtext">Have any questions? Just want to say hi? Contact me!</p>
                <div className='footer__links'>
                    {links.map((link, index) => {
                        return (
                            <div key={index} className='footer__link'>
                                <a href={link.link} target='_blank' rel='noreferrer'>
                                    {link.icon}
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='horizontal__line' />
            <p id="footer__copyright">{t('SUB')}</p>
            <div id="highlight--6" className='highlight-green-big' />
        </div>
    )
}

export default Footer