import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) {
      formErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email address is invalid';
    }
    if (!formData.phone) {
      formErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number is invalid';
    }
    if (!formData.position) formErrors.position = 'Position is required';
    if (!formData.experience) formErrors.experience = 'Experience is required';
    if (!formData.resume) formErrors.resume = 'Resume is required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setConfirmationMessage('Your application has been successfully submitted!');
    } else {
      setErrors(validationErrors);
      setConfirmationMessage('');
    }
  };

  return (
    <div className="job-application-form">
      <h2>Job Application</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="form-group">
          <label>Position Applied For:</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
          />
          {errors.position && <span className="error">{errors.position}</span>}
        </div>

        <div className="form-group">
          <label>Years of Experience:</label>
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            min="0"
          />
          {errors.experience && <span className="error">{errors.experience}</span>}
        </div>

        <div className="form-group">
          <label>Upload Resume:</label>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
          />
          {errors.resume && <span className="error">{errors.resume}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {confirmationMessage && (
        <div className="confirmation-message">
          <p>{confirmationMessage}</p>
        </div>
      )}

      {/* {submitted && !confirmationMessage && (
        <div className="submitted-data">
          <h3>Submitted Application:</h3>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Phone:</strong> {formData.phone}</p>
          <p><strong>Position:</strong> {formData.position}</p>
          <p><strong>Experience:</strong> {formData.experience} years</p>
          <p><strong>Resume:</strong> {formData.resume.name}</p>
        </div>
      )} */}
    </div>
  );
};

export default Login;
