import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const HeaderComponent = () => {

    const Navigate = useNavigate()

    const signOut = () => {
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("email")
        Navigate("/")
    }

    const logoBtn = () => {
        Navigate("/")
    }




    return (


        <div className="container-header">
            <div className="wordpress">
            <img className="logo-fit-header" src={require("../images/logo-1.png")} width="100%" height="100%" onClick={() => logoBtn()} />
            </div>
            <div className="headers">
                <NavLink to="/home" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>About</NavLink>
                <NavLink to="/faq" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>FAQ</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Contact Us</NavLink>
            </div>
            <div className="login-out">
                <button className="signout-btn" onClick={() => signOut()}>Sign Out</button>
            </div>
        </div>

    )
}
export default HeaderComponent;