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

        if (!name ||  !email || !message) {
            alert("Please fill in all fields before submitting.");
            return;
        }
            


        alert("Thanks for reaching out!")

        setName('');
        setEmail('');
        setMessage('');
        
    };

    const handleBlur = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputValue.trim() === "" ) {
            alert(`Please enter your ${inputType}.`);

        }
    };
    



    return (
        <div className ="container text-center">
            <h2>Contact Me</h2>
            <form className="form" onSubmit={handleFormSubmit}>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type="text"
          placeholder="Email"
        />
        
        <input
          value = {message}
          name= "message"
          onChange={handleInputChange}
          onBlur={handleBlur}
          type = "text"
          placeholder = "Message"
          />
        <button type="submit">
          Submit
        </button>
      </form>

    </div>
    )
}

export default Contact