import { AiFillGithub } from 'react-icons/ai';
import './footer.css'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'

type Translations = {
    SUB: string;
};

const Footer = ({ language }: { language: string }) => {

    const translationsList: { [key: string]: Translations } = {
        PL: {
            SUB: 'Autor: wojwozniak, 2023'
        },
        EN: {
            SUB: 'Created by wojwozniak, 2023'
        },
        DE: {
            SUB: 'Autor: wojwozniak, 2023'
        },
    };

    return (
        <div className='footer'>
            <div className='content'>
                <h2 id="footer__logo">LOGO HERE</h2>
                <div className='footer__links'>
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
            <p id="footer__copyright">{translationsList[language]?.SUB}</p>
            <div id="highlight--6" className='highlight-green-big' />
        </div>
    )
}

export default Footer