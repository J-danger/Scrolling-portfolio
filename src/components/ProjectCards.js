import React from 'react';
import { Button } from 'reactstrap'

 
function ProjectCards(props) {
  return (
    <>
       
            <div className="project-card">
                
                    <div className="project-image">
                    <img 
                        src={props.image} 
                        alt="Project" 
                        height="200px" 
                        width="200px"
                    />
                    </div>
                    <div className="project-title">
                        <h4>
                            {props.title}
                        </h4>
                    </div>
                    <div className="project-category">
                        <p>
                            {props.category}
                        </p>
                    </div>
                    <div className="project-button-container">
                        <Button 
                            className="project-button"
                            link={props.githubLink}
                            >
                            <a 
                            href={props.github} 
                            className="links" 
                            target="_blank"  
                            rel="noopener noreferrer"
                            >Github
                            </a>
                        </Button>
                        <Button 
                            className="project-button"
                            link={props.deployed}
                            >
                            <a 
                            href={props.deployed} 
                            className="links" 
                            target="_blank"  
                            rel="noopener noreferrer"
                            >Deployed
                            </a>
                        </Button>
                    </div>
                
            </div>
        
    </>
  )
}
 
export default ProjectCards;