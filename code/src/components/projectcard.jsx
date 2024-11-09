
import PropTypes from  'prop-types';
import './projectcard.css'


function ProjectCard({title, image, githubLink}) {
    return (
        <div className="project-card">          
            <a  href={githubLink} target="_blank" rel = "noopener norefferer"> 
                <div className="image-container">
                    <img src={image} alt={title} className ="project-image" />
                    <div className="title-overlay">
                        <h3>{title}</h3>
                    </div>
                </div>                        
            </a>
        </div>
    )
}

ProjectCard.propTypes  = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
}


export default ProjectCard