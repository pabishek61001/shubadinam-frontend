import React, { useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("isAuthenticated");
        if (!auth) {
            // Swal.fire({
            //     title: '',
            //     text: 'Please login again.',
            //     icon: 'warning',
            //     confirmButtonText: 'Got it!'
            // });
            navigate("/");
        }
        else {
            navigate("/home");
        }
    }, [navigate]);

    return children;

}

export default ProtectedRoute;