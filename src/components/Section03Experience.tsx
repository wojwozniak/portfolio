import { experience } from "../types/experience"
import TabComponent from "../ui/TabComponent"

const Section03Experience = () => {
    const experience: experience[] = [
        {
            title: 'HERP',
            duration: '07.2023-now',
            role: 'Fullstack developer',
            description: '',
            technologies: ["react", 'typescript']
        },
        {
            title: 'title',
            duration: '2022-2023',
            role: 'role',
            description: 'abcd',
            technologies: ["react", 'typescript']
        },
        {
            title: 'title',
            duration: '2022-2023',
            role: 'role',
            description: 'abcd',
            technologies: ["react", 'typescript']
        }
    ]

    return (
        <section id="about" className='w-screen bg-transparent z-2 relative pt-18'>
            <div className='bg-background pt-10 w-full h-auto flex flex-col pl-14 pr-14 pb-20'>
                <h2 className="text-4xl">
                    Experience
                </h2>
                <p className="font-light z-5 mt-5">
                    Some of the places I have worked or studied at:
                </p>
                <TabComponent Experience={experience} />
            </div>
        </section>
    )
}

export default Section03Experience