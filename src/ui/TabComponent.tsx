import React, { useState } from "react"
import ExperienceBlock from "./ExperienceBlock"
import Box from "@mui/material/Box"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography";
import { experience } from "../types/experience"

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const TabComponent = ({ Experience }: { Experience: experience[] }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        event.preventDefault();
        setValue(newValue);
    };

    return (
        <div className="min-h-[300px] mt-6">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="tabs experience">
                    {Experience.map((experience, index) => {
                        return (
                            <Tab key={index} label={experience.title} {...a11yProps(index)} />
                        )

                    })}
                </Tabs>
            </Box>
            {Experience.map((experience, index) => {
                return (
                    <CustomTabPanel key={index} value={value} index={index}>
                        <ExperienceBlock title={experience.title}
                            duration={experience.duration}
                            role={experience.role}
                            description={experience.description}
                            technologies={experience.technologies} />
                    </CustomTabPanel>
                )
            })}
        </div>
    )
}

export default TabComponent