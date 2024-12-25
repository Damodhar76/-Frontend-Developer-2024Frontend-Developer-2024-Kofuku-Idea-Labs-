// components/MessageDisplay.js
const MessageDisplay = ({ title, message }) => {
    return (
      <div>
        <h2>{title}</h2>
        <p>{message || 'Loading...'}</p>
      </div>
    );
  };
  
  export default MessageDisplay;
  