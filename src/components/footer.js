import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareWhatsapp, faSquareXTwitter, faSquareInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { color } from "framer-motion";


const FooterComponent = () => {



    const facebookURL = 'https://www.facebook.com/profile.php?id=61551460127861';
    const instagramURL = 'https://www.instagram.com/shubadinam/';
    const youtubeURL = 'https://www.youtube.com/channel/UCsNbE7QqnpgjI7cXOTM1mXA';
    const twitterURL = 'https://twitter.com/Shubadinam';
    const whatsappURL = 'https://www.youtube.com/channel/UCsNbE7QqnpgjI7cXOTM1mXA';





    const handleIconClick = (iconCount) => {

        if (iconCount === 1) {
            window.open(facebookURL, '_blank');
        }
        else if (iconCount === 2) {
            window.open(instagramURL, '_blank');
        }
        else if (iconCount === 3) {
            window.open(youtubeURL, '_blank');
        }
        else if (iconCount === 4) {
            window.open(twitterURL, '_blank');
        }
        else {
            window.open(whatsappURL, '_blank');
        }

    };








    return (
        <div className="empty-container">




            <div className="footer-link">

                <div className="f-link1">
                    <span className="links-title" style={{ color: "#cad2ee", fontSize: "16px", fontWeight: 700 }}>COMPANY</span>
                    <div className="links-list">
                        
                        <NavLink to="/home" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Home</NavLink>
                        <NavLink to="/about-us" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>About Us</NavLink>
                        <NavLink to="/faq" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>FAQ</NavLink>
                        <NavLink to="/whyus" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Why Us</NavLink>
                        {/* <NavLink to="/" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Sign Up</NavLink> */}
                    </div>
                </div>
                <div className="f-link2">
                    <span className="link-icons-title" style={{ color: "#cad2ee", fontSize: "16px", fontWeight: 700 }}>SOCIAL MEDIA</span>
                    <div className="link-icons">
                        <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", fontSize: "20px", cursor: 'pointer' }} onClick={() => handleIconClick(1)} />
                        <FontAwesomeIcon icon={faSquareInstagram} style={{ color: "#ffffff", fontSize: "20px", cursor: 'pointer' }} onClick={() => handleIconClick(2)} />
                        <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff", fontSize: "20px", cursor: 'pointer' }} onClick={() => handleIconClick(3)} />
                        <FontAwesomeIcon icon={faSquareXTwitter} style={{ color: "#ffffff", fontSize: "20px", cursor: 'pointer' }} onClick={() => handleIconClick(4)} />
                        <FontAwesomeIcon icon={faSquareWhatsapp} style={{ color: "#ffffff", fontSize: "20px", cursor: 'pointer' }}  />
                    </div>
                </div>


            </div>

            <div className="footer-copyright">
                <div className="footerc1">
                    <h5 className="copyright-style">Copyright © 2023 Shubadinam.com. All Rights Reserved</h5>

                </div>

                <div className="footerc2">
                    <NavLink to="/termsandconditions" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Terms and Conditions</NavLink>

                    <span style={{ color: "white", paddingRight: "10px", textIndent: "10px" }}>|</span>

                    <NavLink to="/privacypolicy" className={({ isActive }) => isActive ? "link hightlight-link" : "link"}>Privacy Policy</NavLink>
                </div>
            </div>


            <div>

            </div>

        </div>
    )
}
export default FooterComponent;