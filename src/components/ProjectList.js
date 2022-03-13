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
            name: "ElonCoin",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: elonCoin,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: weatherToWalk,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: runbuddy,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: pastel,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: calculator,
            tech: "",
            github: "github test",
            deployedLink: "deployedLink"
        },

        {
            name: "test2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
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