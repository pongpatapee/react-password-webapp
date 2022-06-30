import { useState } from "react";
import generatePassword from "./utils/passwordUtil";

const PasswordTextBox = ({ options }) => {
  const [password, setPassword] = useState("");
  const handleText = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="password-text-box">
      <input type="text" id="passwordvalue" onChange={handleText} value={password} />
      <button onClick={() => {
        setPassword(generatePassword(options))

      }}>Generate</button>

      <button
        onClick={() => {
          navigator.clipboard.writeText(password);
        }}
      >
        Copy
      </button>
    </div>
  );
};

export default PasswordTextBox;
