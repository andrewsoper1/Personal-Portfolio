import projects from '../utils/data';
import ProjectCard from '../components/projectcard';
import './portfolio.css'

export default function Portfolio() {
    return (
        <div className ="portfolio">
            <h3 className ="text-center">My Portfolio</h3>
            <div className="projects-grid">
                {projects.map((project) =>(
                    <ProjectCard 
                    key={project.id} 
                    title={project.title}
                    image={project.image}
                    githubLink={project.githubLink}
                     />
                ))}

            </div>

        </div>
    )
}

