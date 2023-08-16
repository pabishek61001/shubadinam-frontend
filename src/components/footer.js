import React from "react";
import { NavLink } from "react-router-dom";

const FooterComponent = () => {
    return (
        <div>

            <div className="footer-copyright">
                <h5 className="copyright-style">Copyright © 2023 janmadinam.in. All Rights Reserved</h5>
            </div>
            <div className="footer-link">
                <NavLink to="/" className={({isActive}) => isActive ? "link hightlight-link" : "link" }>Login</NavLink>
                <NavLink to="/termsandconditions" className={({isActive}) => isActive ? "link hightlight-link" : "link" }>Terms and Conditions</NavLink>
                <NavLink to="/privacypolicy" className={({isActive}) => isActive ? "link hightlight-link" : "link" }>Privacy Policy</NavLink>

            </div>

        </div>
    )
}
export default FooterComponent;