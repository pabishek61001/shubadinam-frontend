import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AdminPage = () => {

    const navigate = useNavigate()

    const [chngPwd, SetPwd] = useState(false)

    const [confirmPassword, SetConfirmPassword] = useState({
        oldPwd:"",
        confirmPwd: "",
        reconfirmPwd: ""
    })

    const changePwd = () => {
        SetPwd(true)
    }

    const pwdhandler = (evt) => {
        SetConfirmPassword({ ...confirmPassword, [evt.target.name]: evt.target.value })
    }

    const clickSubmit = () => {

    if(confirmPassword.oldPwd !==  confirmPassword.confirmPwd){
        
        if (confirmPassword.confirmPwd !== "") {
            if (confirmPassword.confirmPwd === confirmPassword.reconfirmPwd) {
                alert("correct")
               const url = `https://backend.shubadinam.com/adminaccess/upt/password`;

                axios.post(url,confirmPassword)
                .then((response)=>{
                    console.log(response)
                })
                .catch((error)=>{

                })


                SetPwd(false)
            } else {
                alert("not equal")
                SetPwd(false)
            }
        } else {
            alert("pass empty")
            SetPwd(false)
        }
    }else{
               alert("old is same or em[ty")
               SetPwd(false)
        }
    

    }



    return (


        <div className="overall-container">

            <div className="overall-percent-adbc">

                <div className="admin-header">
                    <h5 onClick={() => changePwd()}>Change Password</h5>
                </div>

                <div className="admin-body">

                    {
                        chngPwd ?
                            <div className="pwd-container">
                                <div className="pwd-popup">

                                    <div>
                                    </div>

                                    <label>Enter your Old Password :</label>
                                    <input type="text" name="oldPwd" onChange={pwdhandler} />
                                    <br />
                                    <label>Enter your New Password :</label>
                                    <input type="text" name="confirmPwd" onChange={pwdhandler} />
                                    <br />
                                    <label>Reconfirm your Password :</label>
                                    <input type="text" name="reconfirmPwd" onChange={pwdhandler} />
                                    <br />
                                    <button onClick={() => clickSubmit()}>Submit</button>

                                </div>
                            </div>
                            :
                            <span></span>
                    }
                    <div className="sidebar">

                        {/* PANCHANGAM */}
                        <div className="dropdown">
                            <button className="dropbtn"><h5>PANCHANGAM</h5></button>
                            <div className="dropdown-content">
                                <ol>
                                    <li> <NavLink to="/adminpage/tamilpanchangam"> Tamil Panchangam</NavLink></li>
                                    <li><NavLink to="/adminpage/telugupanchangam"> Telugu Panchangam</NavLink></li>
                                    <li> <NavLink to="/adminpage/malayalampanchangam"> Malayalam Panchangam</NavLink></li>
                                    <li> <NavLink to="/adminpage/kannadampanchangam"> Kannadam Panchangam</NavLink></li>
                                    <li><NavLink to="/adminpage/gujaratipanchangam"> Gujarati Panchangam</NavLink></li>
                                    <li><NavLink to="/adminpage/hindipanchangam"> Hindi Panchangam</NavLink></li>
                                    <li><NavLink to="/adminpage/bengalipanchangam"> Bengali Panchangam</NavLink></li>
                                </ol>
                            </div>
                        </div>

                        <br />

                        {/* TITHI */}
                        <div className="dropdown">
                            <button className="dropbtn"><h5>TITHI</h5></button>
                            <div className="dropdown-content">
                                <ol>
                                    <li> <NavLink to="/adminpage/tamiltithi"> Tamil Tithi</NavLink></li>
                                    <li> <NavLink to="/adminpage/telugutithi"> Telugu Tithi</NavLink></li>
                                    <li> <NavLink to="/adminpage/malayalamtithi"> Malayalam Tithi</NavLink></li>
                                    <li> <NavLink to="/adminpage/kannadamtithi"> Kannadam Tithi</NavLink></li>
                                    <li> <NavLink to="/adminpage/gujaratitithi"> Gujarati Tithi</NavLink></li>
                                    <li> <NavLink to="/adminpage/hinditithi"> Hindi Tithi</NavLink></li>
                                    <li> <NavLink to="/adminpage/bengalitithi"> Bengali Tithi</NavLink></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-content">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </div>










        // <div className="overall-container">

        // </div>

    )
}
export default AdminPage;