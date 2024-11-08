
import PropTypes from  'prop-types';


function ProjectCard({title, image, githubLink}) {
    return (
        <div>
            <img src={image} alt={title} />
            <a  href={githubLink} target="_blank" rel = "noopener norefferer"> 
                <h3>{title}</h3>
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