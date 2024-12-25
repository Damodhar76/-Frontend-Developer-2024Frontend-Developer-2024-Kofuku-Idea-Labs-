
import { useState } from "react";
import axios from "axios";

const VerificationForm = ({ decryptedText, setError }) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [userCode, setUserCode] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/verify', {
        decrypted_text: decryptedText,
        email,
        phone_number: phoneNumber,
        name,
        user_submitted_code: userCode,
      });

      if (response.data.success) {
        setSuccessMessage('Decrypted text verified successfully!');
        setErrorMessage('');
      } else {
        setErrorMessage('Failed to verify the decrypted text.');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred while verifying.');
      setSuccessMessage('');
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Submit Your Details to Verify Decrypted Text</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Your Code:</label>
          <textarea
            value={userCode}
            onChange={(e) => setUserCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default VerificationForm;
