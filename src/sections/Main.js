import React, { Component } from "react"
import { Link } from "react-scroll";
import { animations } from 'react-animation'
import Github from "../images/github.png"
import Linkedin from "../images/linkedin.png"

class Main extends Component {
    state = {}
    render(){
        const style = {
            animation: animations.popIn
          }
        return(
            <div className="main-section" id="main">
                <div className="greeting">
                   <h1> Welcome to my Portfolio!</h1>
                   <h2> Stephen Howe | Full Stack Web Developer</h2> 
                   <div id="ContactLinks">
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
                
                <div className="arrow" style={style}>
                        <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}                
                        duration= {500}
                        >&#10140;
                        </Link>
                </div>
            </div>
        )
    }
}

export default Main