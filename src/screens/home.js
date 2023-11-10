import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import Swal from "sweetalert2";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import DataSharingContext from "../context/data-sharing-context";
import SecondDataSharing from "../context/second-data-sharing";
import SignInComponent from "../components/signin-pop";
import EditComponent from "../components/EditComponent";
import UserEditComponent from "../components/UserEditComponent";
import Hamburger from "hamburger-react";

import ReactPaginate from 'react-paginate';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-regular-svg-icons'
import { } from "@fortawesome/fontawesome-free"
import { faSearch, faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'; // Replace with the correct FontAwesome icon import

import 'bootstrap/dist/css/bootstrap.min.css';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { isDate } from "moment";


import ScrollToTop from "react-scroll-to-top";



const HomeScreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    useEffect(() => {
        const sentUserEmail = localStorage.getItem("fkey");
        const localEmail = atob(sentUserEmail).replace(/"/g, "").trim();
        if (sentUserEmail) {
            const url = `https://backend.shubadinam.com/loginLocalEmail?localEmail=${localEmail}`;
            axios.get(url)
                .then((response) => {
                    const loggingUser = response.data.data2;
                    const loggingRelation = response.data.data1;



                    if (response.data.success === "Success") {

                        console.log(loggingUser);
                        console.log(loggingRelation);
                        localStorage.setItem('myDataKey', JSON.stringify(loggingRelation));
                        localStorage.setItem('myDataKey2', JSON.stringify(loggingUser));

                        // window.location.reload();
                        const storedData = localStorage.getItem('myDataKey');
                        const storedDataTwo = localStorage.getItem('myDataKey2');

                        setData(JSON.parse(storedData));
                        setDataTwo(JSON.parse(storedDataTwo));

                        console.log(response.data);

                    } else {
                        console.log(response.data);
                        // alert("please login again,,,,,,,,,,,,,!")
                        // Navigate("/")

                    }
                }
                )
                .catch((error) => {

                    console.error('Error:', error)
                    // console.log(error.response.data)

                    if (error.message === "Network Error") {
                        // const msg1 = error.response.data.message
                        Swal.fire({
                            title: 'Under Maintanance',
                            text: 'Please login after sometime!',
                            icon: 'warning',
                            confirmButtonText: 'Ok',
                        })
                    }

                });
        }
        else if (!sentUserEmail) {
            Swal.fire({
                title: '',
                text: 'New to Shubadinam.com! Please Sign up or Log in.',
                icon: 'warning',
                confirmButtonText: 'Ok',
            })
            // Navigate("/")
        }
    }, []);






    const [search, setSearch] = useState("");

    const [data, setData] = useState(null);

    const [dataTwo, setDataTwo] = useState(null);


    const tableData = useContext(DataSharingContext);

    const tableTwoData = useContext(SecondDataSharing);

    useEffect(() => {
        const storedData = localStorage.getItem('myDataKey');
        if (storedData) {
            setData(JSON.parse(storedData));
        }
    }, []);

    useEffect(() => {
        const storedDataTwo = localStorage.getItem('myDataKey2');
        if (storedDataTwo) {
            setDataTwo(JSON.parse(storedDataTwo));
        }
    }, []);


    const deleteUserDetails = (object) => {

        Swal.fire({
            title: 'Are you sure?',
            text: 'Do you really want to Delete this profile?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // User confirmed the deletion
                const url = "https://backend.shubadinam.com/delete/userdetails/" + object.profileid;

                axios.delete(url)
                    .then((response) => {
                        const result = response.data;
                        // Swal.fire('Deleted!', result.message, 'success').then(()=>{
                        window.location.reload();
                        // })

                    })
                    .catch((error) => {
                        console.log(error);
                        // Swal.fire('Error', 'An error occurred while deleting.', 'error');
                    });
            }
        });
    };


    const Navigate = useNavigate()

    const signOut = () => {
        localStorage.removeItem("isAuthenticated")
        localStorage.removeItem("fkey")
        Navigate("/")
    }

    const logoBtn = () => {
        Navigate("/")
    }

    // MENU BAR

    const [isOpenMenu, setOpenMenu] = useState(false);


    // edit seciton
    const [isEdit, SetOpenEdit] = useState(false)
    const [isUserEdit, SetOpenUserEdit] = useState(false)

    const [selectedObject, setSelectedObject] = useState(null);
    const [selectedseUserObject, setSelectedUserObject] = useState(null);



    const clickEdit = (object) => {


        // if (object.userRelation === "Myself") {
        //     alert("lfhdhfdlfhlh")
        //     SetOpenUserEdit(true)
        //     SetOpenEdit(false);
        //     setSelectedUserObject(object);
        // } else {
        SetOpenEdit(true);
        SetOpenUserEdit(false)
        setSelectedObject(object);
        // }

    };


    const clickEditUser = (object) => {
        console.log(object);

        if (object.userRelation == "Myself") {
            SetOpenUserEdit(true)
            SetOpenEdit(false);
            setSelectedUserObject(object);
        }

    };


    const onSave = (editedData) => {

        console.log(editedData);

        const url = "https://backend.shubadinam.com/edit/reldetails/" + editedData.profileid;


        axios.put(url, editedData)
            .then((response) => {
                const result = response.data.message;
                // window.location.reload()

                Swal.fire({
                    title: 'Edit Profile',
                    text: result,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                    .then(() => {
                        window.location.reload()
                        SetOpenEdit(false);
                    })
                    .catch(() => {
                        window.location.reload()
                    })
                // alert(result)


            })
            .catch((error) => {
                console.log(error);
            });


    };

    const onSaveUser = (editedData) => {

        console.log(editedData);

        const url = "https://backend.shubadinam.com/edit/userdetails/" + editedData.firstuserid;


        axios.put(url, editedData)
            .then((response) => {
                const result = response.data.message;
                // window.location.reload()

                Swal.fire({
                    title: 'Edit Profile',
                    text: result,
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
                    .then(() => {
                        window.location.reload()
                        SetOpenUserEdit(false);
                    })
                    .catch(() => {
                        window.location.reload()
                    })
                // alert(result)


            })
            .catch((error) => {
                console.log(error);
            });

        SetOpenUserEdit(false);
    };



    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 8; // Number of rows per page
    const tbodyRef = useRef(); // Create a ref for the tbody element


    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);

        if (tbodyRef.current) {
            const tableBodyTop = tbodyRef.current.offsetTop;

            // Scroll to the top of the tbody
            window.scrollTo({
                top: tableBodyTop,
                behavior: 'smooth', // You can use 'auto' for instant scrolling
            });
        }

    };

    const paginatedData = data ? data.slice(currentPage * rowsPerPage, (currentPage + 1) * rowsPerPage) : [];





    return (

        <div className="overall-container-home">
            <div className="overall-percent-home">
                <ScrollToTop smooth />
                {/* <HeaderComponent></HeaderComponent> */}


                <div className="container-header-home">


                    <div className="container-1">
                        {/* MENU BAR CONDITION */}

                        <div className={`menu-bar-container ${isOpenMenu ? 'open' : ''}`}>
                            <Hamburger toggled={isOpenMenu} toggle={setOpenMenu}>

                            </Hamburger>

                            {isOpenMenu && (

                                <div className="menu-bar-cnt">

                                    <div className="menu-bar-items" data-aos="fade-up">
                                        <NavLink to="/home" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>Home</NavLink>
                                    </div>
                                    <div className="menu-bar-items" data-aos="fade-up">
                                        <NavLink to="/about-us" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>About Us</NavLink>
                                    </div>

                                    <div className="dropdown menu-bar-items" data-aos="fade-up">
                                        <NavLink to="/blogs"> <button className="dropbtn">Blogs</button></NavLink>
                                        {/* <p className="dropbtn">Blogs</p> */}
                                        <div className="dropdown-content">
                                            <NavLink to="/nakshatra-foods">1. Nakshatra Food</NavLink>
                                            <NavLink to="/nakshatra-characteristics">2. Nakshatra Characteristics</NavLink>
                                            <NavLink to="/nakshatra-deities">3. Nakshatra Deity</NavLink>
                                            <NavLink to="/nakshatra-likes-dislikes">4. Nakshatra Likes and Dislikes</NavLink>
                                            <NavLink to="/tithi-foods">5. Tithi Food</NavLink>
                                            <NavLink to="/tithi-characteristics">6. Tithi Characteristics</NavLink>
                                            <NavLink to="/tithi-deities">7. Tithi Deity</NavLink>
                                            <NavLink to="/tithi-likes-dislikes">8. Tithi Likes and Dislikes</NavLink>
                                            <NavLink to="/meanings-of-janma-nakshatra">9. Meanings of Janma Nakshatra</NavLink>
                                        </div>
                                    </div>

                                    <div className="menu-bar-items" >
                                        <NavLink to="/faq" className={({ isActive }) => isActive ? "menu-link hightlight-link" : "menu-link"}>FAQ</NavLink>
                                    </div>

                                    <div className="menu-bar-items">
                                        <NavLink className="home-signout" to="/" onClick={() => signOut()}>Sign Out</NavLink>
                                    </div>

                                    {/* <div className="menu-bar-items" data-aos="fade-up">
                                            <label className="reg-btn-menu" onClick={() => scrollToSection()}>Register</label>
                                        </div>
                                        <div className="menu-bar-items">
                                            <label className="reg-btn-menu open-btn" onClick={() => siginbackReg()}>Sign In</label>
                                        </div> */}

                                </div>
                            )}
                        </div>




                        <div className="wordpress" onContextMenu={(e) => e.preventDefault()}>
                            <img className="logo-fit-header" src={require("../images/New Shubadinam Logo/Shubadinam White.png")} width="100%" height="100%" onClick={() => logoBtn()} />
                        </div>

                        <div className="headers">
                            <NavLink to="/home" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Home</NavLink>
                            <NavLink to="/about-us" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>About Us</NavLink>


                            <div className="dropdown">
                                <NavLink to="/blogs"> <button className="dropbtn">Blog</button></NavLink>
                                {/* <p className="dropbtn">Blog</p> */}
                                <div className="dropdown-content">
                                    <NavLink to="/nakshatra-foods">1. Nakshatra Food</NavLink>
                                    <NavLink to="/nakshatra-characteristics">2. Nakshatra Characteristics</NavLink>
                                    <NavLink to="/nakshatra-deities">3. Nakshatra Deity</NavLink>
                                    <NavLink to="/nakshatra-likes-dislikes">4. Nakshatra Likes and Dislikes</NavLink>
                                    <NavLink to="/tithi-foods">5. Tithi Food</NavLink>
                                    <NavLink to="/tithi-characteristics">6. Tithi Characteristics</NavLink>
                                    <NavLink to="/tithi-deities">7. Tithi Deity</NavLink>
                                    <NavLink to="/tithi-likes-dislikes">8. Tithi Likes and Dislikes</NavLink>
                                    <NavLink to="/meanings-of-janma-nakshatra">9. Meanings of Janma Nakshatra</NavLink>
                                </div>
                            </div>


                            <NavLink to="/faq" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>FAQ</NavLink>
                        </div>

                        <div className="login-out">
                            <NavLink to="/" onClick={() => signOut()} style={{ textDecoration: "none", color: "white" }}>Sign Out</NavLink>
                        </div>

                    </div>





                </div >


                <div className="double-container-banner-home">

                    <video className='videoPlayer' autoPlay loop muted onContextMenu={(e) => e.preventDefault()}>
                        <source src={require("../videos/intro-shub.mp4")} type="video/mp4" />
                    </video>

                </div>
                <div className="home-container">


                    <div className="table-float">
                        {/* <div> */}
                        <div className="home-cnt-body">

                            <div className="seasrch-bar">
                                {/* <div className="search-input-icon"> */}
                                {/* <FontAwesomeIcon icon={faSearch} /> */}
                                {/* </div> */}
                                <input
                                    className="search-bar"
                                    type="search"
                                    placeholder="🔍 Search anything from the table..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}

                                />


                            </div>
                            {/* <div className="overflow"> */}
                            <div className="table-container">
                                <table id="customers" className="table-header">
                                    <thead className="table-header">
                                        <tr >
                                            <th className="centered-cell">NAME</th>
                                            <th className="centered-cell">RELATION</th>
                                            <th className="centered-cell">PANCHANG</th>
                                            <th className="centered-cell">MONTH</th>
                                            {/* <th>NAKSHATRA/TITHI</th> */}
                                            {/* <th>PAKSHAM</th> */}
                                            {/* <th>TITHI</th> */}
                                            <th className="centered-cell">JANMA NAKSHATRA / JANMA TITHI</th>
                                            <th className="centered-cell">JANMA DINAM</th>
                                            <th className="centered-cell">ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-body" ref={tbodyRef}>


                                        {
                                            // tableData.globalVariable
                                            dataTwo && dataTwo
                                                .filter((object) =>
                                                    (object.userName && object.userName.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userCalender && object.userCalender.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userRelation && object.userRelation.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userMonth && object.userMonth.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.nakshatratithi && object.nakshatratithi.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userPaksham && object.userPaksham.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userTithi && object.userTithi.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userNakshatra && object.userNakshatra.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userDate && object.userDate.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relName && object.relName.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relRelation && object.relRelation.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relCalender && object.relCalender.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relMonth && object.relMonth.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relPaksham && object.relPaksham.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relTithi && object.relTithi.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relNakshathra && object.relNakshathra.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relDate && object.relDate.toLowerCase().includes(search.toLowerCase()))
                                                )

                                                .map((object, index) => (
                                                    <React.Fragment key={index}>


                                                        <tr className="all-row-size" >
                                                            <td className="centered-cell">{object.userName}</td>
                                                            <td className="centered-cell">{object.userRelation}</td>
                                                            <td className="centered-cell">{object.userCalender}</td>
                                                            <td className="month-table">{object.userMonth}</td>
                                                            {/* <td>{object.nakshatratithi}</td> */}
                                                            <td className="centered-cell">
                                                                <span className="paksham-table">{object.userPaksham}</span><br />
                                                                <span className="tithi-table">{object.userTithi}</span>
                                                                <span className="nakshatra-table">{object.userNakshathra}</span>
                                                            </td>
                                                            <td className="centered-cell dateSize" id="unique-cell">
                                                                <span style={{}}>{object.userDate}</span>
                                                            </td>
                                                            <td className="centered-cell-actions">

                                                                <OverlayTrigger
                                                                    placement="top"
                                                                    overlay={<Tooltip id="tooltip-id" className="custom-tooltip">Edit</Tooltip>}>

                                                                    <FontAwesomeIcon className="edit-icon"
                                                                        icon={faPenToSquare}
                                                                        onClick={() => clickEditUser(object)} />
                                                                </OverlayTrigger>

                                                                {/* <FontAwesomeIcon icon={faPenToSquare} onClick={() => clickEditUser(object)} /> */}

                                                                {/* <FontAwesomeIcon icon={faPenToSquare} onClick={() => clickEdit(object)}  data-bs-toggle="modal" data-bs-target="#exampleModal"/> */}
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>



                                                ))}



                                        {
                                            // tableTwoData.globalState

                                            // data && data
                                            paginatedData
                                                .filter((object) =>
                                                    (object.userName && object.userName.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userCalender && object.userCalender.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userRelation && object.userRelation.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userMasam && object.userMasam.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userDate && object.userDate.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.userNakshatra && object.userNakshatra.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relName && object.relName.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relRelation && object.relRelation.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relCalender && object.relCalender.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relMonth && object.relMonth.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relDate && object.relDate.toLowerCase().includes(search.toLowerCase())) ||
                                                    (object.relNakshathra && object.relNakshathra.toLowerCase().includes(search.toLowerCase()))
                                                )



                                                .map((object, index) => (
                                                    <React.Fragment key={index}>
                                                        <tr className="all-row-size" >
                                                            <td className="centered-cell">{object.relName}</td>
                                                            <td className="centered-cell">{object.relRelation}</td>
                                                            <td className="centered-cell">{object.relCalender}</td>
                                                            <td className="month-table">{object.relMonth}</td>
                                                            {/* <td>{object.nakshatratithi}</td> */}
                                                            <td className="centered-cell">
                                                                <span className="paksham-table">{object.relPaksham}</span><br />
                                                                <span className="tithi-table">{object.relTithi}</span>
                                                                <span className="nakshatra-table">{object.relNakshathra}</span>
                                                            </td>
                                                            <td className="centered-cell dateSize" id="unique-cell">
                                                                <span style={{}}>{object.relDate}</span>
                                                            </td>
                                                            <td className="centered-cell-actions">

                                                                <OverlayTrigger
                                                                    placement="top"
                                                                    overlay={<Tooltip id="tooltip-id" className="custom-tooltip">Edit</Tooltip>}>

                                                                    <FontAwesomeIcon className="edit-icon"
                                                                        icon={faPenToSquare}
                                                                        onClick={() => clickEdit(object)} />
                                                                </OverlayTrigger>

                                                                {/* <span style={{height:"100%"}}>|</span> */}

                                                                <OverlayTrigger
                                                                    placement="top"
                                                                    overlay={<Tooltip id="tooltip-id" className="custom-tooltip">Delete</Tooltip>}>

                                                                    <FontAwesomeIcon className="edit-icon"
                                                                        icon={faTrashCan}
                                                                        onClick={() => deleteUserDetails(object)} />
                                                                </OverlayTrigger>


                                                                {/* <FontAwesomeIcon icon={faPenToSquare} onClick={() => clickEdit(object)} /> */}
                                                            </td>


                                                        </tr>
                                                    </React.Fragment>


                                                ))}
                                    </tbody>

                                </table>
                            </div>



                            {isEdit && (
                                <div className="popup-edit">
                                    <div className="popup-content-edit">
                                        <EditComponent
                                            object={selectedObject} // Pass the selected object to the EditComponent
                                            onSave={onSave} // Pass the save function to handle changes
                                            onClose={() => SetOpenEdit(false)} // Pass a function to close the modal
                                        />
                                    </div>
                                </div>
                            )}

                            {isUserEdit && (
                                <div className="popup-edit">
                                    <div className="popup-content-edit">
                                        <UserEditComponent
                                            object={selectedseUserObject} // Pass the selected object to the EditComponent
                                            onSaveUser={onSaveUser} // Pass the save function to handle changes
                                            onClose={() => SetOpenUserEdit(false)} // Pass a function to close the modal
                                        />
                                    </div>
                                </div>
                            )}


                            <div className="pagination-container">
                                <ReactPaginate
                                    previousLabel={"Previous"}
                                    nextLabel={"Next"}
                                    breakLabel={"..."}
                                    pageCount={data ? Math.ceil(data.length / rowsPerPage) : 0}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageChange}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"}
                                    forcePage={currentPage}
                                />
                            </div>




                            <div className="table-add">
                                <label style={{ marginRight: "70px", whiteSpace: "nowrap" }} className="letters-color">Click to add your beloved ones</label>
                                <SignInComponent></SignInComponent>
                            </div>





                        </div>
                    </div>
                    <div className="ads"></div>

                </div>
                {/* <div className="empty-container-footer-home"> */}
                <FooterComponent></FooterComponent>
                {/* </div> */}
            </div>
        </div>

    );
};

export default HomeScreen;
