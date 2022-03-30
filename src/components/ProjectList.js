import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import elonCoin from "../assets/images/eloncoin.JPG";
import weatherToWalk from "../assets/images/weatherToWalk.JPG";
import runbuddy from "../assets/images/runbuddy.JPG";
import atanime from "../assets/images/atanime.JPG";

const ProjectList = () => {
    const [projects] = useState([
        {
            name: "AtAnime",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: atanime,
            tech: "",
            github: "https://github.com/Connor2h/A-T-Anime",
            deployedLink: "https://atanime.herokuapp.com/"
        },
        {
            name: "ElonCoin",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: elonCoin,
            tech: "",
            github: "https://eloncoin.herokuapp.com/",
            deployedLink: "https://github.com/Connor2h/ElonCoin"
        },

        {
            name: "Weather To Walk",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: weatherToWalk,
            tech: "",
            github: "https://github.com/Connor2h/weather-to-walk-1",
            deployedLink: "https://luistorano.github.io/weather-to-walk/"
        },

        {
            name: "Run Buddy",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nequevelit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisiac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Crasnon risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdietac. Sed nec nulla aliquam, bibendum odio eget, vestibulumortor. Cras rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa",
            img: runbuddy,
            tech: "",
            github: "https://github.com/Connor2h/run-buddy",
            deployedLink: "https://connor2h.github.io/run-buddy/"
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
                        github={project.github}
                        deployedLink={project.deployedLink}
                    />
                ))
            }
        </div>
    )
}

export default ProjectList;