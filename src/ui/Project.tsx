import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { project } from "../types/project"
import { useTranslation } from "react-i18next"

const Project = ({ project }: { project: project }) => {
    const { t } = useTranslation();

    return (
        <div className="relative bg-background-light text-white p-8 rounded-lg z-3 w-4/5 transition-all md:w-[98%] duration-300 ease-in-out border-4 border-transparent hover:border-blue-500 hover:border-4 hover:scale-[101%]">
            <div className="bg-background z-4 opacity-1 top-0 right-0 w-full h-full absolute md:w-3/5">
                <img
                    src={project.image}
                    alt="Background"
                    className="absolute top-0 right-0 w-full h-full object-cover rounded-lg z-5 opacity-30"
                />
            </div>

            <div className="relative z-6">
                <h3 className="text-xl font-bold">Featured Project</h3>
                <h4 className="text-2xl font-bold mt-4 mb-2">{project.title}</h4>
                <p className="mb-4">{project.description}</p>
                <div className="flex z-8">
                    {project.link && (
                        <a target="_blank"
                            href={project.link}
                            className="mr-4 flex flex-row items-center justify-center gap-2 hover:underline"
                            rel="noopener noreferrer">
                            <FaExternalLinkAlt />
                            {t('visitWebsite')}
                        </a>
                    )}
                    {project.githubLink && (
                        <a target="_blank"
                            href={project.githubLink}
                            className="mr-4 flex flex-row items-center justify-center gap-2 hover:underline"
                            rel="noopener noreferrer">
                            <FaGithub />
                            Github
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Project