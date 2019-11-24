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
                    deployed="https://infinite-eyrie-10837.herokuapp.com"
                    github="https://github.com/J-danger/Project-3"
                    image={project3}
                    title="Stack Underflow"
                    category="A MERN Stack forum for web dev beginners"
          
                    />
                    <ProjectCards
                    deployed="https://j-danger.github.io/Clicky-game/"
                    github="https://github.com/J-danger/Clicky-game"
                    image={clicky}
                    title="Clicky Game"
                    category="A memory game using states in React "
                    
                    />
                    <ProjectCards
                    deployed="https://frightening-eyeballs-04450.herokuapp.com/"
                    github="https://github.com/J-danger/Webscrape"
                    image={webscrape}
                    title="WebScrapper"
                    category="A Coindesk Web-scrapper utilizing mongoose"
                    target="_blank"
                    git=""
                    />
                    <ProjectCards
                    deployed="https://calm-lake-18609.herokuapp.com/burgers"
                    github="https://github.com/J-danger/burger"
                    image={burger}
                    title="Burger MVC"
                    category="A full-stack MVC 'burger' logger with a custom ORM"          
                    />
                        </div>
                </div>
               
            </div>
        )
    }
}

export default Projects