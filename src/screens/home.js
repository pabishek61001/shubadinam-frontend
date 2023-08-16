import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import DataSharingContext from "../context/data-sharing-context";
import SecondDataSharing from "../context/second-data-sharing";
import SignInComponent from "../components/signin-pop";


const HomeScreen = () => {



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


    //   const deleteUserDetails = (object) => {
    //     const url = "http://localhost:4000/delete/userdetails/" + object.profileid;
    
    //     axios.delete(url)
    //       .then((response) => {
    //         const result = response.data;
    //         alert(result.message);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //   }





    return (
        <div>
            <div className="overall-container">
                <div className="overall-percent">
                    <HeaderComponent></HeaderComponent>
                    <div className="double-container-banner-home"></div>
                    <div className="home-container">
                        <div className="table-float">
                            <div className="home-cnt-body">

                                <div className="seasrch-bar">
                                    <input
                                        className="search-bar"
                                        type="text"
                                        placeholder="Search here..."
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                    />
                                </div>
                                <div className="overflow">
                                    <table id="customers">
                                        <thead>
                                            <tr>
                                                <th>NAME</th>
                                                <th>RELATION</th>
                                                <th>PANCHANG</th>
                                                <th>MONTH</th>
                                                <th>NAKSHATRA</th>
                                                <th>BIRTH DATE</th>
                                                {/* <th>ACTIONS</th> */}
                                            </tr>
                                        </thead>
                                        <tbody>



                                            {
                                                // tableData.globalVariable
                                                dataTwo&& dataTwo
                                                    .filter((object) =>
                                                        (object.userName && object.userName.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.userCalender && object.userCalender.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.userRelation && object.userRelation.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.userMasam && object.userMasam.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.userNakshatra && object.userNakshatra.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relName && object.relName.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relRelation && object.relRelation.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relCalender && object.relCalender.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relMonth && object.relMonth.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relNakshathra && object.relNakshathra.toLowerCase().includes(search.toLowerCase()))
                                                    )

                                                    .map((object, index) => (
                                                        <React.Fragment key={index}>


                                                            <tr>
                                                                <td>{object.userName}</td>
                                                                <td>{object.userRelation}</td>
                                                                <td>{object.userCalender}</td>
                                                                <td>{object.userMonth}</td>
                                                                <td>{object.userNakshathra}</td>
                                                                <td>{object.userDate}</td>
                                                               
                                                            </tr>
                                                        </React.Fragment>

                                                    ))}

                                            {
                                                // tableTwoData.globalState
                                                data && data
                                                .filter((object) =>
                                                        (object.userName && object.userName.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.userCalender && object.userCalender.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.userRelation && object.userRelation.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.userMasam && object.userMasam.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.userNakshatra && object.userNakshatra.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relName && object.relName.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relRelation && object.relRelation.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relCalender && object.relCalender.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relMonth && object.relMonth.toLowerCase().includes(search.toLowerCase())) ||
                                                        (object.relNakshathra && object.relNakshathra.toLowerCase().includes(search.toLowerCase()))
                                                    )

                                                    .map((object, index) => (
                                                        <React.Fragment key={index}>
                                                            <tr>
                                                                <td>{object.relName}</td>
                                                                <td>{object.relRelation}</td>
                                                                <td>{object.relCalender}</td>
                                                                <td>{object.relMonth}</td>
                                                                <td>{object.relNakshathra}</td>
                                                                <td>{object.relDate}</td>
                                                                {/* <td>
                                                                    <button onClick={() => deleteUserDetails(object)}>Delete</button>
                                                                </td> */}
                                                            </tr>
                                                        </React.Fragment>

                                                    ))}



                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                        <div className="table-add">
                            <label className="letters-color">click to see for your beloved ones...</label>
                            <SignInComponent></SignInComponent>

                        </div>
                    </div>
                    <div className="empty-container-footer">
                        <FooterComponent></FooterComponent>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeScreen;
