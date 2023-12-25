import React from 'react';
import { experience } from '../types/experience';

const ExperienceBlock: React.FC<experience> = ({ duration, title, role, description, technologies }) => {
    return (
        <div className="flex items-start py-4">
            <div className="w-1/4 pr-4">
                <span className="block text-right text-sm font-semibold text-gray-600">{duration}</span>
            </div>
            <div className="w-3/4">
                <h3 className="text-xl font-semibold">{title}</h3>
                <h4 className="text-lg font-medium text-blue-600">{role}</h4>
                <p className="text-gray-700 mt-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-200 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExperienceBlock;