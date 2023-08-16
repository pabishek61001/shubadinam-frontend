import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

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


                        console.log(response.data);
                        const stringifyUserInfo = JSON.stringify(dynamicInput);
                        localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
                        localStorage.setItem("email", dynamicInput.userEmail);

                        navigate("/home");

                    } else {
                        alert("No records existed")
                    }
                }
            })
            .catch((error) => {
                console.error('Error:', error)
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





    return (


        <div>

            <div className="popup-container">
                <button className="open-btn signout-btn" onClick={togglePopup}>Sign In</button>

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

    )
}
export default HomeSignInComponent;