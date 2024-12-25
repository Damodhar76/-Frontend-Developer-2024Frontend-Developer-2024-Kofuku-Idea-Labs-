// pages/api/verify.js
export default function handler(req, res) {
    const { decrypted_text, email, phone_number, name, user_submitted_code } = req.body;
 
    if (decrypted_text === 'The secret message is decoded!' && user_submitted_code === 'your-solving-code') {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false });
    }
  }
  