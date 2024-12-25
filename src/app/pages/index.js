// pages/index.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import DecryptionForm from '../components/DecryptionForm';
import VerificationForm from '../components/VerificationForm';
import MessageDisplay from '../components/MessageDisplay';

export default function Home() {
  const [encryptedText, setEncryptedText] = useState('');
  const [key, setKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  useEffect(() => {
    const fetchEncryptedData = async () => {
      try {
        const response = await axios.get('/api/encrypt');
        setEncryptedText(response.data.encrypted_text);
        setKey(response.data.key);
      } catch (error) {
        console.error('Error fetching encrypted data:', error);
      }
    };
    fetchEncryptedData();
  }, []);

  return (
    <div>
      <h1>Kofuku Idealabs Assignment</h1>

      <MessageDisplay title="Encrypted Message" message={encryptedText} />

      <DecryptionForm encryptedText={encryptedText} key={key} />

      {decryptedText && <VerificationForm decryptedText={decryptedText} />}
    </div>
  );
}
