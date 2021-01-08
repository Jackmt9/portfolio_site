
import React from 'react';

export default function ProjectCard({project, index}) {
    
    debugger

    const {title, frontend, backend, description, liveDemo, videoDemo} = project
    
    return(
        <div className='project-card' key={index}>
            <h2 className="project-title">{title}</h2>
            <a href={frontend} target='_blank'>Frontend</a>
            <a href={backend} target='_blank'>Backend</a>
            <p>{description}</p>
            <a href={liveDemo} target='_blank'>Live Demo</a>
            <a href={videoDemo} target='_blank'>Video Demo</a>
       </div>
    )
}