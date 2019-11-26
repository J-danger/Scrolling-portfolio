import React, { Component } from "react"
import ContactForm from "../components/ContactForm"
import Github from "../images/github.png"
import Linkedin from "../images/linkedin.png"

class Contact extends Component {
    state = {}
    render(){
        return(
           
            <div className="contact-section"  id="contact">            
                <div className="contact-form-container">
                    <div className="contact-form">
                    <div id="contact-text">
                        <div id="ContactLinks-bottom">
                        <a href="https://github.com/J-danger" target="_blank" rel="noopener noreferrer"> 
                            <img className="NavBarIcons" src={Github} alt="Github" height="75px" width="75px">
                            </img>
                        </a>
                        <a href="https://www.linkedin.com/in/stephen-howe-23a581127/" target="_blank" rel="noopener noreferrer"> 
                            <img className="NavBarIcons" src={Linkedin} alt="Linkedin" height="75px" width="75px">
                            </img>
                        </a>
                        </div>
                    </div>    
                    <ContactForm />
                    </div>
                    
          
                </div>
            
            </div> 
            
        )
    }
}

export default Contact