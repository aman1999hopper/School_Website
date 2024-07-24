import React from 'react';
import "./Admissions.css"

function Admissions() {
  return (
    <div className="admissions-page">
      <h1>Admissions</h1>

      <section className="admission-process">
        <h2>Admission Process and Criteria</h2>
        <p>Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
        <ol>
          <li><strong>Application Submission:</strong> Complete and submit the application form available on our website or at the admissions office.</li>
          <li><strong>Document Verification:</strong> Provide necessary documents, including previous academic records, birth certificate, and address proof.</li>
          <li><strong>Entrance Test:</strong> Students may be required to take an entrance test, which assesses basic skills and knowledge. The test is tailored to different grade levels.</li>
          <li><strong>Interview:</strong> Shortlisted candidates and their parents/guardians will be invited for an interview with our admissions committee.</li>
          <li><strong>Final Decision:</strong> Admission decisions are based on the test results, interview performance, and availability of seats. Successful candidates will receive an offer letter with further instructions.</li>
        </ol>
      </section>

      <section className="downloadable-forms">
        <h2>Downloadable Admission Forms</h2>
        <p>To streamline the admission process, we provide downloadable forms for your convenience. Please download, fill out, and submit the required forms along with other necessary documents:</p>
        <ul>
          <li><a href="/forms/admission-form.pdf" download>Admission Form</a> - Complete the form with accurate information and attach the necessary documents.</li>
          <li><a href="/forms/medical-form.pdf" download>Medical Form</a> - This form needs to be filled out by a certified medical professional.</li>
          <li><a href="/forms/parent-consent-form.pdf" download>Parent Consent Form</a> - Required for students under the age of 18.</li>
        </ul>
        <p>All forms must be submitted before the deadline mentioned below.</p>
      </section>

      <section className="important-dates">
        <h2>Important Dates:</h2>
        <p>Keep track of these important dates to ensure a smooth admission process:</p>
        <ul>
          <li><strong>Admission Form Availability: </strong> March 1st</li>
          <li><strong>Last Date for Submission: </strong> March 31st</li>
          <li><strong>Entrance Test: </strong> April 15th</li>
          <li><strong>Announcement of Results:</strong> April 30th</li>
        </ul>
        <p>Please note that these dates are subject to change. Any updates will be communicated via our website and email notifications.</p>
      </section>
    </div>
  );
}

export default Admissions;
