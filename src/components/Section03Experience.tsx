import { experience } from "../types/experience"
import TabComponent from "../ui/TabComponent"

const Section03Experience = () => {
    const experience: experience[] = [
        {
            title: 'HERP',
            duration: '07.2023 - now',
            role: 'Fullstack developer',
            description: [
                "Modernised existing and developed new features for the system",
                "Expanded API to support new features",
                "Implemented automated testing for the system"
                ],
            technologies: ["C#", "Blazor", "SQL", "Javascript", "DevExpress", "WebAssembly", "CSS"]
        },
        {
            title: 'ZHP',
            duration: '10.2021 - now',
            role: 'Volunteer',
            description: ['Developed websites for scout groups and events',
            'Created guides for leaders on how to use the CMS',
            'Maintained the website, fixing bugs and adding new features (including seasonal mini-games)'],
            technologies: ["Javascript", "PHP", "Wordpress", "CSS", "HTML"]
        }
    ]

    return (
        <section id="experience" className='w-screen bg-transparent z-2 relative pt-18'>
            <div className='bg-background pt-10 w-full h-auto flex flex-col pl-14 pr-14 min-h-[500px]'>
                <h2 className="text-4xl">
                    Experience
                </h2>
                <p className="font-light z-5 mt-5">
                    Some of the places I have worked at:
                </p>
                <TabComponent Experience={experience} />
            </div>
        </section>
    )
}

export default Section03Experience