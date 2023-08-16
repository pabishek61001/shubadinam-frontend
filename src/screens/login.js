import React, { useState, useEffect, useRef } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import FooterComponent from "../components/footer";
import HomeSignInComponent from "../components/home-signin";

import TestimonialScreen from "./testimonials";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';




const LoginScreen = () => {




    const clientId = "516265231821-9n4dbqkgm349bl3a76j75lgeu19vv71h.apps.googleusercontent.com"

    // const clientSecret = "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";

    const navigate = useNavigate();

    const sectionRef = useRef(null);


    const [offset, setOffset] = useState(0);
    const [inView, setInView] = useState(false);

    const handleScroll = () => {
        setOffset(window.scrollY);

        // Check if the content is in view
        const element = document.querySelector('.parallax-content');
        if (element) {
            const rect = element.getBoundingClientRect();
            setInView(rect.top < window.innerHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const [backendError, SetBackendError] = useState([])


    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [flag, SetFlag] = useState(false)
    const [name, SetName] = useState("")

    const [dynamicInput, DynamicInputFunction] = useState({
        userEmail: "",
        userPassword: "",
        userPhone: "",
    })

    const [errorForm, ErrorFormFunction] = useState({
        userEmail: false,
        userPassword: false,
        userPhone: false
    })

    const [eyeIcon, UpdateEyeIcon] = useState(true)

    const eyeOpenClose = (icon) => {
        UpdateEyeIcon(icon)
    }

    const inputHandle = (event) => {
        DynamicInputFunction({ ...dynamicInput, [event.target.name]: event.target.value })
        setEmail(dynamicInput.userEmail)
    }

    const onSuccess = (response) => {
        // SetName(response.profileObj);
        console.log("success", response);
        SetFlag(true)
    }

    const onFailure = (err) => {
        console.log(err);
    }


    const handleMultipleClicks = () => {
        scrollToSection()
        togglePopup()
    };





    const clickSubmit = () => {

        const stringifyUserInfo = JSON.stringify(dynamicInput);
        localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
        localStorage.setItem("email", dynamicInput.userEmail);
        console.log(dynamicInput)

        const link = "http://localhost:4000/upload/mailpass"
        axios.post(link, dynamicInput)
            .then((response) => {
                if (response.data.errors) {
                    SetBackendError(response.data.errors)
                    alert(response.data.errors[0].msg)
                } else {
                    SetBackendError([])     
                    alert(response.data)

                }
            })
            .catch((error) => {
                console.log(error);
                alert(error.response.data)
            });

        ErrorFormFunction({
            ...errorForm,
            userEmail: dynamicInput.userEmail === "" ? true : false,
            userPassword: dynamicInput.userPassword === "" ? true : false,
            userPhone: dynamicInput.userPhone === "" ? true : false
        })
    }


    const clickSubmitbtn = () => {
        console.log(dynamicInput);

        const link = "http://localhost:4000/logged/user"
        axios.post(link, dynamicInput)
            .then((response) => {
                // console.log(response.data);
                if (response.data.errors) {
                    SetBackendError(response.data.errors)
                    alert(response.data.errors[0].msg)
                } else {
                    SetBackendError([])
                    if (response.data.success === "Success") {
                        navigate("/home");

                        console.log(response.data);
                        const stringifyUserInfo = JSON.stringify(dynamicInput);
                        localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
                        localStorage.setItem("email", dynamicInput.userEmail);



                    } else {
                        alert("No records existed")
                    }
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            });
    }





    const boxLink = (pageNumber) => {

        if (pageNumber === 1) {
            navigate("/box1")
        }
        else if (pageNumber === 2) {
            navigate("/box2")
        }
        else if (pageNumber === 3) {
            navigate("/box3")
        }
        else if (pageNumber === 4) {
            navigate("/box4")
        }
        else if (pageNumber === 5) {
            navigate("/box5")
        }
        else if (pageNumber === 6) {
            navigate("/box6")
        }

    }


    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };





    return (
        <div className="overall-container">
            <div className="overall-percent">
                <div className="heading">
                    <div className="logo">
                        <img className="logo-fit" src={require("../images/logo-1.png")} width="100%" height="100%" />
                    </div>
                    <div className="centre-space">
                    </div>
                    <div className="signin-login">
                        <div className="semi-space-reg">
                            <NavLink className="reg-btn" onClick={() => scrollToSection()}>Register</NavLink>
                        </div >
                        <div className="semi-space-login">
                            {/* <HomeSignInComponent></HomeSignInComponent> */}
                            <div className="popup-container">
                                <NavLink className="reg-btn open-btn" onClick={handleMultipleClicks}>Sign In</NavLink>

                                {isOpen && (
                                    <div className="popup">
                                        <div className="popup-content">
                                            <h2 className="letters-color-header">Sign In</h2>
                                            <p>...</p>

                                            <div className="email-pass-cnt">
                                                <div className="email-input-popup">
                                                    <input className="input-font" type="email" name="userEmail" onChange={inputHandle} placeholder="Email" />


                                                    {errorForm.userEmail && <p className="error-text">This input field is mandatory</p>}

                                                </div>
                                                <div className="password-input-style-popup">
                                                    <input className="input-font" type={eyeIcon ? "password" : "text"} name="userPassword" onChange={inputHandle} placeholder="Password" />
                                                </div>
                                            </div>
                                            <div className="show-password">
                                                <button className="eye-btn">{
                                                    eyeIcon ?
                                                        <img src="https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png" onClick={() => eyeOpenClose(false)} width="20px" height="20px" />
                                                        :
                                                        <img src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png" onClick={() => eyeOpenClose(true)} width="20px" height="20px" />
                                                }</button><label className="letters-color-showpassword">Show Password</label>

                                            </div>



                                            {errorForm.userPassword && <p className="error-text">This input field is mandatory</p>}


                                            <div className="sumbit-button">
                                                <button className="sumbit-font login-sub-button" onClick={() => clickSubmitbtn()} disabled={
                                                    dynamicInput.userEmail.length === 0 ||
                                                    dynamicInput.userPassword.length === 0
                                                }>sumbit</button>
                                            </div>
                                            <button className="close-btn" onClick={togglePopup}> Close </button>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="double-container-banner">

                    <div className="parallax-container">
                        {/* Background image */}
                        <div
                            className="parallax-background"
                            style={{
                                transform: `translateY(${offset * 0.5}px)`,
                            }}
                        />

                        {/* Content */}
                        <div
                            className={`parallax-content ${inView ? 'in-view' : ''}`}
                        >
                            <h2>Welcome to Janmadinam</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                                ullamcorper nisl, et venenatis sem. Duis id tristique risus. Aenean
                                at volutpat ipsum. Fusce nec diam vel justo pellentesque vulputate.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="double-container-signup" ref={sectionRef}>
                    <div className="container-two">
                        <div className="login-box" >

                            <div className="login-heading" >
                                <h2 className="acc-ajst letters-color-acc" >Create your Janmadinam account</h2>
                            </div>
                            <div className="google-login">
                                {
                                    flag ? (
                                        navigate("/signup")
                                    ) : (
                                        <GoogleOAuthProvider clientId="516265231821-9n4dbqkgm349bl3a76j75lgeu19vv71h.apps.googleusercontent.com">
                                            <GoogleLogin
                                                clientId={clientId}
                                                onSuccess={onSuccess}
                                                onFailure={onFailure}
                                                buttonText="google login"
                                                cookiePolicy={"single-host-origin"}
                                                isSignedIn={false}
                                            /></GoogleOAuthProvider>
                                    )
                                }

                            </div>
                            <div className="small-gap">or</div>
                            {/* <div className="email-heading letters-color"></div> */}

                            <div className="email-pass-cnt">

                                <div className="email-input">

                                    <input className="input-font" type="email" name="userEmail" onChange={inputHandle} placeholder="Email" />
                                    {/* <div className="img-hider"></div> */}


                                    {errorForm.userEmail && <p className="error-text">This input field is mandatory</p>}

                                </div>
                                <div className="phone-input">
                                    <input className="input-font" type="text" name="userPhone" onChange={inputHandle} placeholder="Phone Number" />
                                    {/* <div className="img-hider"></div> */}


                                    {errorForm.userPhone && <p className="error-text">This input field is mandatory</p>}

                                </div>
                                {/* <div className="password-heading letters-color"></div> */}
                                <div className="password-input-style">
                                    <input className="input-font" type={eyeIcon ? "password" : "text"} name="userPassword" onChange={inputHandle} placeholder="Password" />
                                </div>

                            </div>

                            <div className="show-password">
                                <button className="eye-btn">{
                                    eyeIcon ?
                                        <img src="https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png" onClick={() => eyeOpenClose(false)} width="20px" height="20px" />
                                        :
                                        <img src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png" onClick={() => eyeOpenClose(true)} width="20px" height="20px" />
                                }</button><label className="letters-color-showpassword">Show Password</label>

                            </div>



                            {errorForm.userPassword && <p className="error-text">This input field is mandatory</p>}


                            <div className="sumbit-button">
                                <button type="submit" className="sumbit-font login-sub-button" onClick={() => clickSubmit()} disabled={
                                    dynamicInput.userEmail.length === 0 ||
                                    dynamicInput.userPassword.length === 0 ||
                                    dynamicInput.userPhone.length === 0
                                }>sumbit</button>

                            </div>

                            <div className="new-signup">
                                <div className="new-here letters-color-newhere">Already have an account ?</div>
                                <div className="sign-up">
                                    <HomeSignInComponent></HomeSignInComponent>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <TestimonialScreen/> */}



                <div className="double-container-boxes">
                    <div className="boxes1 zoom-container zoom-container img zoom-container:hover img">
                        <img src={require("../images/box1.webp")} width="100%" height="100%" onClick={() => boxLink(1)} />
                        <div className="centered-text" onClick={() => boxLink(1)}>NAKSHATRA</div>
                    </div>
                    <div className="boxes2 zoom-container zoom-container img zoom-container:hover img">
                        <img src={require("../images/box2.webp")} width="100%" height="100%" onClick={() => boxLink(2)} />
                        <div className="centered-text" onClick={() => boxLink(1)}>NAKSHATRA</div>
                    </div>
                    <div className="boxes3 zoom-container zoom-container img zoom-container:hover img">
                        <img src={require("../images/box1.webp")} width="100%" height="100%" onClick={() => boxLink(3)} />
                        <div className="centered-text" onClick={() => boxLink(1)}>NAKSHATRA</div>
                    </div>
                    <div className="boxes4 zoom-container zoom-container img zoom-container:hover img">
                        <img src={require("../images/box2.webp")} width="100%" height="100%" onClick={() => boxLink(4)} />
                        <div className="centered-text" onClick={() => boxLink(1)}>NAKSHATRA</div>
                    </div>
                    <div className="boxes5 zoom-container zoom-container img zoom-container:hover img">
                        <img src={require("../images/box1.webp")} width="100%" height="100%" onClick={() => boxLink(5)} />
                        <div className="centered-text" onClick={() => boxLink(1)}>NAKSHATRA</div>
                    </div>
                    <div className="boxes6 zoom-container zoom-container img zoom-container:hover img">
                        <img src={require("../images/box2.webp")} width="100%" height="100%" onClick={() => boxLink(6)} />
                        <div className="centered-text" onClick={() => boxLink(1)}>NAKSHATRA</div>
                    </div>

                </div>
                <div className="empty-container">
                    <div>
                        <FooterComponent></FooterComponent>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default LoginScreen;