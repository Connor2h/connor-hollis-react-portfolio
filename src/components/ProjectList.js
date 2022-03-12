import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import elonCoin from "../assets/images/eloncoin.JPG";
import weatherToWalk from "../assets/images/weatherToWalk.JPG";
import runbuddy from "../assets/images/runbuddy.JPG";
import pastel from "../assets/images/pastel.jpg";
import calculator from "../assets/images/calculator.jpg";
import led from "../assets/images/led.jpg";

const ProjectList = () => {
    const [projects] = useState([
        {
            name: "test1",
            description: "description test",
            img: elonCoin,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test2",
            description: "description test",
            img: weatherToWalk,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test3",
            description: "description test",
            img: runbuddy,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test2",
            description: "description test",
            img: pastel,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test2",
            description: "description test",
            img: calculator,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test2",
            description: "description test",
            img: led,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },
    ])

    return (
        <div>
            {
                projects.map(project => (
                    <ProjectCard
                        name={project.name}
                        description={project.description}
                        img={project.img}
                    />
                ))
            }
        </div>
    )
}

export default ProjectList;