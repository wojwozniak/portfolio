import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { IoIosMail } from "react-icons/io";

const Logos = () => {
    const links = [
        {
            name: 'Email',
            link: '',
            icon: <IoIosMail fill="bright-blue" size="32px" />
        },
        {
            name: 'Twitter',
            link: '',
            icon: <BsTwitter fill="bright-blue" size="32px" />
        },
        {
            name: 'Github',
            link: '',
            icon: <AiFillGithub fill="bright-blue" size="32px" />
        },
        {
            name: 'LinkedIn',
            link: '',
            icon: <BsLinkedin fill="bright-blue" size="32px" />
        }
    ]

    return (
        <div className='flex flex-row items-center gap-2.5 mt-7.5'>
            {links.map((link, index) => {
                return (
                    <div key={index}
                        className='mt-6'>
                        <a href={link.link}
                            target='_blank'
                            rel='noreferrer'
                            className='flex flex-row items-center justify-center fill-blue-500'>
                            {link.icon}
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Logos