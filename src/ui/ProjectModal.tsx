import Modal from "@mui/material/Modal";
import { project } from "../types/project";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";

interface ProjectModalProps {
    project: project;
    open: boolean;
    handleClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, handleClose }) => {
    return (
        <Modal className="flex overflow-hidden flex-row" open={open} onClose={handleClose}>
            <div className="fixed bg-background-light border-[3px] border-white rounded-lg inset-0 p-4 md:p-8">
                <div className="relative max-w-6xl mx-auto rounded-lg shadow-lg flex flex-col justify-apart">
                    <button onClick={handleClose} className="absolute top-4 right-4 text-xl">
                        <FaTimes />
                    </button>
                    <h2 className="p-4 md: p-8 text-2xl font-bold w-full">{project.title}</h2>
                    <div className="flex flex-col items-center">
                        <img src={project.image} alt="Project" className="mt-4 rounded-lg w-4/5 sm:w-[70%] md:w-3/5 lg:w-2/5" />

                        <p className="mt-4">{project.description}</p>

                        <div className="flex flex-wrap gap-4 mt-4 fixed bottom-6">
                            {project.link && (
                                <a target="_blank"
                                    href={project.link}
                                    className="flex items-center gap-2 hover:underline"
                                    rel="noopener noreferrer">
                                    <FaExternalLinkAlt />
                                    Visit Website
                                </a>
                            )}
                            {project.githubLink && (
                                <a target="_blank"
                                    href={project.githubLink}
                                    className="flex items-center gap-2 hover:underline"
                                    rel="noopener noreferrer">
                                    <FaGithub />
                                    Github
                                </a>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </Modal>
    );
};

export default ProjectModal;