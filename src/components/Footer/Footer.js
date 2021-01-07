import React from 'react';
import './Footer.css'

function Footer() {

    const today = new Date()
    const year = today.getFullYear()

    return (
        <footer>
            <div class='footnote'>
                Jack Tawil <span class="highlight">©{year}</span>
            </div>
        </footer>
    )
}

export default Footer