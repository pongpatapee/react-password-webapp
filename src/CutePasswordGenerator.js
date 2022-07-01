import Navbar from "./Navbar";
import PasswordTextBox from "./PasswordTextBox";
import { generateCutePassword } from "./utils/passwordUtil";

const CutePasswordGenerator = () => {
    return (
        <div className="cute-password-generator">
            <Navbar />
            <div className="cute-password-content">
                <h2>Generate a cute password!</h2>
                <br />
                <PasswordTextBox generatePassword={generateCutePassword} options={{cute: true}} />
            </div>
        </div>
    );
}
 
export default CutePasswordGenerator;