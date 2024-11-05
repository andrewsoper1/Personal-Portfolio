import { useState } from 'react';


function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        }  else if (inputType === 'message') {
            setMessage(inputValue);


        }
    };

    const handleFormSubmit =  (e) => {
        e.preventDefault();


    }
    setName('');
    setEmail('');
    setMessage('');
}

export default function Contact() {
    return (
        <div>
            <h1>About Me</h1>
            <p></p>

        </div>
    )
}