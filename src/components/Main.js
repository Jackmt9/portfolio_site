import React from 'react';
import mountain from '../images/mountain.jpeg'

function Main() {
    return (
        <div className="Main">
            <h1 className='intro'>Hi, I'm Jack</h1>
            <img src={mountain} className="mountain" />
        </div>
    )
}

export default Main