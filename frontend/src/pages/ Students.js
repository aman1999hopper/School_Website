import React from 'react';
import './Students.css'; // Import CSS for styling

function Students() {
  return (
    <div className="students-page">
      
        <h1>Students</h1>
        <p>Explore the vibrant life of our students, their achievements, and the leadership opportunities available.</p>

      <div className="students-content">
        <section className="students-card">
          <h2>Life at Springdale</h2>
          <ul>
            <li><strong>Extracurricular Activities:</strong> Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club.</li>
            <li><strong>Clubs and Societies:</strong> "Literary Society, Environmental Club, Astronomy Club, Coding Club" etc.</li>
          </ul>
        </section>

        <section className="students-card">
          <h2>Achievements</h2>
          <p>Our students have consistently excelled in various fields, earning recognition both locally and nationally. Here are some highlights:</p>
          <ul>
            <li>"John Smith - National Level Math Olympiad Winner"</li>
            <li>"Sarah Lee - Gold Medalist in State Swimming Championship"</li>
            <li>"Tech Innovators Club - Winners of Inter-School Robotics Competition"</li>
          </ul>
        </section>

        <section className="students-card">
          <h2>Student Council</h2>
          <p>We encourage our students to take up leadership roles and actively participate in the school's decision-making processes. The Student Council offers an excellent platform for students to develop their leadership skills.</p>
          <ul>
            <li><strong>President:</strong>Amy Parker, Grade 12.</li>
            <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11.</li>
            <li><strong>Secretary:</strong> Lisa Wong, Grade 10.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Students;
