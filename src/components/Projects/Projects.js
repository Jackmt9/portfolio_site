import React from 'react';
import {ProjectItems} from './ProjectItems'
import ProjectCard from './ProjectCard'
import './Projects.css'

function Projects() {

    const projects = ProjectItems.map((project, index) => {
        return(<ProjectCard project={project} key={index}/>)
    })

    return (
        <div className="Projects">
            <h1>Projects</h1>
            <div className='projects-container'>
                {projects}
            </div>
        </div>
    )
}

export default Projects