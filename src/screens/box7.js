import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"



const BoxPage7 = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);
    return (

        <div>
            <div className="overall-container">
                <ScrollToTop smooth />
                <div className="overall-percent">
                    <HeaderComponent></HeaderComponent>
                    <Top10px />
                    <br />
                    <div className="boxes-image-container">
                        <img src={require("../images/boxesImages/deity2.png")} onContextMenu={(e) => e.preventDefault()} />
                    </div>
                    <Top20px />
                    <div className="center-container-box7">


                        <div className="box-cnt-left">
                            <h2 className="box-heading-font">Tithi Dieties</h2>
                            <ol>
                                <p className="letters-color-subhead1">In Vedic astrology and Hindu tradition, each Janma Tithi is associated with a presiding deity. These deities are believed to influence the qualities and attributes of individuals born on that particular Tithi. </p>

                                <h2 className="letters-color-subhead">Here is a list of the Janma Tithis along with their corresponding presiding deities:</h2>

                                <li>
                                    <label className="label-head-box6">Pratipada:</label>
                                    <p data-aos="slide-right">Agni (the fire deity)</p>
                                </li>
                                <li>
                                    <label className="label-head-box6">Dvitiya:</label>
                                    <p data-aos="slide-right">Brahma (the creator deity)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Tritiya:</label>
                                    <p data-aos="slide-right">Gauri (an aspect of Parvati, the goddess of fertility and nourishment)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Chaturthi:</label>
                                    <p data-aos="slide-right">Yama (the god of death and justice)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Panchami:</label>
                                    <p data-aos="slide-right">Saraswati (the goddess of knowledge and arts)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Shashthi:</label>
                                    <p data-aos="slide-right">Kartikeya (the god of war and victory)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Saptami:</label>
                                    <p data-aos="slide-right">Surya (the sun god)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Ashtami:</label>
                                    <p data-aos="slide-right">Durga (the goddess of power and protection)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Navami:</label>
                                    <p data-aos="slide-right">Indra (the king of gods)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Dashami:</label>
                                    <p data-aos="slide-right">Dashavatara (the ten avatars of Lord Vishnu)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Ekadashi:</label>
                                    <p data-aos="slide-right">Rudra (an aspect of Shiva, the god of destruction)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Dvadashi:</label>
                                    <p data-aos="slide-right">Vishnu (the preserver deity)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Trayodashi:</label>
                                    <p data-aos="slide-right">Kamadeva (the god of love and desire)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Chaturdashi:</label>
                                    <p data-aos="slide-right">Shiva (the god of transformation and destruction)</p>
                                </li>

                                <li>
                                    <label className="label-head-box6">Purnima:</label>
                                    <p data-aos="slide-right">Devi (the divine goddess)</p>
                                </li>



                            </ol>
                        </div>

                        <div className="box-cnt-right">


                            <div className="ads-space">

                            </div>

                            <div className="related-searches">
                                <h5 className="related-searches-title">Related Searches</h5>
                                <div className="related-links">
                                    <ol>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-Foods">Nakshatra Foods</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-characteristics">Nakshatra Characteristics</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-deities">Nakshatra Deities</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-likes-dislikes">Nakshatra Likes and Disikes</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/tithi-foods">Tithi Foods</NavLink>
                                        </li>

                                        <li>
                                            <NavLink className="remove-underline" to="/tithi-Characteristics">Tithi Characteristics</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/tithi-likes-dislikes">Tithi Likes and Disikes</NavLink>
                                        </li>
                                    </ol>
                                </div>

                            </div>



                        </div>


                    </div>
                    <BottomSpace />
                    {/* <div className="empty-container-footer"> */}
                    <FooterComponent></FooterComponent>
                    {/* </div> */}
                </div>
            </div>
        </div>

    )
}
export default BoxPage7;