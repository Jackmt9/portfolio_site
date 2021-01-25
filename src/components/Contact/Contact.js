import React from 'react';
import './Contact.css'

class Contact extends React.Component {
    state={
        emailShow: false,
        phoneShow: false
    }

    toggleEmailShow = () => {
        this.setState({emailShow: !this.state.emailShow})
    }

    togglePhoneShow = () => {
        this.setState({phoneShow: !this.state.phoneShow})
    }

    render(){

        return (

            
            <div className="Contact">
                <h1>Contact</h1>
                <br/>
                <p>Thanks for checking out my site. Feel free to reach out to me via email to get in touch.</p>
                <br/>
                {
                    !this.state.emailShow ?
                    <>
                    <p>Email:</p><button onClick={this.toggleEmailShow} className='show-button'><span>Click To Show</span></button>
                    </>
                    :
                    <p>Email: <a href='mailto:jackmt9@gmail.com' >jackmt9@gmail.com</a></p>
                }
                <br/>
                {
                    !this.state.phoneShow ?
                    <>
                    <p>Phone:</p>
                    <button onClick={this.togglePhoneShow} className='show-button'><span>Click To Show</span></button>
                    </>
                    :
                    <p>Mobile: <a href='tel://9177970898/' >(917) 797-0898</a></p>
                }
                <br/>
                <br/>
                <br/>
                <h1>Connect</h1>
                <br/>
                <p>Be sure to connect with me through these platforms:</p>
                <br/>
                <a href="https://jackmt9.medium.com/" rel="noopener noreferrer" target='_blank' className='media'><i class="fab fa-medium"></i></a>
                <a href="https://www.linkedin.com/in/jackmt9/" rel="noopener noreferrer" target='_blank' className='media'><i class="fab fa-linkedin"></i></a>
                <a href="https://github.com/jackmt9" rel="noopener noreferrer" target='_blank' className='media'><i class="fab fa-github-square"></i></a>
                <a href="https://dev.to/jackmt9" rel="noopener noreferrer" target='_blank' className='media'><i class="fab fa-dev"></i></a>
            </div>
        )
    }
}

export default Contact