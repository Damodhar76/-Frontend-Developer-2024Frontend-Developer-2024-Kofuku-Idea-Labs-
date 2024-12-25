
export default function handler(req, res) {
    const encryptedText = 'Uif!ufyu!xjmm!tfmfdujpo!zpvsofgf'; 
    const key = 'secretkey'; 
  
    res.status(200).json({ encrypted_text: encryptedText, key });
  }
  