import Logos from '../../ui/Logos';
import './footer.css'
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div id="contact" className='footer'>
            <div className='content'>
                <h2 id="footer__logo">Contact</h2>
                <p id="footer__logo--subtext">Have any questions? Just want to say hi? Contact me!</p>
                <Logos />
            </div>
            <div className='horizontal__line' />
            <p id="footer__copyright">{t('SUB')}</p>
            <div id="highlight--6" className='highlight-green-big' />
        </div>
    )
}

export default Footer