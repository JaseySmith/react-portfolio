import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

function Contact() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS
  }, []);

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
            <div data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="50">
              <FontAwesomeIcon icon={faComments} />
            </div>
            <h2 data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="100">Contact Me</h2>
            <p className="text" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="150">If you have any questions or would like to discuss a project,<br></br> feel free to reach out.</p>
            <form name="contact" method="post" onSubmit={handleSubmit}>
              <div className="flex-form">
                <input type="hidden" name="form-name" value="contact"></input>
                <input type="text" id="name" name="name" placeholder="Name" pattern="[A-Za-z ]+" title="Only letters are allowed" required data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="200"></input>
                <input type="email" id="email" name="email" placeholder="Enter email" required data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="250"></input>
              </div>
                
                <textarea name="message" id="message" placeholder="How may I help?" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="300"></textarea>
                <button type="submit" name="submit" value="Send Message" className="btn" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="350">Send Message</button>
            </form>
        </div>
    </div>
  );
}

export default Contact;