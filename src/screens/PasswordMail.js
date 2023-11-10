import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

const PasswordMail = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);


    const [mailGet, SetMail] = useState({
        forgotEmail: " "
    })

    const navigate = useNavigate()

    const handleInput = (event) => {

        SetMail({ ...mailGet, [event.target.name]: event.target.value });
    }

    const clickSend = () => {
        // alert("send")
        console.log(mailGet);

        const url = `https://backend.shubadinam.com/forgotmail?forgotmail=${mailGet.forgotEmail}`;


        axios.get(url)
            .then((response) => {
                const mailSent = response.data.message
                // alert(mailSent)
                console.log(response);

                Swal.fire({
                    title: 'Mail Sent',
                    text: mailSent,
                    icon: 'success',
                    confirmButtonText: 'Ok!', // Change the confirm button text
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
            .catch((error) => {

                console.log(error);

                //(backend error) network error
                if (error.message === "Network Error") {
                    Swal.fire({
                        title: 'Under Maintanance',
                        text: 'Please login after sometime!',
                        icon: 'warning',
                        confirmButtonText: 'Ok',
                    })
                }
                else {

                    const notinDatabase = error.response.data.message
                    // alert(notinDatabase);

                    Swal.fire({
                        title: 'Invalid',
                        text: notinDatabase,
                        icon: 'error',
                        confirmButtonText: 'Ok!', // Change the confirm button text
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

            })


    }

    const clickClose = () => {
        navigate("/")

    }

    return (
        <div className="forgot-mailpage-overall">
            <div className="mailpage-percent">
                {/* <HeaderComponent /> */}
                {/* <div className='top13'></div> */}
                <div className="mailpage-title">
                    <h3>Forget Password : </h3>
                </div>
                <div className="mailpage-content">
                    <h4 className="mailpage-titlecard">Please enter your Login Email :</h4>
                    <div className="mailpage-main-box">
                        <div className='input-forgetmail-cnt'>



                            {/* <div class="form-group">
                                <input type="email" class="form-control" id="usr" name="forgotEmail" placeholder="Email" onChange={handleInput}/>
                            </div> */}



                            <input className="input-forget-mail" type="email" name="forgotEmail" placeholder="Email" onChange={handleInput} />
                        </div>
                        <div className='send-cancel'>
                            <button className='sendBtn' onClick={() => clickSend()}>Send</button>
                            <button className='closebtnpass' onClick={() => clickClose()}>Close</button>

                        </div>
                    </div>


                </div>
                {/* <FooterComponent/> */}
            </div>
            <FooterComponent />

        </div>
    );
};

export default PasswordMail;