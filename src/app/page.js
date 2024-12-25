'use client';  // Ensure the file is treated as a client-side component

import { useEffect, useState } from 'react';
import axios from 'axios';
import DecryptionForm from './components/DecryptionForm';
import VerificationForm from './components/VerificationForm';
import MessageDisplay from './components/MessageDisplay';
import styles from './styles/Home.module.css'; // Adjust path for styles

export default function Home() {
  const [encryptedText, setEncryptedText] = useState('');
  const [key, setKey] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEncryptedData = async () => {
      try {
        const response = await axios.get('/api/encrypt');
        setEncryptedText(response.data.encrypted_text);
        setKey(response.data.key);
      } catch (error) {
        console.error('Error fetching encrypted data:', error);
        setError('Failed to load encrypted data.');
      }
    };

    fetchEncryptedData();
  }, []);

  const handleDecryptedText = (decrypted) => {
    setDecryptedText(decrypted);
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Kofuku Idealabs Assignment</h1>

        {error && <p className={styles.error}>{error}</p>}

        <MessageDisplay title="Encrypted Message" message={encryptedText} />

        <DecryptionForm 
          encryptedText={encryptedText} 
          key={key} 
          setDecryptedText={handleDecryptedText} 
        />

        {decryptedText && (
          <VerificationForm 
            decryptedText={decryptedText} 
            setError={setError} 
          />
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about Next.js
        </a>
      </footer>
    </div>
  );
}
