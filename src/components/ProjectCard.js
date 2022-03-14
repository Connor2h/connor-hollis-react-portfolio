import React from "react";

export default function ProjectCard(props) {

    return (
            <div className="container">
                <div class="row">
                    <div class="col-12">
                        <h2>{props.name}</h2>
                    </div>
                    <div class="col-8">
                        <img alt="" src={props.img}></img>
                    </div>
                    <div class="col-4 d-none d-lg-block">
                        <p>{props.description}</p>
                        <p>
                        <a href={props.github}>Deployed Application: {props.github}</a>
                        </p>
                        <p>
                        <a href={props.deployedLink}>Github Link: {props.deployedLink}</a>
                        </p>
                    </div>
                    {/* <div class="col-12 d-none d-lg-block">
                        <h2>{props.name}</h2>
                    </div> */}
                </div>
            </div>
    )
}