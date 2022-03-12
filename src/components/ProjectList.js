import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = () => {
    const [projects] = useState([
        {
            name: "name test",
            description: "description test",
            img: "",
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "name test 2",
            description: "description test",
            img: "",
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        }
    ])

    return (
        <div>
            {
                projects.map(project => (
                    <ProjectCard
                        name={project.name}
                        description={project.description}
                    />
                ))
            }
        </div>
    )
}

export default ProjectList;