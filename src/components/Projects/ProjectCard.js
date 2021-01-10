
import React from 'react';

export default function ProjectCard({project, index}) {
    
    const {title, frontend, backend, description, liveDemo, videoDemo, notes} = project
    
    return(
        <div className='project-card' key={index}>
            <h2 className="project-title">{title}</h2>
            <iframe frameBorder="0" allowFullScreen="allowfullscreen" src={videoDemo} title={title}/>
            <br/>
            {
                frontend === backend ? 
                    <a href={frontend} rel="noopener noreferrer" target='_blank'>Frontend & Backend</a>
                :
                <>
                    <a href={frontend} rel="noopener noreferrer" target='_blank'>Frontend</a>
                    <br/>
                    <a href={backend} rel="noopener noreferrer" target='_blank'>Backend</a>
                    </>
            }


            <p>{description}</p>
            {
                liveDemo? 
                <a href={liveDemo} rel="noopener noreferrer" target='_blank'>Live Demo</a>
                :
                null
            }
            {
                notes?
                <>
                <br/>
                <p>{notes}</p>
                </>
                :
                null
            }
            <br/>
       </div>
    )
}