import Logos from '../ui/Logos';
import Separator from '../ui/Separator';

const Footer = () => {
    return (
        <div id="contact"
            className='h-auto w-screen flex flex-col items-center justify-center relative overflow-hidden z-7 bg-background'>
            <div className='pl-14 pr-14 pt-10 flex flex-col w-full'>
                <h2 className='text-4xl'>
                    Contact
                </h2>
                <p className="text-sm font-light mt-4">
                    Have any questions? Just want to say hi?
                </p>
                <p className="text-sm font-light mt-1">
                    Click one of the buttons below to do so!
                </p>
            </div>
            <Logos type={''} />
            <div className="p-2" />
            <Separator />
            <p className="mt-2 text-xs font-thin mb-2.5">wojwozniak, XII 2023</p>
        </div>
    )
}

export default Footer