import { Link } from "react-router-dom";
import './Header.css'
import { useContext } from "react";
import { AuthContext } from "../../context/UserContext";

const Header = () => {
    const {user,logOut} = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then( () =>{ })
        .catch(error => console.error(error))
    }

    return (
        <div className="navbar bg-primary text-primary-content">
            <Link to='/' className="btn btn-ghost text-neutral-50 font-bold normal-case text-xl">Awesome Auth</Link>
            <Link to='/' className="btn btn-ghost text-neutral-50 font-bold normal-case text-xl">Home</Link>
            <Link to='/orders' className="btn btn-ghost text-neutral-50 font-bold normal-case text-xl">Orders</Link>
            <Link to='/login' className="btn btn-ghost text-neutral-50 font-bold normal-case text-xl">Log in</Link>
            <Link to='/register' className="btn btn-ghost text-neutral-50 font-bold normal-case text-xl">Register</Link>
            {user?.email && <span className="text-neutral-50 font-light">welcome to -- {user.email}</span>}
            {
                user?.email ?
                    <button onClick={handleSignOut} className="btn uppercase font-bold btn-sm m-2">Log out</button>
                    : <Link to="/login" className="btn uppercase font-bold btn-sm">Log in</Link>
            }
        </div>
    );
};

export default Header;