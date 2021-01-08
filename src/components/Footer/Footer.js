import React from 'react';
import './Footer.css'

function Footer() {

    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer>
            <div class='footnote'>
                <a href="https://jackmt9.medium.com/" target='_blank'><i class="fab fa-medium"></i></a>
                <a href="https://www.linkedin.com/in/jackmt9/" target='_blank'><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/jackmt9" target='_blank'><i class="fab fa-github-square"></i></a>
                <a href="https://dev.to/jackmt9" target='_blank'><i class="fab fa-dev"></i></a>
                <br/>
                <p>Made With React, CSS, and ❤️</p>
                <p>Jack Tawil <span class="highlight">©{year}</span></p>
            </div>
        </footer>
    )
}

export default Footer