import { AiFillGithub } from  'react-icons/ai';
import { AiFillLinkedin } from  'react-icons/ai';


function Footer() {
    return (
        <footer className="footer fixed-bottom text-center">
            <a href = "https://github.com/andrewsoper1" target ="_blank" rel="noopener noreferrer">
            <AiFillGithub size={30} />
            </a>
            <a href ="https://www.linkedin.com/in/andrew-soper-223254117/" target = "blank" rel="noopener  noreferrer">
            <AiFillLinkedin size={30} />
            </a>



        </footer>
    )
}



export default Footer;