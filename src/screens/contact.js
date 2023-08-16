import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";


const ContactScreen =()=>{
    return(
      <div>
            <div className="overall-container">
                <div className="overall-percent">
                    <HeaderComponent></HeaderComponent>
                    <div className="center-container">
                    <h1 className="letters-color">this is contact screen</h1>
                    </div>
                    <div className="empty-container-footer">
                    <FooterComponent></FooterComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactScreen;