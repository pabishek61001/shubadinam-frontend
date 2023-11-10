import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Top10px from "./Top10px";
import Top20px from "./Top20px";
import ScrollToTop from "react-scroll-to-top";





const WhyUsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    // const Navigate = useNavigate()

    // const signOut = () => {
    //     localStorage.removeItem("isAuthenticated")
    //     localStorage.removeItem("email")
    //     // Navigate("/")
    // }

    // const logoBtn = () => {
    //     Navigate("/")
    // }
    return (
        <div>
            <div className="overall-container-whyus">
                <div className="overall-percent">
                    <ScrollToTop smooth/>
                    <HeaderComponent></HeaderComponent>
                    <Top10px />
                    <Top20px />
                    <div className="center-container-whyus">
                        

                        <h2>Why Us</h2>
                        <ol>

                            <h2 className="letters-color-subhead">Why Shubadinam.com?</h2>
                            <p className="letters-color-subhead1" >At Shubadinam, we're more than just a website. We're here to help you rediscover your roots and celebrate your Hindu identity. Imagine us as your guide on a journey to the ancient wisdom that's part of your heritage. </p>


                            <p className="letters-color-subhead1" >We're not only about dates. Shubadinam shows you the magic of Birth Star (Janma nakshatra)/Janma Tithi. It's like unlocking secrets of the stars on the day you were born. These cosmic constellations are a part of you, and we're here to help you celebrate your special day, your Janmadinam.</p>

                            <p className="letters-color-subhead1" >It's not just about the past, it's about making tradition a part of your daily life. We're a community that connects people who love their Hindu heritage. Join us at Shubadinam to celebrate who you are, learn about your roots and light up your unique cosmic spark.</p>


                        </ol>




                    
                    </div>
                    <Top20px/>
                    {/* <div className="empty-container-footer-whyus"> */}
                    <FooterComponent></FooterComponent>
                    {/* </div> */}
                </div>
            </div>
        </div>

    )
}

export default WhyUsPage;


// {/* <div className="container-header-whyus">
// <div className="wordpress">
//     <img className="logo-fit-header" src={require("../images/logo-1.png")} width="100%" height="100%" onClick={() => logoBtn()} />
// </div>
// <div className="headers">
//     <NavLink to="/home" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Home</NavLink>
//     <NavLink to="/about-us" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>About</NavLink>
//     <NavLink to="/faq" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>FAQ</NavLink>
//     <NavLink to="/contact" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Contact Us</NavLink>
// </div>
// <div className="login-out">
//     {/* <button className="signout-btn" onClick={() => signOut()}>Sign Out</button> */}
//     <NavLink to="/" onClick={() => signOut()}>Sign Out</NavLink>
// </div>
// </div>  */}