import PasswordTextBox from "./PasswordTextBox";
import PasswordOptions from "./PasswordOptions";
import { generatePassword } from "./utils/passwordUtil";
import { useState } from "react";

const PasswordContent = () => {
  const [options, setOptions] = useState({
    length: 12,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  })

  return (
    <div className="password-content">
      <PasswordTextBox generatePassword={generatePassword} options={options} />
      <PasswordOptions options={options} setOptions={setOptions} />
    </div>
  );
};

export default PasswordContent;
