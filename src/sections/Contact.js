import React, { Component } from "react"
import ContactForm from "../components/ContactForm"

class Contact extends Component {
    state = {}
    render(){
        return(
            <div className="contact-section"  id="contact">
                <div className="contact-form-container">
                    <div className="contact-form">
                    <ContactForm />
                    </div>
                    
                </div>
            
            </div> 
        )
    }
}

export default Contact