import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import Swal from "sweetalert2";

const HomeSignInComponent = () => {


    const clientId = "516265231821-9n4dbqkgm349bl3a76j75lgeu19vv71h.apps.googleusercontent.com"

    // const clientSecret = "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";

    const navigate = useNavigate();

    const [backendError, SetBackendError] = useState([])

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [flag, SetFlag] = useState(false)
    const [name, SetName] = useState("")

    const [dynamicInput, DynamicInputFunction] = useState({
        userEmail: "",
        userPassword: ""
    })

    const [errorForm, ErrorFormFunction] = useState({
        userEmail: false,
        userPassword: false
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
                        alert("retry again")
                    }
                }
            })
            .catch((error) => {

                console.log('Error:', error)
                // console.log(error.response.data.norecords);
                // console.log(error.response.data.message);
                if (error.message==="Network Error") {
                    // const msg1 = error.response.data.message
                    Swal.fire({
                        title: 'Under Maintanance',
                        text:'Please login after sometime!',
                        icon: 'warning',
                        confirmButtonText: 'Ok',
                    })
                }
               else if (error.response.data.norecords === "Failure") {
                    const msg1 = error.response.data.message
                    Swal.fire({
                        title: 'Access Denied',
                        text: msg1,
                        icon: 'warning',
                        confirmButtonText: 'Ok',
                    });
                } else if (error.response.data.passfailure === "Failure") {
                    const msg1 = error.response.data.message
                    Swal.fire({
                        title: 'Access Denied',
                        text: msg1,
                        icon: 'warning',
                        confirmButtonText: 'Ok',
                    });
                }
            });

        ErrorFormFunction({
            ...errorForm,
            userEmail: dynamicInput.userEmail === "" ? true : false,
            userPassword: dynamicInput.userPassword === "" ? true : false
        })
    }


    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };



    useEffect(() => {
        const handleScroll = () => {
            // Calculate the scroll position threshold
            const scrollThreshold = 2000; // You can adjust this value as needed

            // Check if the page has scrolled beyond the threshold
            if (window.scrollY > scrollThreshold) {
                setIsOpen(false);
            }
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);





    return (


        <div>

            <div className="popup-container">
                {/* <button className="open-btn signout-btn" onClick={togglePopup}>Sign In</button> */}

                {isOpen && (
                    <div className="popup-already" >
                        <div className="popup-content-already" data-aos="zoom-in" data-aos-anchor-placement="center-bottom">
                            <h2 className="letters-color-signin">Sign In</h2>
                            {/* <p>...</p> */}
                            <div className="logo-signin">
                                <img className="logo-signin-img" src={require("../images/New Shubadinam Logo/Shubadinam Blue.png")} />
                            </div>


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
                                }>Submit</button>
                            </div>
                            <button className="close-btn" onClick={togglePopup}> Close </button>
                        </div>
                    </div>
                )}
            </div>

        </div>

    )
}
export default HomeSignInComponent;