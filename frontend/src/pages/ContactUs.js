import React, { useState } from 'react';
import './ContactUs.css';

function ContactUs() {
  // Initial state for the form
  const initialFormState = {
    name: '',
    email: '',
    message: ''
  };

  const [form, setForm] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server

    // Reset the form fields after submission
    setForm(initialFormState);

    alert('Form submitted!');
  };

  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <div className="contact-details">
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="map-container">
          <h2>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.687824275275!2d144.96133131531813!3d-37.8163651797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xfb7dcb0bf4077b8e!2sMelbourne%20Central%20Station!5e0!3m2!1sen!2sau!4v1627048352304!5m2!1sen!2sau"
            width="100%"
            height="400"
            frameborder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabindex="0"
            title="School Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
