import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const VerifyEmailPage = () => {

  const params = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.pathname.replace("/verify/", "");
    const url = "https://backend.shubadinam.com/verify/" + token;

    axios.get(url)
      .then((response) => {
        console.log(response);
        navigate("/profile");

        // const userEmail = response.data.userEmail
        // console.log(userEmail);

        //   const stringifyUserInfo = JSON.stringify(userEmail);
        //   localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
        //   const stringifyForeignKey = JSON.stringify(userEmail);
        //   localStorage.setItem("fkey",btoa(stringifyForeignKey));


        const mailPhPass = response.data.mailPhPassObj.mailPhPass
        // const userEmail = mailPhPassObj.userEmail
        // console.log(userEmail);
        console.log(mailPhPass);

        const serializedMailPhPass = JSON.stringify(mailPhPass);
        localStorage.setItem("mainMPP", serializedMailPhPass)

        const stringifyUserInfo = JSON.stringify(mailPhPass.userEmail);
        localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
        const stringifyForeignKey = JSON.stringify(mailPhPass.userEmail);
        localStorage.setItem("fkey", btoa(stringifyForeignKey));


      })
      .catch((error) => {
        navigate("");
      })
  }, [navigate])

};

export default VerifyEmailPage;