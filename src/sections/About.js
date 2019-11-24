import React, { Component } from "react"



class About extends Component {
    state = {}
    
    
    render(){
       
        return(
            <div className="about-section"  id="about" >
                <div id="aboutMe-container">
                    <div id="skills">                        
                        <h3 id="tech-header">Skills</h3>
                        <ul className="tech-container">
                            <li className="li-skills">HTML5</li>     
                            <li className="li-skills">CSS</li>   
                            <li className="li-skills">Javascript</li> 
                            <li className="li-skills">JQuery</li> 
                            <li className="li-skills">Node.js</li>       
                            <li className="li-skills">Express</li> 
                            <li className="li-skills">MySQL</li>  
                            <li className="li-skills">MongoDB</li> 
                            <li className="li-skills">React</li>     
                        </ul> 
                    <div class="clr"></div>   
                    </div> 
                </div>
                
            </div>
        )
    }
}

export default About