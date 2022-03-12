import React from "react";

export default function ProjectCard(props) {

    return (
        <div>
            <p>
                {props.name}
            </p>
            <p>
                {props.description}
            </p>
        </div>
    )
}