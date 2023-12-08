import React from 'react';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-regular-svg-icons';

function Contact() {
  const [status, setStatus] = useState("Send Message");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Send Message");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <div>
        <div id="contact">
            <FontAwesomeIcon icon={faComments} />
            <h2>Say Hello!</h2>
            <p className="text mb-40">Ready to collaborate or have any questions? Feel free to reach out anytime. <br></br>Excited to create with you.</p>
            <form onSubmit={handleSubmit}>
                <input type="text" id="name" name="name" placeholder="Name" pattern="[A-Za-z]+" title="Only letters are allowed" required></input>
                <input type="email" id="email" name="email" placeholder="Enter email" required></input>
                <textarea name="message" id="message" placeholder="How may I help?"></textarea>
                <button className="btn" type="submit" name="submit" value="Send Message">{status}</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;