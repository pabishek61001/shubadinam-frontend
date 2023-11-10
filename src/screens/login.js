import React, { useState, useEffect, useRef } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, fa1, fa2, fa3, faUser, faL } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { } from "@fortawesome/fontawesome-free"

import ScrollToTop from "react-scroll-to-top";
import { motion } from "framer-motion"

import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import FooterComponent from "../components/footer";
import HomeSignInComponent from "../components/home-signin";
import TestimonialScreen from "./testimonials";
import Swal from 'sweetalert2';
// import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import LanguageSwitcher from "./LanguageSwitcher";
import MenuBar from "./menubar";
import Hamburger from 'hamburger-react';
import Blogs from "./blogs";
import Coverflow from "./Coverflow";
import CenteredSlider from "./CenteredSlider";





AOS.init({
    duration: 1000, // Notice the single quotes around '2s'
});



const LoginScreen = () => {

    useEffect(() => {
        AOS.refresh();
    }, []);


    const [signupcontent, SetSignupContent] = useState(false)



    const clientId = "516265231821-9n4dbqkgm349bl3a76j75lgeu19vv71h.apps.googleusercontent.com"

    // const clientSecret = "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";

    const navigate = useNavigate();

    const sectionRef = useRef(null);

    const howitworks = useRef(null)


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



    



    const [isSubmitClicked, setIsSubmitClicked] = useState(false);




    const clickSubmit = () => {

        if (!isSubmitClicked) {
            setIsSubmitClicked(true);

            const link = "https://backend.shubadinam.com/upload/mailpass"
            axios.post(link, dynamicInput)
                .then((response) => {
    
    
                    const loggingUser = response.data.data2;
                    const loggingRelation = response.data.data1;
    
                    if (response.data.errors) {
                        SetBackendError(response.data.errors)
    
                        const invalidmailPass = response.data.errors[0].msg
                        console.log(invalidmailPass)
    
                        Swal.fire({
                            title: 'Invalid',
                            text: invalidmailPass,
                            icon: 'error',
                            confirmButtonText: 'Got it!', // Change the confirm button text
                            confirmButtonColor: '#3085d6', // Change the confirm button color
                            background: '#f5f5f5', // Change the background color
                            customClass: {
                                container: 'my-custom-container-class', // Add a custom container class
                                title: 'my-custom-title-class', // Add a custom title class
                                content: 'my-custom-content-class', // Add a custom content class
                                confirmButton: 'my-custom-confirm-button-class' // Add a custom confirm button class
                            },
                        });
    
    
    
    
                    } else {
                        SetBackendError([])
                        const verifySuccess = response.data.success
                        // console.log(verifySuccess)
                        Swal.fire({
                            title: 'Email Verification',
                            text: verifySuccess,
                            icon: 'success',
                            confirmButtonText: 'Got it!', // Change the confirm button text
                            confirmButtonColor: '#3085d6', // Change the confirm button color
                            background: '#f5f5f5', // Change the background color
                            customClass: {
                                container: 'my-custom-container-class', // Add a custom container class
                                title: 'my-custom-title-class', // Add a custom title class
                                content: 'my-custom-content-class', // Add a custom content class
                                confirmButton: 'my-custom-confirm-button-class' // Add a custom confirm button class
                            },
                        });
                        const stringifyUserInfo = JSON.stringify(dynamicInput);
                        // localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
                        const stringifyForeignKey = JSON.stringify(dynamicInput.userEmail);
                        // localStorage.setItem("fkey", btoa(stringifyForeignKey));
                        console.log(dynamicInput)
    
                        console.log(loggingUser);
                        console.log(loggingRelation);
                        localStorage.setItem('myDataKey', JSON.stringify(loggingRelation));
                        localStorage.setItem('myDataKey2', JSON.stringify(loggingUser));
    
                        // window.location.reload();
    
                    }

                    setIsSubmitClicked(false);
               
                })
                .catch((error) => {
                    console.log(error);
    
    
                    if (error.message === "Network Error") {
                        // const msg1 = error.response.data.message
                        Swal.fire({
                            title: 'Under Maintanance',
                            text: 'Please login after sometime!',
                            icon: 'warning',
                            confirmButtonText: 'Ok',
                        })
                    } else {
                        const userExist = error.response.data
    
                        Swal.fire({
                            title: 'Invalid User',
                            text: userExist,
                            icon: 'warning',
                            confirmButtonText: 'Ok', // Change the confirm button text
                            confirmButtonColor: '#3085d6', // Change the confirm button color
                            background: '#f5f5f5', // Change the background color
                            customClass: {
                                container: 'my-custom-container-class', // Add a custom container class
                                title: 'my-custom-title-class', // Add a custom title class
                                content: 'my-custom-content-class', // Add a custom content class
                                confirmButton: 'my-custom-confirm-button-class' // Add a custom confirm button class
                            },
                        });
                    }
    
                    setIsSubmitClicked(false);
    
                    // alert(error.response.data)
                });

        }

        // const stringifyUserInfo = JSON.stringify(dynamicInput);
        // localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
        // localStorage.setItem("email", dynamicInput.userEmail);
        // console.log(dynamicInput)

       

        ErrorFormFunction({
            ...errorForm,
            userEmail: dynamicInput.userEmail === "" ? true : false,
            userPassword: dynamicInput.userPassword === "" ? true : false,
            userPhone: dynamicInput.userPhone === "" ? true : false
        })
    }


    const clickSubmitbtn = () => {
        console.log(dynamicInput);

        const link = "https://backend.shubadinam.com/logged/user"
        axios.post(link, dynamicInput)
            .then((response) => {
                const loggingUser = response.data.data2;
                const loggingRelation = response.data.data1;

                // console.log(response.data);
                if (response.data.errors) {
                    SetBackendError(response.data.errors)


                    const invalidmailPass = response.data.errors[0].msg
                    console.log(invalidmailPass)

                    Swal.fire({
                        title: 'Invalid',
                        text: invalidmailPass,
                        icon: 'error',
                        confirmButtonText: 'Got it!', // Change the confirm button text
                        confirmButtonColor: '#3085d6', // Change the confirm button color
                        background: '#f5f5f5', // Change the background color
                        customClass: {
                            container: 'my-custom-container-class', // Add a custom container class
                            title: 'my-custom-title-class', // Add a custom title class
                            content: 'my-custom-content-class', // Add a custom content class
                            confirmButton: 'my-custom-confirm-button-class' // Add a custom confirm button class
                        },
                    });

                    // alert(response.data.errors[0].msg)




                } else {
                    SetBackendError([])
                    if (response.data.success === "Success") {


                        const stringifyUserInfo = JSON.stringify(dynamicInput);
                        localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
                        // localStorage.setItem("email", dynamicInput.userEmail);
                        const stringifyForeignKey = JSON.stringify(dynamicInput.userEmail);
                        localStorage.setItem("fkey", btoa(stringifyForeignKey));

                        console.log(loggingUser);
                        console.log(loggingRelation);
                        localStorage.setItem('myDataKey', JSON.stringify(loggingRelation));
                        localStorage.setItem('myDataKey2', JSON.stringify(loggingUser));

                        window.location.reload();

                        navigate("/home");

                        console.log(response.data);




                    } else {
                        console.log(response.data);
                        alert("No records existed")
                    }
                }
            })
            .catch((error) => {

                const noRecords = error.response.data.message;
                const wrongpass = error.response.data.message;

                console.error('Error:', error)

                if (error.response.data.norecords === "Failure") {
                    Swal.fire({
                        title: 'Invalid',
                        // text: "We are currently unavailable.Please try again after sometime.",
                        // text: "No records existed.Please Sign up/Log in after sometime."    backendstop: "backend stop",
                        text: noRecords,
                        icon: 'warning',
                        confirmButtonText: 'Got it!', // Change the confirm button text
                        confirmButtonColor: '#3085d6', // Change the confirm button color
                        background: '#f5f5f5', // Change the background color
                        customClass: {
                            container: 'my-custom-container-class', // Add a custom container class
                            title: 'my-custom-title-class', // Add a custom title class
                            content: 'my-custom-content-class', // Add a custom content class
                            confirmButton: 'my-custom-confirm-button-class' // Add a custom confirm button class
                        },
                    });
                }
                else if (error.response.data.passfailure === "Failure") {

                    Swal.fire({
                        title: 'Invalid',
                        // text: "We are currently unavailable.Please try again after sometime.",
                        // text: "No records existed.Please Sign up/Log in after sometime."    backendstop: "backend stop",
                        text: wrongpass,
                        icon: 'warning',
                        confirmButtonText: 'Got it!', // Change the confirm button text
                        confirmButtonColor: '#3085d6', // Change the confirm button color
                        background: '#f5f5f5', // Change the background color
                        customClass: {
                            container: 'my-custom-container-class', // Add a custom container class
                            title: 'my-custom-title-class', // Add a custom title class
                            content: 'my-custom-content-class', // Add a custom content class
                            confirmButton: 'my-custom-confirm-button-class' // Add a custom confirm button class
                        },
                    });
                }
                else {
                    Swal.fire({
                        title: 'Invalid',
                        text: "We are currently unavailable.Please Sign up/Log in after sometime.",
                        icon: 'warning',
                        confirmButtonText: 'Got it!', // Change the confirm button text
                        confirmButtonColor: '#3085d6', // Change the confirm button color
                        background: '#f5f5f5', // Change the background color
                        customClass: {
                            container: 'my-custom-container-class', // Add a custom container class
                            title: 'my-custom-title-class', // Add a custom title class
                            content: 'my-custom-content-class', // Add a custom content class
                            confirmButton: 'my-custom-confirm-button-class' // Add a custom confirm button class
                        },
                    });
                }
            });
    }


    // const boxLink = (pageNumber) => {

    //     if (pageNumber === 1) {
    //         navigate("/nakshatra-foods")
    //     }
    //     else if (pageNumber === 2) {
    //         navigate("/nakshatra-characteristics")
    //     }
    //     else if (pageNumber === 3) {
    //         navigate("/nakshatra-deities")
    //     }
    //     else if (pageNumber === 4) {
    //         navigate("/nakshatra-likes-dislikes")
    //     }
    //     else if (pageNumber === 5) {
    //         navigate("/tithi-foods")
    //     }
    //     else if (pageNumber === 6) {
    //         navigate("/tithi-characteristics")
    //     }
    //     else if (pageNumber === 7) {
    //         navigate("/tithi-deities")
    //     }
    //     else if (pageNumber === 8) {
    //         navigate("/tithi-likes-dislikes")
    //     }

    // }


    const handleMultipleClicks = () => {
        scrollToSection()
        togglePopup()

    }

    const scrollToSection = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false)
            SetSignupContent(true)
            setOpenMenu(false)
        }
    };
    const siginbackReg = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(true)
            SetSignupContent(false)
            setOpenMenu(false)

        }
    };

    const clickHow = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            SetSignupContent(false)
            setIsOpen(false)
        }
    };

    const clickSignparallax = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            SetSignupContent(true)
        }

    };



    const [isOpen, setIsOpen] = useState(false);
    const [scrollThresholdPercentage, setScrollThresholdPercentage] = useState(10); // 10% initial threshold


    const togglePopup = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(!isOpen);
        }
        // setIsOpen(!isOpen);
    };

    // const handleMouseLeave = () => {
    //     setIsOpen(false); // Set dynamic variable to false on mouse leave
    // };

    useEffect(() => {
        const handleScrollfade = () => {
            // Calculate the scroll position threshold based on screen width
            const screenWidth = window.innerWidth;
            let scrollThreshold;

            if (screenWidth > 1300) {
                // For screens wider than 1300px, set a different threshold
                scrollThreshold = 3000;
            } else {
                // For screens 1300px or narrower, use a different threshold
                scrollThreshold = 2000; // You can adjust this value
            }

            if (window.scrollY > scrollThreshold) {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScrollfade);

        return () => {
            window.removeEventListener('scroll', handleScrollfade);
        };
    }, []);





    // /////////////COUNT DOWN and CELEBRATION EFFECT//////////////////

    const [inAugrate, SetInAugrate] = useState(true) // **********important dont forget to change this false to activate inaugrate

    const [countdown, setCountdown] = useState(5);

    const [celebrate, setCelebrate] = useState(false);



    const startCountdown = () => {
        if (countdown > 0) {
            startCountdownRecursive(countdown);
        }
    };

    const startCountdownRecursive = (currentCount) => {
        if (currentCount > 0) {
            const countdownTimeout = setTimeout(() => {
                setCountdown(currentCount - 1);
                startCountdownRecursive(currentCount - 1);
            }, 1000);
        } else {
            SetInAugrate(true)
            localStorage.setItem("inaugrated", "true")
            localStorage.setItem("celebration", "true")

            const celebrationKey = localStorage.getItem('celebration'); // Replace with your specific key

            if (celebrationKey) {
                // If the key is found in local storage, trigger the celebration
                setCelebrate(true);

                // Remove the key from local storage after 4 seconds
                setTimeout(() => {
                    localStorage.removeItem('celebration'); // Replace with your specific key
                    setCelebrate(false);
                }, 4000);
            }
        }
    }

    useEffect(() => {
        if (localStorage.getItem("inaugrated")) {
            SetInAugrate(true)
        }
        window.scrollTo(0, 0); // Scroll to the top when component mounts

    }, [])

    // ///////////////////COUNT DOWN END and CEKEBRATION EFFECT END//////////////


    // MENU BAR

    const [isOpenMenu, setOpenMenu] = useState(false);


    // ENTER BUTTON

    const formRef = useRef(null);
    
    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isSubmitClicked) {
          e.preventDefault(); // Prevent form submission
          // Trigger the submit button click
          formRef.current.querySelector('.sumbit-font').click();
        }
      };







    return (
        <div className="overall-container">
            <ScrollToTop smooth />

            {celebrate && (
                <div className="celebration-background">
                    <Confetti
                        width={window.innerWidth}
                        height={window.innerHeight}
                        colors={['#F44336', '#2196F3', '#FFEB3B', '#4CAF50', '#9C27B0']} // Customize colors
                    />
                </div>
            )}

            {/* to get the normail application delete the starred parts(***) */}

            {/* inaugration start*/}
            {
                inAugrate ?// ***

                    //    main content start 
                    <div className="overall-percent">
                        <div className="heading ">

                            {/* <MenuBar></MenuBar> */}

                            {/* MENU BAR CONDITION */}

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
                                        <div className="menu-bar-items" data-aos="fade-up">
                                            <NavLink to="/faq" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>FAQ</NavLink>
                                        </div>
                                        <div className="menu-bar-items" data-aos="fade-up">
                                            <label className="reg-btn-menu" onClick={() => scrollToSection()}>Sign Up</label>
                                        </div>
                                        <div className="menu-bar-items">
                                            <label className="reg-btn-menu open-btn" onClick={() => siginbackReg()}>Sign In</label>
                                        </div>

                                    </div>
                                )}
                            </div>


                            {/* <nav class="navbar fixed-top navbar-light bg-light"> */}

                            {/* <a class="navbar-brand" href="#">Fixed top</a> */}

                            <div className="logo">
                                <img className="logo-fit" src={require("../images/New Shubadinam Logo/Shubadinam White.png")} width="100%" height="100%" onContextMenu={(e) => e.preventDefault()} />
                            </div>

                            <div className="centre-space">




                            </div>
                            <div className="signin-login">

                                <div className="semi-space-reg" data-aos="slide-right">
                                    <NavLink className="reg-btn" onClick={() => scrollToSection()}>Sign Up</NavLink>
                                </div >


                                <div className="semi-space-login">
                                    <div className="popup-container">


                                        <label className="reg-btn open-btn" onClick={() => siginbackReg()}> Sign In</label>
                                        {/* <FontAwesomeIcon icon={faUser} /> */}


                                        {isOpen && (

                                            <div className="popup">
                                                <div className="popup-content" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
                                                    <h2 className="letters-color-signin">Sign In</h2>
                                                    <div className="logo-signin">
                                                        <img className="logo-signin-img" src={require("../images/New Shubadinam Logo/Shubadinam Blue.png")} />
                                                    </div>

                                                    <div className="email-pass-cnt">
                                                        <div className="email-input-popup">
                                                            <input className="input-font" type="email" name="userEmail" onChange={inputHandle} placeholder="Email" />


                                                            {errorForm.userEmail && <p className="error-text">This input field is mandatory</p>}

                                                        </div>
                                                        <div className="password-input-style-popup">
                                                            <input className="input-font-pass" type={eyeIcon ? "password" : "text"} name="userPassword" onChange={inputHandle} placeholder="Password" />
                                                            <button className="eye-btn eye-container" onClick={() => eyeOpenClose(!eyeIcon)}>
                                                                {
                                                                    eyeIcon ?
                                                                        <img src="https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png" onClick={() => eyeOpenClose(false)} width="20px" height="20px" />
                                                                        :
                                                                        <img src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png" onClick={() => eyeOpenClose(true)} width="20px" height="20px" />
                                                                }
                                                            </button>
                                                        </div>
                                                        {/* <div className="password-input-style-popup">
                                                            <input className="input-font" type={eyeIcon ? "password" : "text"} name="userPassword" onChange={inputHandle} placeholder="Password" />
                                                        </div> */}
                                                    </div>
                                                    {/* <div className="show-password">
                                                        <button className="eye-btn">{
                                                            eyeIcon ?
                                                                <img src="https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png" onClick={() => eyeOpenClose(false)} width="20px" height="20px" />
                                                                :
                                                                <img src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png" onClick={() => eyeOpenClose(true)} width="20px" height="20px" />
                                                        }</button><label className="letters-color-showpassword">Show Password</label>

                                                    </div> */}

                                                    <div className="forgot-password">
                                                        <NavLink to="/forgotpassword">
                                                            <label className="letters-color-forgotpassword">Forget Password ?</label>
                                                        </NavLink>
                                                    </div>



                                                    {errorForm.userPassword && <p className="error-text">This input field is mandatory</p>}


                                                    <div className="sumbit-button">
                                                        <button className="sumbit-font login-sub-button" onClick={() => clickSubmitbtn()} disabled={
                                                            dynamicInput.userEmail.length === 0 ||
                                                            dynamicInput.userPassword.length === 0
                                                        }>Submit</button>
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
                            <div className="home-img">
                                <img src={require("../images/bp.png")} onContextMenu={(e) => e.preventDefault()} className="overlay-image" />
                                <img src={require("../images/t8.jpg")} onContextMenu={(e) => e.preventDefault()} className="bg-template" />

                                <div className="text-overlay">
                                    <p className="text-design">Never Miss Out the <span style={{ color: '#05195e', fontFamily: 'sans-serif' }}> Best Birthday of  Your Loved Ones</span></p>
                                    <p className="text-design2">Get Reminders of Janma Nakshatra / Janma Tithi as per Indian Calendar.
                                        Make the ShubaDinam special.</p>
                                    {/* <div className="howit"> */}
                                    <button className="howbtn" onClick={() => scrollToSection()}>Sign Up</button>
                                    {/* </div> */}
                                </div>

                            </div>

                            {/* <div className="parallax-left">
                                <div className="p-content" data-aos="slide-right">
                                    <span className="p-content-title">World's first Birthday reminder</span>

                                    <label className="slogan">- as per Indian calender</label>
                                </div>
                                <div className="p-spans" data-aos="fade-up">


                                    <p className="how-cnt-span1">In a sky full of stars, there's one that found you.</p>
                     
                                    <p className="how-cnt-span2">Celebrating your Janma Nakshatra / Tithi is now made Very  <span style={{ color: 'red', fontWeight: 600, fontSize: '20px' }}>EASY</span> !</p>



                                </div>
                                <div className="howandsigup">
                                    <div className="howit">
                                        <button className="howbtn" onClick={() => clickHow()}>How It Works?</button>
                                    </div>
                                </div>
                            

                            </div>

                            <div className="parallax-right">
                                <div className="parallax-cnt">

                                    <div className='right-videoplayer1'>

                                        <video className='pr-videoplayer' autoPlay loop muted onContextMenu={(e) => e.preventDefault()}>
                                            <source src={require("../videos/sample-v.mp4")} type="video/mp4" />
                                        </video>
                                    </div>

                                    <div className='right-image-cnt'>

                                        <div className='right-image1'>
                                            <img src={require("../images/pr-image2.jpg")} width="100%" height="100%" />
                                        </div>

                                        <div className='right-image2'>
                                     

                                            <img src={require("../images/pr-image1.jpg")} width="100%" height="100%" />
                                        </div>

                                        <div className='right-image3'>
                                            <img src={require("../images/pr-image3.jpg")} width="100%" height="100%" />
                                        </div>
                                    </div>
                                </div>

                            </div> */}

                            {/* <div className="parallax-container">
                         
                                <div className="parallax-background" data-aos="zoom-out-up"
                                    style={{
                                        transform: `translateY(${offset * 0.5}px)`,
                                    }} />

                            
                                <div className={`parallax-content ${inView ? 'in-view' : ''}`}>
                                    <h1 className="p-content p-heading">World's first JanmaDinam reminder</h1>
                                    <br />
                                    <span className="p-cnt-1">In a sky full of stars, there's one that found you.</span>
                                    <br />
                                    <br />

                                    <span className="p-cnt-2">Celebrating your Janma Nakshatra / Tithi is now made Very EASY!</span>
                                    <br />



                                    <br />
                                    <div className="howandsigup">
                                        <div className="howit">
                                            <button className="howbtn" onClick={() => clickHow()}>How It Works?</button>
                                        </div>
                                        <div className="sign">
                                            <button className="sign-parallax-btn" onClick={() => clickSignparallax()}>Register</button>
                                        </div>

                                    </div>
                                    <p className="hide">Come celebrate that day with us by finding out your Janma DinamCome celebrate that day with us by finding out your Janma Dinam</p>
                                </div>
                            </div> */}
                        </div>

                        <div className="container-sky-celeb">
                            <div className="sky-pic">
                                <img className="sky-pic-image-phone" src={require("../images/sky phone2.jpg")} onContextMenu={(e) => e.preventDefault()} />
                                <img className="sky-pic-image" src={require("../images/sky quote2.jpg")} onContextMenu={(e) => e.preventDefault()} />

                                <div className="sky-pic-text">
                                    In a sky full of stars, there is one that found you
                                </div>
                                <div className="sky-pic-text2">
                                    Celebrating your Janma Nakshatra / Tithi is now made<span style={{ color: 'red' }}>Very EASY!</span>
                                </div>
                                <div className="sky-pic-howit" onClick={() => clickHow()}>
                                    How It Works?
                                </div>
                            </div>
                        </div>


                        <div className="double-container-signup" ref={sectionRef}>


                            {
                                signupcontent ?

                                    <div className="container-two" >
                                        <div className="login-box" data-aos="fade-up" ref={formRef}>

                                            <div className="login-heading" data-aos="fade-up" duration="700">
                                                <h2 className="acc-ajst letters-color-acc" >Create your Shubadinam account</h2>
                                            </div>
                                            {/* <div className="google-login">
                                {
                                    flag ? (
                                        navigate("/profile")
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
                            <div className="small-gap">or</div> */}
                                            {/* <div className="email-heading letters-color"></div> */}

                                            <div className="email-pass-cnt">

                                                <div className="email-input" data-aos="fade-right">

                                                    <input className="input-font" type="email" name="userEmail" onChange={inputHandle} onKeyPress ={handleKeyPress} placeholder="Email" />
                                                    {/* <div className="img-hider"></div> */}


                                                    {errorForm.userEmail && <p className="error-text">This input field is mandatory</p>}

                                                </div>
                                                <div className="phone-input" data-aos="fade-right">
                                                    <input className="input-font" type="text" name="userPhone" onChange={inputHandle} onKeyPress={handleKeyPress} placeholder="Phone Number" />
                                                    {/* <div className="img-hider"></div> */}


                                                    {errorForm.userPhone && <p className="error-text">This input field is mandatory</p>}

                                                </div>
                                                {/* <div className="password-heading letters-color"></div> */}
                                                <div className="password-input-style" data-aos="fade-right">
                                                    <input className="input-font-pass" type={eyeIcon ? "password" : "text"} name="userPassword" onChange={inputHandle} onKeyPress={handleKeyPress} placeholder="Password" />
                                                    <button className="eye-btn eye-container-singupsignin" onClick={() => eyeOpenClose(!eyeIcon)}>
                                                        {
                                                            eyeIcon ?
                                                                <img src="https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png" onClick={() => eyeOpenClose(false)} width="20px" height="20px" />
                                                                :
                                                                <img src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png" onClick={() => eyeOpenClose(true)} width="20px" height="20px" />
                                                        }
                                                    </button>
                                                </div>

                                            </div>

                                            {/* <div className="forgot-password">
                                                <button className="eye-btn">{
                                                <label className="letters-color-showpassword">Show Password</label>
                                            </div> */}

                                            <div className="forgot-password">
                                                <NavLink to="/forgotpassword">
                                                    <label className="letters-color-forgotpassword">Forget Password ?</label>
                                                </NavLink>
                                            </div>



                                            {errorForm.userPassword && <p className="error-text">This input field is mandatory</p>}


                                            <div className="sumbit-button" data-aos="fade-right">
                                                <button type="submit" className="sumbit-font login-sub-button" onClick={() => clickSubmit()} disabled={
                                                    dynamicInput.userEmail.length === 0 ||
                                                    dynamicInput.userPassword.length === 0 ||
                                                    dynamicInput.userPhone.length === 0||
                                                    isSubmitClicked
                                                }> {isSubmitClicked ? 'Submitting...' : 'Submit'}</button>

                                            </div>

                                            <div className="new-signup">
                                                <div className="new-here letters-color-newhere">Already have an account ?</div>
                                                <div className="sign-up">
                                                    <button className="open-btn signout-btn" onClick={togglePopup}>Sign In</button>

                                                    <HomeSignInComponent></HomeSignInComponent>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    :

                                    <div className="container-howitworks">



                                        <div className="how-heading">
                                            <h1 className="hw-head">How Shubadinam Works?</h1>
                                            <h1 className="hw-head2">Setup and Forget in 3 <span style={{ color: 'red', fontWeight: 500 }}>Easy</span> steps:</h1>
                                        </div>
                                        <div className="how-content">
                                            <div className="how-box">
                                                <div className="num">
                                                    <div className="num-count">
                                                        <FontAwesomeIcon icon={fa1} className="icon-1" />
                                                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                                                    </div>
                                                </div>
                                                <div className="num-cnt">
                                                    <div className="how-cnt-1">Register</div>
                                                    <div className="how-cnt-2">
                                                        <div className="how-cnt-lines">
                                                            <p className="how-cnt-para1"> Register for <span style={{ color: 'red', fontWeight: 500, fontSize: '20px' }}>FREE</span> by easily creating an account using your email. It only takes a few minutes.</p>
                                                        </div>

                                                        <div className="how-cnt-reg">
                                                            <button className="reg-how" onClick={() => scrollToSection()}>Register</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="how-box" >
                                                <div className="num">
                                                    <div className="num-count">
                                                        <FontAwesomeIcon icon={fa2} className="icon-1" />

                                                    </div>
                                                </div>
                                                <div className="num-cnt">
                                                    <div className="how-cnt-1">Enter Your Details</div>
                                                    <div className="how-cnt-2">
                                                        <div className="how-cnt-lines">
                                                            <p className="how-cnt-para1">Enter your Birth Star/Tithi information. Add Unlimited Janma dinam details of Family and Friends.</p>
                                                        </div>
                                                        <div className="how-cnt-reg">
                                                            <button className="reg-how" onClick={() => scrollToSection()}>Register</button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className="how-box">
                                                <div className="num">
                                                    <div className="num-count">

                                                        <FontAwesomeIcon icon={fa3} className="icon-1" />
                                                    </div>
                                                </div>
                                                <div className="num-cnt">
                                                    <div className="how-cnt-1">Enjoy Your Day</div>
                                                    <div className="how-cnt-2">
                                                        <div className="how-cnt-lines">
                                                            <p className="how-cnt-para1">It's your day! Enjoy your Birth Star/Tithi celebration without the stress of remembering the dates.</p>
                                                        </div>
                                                        <div className="how-cnt-reg">
                                                            <button className="reg-how" onClick={() => scrollToSection()}>Register</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* <p className="letters-color-howithead" data-aos="fade-up">How It Works ?</p> */}
                                        {/* <ol>
                                            <p className="letters-color-howit" data-aos="fade-up" >Setup and Forget in 3 easy steps:</p>
                                            <li className="letters-color-howit" data-aos="fade-up">Register for FREE!</li>
                                            <li className="letters-color-howit" data-aos="fade-up">Add  Unlimited Janma Dinam Details of Family and Friends.</li>
                                            <li className="letters-color-howit" data-aos="fade-up">Get Notified in Advance.</li>
                                            <br />
                                            <button className="reg-how" onClick={() => scrollToSection()}>Register</button>
                                        </ol> */}


                                        <div className="how-lines">

                                            <p className="hw-head3">Celebrate the Janma Dinam of your dear ones in the Indian Way.</p>
                                        </div>

                                    </div>


                            }

                        </div>

                        <div className="double-container-boxes" >

                            <div className="db-box-cnt1">
                                <span style={{
                                    color: '#05195e', fontSize: "35px", fontFamily: 'sans-serif', fontWeight: 900
                                }}>From Our Blogs</span>

                            </div>
                            <div className="db-box-cnt2">
                                <CenteredSlider />
                            </div>

                            {/* <div className="boxes-pic">
                                <img src={require("../images/t4.jpg")} />
                            </div>
                            <div className="boxes-pic">
                                <img src={require("../images/t4.jpg")} />
                            </div>
                            <div className="boxes-pic">
                                <img src={require("../images/t4.jpg")} />
                            </div>
                            <div className="boxes-pic">
                                <img src={require("../images/t4.jpg")} />
                            </div>
                            <div className="boxes-pic">
                                <img src={require("../images/t4.jpg")} />
                            </div>
                            <div className="boxes-pic">
                                <img src={require("../images/t4.jpg")} />
                            </div>
                            <div className="boxes-pic">
                                <img src={require("../images/t4.jpg")} />
                            </div>
                            <div className="boxes-pic">
                                <img src={require("../images/t4.jpg")} />
                            </div> */}

                            {/* <Blogs/> */}

                            {/* <Coverflow /> */}

                        </div>




                        {/* <div className="double-container-boxes" >

                            <div className="from-blogs-title" data-aos="fade-up">
                                <h2 className="letters-color-testtitle">From Our Blogs</h2>
                            </div>

                            <video className='pr-videoplayer2' autoPlay loop muted onContextMenu={(e) => e.preventDefault()}>
                                <source src={require("../videos/space-video1.mp4")} type="video/mp4" />
                            </video>

                            < div className="boxes1 zoom-container zoom-container img zoom-container:hover img" data-aos="slide-right">
                                <img src={require("../images/t4.jpg")} width="100%" height="100%" onClick={() => boxLink(1)} />
                                <div className="centered-text" onClick={() => boxLink(1)}>Nakshatra Foods</div>

                            </div>
                            <div className="boxes2 zoom-container zoom-container img zoom-container:hover img" data-aos="zoom-in">
                                <img src={require("../images/bigstock-Colourful-Night-Starry-Sky-In--478153429.jpg")} width="100%" height="100%" onClick={() => boxLink(2)} />
                                <div className="centered-text" onClick={() => boxLink(2)}>Nakshatra Characteristics</div>
                            </div>
                            <div className="boxes3 zoom-container zoom-container img zoom-container:hover img" data-aos="slide-right">
                                <img src={require("../images/t4.jpg")} width="100%" height="100%" onClick={() => boxLink(3)} />
                                <div className="centered-text" onClick={() => boxLink(3)}>Nakshatra Deity</div>
                            </div>
                            <div className="boxes4 zoom-container zoom-container img zoom-container:hover img" data-aos="zoom-in">
                                <img src={require("../images/bigstock-Colourful-Night-Starry-Sky-In--478153429.jpg")} width="100%" height="100%" onClick={() => boxLink(4)} />
                                <div className="centered-text" onClick={() => boxLink(4)}>Nakshatra Likes and Disikes</div>
                            </div>
                            <div className="boxes5 zoom-container zoom-container img zoom-container:hover img" data-aos="slide-right">
                                <img src={require("../images/bigstock-Colourful-Night-Starry-Sky-In--478153429.jpg")} width="100%" height="100%" onClick={() => boxLink(5)} />
                                <div className="centered-text" onClick={() => boxLink(5)}>Tithi Food</div>
                            </div>
                            <div className="boxes6 zoom-container zoom-container img zoom-container:hover img" data-aos="zoom-in">
                                <img src={require("../images/t4.jpg")} width="100%" height="100%" onClick={() => boxLink(6)} />
                                <div className="centered-text" onClick={() => boxLink(6)}>Tithi Characteristics</div>
                            </div>
                            <div className="boxes7 zoom-container zoom-container img zoom-container:hover img" data-aos="slide-right">
                                <img src={require("../images/bigstock-Colourful-Night-Starry-Sky-In--478153429.jpg")} width="100%" height="100%" onClick={() => boxLink(7)} />
                                <div className="centered-text" onClick={() => boxLink(7)}>Tithi Deity</div>
                            </div>
                            <div className="boxes8 zoom-container zoom-container img zoom-container:hover img" data-aos="zoom-in">
                                <img src={require("../images/t4.jpg")} width="100%" height="100%" onClick={() => boxLink(8)} />
                                <div className="centered-text" onClick={() => boxLink(8)}>Tithi Likes& Disikes</div>
                            </div>
                        </div> */}




                        <div className="testimonial-container">

                            <div className="db-box-cnt1">
                                <span style={{
                                    color: '#05195e', fontSize: "35px", fontFamily: 'sans-serif', fontWeight: 900, textTransform: "capitalize"
                                }}>What people says</span>

                            </div>
                            <div className="db-box-cnt2">
                                <TestimonialScreen />
                            </div>


                            {/* <div className="testi-title" data-aos="fade-up">
                                <h2 className="letters-color-testtitle">What People Say</h2>
                            </div>
                            <div className="testi-content" >
                                <TestimonialScreen />
                            </div> */}

                        </div>

                        <div className="about-startup">
                            <div className="about-title" data-aos="fade-up">
                                <span style={{
                                    color: '#05195e', fontSize: "35px", fontFamily: 'sans-serif', fontWeight: 900, textTransform: "capitalize"
                                }}>About Us</span>

                            </div>
                            <div className="about-lines">
                                <p className="letters-color-abtlines" data-aos="fade-up">Shubadinam is a small contribution towards the larger good of Retaining and Reclaiming the rich cultural heritage of Hinduism by highlighting the significance of celebrating the Birth Stars, known <NavLink to="/about-us">read more</NavLink></p>

                            </div>
                        </div>

                        <FooterComponent></FooterComponent>

                    </div>
                    /* main content end */

                    // ***
                    :
                    <div className="overall-percent-inaugration">
                        <div className="inaug-header">
                            <img className="inaug-logo" src={require("../images/New Shubadinam Logo/Shubadinam White.png")} />
                        </div>
                        <div className="inaug-cnt">

                            <div>
                                <p className="inaug-cnt-para">🎉Get ready to celebrate your Birthday's with your Janma Nakshatra and Janma Tithi.🎉🎊🥳</p>
                            </div>
                            <div>
                                <h1 className="letters-color-countdown">Countdown: {countdown}</h1>
                                <button className="inaug-btn" onClick={() => startCountdown()}>Let's Celebrate</button>

                            </div>


                        </div>
                    </div>
            }
            {/* *** */}




        </div >
    )
}
export default LoginScreen;