import React from "react";

export default function ProjectCard(props) {

    return (
        <div>
            <img alt="" src={props.img}></img>
            <p>
                {props.name}
            </p>
            <p>
                {props.description}
            </p>
        </div>
    )
}