import React from 'react';
import './Faculty.css'; // Import CSS for styling
import Header from '../components/Header';

function Faculty() {
  const facultyMembers = [
    {
      name: "Mr. John Doe",
      role: "Principal",
      qualifications: " M.Ed",
      experience: "20 years of experience in educational administration.",
      photo: "https://media.istockphoto.com/id/1330255704/photo/confident-smiling-indian-school-teacher-with-students-in-background.jpg?s=612x612&w=0&k=20&c=jYxM1L_vZrAIQi7KmZ3zl7vhg8kltqo5vZOlXJoiNBk=" // Replace with actual photo URL
    },
    {
      name: "Mr. Jane Smith",
      role: "Vice Principal",
      qualifications: "M.Sc.",
      experience: "Specializes in Physics, 15 years of teaching experience",
      photo: "https://media.istockphoto.com/id/1364388471/photo/multiracial-male-principal-standing-outdoors-on-campus.jpg?s=612x612&w=0&k=20&c=xweBj18Ra0homW2Vvs20N27F2l6t-sOoYaeW5xdL5n0=" // Replace with actual photo URL
    },
    {
      name: "Ms. Emily Johnson",
      role: "English Teacher",
      qualifications: "M.Sc. in English",
      experience: "Expert in English 10 years of teaching experience..",
      photo: "https://media.istockphoto.com/id/1384357158/photo/portrait-of-a-beautiful-mexican-woman.jpg?s=1024x1024&w=is&k=20&c=7VBort-ZdbLZ9vlIAledhuJbLtMs6FWN7DNf7aCTpac=" // Replace with actual photo URL
    },
    {
      name: "Ms. Michael Brown:",
      role: "Mathematics Teacher",
      qualifications: "M.Sc. in Mathematics",
      experience: "Expert in Mathematics 8 years of teaching experience.",
      photo: "https://media.istockphoto.com/id/1130934213/photo/portrait-of-smiling-teacher-holding-book-against-blackboard.jpg?s=612x612&w=0&k=20&c=6Gf8xlgWoGFcWj-6RF5ZpKEB_6tZP04IAvs-cXX6t1k=" // Replace with actual photo URL
    },
    {
      name: "Ms.Sophia Davis",
      role: "Science Teacher",
      qualifications: "M.Sc. in Chemistry",
      experience: "Expert in Chemistry 12 years of teaching experience.",
      photo: "https://media.istockphoto.com/id/469762150/photo/smiling-teacher-in-school.jpg?s=612x612&w=0&k=20&c=xjZ3do0dq-TrZSyzjmREolyWMw1ABRVVnIjCeIcUgNE=" 
    },
    {
      name: "Mr. David Wilson",
      role: "Computer Science Teacher",
      qualifications: "B.Tech in Computer Science",
      experience: "Expert in English 15 years of teaching experience..",
      photo: "https://media.istockphoto.com/id/530961467/photo/professor-with-students-in-computer-lab.jpg?s=612x612&w=0&k=20&c=hHPMBIa54tAyuGAARk3Y-wwfgfsSVZOBHNEXtmzSIeA=" // Replace with actual photo URL
    }
    // Add more faculty members as needed
  ];

  return (
    <div className="faculty-page">
      <h1>Faculty</h1>
      <p>Meet our dedicated teaching and administrative staff who are committed to providing the best educational experience for our students.</p>

      <div className="faculty-cards">
        {facultyMembers.map((member, index) => (
          <div key={index} className="faculty-card">
            <img src={member.photo} alt={member.name} className="faculty-photo" />
            <div className="faculty-info">
              <h2>{member.name}</h2>
              <h3>{member.role}</h3>
              <p><strong>Qualifications:</strong> {member.qualifications}</p>
              <p><strong>Experience:</strong> {member.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
