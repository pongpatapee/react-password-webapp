import { useState } from "react";

const PasswordOptions = ({ options, setOptions }) => {
  const [passwordLength, setPasswordLength] = useState(12);
  const passwordOptions = { ...options };

  const handleChange = (e) => {
    console.log(`password length ${e.target.value}`);
    setPasswordLength(e.target.value);
    passwordOptions.length = e.target.value
    setOptions(passwordOptions);
  };

  const handleCheckBox = (e) => {
    let option = e.target.value;
    passwordOptions[option] = e.target.checked;
    setOptions(passwordOptions);
    console.log(passwordOptions);
  };

  return (
    <div className="password-options">
      <h2>Customize Password!</h2>

      <div className="pass-option-container">
        <div className="pass-length">
          <p>Password length</p>
          <div className="pass-length-inputs">
            <input
              type="number"
              id="passwordlength"
              value={passwordLength}
              min={1}
              max={50}
              onChange={handleChange}
            />
            <input
              type="range"
              id="passwordlength-slider"
              value={passwordLength}
              min={1}
              max={50}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="pass-char-options">
          <ul>
            <li>
              <input
                type="checkbox"
                id="Upper"
                value="uppercase"
                onChange={handleCheckBox}
                defaultChecked="true"
              />
              <label htmlFor="Upper">Uppercase</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="Lower"
                value="lowercase"
                onChange={handleCheckBox}
                defaultChecked="true"
              />
              <label htmlFor="Lower">Lowercase</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="Number"
                value="numbers"
                onChange={handleCheckBox}
                defaultChecked="true"
              />
              <label htmlFor="Number">Numbers</label>
            </li>
            <li>
              <input
                type="checkbox"
                id="Symbol"
                value="symbols"
                onChange={handleCheckBox}
                defaultChecked="true"
              />
              <label htmlFor="Symbol">Symbols</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

//https://stackoverflow.com/questions/57967579/input-range-slider-as-react-hook-does-not-slide

export default PasswordOptions;
