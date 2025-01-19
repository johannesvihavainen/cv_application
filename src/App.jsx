import { useState } from 'react';
import './App.css';
import ChangeSection from './ChangeSection';

function App() {
  const [currentSection, setCurrentSection] = useState('personal-info');

  const changeSection = (section) => {
    setCurrentSection(section);
  };

  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phoneNumber: '',
      location: '',
    },
    education: {
      schoolName: '',
      schoolLocation: '',
      degree: '',
      major: '',
      gpa: '',
      startDate: '',
      endDate: '',
    },
    work: {
      companyName: '',
      jobTitle: '',
      jobLocation: '',
      startDate: '',
      endDate: '',
      jobResponsibilities: '',
    },
    skills: {
      skillName: '',
      skillDetails: '',
    },
    certifications: {
      certificationName: '',
      certificationDescription: '',
      certificationAwarder: '',
    },
  });
  

  const addJob = () => {
    setFormData((prevData) => ({
      ...prevData,
      work: [
        ...prevData.work,
        {
          companyName: '',
          jobTitle: '',
          jobLocation: '',
          startDate: '',
          endDate: '',
          jobResponsibilities: '',
        },
      ],
    }));
  };

  const handleInputChange = (section, field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: {
        ...prevData[section],
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <section className='content'>
        <div>
          <h1>Current Section: {currentSection.toUpperCase()}</h1>
        </div>

        {currentSection === 'personal-info' && (
          <div className="personal-info">
            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              placeholder="John Wick"
              value={formData.personalInfo.fullName}
              onChange={(e) => handleInputChange('personalInfo', 'fullName', e.target.value)}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="johnwick@gmail.com"
              value={formData.personalInfo.email}
              onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
            />

            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              placeholder="(555) 555-5555"
              value={formData.personalInfo.phoneNumber}
              onChange={(e) => handleInputChange('personalInfo', 'phoneNumber', e.target.value)}
            />

            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Dallas, TX"
              value={formData.personalInfo.location}
              onChange={(e) => handleInputChange('personalInfo', 'location', e.target.value)}
            />
          </div>
        )}

        {currentSection === 'education' && (
          <div className="education">
            <label htmlFor="school-name">School Name</label>
            <input
              type="text"
              id="school-name"
              name="schoolName"
              placeholder="Stanford University"
              value={formData.education.schoolName}
              onChange={(e) => handleInputChange('education', 'schoolName', e.target.value)}
            />

            <label htmlFor="school-location">School Location</label>
            <input
              type="text"
              id="school-location"
              name="schoolLocation"
              placeholder="Stanford, CA"
              value={formData.education.schoolLocation}
              onChange={(e) => handleInputChange('education', 'schoolLocation', e.target.value)}
            />

            <label htmlFor="degree">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              placeholder="BS"
              value={formData.education.degree}
              onChange={(e) => handleInputChange('education', 'degree', e.target.value)}
            />

            <label htmlFor="major">Major</label>
            <input
              type="text"
              id="major"
              name="major"
              placeholder="Computer Science"
              value={formData.education.major}
              onChange={(e) => handleInputChange('education', 'major', e.target.value)}
            />

            <label htmlFor="gpa">GPA</label>
            <input
              type="text"
              id="gpa"
              name="gpa"
              placeholder="3.6"
              value={formData.education.gpa}
              onChange={(e) => handleInputChange('education', 'gpa', e.target.value)}
            />

            <label htmlFor="start-date">Start Date</label>
            <input
              type="text"
              id="start-date"
              name="startDate"
              placeholder="Sep 2015"
              value={formData.education.startDate}
              onChange={(e) => handleInputChange('education', 'startDate', e.target.value)}
            />

            <label htmlFor="end-date">End Date</label>
            <input
              type="text"
              id="end-date"
              name="endDate"
              placeholder="Jun 2019"
              value={formData.education.endDate}
              onChange={(e) => handleInputChange('education', 'endDate', e.target.value)}
            />
          </div>
        )}

        {currentSection === 'work' && (
          <div className="work">
            <label htmlFor="company-name">Company Name</label>
            <input
              type="text"
              id="company-name"
              name="companyName"
              placeholder="Google"
              value={formData.work.companyName}
              onChange={(e) => handleInputChange('work', 'companyName', e.target.value)}
            />

            <label htmlFor="job-title">Job Title</label>
            <input
              type="text"
              id="job-title"
              name="jobTitle"
              placeholder="Software Engineer"
              value={formData.work.jobTitle}
              onChange={(e) => handleInputChange('work', 'jobTitle', e.target.value)}
            />

            <label htmlFor="job-location">Job Location</label>
            <input
              type="text"
              id="job-location"
              name="jobLocation"
              placeholder="Mountain View, CA"
              value={formData.work.jobLocation}
              onChange={(e) => handleInputChange('work', 'jobLocation', e.target.value)}
            />

            <label htmlFor="start-date">Start Date</label>
            <input
              type="text"
              id="start-date"
              name="startDate"
              placeholder="May 2015"
              value={formData.work.startDate}
              onChange={(e) => handleInputChange('work', 'startDate', e.target.value)}
            />

            <label htmlFor="end-date">End Date</label>
            <input
              type="text"
              id="end-date"
              name="endDate"
              placeholder="May 2017 / Present / Etc."
              value={formData.work.endDate}
              onChange={(e) => handleInputChange('work', 'endDate', e.target.value)}
            />

            <label htmlFor="job-responsibilities">Job Responsibilities</label>
            <input
              id="job-responsibilities"
              name="jobResponsibilities"
              placeholder="Did cool stuff at company"
              value={formData.work.jobResponsibilities}
              onChange={(e) => handleInputChange('work', 'jobResponsibilities', e.target.value)}
            />

            <div className="button-container">
              <button className="add-more-jobs">Add More Jobs</button>
            </div>
          </div>
        )}

        {currentSection === 'skills' && (
          <div className="skills">
            <label htmlFor="skill-name">Skill Name</label>
            <input
              type="text"
              id="skill-name"
              name="skillName"
              placeholder="Programming Languages"
              value={formData.skills.skillName}
              onChange={(e) => handleInputChange('skills', 'skillName', e.target.value)}
            />

            <label htmlFor="skill-details">Skill Details</label>
            <input
              type="text"
              id="skill-details"
              name="skillDetails"
              placeholder="Java"
              value={formData.skills.skillDetails}
              onChange={(e) => handleInputChange('skills', 'skillDetails', e.target.value)}
            />
          </div>
        )}

        {currentSection === 'certifications' && (
          <div className="certifications">
            <label htmlFor="certification-name">Certification Name</label>
            <input
              type="text"
              id="certification-name"
              name="certificationName"
              placeholder="Foundational C# with Microsoft"
              value={formData.certifications.certificationName}
              onChange={(e) => handleInputChange('certifications', 'certificationName', e.target.value)}
            />

            <label htmlFor="certification-description">Certification Description</label>
            <input
              id="certification-description"
              name="certificationDescription"
              placeholder="Completed a back-end programming course using C#."
              value={formData.certifications.certificationDescription}
              onChange={(e) => handleInputChange('certifications', 'certificationDescription', e.target.value)}
            />

            <label htmlFor="certification-awarder">Certification Awarder</label>
            <input
              type="text"
              id="certification-awarder"
              name="certificationAwarder"
              placeholder="freeCodeCamp & Microsoft"
              value={formData.certifications.certificationAwarder}
              onChange={(e) => handleInputChange('certifications', 'certificationAwarder', e.target.value)}
            />

            <div className="button-container">
              <button className="add-more-certifications">Add More Certifications</button>
            </div>
          </div>
        )}

<div className="preview">
  <h2>Preview</h2>

  <div className="resume">
    <div className="personal-info">
      <h3>Personal Information</h3>
      <p><strong>Full Name:</strong> {formData.personalInfo.fullName || 'N/A'}</p>
      <p><strong>Email:</strong> {formData.personalInfo.email || 'N/A'}</p>
      <p><strong>Phone Number:</strong> {formData.personalInfo.phoneNumber || 'N/A'}</p>
      <p><strong>Location:</strong> {formData.personalInfo.location || 'N/A'}</p>
    </div>

    <div className="education">
      <h3>Education</h3>
      <p><strong>School Name:</strong> {formData.education.schoolName || 'N/A'}</p>
      <p><strong>Location:</strong> {formData.education.schoolLocation || 'N/A'}</p>
      <p><strong>Degree:</strong> {formData.education.degree || 'N/A'}</p>
      <p><strong>Major:</strong> {formData.education.major || 'N/A'}</p>
      <p><strong>GPA:</strong> {formData.education.gpa || 'N/A'}</p>
      <p><strong>Start Date:</strong> {formData.education.startDate || 'N/A'}</p>
      <p><strong>End Date:</strong> {formData.education.endDate || 'N/A'}</p>
    </div>

    <div className="work">
      <h3>Work Experience</h3>
      {formData.work && formData.work.length > 0 ? (
        formData.work.map((job, index) => (
          <div key={index} className="job">
            <p><strong>Company Name:</strong> {job.companyName || 'N/A'}</p>
            <p><strong>Job Title:</strong> {job.jobTitle || 'N/A'}</p>
            <p><strong>Location:</strong> {job.jobLocation || 'N/A'}</p>
            <p><strong>Start Date:</strong> {job.startDate || 'N/A'}</p>
            <p><strong>End Date:</strong> {job.endDate || 'N/A'}</p>
            <p><strong>Responsibilities:</strong> {job.jobResponsibilities || 'N/A'}</p>
          </div>
        ))
      ) : (
        <p>No work experience added yet.</p>
      )}
    </div>

    <div className="skills">
      <h3>Skills</h3>
      <p><strong>Skill Name:</strong> {formData.skills.skillName || 'N/A'}</p>
      <p><strong>Skill Details:</strong> {formData.skills.skillDetails || 'N/A'}</p>
    </div>

    <div className="certifications">
      <h3>Certifications</h3>
      <p><strong>Certification Name:</strong> {formData.certifications.certificationName || 'N/A'}</p>
      <p><strong>Description:</strong> {formData.certifications.certificationDescription || 'N/A'}</p>
      <p><strong>Awarded By:</strong> {formData.certifications.certificationAwarder || 'N/A'}</p>
    </div>
  </div>
</div>



        <div className="button-container">
          <ChangeSection changeSection={changeSection} />
        </div>
      </section>
    </div>
  );
}

export default App;
