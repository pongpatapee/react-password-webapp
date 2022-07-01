import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Password Generator</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/CutePasswordGenerator">Cute Password Generator</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;