import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const ChangePassword = () => {


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);

    const navigate = useNavigate()

    const Email = sessionStorage.getItem("passchange")
    const forgotEmail = atob(Email)
    // console.log(forgotEmail);


    const [backendError, SetBackendError] = useState([])

    const [eyeIcon, UpdateEyeIcon] = useState(true)

    const eyeOpenClose = (icon) => {
        UpdateEyeIcon(icon)
    }



    const [newPassword, SetNewPassword] = useState({
        newpass: "",
        confirmpass: ""
    })



    const handleInput = (event) => {

        SetNewPassword({ ...newPassword, [event.target.name]: event.target.value });
    }

    const clickSend = () => {
        // alert("send")
        console.log(newPassword);

        if (newPassword.newpass === newPassword.confirmpass) {
            //   alert("ss")

            const url = `https://backend.shubadinam.com/confrimpassword`;


            axios.post(url, { ...newPassword, forgotEmail: forgotEmail })
                .then((response) => {
                    // alert(response.data.message)
                    console.log(response);
                    const updated = response.data.message

                    if (response.data.errors) {
                        SetBackendError(response.data.errors)

                        const invalidmailPass = response.data.errors[0].msg
                        // alert(invalidmailPass)

                        Swal.fire({
                            title: 'Invalid',
                            text: invalidmailPass,
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
                    else{
                        //  alert(updated)
                        const updated = response.data.message
                        Swal.fire({
                            title: 'Password Updated',
                            text: updated,
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
                        }).then((updated)=>{
                            navigate("/")
                        }).catch((notconfirm)=>{
                            navigate("/change-password")
                        })
                        
                    }

                })
                .catch((error) => {
                    console.log(error);
                    // alert("jjj");

                    Swal.fire({
                        title: 'Server Busy',
                        text: "Something went wrong.Please login after sometime!",
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
                })

        }
        else {
            // alert("new && confrim is not equal")

            
            Swal.fire({
                title: 'Verify',
                text: "New and Confirm Password are not same!",
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




    }

    const clickClose = () => {
        navigate("/")

    }




    return (

        <div className='forgot-password-overall'>
            <div className="forgot-password-percent">
                <HeaderComponent/>
                <div className='top13'></div>
                <div className="forgot-password-title">
                    <h3>Change Your Password Here :</h3>
                </div>
                <div className="forgot-password-content">
                    <div className='forgetpass-input'>
                        <input className="forgot-password-mail" type="email" name="newpass" placeholder="New Password" onChange={handleInput} />
                        
                    </div>

                    <div className='confirmpass-input'>
                        <input className="forgot-password-mail" type={eyeIcon ? "password" : "text"} name="confirmpass" placeholder="Confirm Password" onChange={handleInput} />
                        <button className='forgoteye' onClick={() => eyeOpenClose(!eyeIcon)}>
                            {
                                eyeIcon ?
                                    <img src="https://icons.veryicon.com/png/o/miscellaneous/hekr/action-hide-password.png" onClick={() => eyeOpenClose(false)} width="20px" height="20px" />
                                    :
                                    <img src="https://cdn-icons-png.flaticon.com/512/6866/6866733.png" onClick={() => eyeOpenClose(true)} width="20px" height="20px" />
                            }
                        </button>
                    </div>

                    <div className='newpass-submit-cancel'>
                        <button className='sendBtn' onClick={() => clickSend()}>Submit</button>
                        <button className='closebtnpass' onClick={() => clickClose()}>Cancel</button>

                    </div>

                </div>
                {/* <FooterComponent/> */}
            </div>
            <FooterComponent/>
        </div>

    );
};

export default ChangePassword;