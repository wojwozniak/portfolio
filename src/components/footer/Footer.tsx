import { AiFillGithub } from 'react-icons/ai';
import './footer.css'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { useTranslation } from 'react-i18next';
import { IoIosMail } from "react-icons/io";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div className='footer'>
            <div className='content'>
                <h2 id="footer__logo">Contact</h2>
                <p>Have any questions? Just want to say hi? Contact me!</p>
                <div className='footer__links'>
                <a href="#" target="_blank">
                        <IoIosMail size="32px" />
                    </a>
                    <a href="#" target="_blank">
                        <BsTwitter size="32px" />
                    </a>
                    <a href="#" target="_blank">
                        <AiFillGithub size="32px" />
                    </a>
                    <a href="#" target="_blank">
                        <BsLinkedin size="32px" />
                    </a>
                </div>
            </div>
            <div className='horizontal__line' />
            <p id="footer__copyright">{t('SUB')}</p>
            <div id="highlight--6" className='highlight-green-big' />
        </div>
    )
}

export default Footer