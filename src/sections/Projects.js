import React, { Component } from "react"
import ProjectCards from "../components/ProjectCards"
import project3 from "../images/project3.png"
import clicky from "../images/clicky.png"
import webscrape from "../images/webscraper.png"
import burger from "../images/burger.png"

class Projects extends Component {
    state = {}
    render(){
        return(
            <div className="projects-section" id="projects">
                <div className="container-projects">
                    <div className="projects">
                    <ProjectCards
                    link="https://infinite-eyrie-10837.herokuapp.com"
                    image={project3}
                    title="Stack Underflow"
                    category="A MERN Stack forum for web dev beginners"
          
                    />
                    <ProjectCards
                    link="https://j-danger.github.io/Clicky-game/"
                    image={clicky}
                    title="Clicky Game"
                    category="A memory game using states in React "
                    
                    />
                    <ProjectCards
                    link="https://frightening-eyeballs-04450.herokuapp.com/"
                    image={webscrape}
                    title="WebScrapper"
                    category="A Coindesk Web-scrapper"
                    target="_blank"
                    />
                    <ProjectCards
                    link="https://calm-lake-18609.herokuapp.com/burgers"
                    image={burger}
                    title="Burger MVC"
                    category="A full-stack MVC 'burger' logger"          
                    />
                        </div>
                </div>
            </div>
        )
    }
}

export default Projects