import { FaExternalLinkAlt } from "react-icons/fa"
import { project } from "../types/project"
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Project = ({ project }: { project: project }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div onClick={() => openModal()}
                className="relative bg-background-light text-white p-8 rounded-lg z-3 w-4/5 h-[250px] transition-all duration-300 ease-in-out border-4 border-transparent hover:border-blue-500 hover:border-4 hover:scale-[101%] cursor-pointer">
                <div className="bg-background z-4 opacity-1 top-0 right-0 w-full h-full absolute md:w-3/5">
                    <img
                        src={project.image}
                        alt="Background"
                        className="absolute top-0 right-0 w-full h-full object-cover rounded-lg z-5 opacity-30 md:opacity-90"
                    />
                </div>
                <div className="relative z-6 flex flex-col h-full w-full">
                    <div>
                        <h3 className="text-xl font-bold">Featured Project</h3>
                        <h4 className="text-2xl font-bold mt-4 mb-2">{project.title}</h4>
                        <p className="mb-4">{project.description}</p>
                    </div>
                    <span
                        className="mr-4 flex flex-row h-full w-full flo gap-2 hover:underline items-end"
                        rel="noopener noreferrer">
                        <FaExternalLinkAlt size={20} />
                        <p>Click to see more</p>
                    </span>
                </div>
            </div>
            <ProjectModal project={project} open={modalOpen} handleClose={closeModal} />
        </>
    )
}

export default Project