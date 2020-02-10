import React, { Component } from "react"
import ProjectCards from "../components/ProjectCards"
import ProjectCardsNoDeploy from "../components/ProjectCardsNoDeploy"
import project3 from "../images/project3.png"
import clicky from "../images/clicky.png"
import webscrape from "../images/webscraper.svg"
import burger from "../images/burger.png"
import bitcoin from "../images/bitcoin.svg"
import tictactoe from "../images/tictactoe.png"
import bamazon from "../images/bamazon.jpg"
import friend from "../images/friendfinder.png"
import red from "../images/red.png"
import train from "../images/train.svg"

class Projects extends Component {
    state = {}
    render(){
      
        return(
            <div className="projects-section" id="projects">
                <div className="container-projects">
                    <div className="projects">
                    <ProjectCardsNoDeploy                    
                    github="https://github.com/J-danger/Bamazon"
                    image={bamazon}
                    title="Bamazon"
                    category="An Amazon-like storefront using MySQL and Node.js"          
                    />    
                 
                    <ProjectCards
                    deployed="https://j-danger.github.io/Gem-Collector/"
                    github="https://github.com/J-danger/Gem-Collector"
                    image={red}
                    title="Jewel Collector"
                    category="A Javascript based Gem Collector Game"                    
                    />

                    <ProjectCards
                    deployed="https://j-danger.github.io/Clicky-game/"
                    github="https://github.com/J-danger/Clicky-game"
                    image={clicky}
                    title="Clicky Game"
                    category="A memory game using states in React "                    
                    />

                    <ProjectCards
                    deployed="https://calm-lake-18609.herokuapp.com/burgers"
                    github="https://github.com/J-danger/burger"
                    image={burger}
                    title="Burger MVC"
                    category="A full-stack MVC 'burger' logger with a custom ORM"          
                    />

                    <ProjectCards
                    deployed="https://j-danger.github.io/TrainActivity/"
                    github="https://github.com/J-danger/TrainActivity"
                    image={train}
                    title="Train Scheduler"
                    category="A train scheduler powered by Javascript and Firebase"          
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
{/* 
                    <ProjectCards
                    deployed="https://btclast.herokuapp.com/"
                    github="https://github.com/J-danger/React-API-Calls"
                    image={bitcoin}
                    title="Bitcoin Price tracker"
                    category="A React app for tracking crypto prices (in progress)"          
                    /> */}

                    <ProjectCards
                    deployed="https://infinite-eyrie-10837.herokuapp.com"
                    github="https://github.com/J-danger/Project-3"
                    image={project3}
                    title="Stack Underflow"
                    category="A MERN Stack forum for web dev beginners"          
                    />

                    <ProjectCards
                    deployed="https://nameless-citadel-00694.herokuapp.com/"
                    github="https://github.com/J-danger/FriendFinder"
                    image={friend}
                    title="Friend Finder"
                    category="A friend finder app using Javascript calculations"          
                    />
                        </div>
                </div>
               
            </div>
        )
    }
}

export default Projects