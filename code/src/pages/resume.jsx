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
        <div className="text-center">
            <h3>Development Proficiencies</h3>
            <p>
                Skilled in: 
                <ul>
                    <li>
                    HMTL
                    </li>
                    <li>
                    CSS
                    </li>
                    <li>
                    Javascript
                    </li>
                    <li>
                    Typescript
                    </li>
                    <li>
                    Node.JS
                    </li>
                    <li>
                    SQL
                    </li>
                    <li>
                    APIs
                    </li>
                    <li>
                    React
                    </li>
                    <li>
                    And More to come!
                    </li>
                </ul>
                <h5>Click on the button below to download my Resume</h5>
                <button onClick={onButtonClick}>Download Resume</button>
                
                
            </p>

        </div>
    )
}