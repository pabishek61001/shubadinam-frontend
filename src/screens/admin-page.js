import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminPage = () => {
    return (
        <div className="overall-container">
            <div className="overall-percent-adbc">
                <div className="admin-header"></div>
                <div className="admin-body">
                    <div className="sidebar">
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
                    <div className="sidebar-content">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AdminPage;