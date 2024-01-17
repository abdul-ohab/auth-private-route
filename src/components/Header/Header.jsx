import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="navbar bg-primary text-primary-content">
            <button className="btn btn-ghost text-xl">daisyUI</button>
            <Link to='/'>Home</Link>
            <Link to='/login'>Log in</Link>
            <Link to='/register'>Register</Link>
        </div>
    );
};

export default Header;