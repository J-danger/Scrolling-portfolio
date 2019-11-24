import React, { Component } from "react"
import ContactForm from "../components/ContactForm"

class Contact extends Component {
    state = {}
    render(){
        return(
            <div className="contact-section"  id="contact">
                <div className="contact-form-container">
                    <div className="contact-form">
                    <div id="contact-text"><h2>Contact Me!</h2></div>    
                    <ContactForm />
                    </div>
                    
                </div>
            
            </div> 
        )
    }
}

export default Contact