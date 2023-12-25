import React from 'react';
import { experience } from '../types/experience';

const ExperienceBlock: React.FC<experience> = ({ duration, title, role, description, technologies }) => {
    return (
        <div className="flex flex-col md:flex-row items-start w-full h-full bg-background-light shadow rounded-lg p-5">
            <div className="flex-1 w-full">
                <div className="flex justify-between items-center w-full">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <span className="text-sm font-semibold text-gray-600">{duration}</span>
                </div>
                <h4 className="text-lg font-medium text-blue-600">{role}</h4>
                <ul className="mt-2">
                    {description.map((desc, index) => (
                        <li key={index} className="text-gray-700">{desc}</li>
                    ))}
                </ul>
            </div>
            {technologies &&
                <div className="w-full md:w-auto flex flex-wrap gap-2 mt-4 md:mt-0 md:ml-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            }
        </div>
    );
};

export default ExperienceBlock;