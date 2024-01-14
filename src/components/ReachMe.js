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
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
        {formError && <p className="error-message">{formError}</p>}
        {submissionSuccess && <p className="success-message">Thank you, form submitted successfully! I will reach back to you shortly!</p>}
      </form>
    </div>
  );
};

export default ReachMe;
