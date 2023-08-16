import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem("isAuthenticated");
        if (!auth) {
            // alert("please enter valid email")
            navigate("/");
        }
        else {
            navigate("/home");
        }
    }, [navigate]);

    return children;

}

export default ProtectedRoute;