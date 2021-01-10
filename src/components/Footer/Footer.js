import React from 'react';
import './Footer.css'

function Footer() {

    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer>
            <div className='footnote'>
                <a href="https://jackmt9.medium.com/" rel="noopener noreferrer" target='_blank'><i className="fab fa-medium"></i></a>
                <a href="https://www.linkedin.com/in/jackmt9/" rel="noopener noreferrer" target='_blank'><i className="fab fa-linkedin"></i></a>
                <a href="https://github.com/jackmt9" rel="noopener noreferrer" target='_blank'><i className="fab fa-github-square"></i></a>
                <a href="https://dev.to/jackmt9" rel="noopener noreferrer" target='_blank'><i className="fab fa-dev"></i></a>
                <br/>
                <p>Made With React, CSS, and <span role='img' aria-label="heart">❤️</span></p>
                <p>by Jack Tawil <span className="highlight">©{year}</span></p>
            </div>
        </footer>
    )
}

export default Footer