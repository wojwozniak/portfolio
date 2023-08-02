import './footer.css'
import { BsFileEarmarkPdfFill, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='content'>
                <h2 id="footer__logo">LOGO HERE</h2>
                <div className='footer__links'>
                    <BsTwitter size="32px" />
                    <BsLinkedin size="32px" />
                    <BsFileEarmarkPdfFill size="32px" />
                </div>
            </div>
            <div className='horizontal__line' />
            <p id="footer__copyright">Created by @wojwozniak, 2023</p>
            <div id="highlight--6" className='highlight-green-big' />
        </div>
    )
}

export default Footer