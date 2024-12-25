

export const decryptMessage = (encryptedText, key) => {
    let decryptedText = '';
    let keyIndex = 0;
  
    for (let i = 0; i < encryptedText.length; i++) {
      decryptedText += String.fromCharCode(
        encryptedText.charCodeAt(i) ^ key.charCodeAt(keyIndex)
      );
      keyIndex = (keyIndex + 1) % key.length;
    }
  
    return decryptedText;
  };
  