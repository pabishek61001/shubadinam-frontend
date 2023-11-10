import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Hamburger from 'hamburger-react';


const HeaderComponent = () => {

    const Navigate = useNavigate()

    const signOut = () => {
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("fkey")
        // localStorage.clear()
        // Navigate("/")
    }

    const logoBtn = () => {
        Navigate("/")
    }


    // MENU BAR

    const [isOpenMenu, setOpenMenu] = useState(false);



    return (


        <div className="container-header">

            {/* <div className="container-1"> */}



                <div className={`menu-bar-container ${isOpenMenu ? 'open' : ''}`}>
                    <Hamburger toggled={isOpenMenu} toggle={setOpenMenu}>

                    </Hamburger>

                    {isOpenMenu && (

                        <div className="menu-bar-cnt">

                            <div className="menu-bar-items" data-aos="fade-up">
                                <NavLink to="/home" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>Home</NavLink>
                            </div>
                            <div className="menu-bar-items" data-aos="fade-up">
                                <NavLink to="/about-us" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>About Us</NavLink>
                            </div>


                            <div className="dropdown menu-bar-items">
                            <NavLink to="/blogs"> <button className="dropbtn">Blogs</button></NavLink>
                                <div className="dropdown-content">
                                    <NavLink to="/nakshatra-foods">1. Nakshatra Food</NavLink>
                                    <NavLink to="/nakshatra-characteristics">2. Nakshatra Characteristics</NavLink>
                                    <NavLink to="/nakshatra-deities">3. Nakshatra Deity</NavLink>
                                    <NavLink to="/nakshatra-likes-dislikes">4. Nakshatra Likes and Dislikes</NavLink>
                                    <NavLink to="/tithi-foods">5. Tithi Food</NavLink>
                                    <NavLink to="/tithi-characteristics">6. Tithi Characteristics</NavLink>
                                    <NavLink to="/tithi-deities">7. Tithi Deity</NavLink>
                                    <NavLink to="/tithi-likes-dislikes">8. Tithi Likes and Dislikes</NavLink>
                                    <NavLink to="/meanings-of-janma-nakshatra">9. Meanings of Janma Nakshatra</NavLink>
                                </div>
                            </div>

                            <div className="menu-bar-items" data-aos="fade-up">
                                <NavLink to="/faq" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>FAQ</NavLink>
                            </div>

                            <div className="menu-bar-items" data-aos="fade-up">
                                <NavLink to="/" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>Sign Up</NavLink>
                            </div>
                            <div className="menu-bar-items">
                                <NavLink to="/" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>Sign In</NavLink>
                            </div>


                        </div>
                    )}
                </div>



                <div className="wordpress" onContextMenu={(e) => e.preventDefault()}>
                    <img className="logo-fit-header" src={require("../images/New Shubadinam Logo/Shubadinam White.png")} width="100%" height="100%" onClick={() => logoBtn()} />
                </div>

                <div className="headers">
                    <NavLink to="/home" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Home</NavLink>
                    <NavLink to="/about-us" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>About Us</NavLink>


                    <div className="dropdown">
                       <NavLink to="/blogs"> <button className="dropbtn">Blogs</button></NavLink>
                        <div className="dropdown-content">
                            <NavLink to="/nakshatra-foods">1. Nakshatra Food</NavLink>
                            <NavLink to="/nakshatra-characteristics">2. Nakshatra Characteristics</NavLink>
                            <NavLink to="/nakshatra-deities">3. Nakshatra Deity</NavLink>
                            <NavLink to="/nakshatra-likes-dislikes">4. Nakshatra Likes and Dislikes</NavLink>
                            <NavLink to="/tithi-foods">5. Tithi Food</NavLink>
                            <NavLink to="/tithi-characteristics">6. Tithi Characteristics</NavLink>
                            <NavLink to="/tithi-deities">7. Tithi Deity</NavLink>
                            <NavLink to="/tithi-likes-dislikes">8. Tithi Likes and Dislikes</NavLink>
                            <NavLink to="/meanings-of-janma-nakshatra">9. Meanings of Janma Nakshatra</NavLink>
                        </div>
                    </div>


                    <NavLink to="/faq" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>FAQ</NavLink>
                    {/* <NavLink to="/contact" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Contact Us</NavLink> */}
                </div>


                <div className="login-out">

                    {/* instead of signout there is a change - login */}
                    <NavLink to="/" className={({ isActive }) => isActive ? "link hightlight-link" : "link-login"}>Sign Up</NavLink>
                </div>




            {/* </div> */}

            
            {/* <div className="container-2">

            </div> */}

        </div >
    )
}
export default HeaderComponent;