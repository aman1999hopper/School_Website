import React from 'react';
import './About.css'

function AboutUs() {
  return (
    <div className="about-us-page">
    <section className="school-history">
      <h2>History</h2>
      <p>Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students..</p>
    </section>
  
    <section className="vision-mission-values" data-tooltip="Our Vision">
      <div className="vision">
        <h2>Vision</h2>
        <p>To create a learning environment that fosters academic excellence, critical thinking, and ethical values</p>
      </div>
      <div className="mission">
        <h2>Mission</h2>
        <p>To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
      </div>
      <div className="values">
        <h2>Values</h2>
          <li>Integrity</li>
          <li>Respect</li>
          <li>Excellence</li>
          <li>Collaboration</li>
          <li>Innovation</li>
      </div>
    </section>
  
    <section className="message-principal" data-tooltip="Message from the Principal">
      <p>At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
    </section>
  
    <section className="infrastructure-facilities" data-tooltip="Explore our infrastructure and facilities">
    <div>
          <li>"State-of-the-art science and computer labs"</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
      </div>
    </section>
  </div>
  );

}

export default AboutUs;
