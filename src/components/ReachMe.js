// ReachMeForm.js

import React, { useState } from 'react';
import './ReachMe.css';
import axios from 'axios';

const ReachMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFormError('Please fill out all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('/.netlify/functions/submitForm', { name, email, message });

      // Simulating a successful submission
      setSubmissionSuccess(true);

      // Reset form fields and state after successful submission
      setName('');
      setEmail('');
      setMessage('');
      setFormError(null);

    } catch (error) {
      // Handle errors from the server or API
      setFormError('An error occurred. Please try again.');
    } finally {
      // Reset loading state
      setIsSubmitting(false);
    }
  };

  return (
    <div class="reach">
      <form onSubmit={handleSubmit}>
        {/* Your form inputs here */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {formError && <p className="error-message">{formError}</p>}
        {submissionSuccess && <p className="success-message">Form submitted successfully!</p>}
      </form>
    </div>
  );
};

export default ReachMe;
