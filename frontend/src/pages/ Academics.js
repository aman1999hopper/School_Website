import React from 'react';
import './Academics.css'; 

function Academics() {
  return (
    <div className="academics-page">
      <h1>Academics</h1>
      
      <section className="curriculum">
        <h2>Curriculum Offered</h2>
        <p>Our school offers a comprehensive curriculum that caters to various educational levels:</p>
        <ul>
          <li><strong>Primary (Grades 1-5)</strong> English, Mathematics, Science, Social Studies, Art, Physical Education
          </li>
          <li><strong>Secondary (Grades 6-10):</strong> English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
          </li>
          <li><strong>Senior Secondary science (Grades 11-12):
          </strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English
          </li>
          <li><strong>Senior Secondary commerce (Grades 11-12):
          </strong> Accountancy, Business Studies, Economics, Mathematics, English

          </li>
        </ul>
      </section>

      <section className="subjects">
        <h2>Subjects Taught</h2>
        <p>We offer a diverse range of subjects across different educational levels to ensure a well-rounded education:</p>
        <ul>
          <li><strong>Primary Level:</strong> English, Mathematics, Science, Social Studies, Art, Physical Education</li>
          <li><strong>Secondary Level:</strong> Advanced Mathematics, Biology, Chemistry, Physics, History, Geography, Economics, Information Technology</li>
          <li><strong>Senior Secondary Level:</strong> Specialized courses in Science (Physics, Chemistry, Biology), Commerce (Accountancy, Business Studies, Economics), Humanities (Psychology, Sociology, Political Science)</li>
        </ul>
      </section>

      <section className="methodologies">
        <h2>Teaching Methodologies</h2>
        <p>We use a blend of traditional and modern teaching techniques to cater to different learning styles.</p>
      </section>

      <section className="resources">
        <h2>Educational Resources:</h2>
        <ul>
          <li><strong>Digital classrooms:</strong> Equipped with the latest technology, including interactive whiteboards and digital resources.</li>
          <li><strong>interactive learning modules:</strong> A well-stocked library with a vast collection of books, journals, and digital resources for research and reading.</li>
          <li><strong>access to online educational platforms:</strong> State-of-the-art science and computer laboratories to facilitate practical learning and experimentation.</li>
        </ul>
      </section>
    </div>
  );
}

export default Academics;

