import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const PasswordTextBox = ({ generatePassword, options }) => {
  const [password, setPassword] = useState("");
  const handleText = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="password-text-box">
      <div className="password-box-bar">
        <input
          type="text"
          id="passwordvalue"
          onChange={handleText}
          value={password}
        />
        <PasswordStrengthBar password={password} />
      </div>
      <div className="password-buttons">
        <button
          onClick={() => {
            setPassword(generatePassword(options));
          }}
        >
          Generate
        </button>
        <button
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default PasswordTextBox;
