import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { useScrollAnimation } from "../components/useScrollAnimation";

function Contact() {

  useScrollAnimation(".fade-in-up");

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
            <div className="fade-in-up">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h2 className="fade-in-up">Contact Me</h2>
            <p className="fade-in-up text" style={{ animationDelay: "0.1s" }}>If you have any questions or would like to discuss a project,<br></br> feel free to reach out.</p>
            <form name="contact" method="post" onSubmit={handleSubmit}>
              <div className="flex-form">
                <input type="hidden" name="form-name" value="contact"></input>
                <input type="text" id="name" name="name" placeholder="Name" pattern="[A-Za-z ]+" title="Only letters are allowed" required className="fade-in-up" style={{ animationDelay: "0.2s" }}></input>
                <input type="email" id="email" name="email" placeholder="Enter email" required className="fade-in-up" style={{ animationDelay: "0.3s" }}></input>
              </div>
                
                <textarea name="message" id="message" placeholder="How may I help?" className="fade-in-up" style={{ animationDelay: "0.4s" }}></textarea>
                <button type="submit" name="submit" value="Send Message" className="fade-in-up btn" style={{ animationDelay: "0.5s" }}>Send Message</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;