import { AiOutlineGithub } from  'react-icons/ai';
import { AiOutlineLinkedin } from  'react-icons/ai';
import { FaStackOverflow } from "react-icons/fa6";


function Footer() {
    return (
        <footer className="footer fixed-bottom text-center">
            <a href = "https://github.com/andrewsoper1" target ="_blank" rel="noopener noreferrer">
            <AiOutlineGithub size={30} />
            </a>
            <a href ="https://www.linkedin.com/in/andrew-soper-223254117/" target = "blank" rel="noopener  noreferrer">
            <AiOutlineLinkedin size={30} />
            </a>
            <a href ="https://stackoverflow.com/users/28267824/milkymilk" target = "blank" rel="noopener  noreferrer">
            <FaStackOverflow size={30} />
            </a>



        </footer>
    )
}



export default Footer;