import { Link } from "react-router-dom";
import "./style.css";
import CartIcon from "./components/cartIcon";
import { useState } from "react";
import Burger from "./components/burger";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div className={`navbar__container ${ open ? "navbar--open" : "" }`}>
            <Link to="/" className="navbar__logo"><h1>EBUY</h1></Link> 
            <Burger handleClick={handleClick} />
            <Link to="/register" className="navbar__register navbar__link">REGISTER</Link>
            <Link to="/login" className="navbar__login navbar__link">LOG IN</Link>
            <div className="navbar__cart"><CartIcon /></div>
        </div>
    )
}

export default Navbar;