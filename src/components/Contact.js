import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        alert("Thank you! Your message has been recieved.");
        myForm.reset();
      })
      .catch((error) => alert(error));
  };
  
  return (
    <div>
        <div id="contact">
            <FontAwesomeIcon icon={faComments} />
            <h2>Contact Me</h2>
            <p className="text">If you have any questions or would like to discuss a project,<br></br> feel free to reach out.</p>
            <form name="contact" method="post" onSubmit={handleSubmit}>
              <div className="flex-form">
                <input type="hidden" name="form-name" value="contact"></input>
                <input type="text" id="name" name="name" placeholder="Name" pattern="[A-Za-z ]+" title="Only letters are allowed" required></input>
                <input type="email" id="email" name="email" placeholder="Enter email" required></input>
              </div>
                
                <textarea name="message" id="message" placeholder="How may I help?"></textarea>
                <button className="btn" type="submit" name="submit" value="Send Message">Send Message</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;