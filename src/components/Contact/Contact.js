import React from 'react';
import './Contact.css'

class Contact extends React.Component {
    state={show: false}

    toggleShow = () => {
        this.setState({show: !this.state.show})
    }

    render(){

        return (

            
            <div className="Contact">
                <h2>Contact</h2>
                <br/>
                <p>Thanks for checking out my site. Feel free to reach out to me via email to get in touch.</p>
                <br/>
                {!this.state.show ?
                <>
                <p>Email:</p><button onClick={this.toggleShow} className='show-button'><span>Click To Show</span></button>
                </>
                :
                <p>Email: <a href='mailto:jackmt9@gmail.com' >jackmt9@gmail.com</a></p>
                
                }
                <br/>
                <br/>
                <br/>
                <h2>Connect</h2>
                <br/>
                <p>Be sure to connect with me through these platforms:</p>
                <br/>
                <a href="https://jackmt9.medium.com/" rel="noopener noreferrer" target='_blank' className='media'><i class="fab fa-medium"></i></a>
                <a href="https://www.linkedin.com/in/jackmt9/" rel="noopener noreferrer" target='_blank' className='media'><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/jackmt9" rel="noopener noreferrer" target='_blank' className='media'><i class="fab fa-github-square"></i></a>
                <a href="https://dev.to/jackmt9" rel="noopener noreferrer" target='_blank' className='media'><i class="fab fa-dev"></i></a>
                
                {/* <a href="https://github.com/Jackmt9" target="_blank"><img className="contact_button" src={Github} alt="GitHub"/></a>
                <a href="https://www.linkedin.com/in/jackmt9/" target="_blank"><img className="contact_button" src={LinkedIn} alt="LinkedIn"/></a>
                <a href="https://jackmt9.medium.com/" target="_blank"><img className="contact_button" src={Medium} alt="Medium"/></a>
                <a href="https://dev.to/jackmt9" target="_blank"><img className="contact_button" src={Dev} alt="Dev"/></a>
                <a href="https://leetcode.com/Jackmt9/" target="_blank"><img className="contact_button" src={Leetcode} alt="LeetCode"/></a>
                <a href="mailto: jackmt9@gmail.com"><img className="contact_button" src={Email} alt="Email"/></a> */}
            </div>
        )
    }
}

export default Contact