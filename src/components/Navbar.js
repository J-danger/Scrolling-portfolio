import React, { Component } from "react"
import { Link } from "react-scroll";


class Navbar extends Component {
    state ={}
    render(){
        return(
            <div className="navbar">
                
                <Link
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}                
                duration= {500}
                >Home
                </Link>

                <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}                
                duration= {500}
                >About
                </Link>

                <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}                
                duration= {500}
                >Projects
                </Link> 

                <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}                
                duration= {500}
                >Contact
                </Link>
           

            </div>
        )
    }
}

export default Navbar