import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const ForgotProtected  = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const forgotUser = sessionStorage.getItem("passchange");
        if (!forgotUser) {
            // Swal.fire({
            //     title: '',
            //     text: 'Please login again.',
            //     icon: 'warning',
            //     confirmButtonText: 'Got it!'
            // });
            navigate("/");
        }
        else {
            navigate("/change-password");
        }
    }, [navigate]);

    return children;

}

export default ForgotProtected;