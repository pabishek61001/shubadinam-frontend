import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AdminAccess = () => {

    const navigate = useNavigate()


    const [adminDetails, SetAdminDetails] = useState({
        adminUserId: "",
        adminPassword: ""
    })

    const inputHandle =(event)=>{
        SetAdminDetails({...adminDetails, [event.target.name] : event.target.value})
    }

    const clickSubmit =()=>{
        console.log(adminDetails);

        const url = `https://backend.shubadinam.com/adminaccess?adminUserId=${adminDetails.adminUserId}&adminPassword=${adminDetails.adminPassword}`;

        axios.get(url)
            .then((response) => {
                const value = response.data
                console.log(value);
                navigate("/adminpage")
            })
            .catch((error) => {
                Swal.fire({
                    // title: 'Email Verification',
                    text: "Authorization Revoked",
                    icon: 'error'
                });
            })
    }


    return (

        <div className="overall-container">
            <div>
                <label>Enter your UserId</label> :
                <input type='text' placeholder='Enter your AdminId' name='adminUserId' onChange={inputHandle} />
                <br />
                <br />
                <label>Enter your Password</label> :
                <input type='password' placeholder='Enter your Password' name='adminPassword' onChange={inputHandle} />
                <br />
                <button type='submit' onClick={()=>clickSubmit()}>Submit</button>
            </div>
        </div>

    );
};

export default AdminAccess;