import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const BoxPage1 =()=>{
    return(
        
       <div>
            <div className="overall-container">
                <div className="overall-percent">
                    <HeaderComponent></HeaderComponent>
                    <div className="center-container">
                        <h1 className="letters-color">this is about screen</h1>
                        <div>
{/* <img src={require("../images/cosmos_blue.jpg")} width="100%" height="100%"/> */}
                        </div>
                    </div>
                    <div className="empty-container-footer">
                    <FooterComponent></FooterComponent>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
export default BoxPage1;