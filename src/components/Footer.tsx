import { useTranslation } from 'react-i18next';
import Logos from '../ui/Logos';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <div id="contact"
            className='h-auto w-screen flex flex-col items-center justify-center relative overflow-hidden z-7 bg-background'>
            <div className='pl-9 pr-9 pt-10 flex flex-col items-center justify-center pb-4'>
                <h2 className='text-4xl'>
                    Contact
                </h2>
                <p className="text-sm font-thin text-center">
                    Have any questions? Just want to say hi? Contact me!
                </p>
                <Logos type={''} />
            </div>
            <div className='h-px w-11/12 bg-white opacity-50 mt-5' />
            <p className="mt-2 text-xs font-thin mb-2.5">{t('SUB')}</p>
            <div className='highlight-green-big left-[-350px]' />
        </div>
    )
}

export default Footer