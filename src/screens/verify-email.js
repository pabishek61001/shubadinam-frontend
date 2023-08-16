import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const VerifyEmailPage = () => {

  const params = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = params.pathname.replace("/verify/", "");
    const url = "http://localhost:4000/verify/" + token;

    axios.get(url)
      .then((response) => {
        console.log(response);
        
          navigate("/signup");
          // const stringifyUserInfo = JSON.stringify(setMail.userEmail);
          // localStorage.setItem("isAuthenticated", btoa(stringifyUserInfo));
          // localStorage.setItem("email", setMail.userEmail);
      })
      .catch((error) => {
        navigate("");
      })
  }, [navigate])

};

export default VerifyEmailPage;