import './resume.css'

export default function Resume() {
const onButtonClick = () => {
    const pdfUrl ="Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    
}

    return (
        <div className="text-center resume">
            <h3>Development Proficiencies</h3>
            <div className="skills-list">
            
               <span>Skilled in: </span> 
                <ul>
                    <li>HMTL</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Typescript</li>
                    <li>Node.JS</li>
                    <li>SQL</li>
                    <li>APIs</li>
                    <li>React</li>
                    <li>And more to come!</li>
                </ul>
                </div>
                <h5>Click on the button below to download my Resume</h5>
                <button onClick={onButtonClick}>Download Resume</button>
                
                
            

        </div>
    )
}