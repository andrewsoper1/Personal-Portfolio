
import PropTypes from  'prop-types';
import './projectcard.css'
import { AiFillGithub } from  'react-icons/ai';


function ProjectCard({title, image, githubLink, deployedLink}) {
    return (
        <div className="project-card">
            <div className="image-container">
                <img src={image} alt={title} className="project-image" />
                <div className="title-overlay">
                {deployedLink ? (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer" className="project-title-link">
              <h3>{title}</h3>
            </a>
          ) : (
            <h3 className="project-title">{title}</h3>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="github-icon">
            <AiFillGithub  size="30" />
          </a>
        </div>
      </div>
    </div>
    
    )
}

ProjectCard.propTypes  = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    deployedLink: PropTypes.string,
}


export default ProjectCard