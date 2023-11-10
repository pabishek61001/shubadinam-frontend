import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';


import { IonAlert, IonButton } from '@ionic/react';





const Rough = () => {

    const [dynamicIn, DynamicFun] = useState({
        name: "",
        email: ""
    })


    const handleInput = (e) => {
        DynamicFun({ ...dynamicIn, [e.target.name]: e.target.value })
    }








    return (
        <div>
            <h1>rough</h1>
            {/* <div>
                <GoogleOAuthProvider clientId="429127562898-kioqpcs16q1air4umugsbt7h3s8gkiap.apps.googleusercontent.com">
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />;
                </GoogleOAuthProvider>
            </div> */}
            <div> <input type="text" name="name" onChange={handleInput} />
                <br />
                <input type="text" name="email" onChange={handleInput} />
                <br />
                <button id="myButton" onClick={() => alert('Button clicked!')}>Click me</button>
                <br />
            </div>


            <>
                <IonButton id="present-alert">Click Me</IonButton>
                <IonAlert
                    trigger="present-alert"
                    header="Alert"
                    subHeader="Important message"
                    message="This is an alert!"
                    buttons={['OK']}
                ></IonAlert>
            </>

        </div>
    )
}


export default Rough;