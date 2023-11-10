import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';


const Verifyforgotpassword = () => {
   
  const params = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const passwordtoken = params.pathname.replace("/verifyforgetpassword/", "");
    const url = "https://backend.shubadinam.com/verifyforgetpassword/" + passwordtoken;

    axios.get(url)

    // console.log(params.pathname);

      .then((response) => {
        // console.log(response);
       
        const mail=response.data
        const forgotmail=mail.mail
        // console.log(forgotmail);
       const changepass = sessionStorage.setItem("passchange",btoa(forgotmail))
       
        navigate("/change-password");
      })

      .catch((error) => {
        navigate("/");
      })
  }, [navigate])

  useEffect(()=>{
    
  },[])

};

export default Verifyforgotpassword;