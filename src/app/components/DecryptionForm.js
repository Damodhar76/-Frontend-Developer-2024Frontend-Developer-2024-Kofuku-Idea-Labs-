// components/DecryptionForm.js
import { useState } from "react";
import { decryptMessage } from "../utils/crypto";

const DecryptionForm = ({ encryptedText, key, setDecryptedText }) => {
  const [decrypted, setDecrypted] = useState('');

  const handleDecryption = () => {
    const decryptedMessage = decryptMessage(encryptedText, key);
    setDecrypted(decryptedMessage);
    setDecryptedText(decryptedMessage); 
  };

  return (
    <div>
      <button onClick={handleDecryption} disabled={!encryptedText || !key}>
        Decrypt Message
      </button>
      <textarea
        value={decrypted}
        onChange={(e) => setDecrypted(e.target.value)}
        placeholder="Decrypted text will appear here..."
        rows="5"
        cols="60"
      />
    </div>
  );
};

export default DecryptionForm;
