import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { NavLink } from "react-router-dom";
import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"

import ScrollToTop from "react-scroll-to-top";

const BoxPage5 = () => {

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
                        <img src={require("../images/boxesImages/food2.jpg")} onContextMenu={(e) => e.preventDefault()} />
                    </div>
                    <Top20px />
                    <div className="center-container-box5">


                        <div className="box-cnt-left">
                            <h2 className="box-heading-font" >Tithi Food</h2>
                            <ol>
                                <p className="letters-color-subhead1" data-aos="fade-up">Food preferences can vary greatly among individuals, and they are influenced by factors such as culture, personal tastes, and dietary choices. While there may be some general trends associated with each Janma Tithi, it's important to remember that these preferences are not universal and should be taken as broad generalizations.</p>

                                <h2 className="letters-color-subhead" data-aos="slide-right">Here's an overview of the food preferences that individuals born on each Janma Tithi might have according to Vedic astrology::</h2>
                                <br />


                                <h2 className="tithi-head-box5">Pratipada:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for innovative and creative dishes.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of spicy and flavorful foods.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for visually appealing presentations.</p>

                                <h2 className="tithi-head-box5">Dvitiya:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of a variety of foods from different cuisines.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Like for social dining and trying new recipes.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Inclination towards comfort foods and traditional favorites.</p>

                                <h2 className="tithi-head-box5">Tritiya:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Love for dishes that are visually appealing and creatively presented.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for foods that are both delicious and nutritious.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of meals that include a variety of textures and flavors.</p>

                                <h2 className="tithi-head-box5">Chaturthi:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for home-cooked and traditional foods.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for meals that provide comfort and familiarity.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of foods that are nourishing and easy to digest.</p>

                                <h2 className="tithi-head-box5">Panchami:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of foods that symbolize growth and abundance.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for foods that are prepared with care and love.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for dishes that include a variety of flavors and ingredients.</p>

                                <h2 className="tithi-head-box5">Shashthi:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Love for foods that are both nutritious and comforting.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for dishes that promote health and well-being.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of home-cooked meals and family recipes.</p>

                                <h2 className="tithi-head-box5">Saptami:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for foods that provide energy and vitality.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Love for meals that are balanced and nourishing.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of dishes that include fresh and natural ingredients.</p>

                                <h2 className="tithi-head-box5">Ashtami:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for foods that are filling and substantial.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for rich and flavorful dishes.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of indulgent and satisfying meals.</p>

                                <h2 className="tithi-head-box5">Navami:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Love for foods that are prepared with care and attention to detail.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for meals that are both delicious and aesthetically pleasing.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for dishes that are shared in a joyful and communal setting.</p>

                                <h2 className="tithi-head-box5">Dashami:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of foods that provide energy and stamina.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for meals that are fulfilling and satisfying.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Love for dishes that align with a healthy and active lifestyle.</p>

                                <h2 className="tithi-head-box5">Ekadashi:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for light and easily digestible foods.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for vegetarian and plant-based options.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of meals that support spiritual practices and self-purification.</p>

                                <h2 className="tithi-head-box5">Dvadashi:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Love for foods that promote balance and harmony.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for dishes that include a variety of tastes.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for meals that bring together family and traditions.</p>

                                <h2 className="tithi-head-box5">Trayodashi:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of foods that symbolize renewal and rejuvenation.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for light and detoxifying meals.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Love for dishes that include cleansing and purifying ingredients.</p>

                                <h2 className="tithi-head-box5">Chaturdashi:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for foods that are prepared with mindfulness and intention.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for meals that promote self-care and introspection.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Enjoyment of dishes that align with personal well-being.</p>

                                <h2 className="tithi-head-box5">Purnima:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Love for celebratory and festive foods.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Appreciation for foods that bring joy and fulfillment.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">- Preference for meals that include a variety of flavors and textures.</p>





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
                                            <NavLink className="remove-underline" to="/nakshatra-foods">Nakshatra Foods</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-Characteristics">Nakshatra Characteristics</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-deities">Nakshatra deities</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-likes-dislikes">Nakshatra Likes and Disikes</NavLink>
                                        </li>
                                        {/* <li>
                                        <NavLink  className="remove-underline" to="/tithi-foods">Tithi Foods</NavLink>
                                    </li> */}
                                        <li>
                                            <NavLink className="remove-underline" to="/tithi-characteristics">Tithi Characteristics</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/tithi-deities">Tithi Deities</NavLink>
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
export default BoxPage5;