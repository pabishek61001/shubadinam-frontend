import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import ScrollToTop from "react-scroll-to-top";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS sty
import { useEffect } from "react";

import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"


const BoxPage8 = () => {

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
                        <img src={require("../images/boxesImages/likes22.jpg")} onContextMenu={(e) => e.preventDefault()} />
                    </div>
                    <Top20px />
                    <div className="center-container-box8">


                        <div className="box-cnt-left">
                            <h2 className="box-heading-font">Tithi Likes and Dislikes</h2>
                            <ol>
                                <p className="letters-color-subhead1" data-aos="fade-up">This a general overview of the likes and dislikes that individuals born on each Janma Tithi might have, according to Vedic astrology. Keep in mind that these are broad generalizations and should be taken as a starting point for understanding potential preferences. A person's likes and dislikes can be influenced by various factors, including cultural background, upbringing, and individual experiences.</p>

                                <li>
                                    <p className="nak-head-box4">Pratipada:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Leadership roles, initiating new projects, being in control, creativity, challenges.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Routine tasks, being overshadowed, lack of innovation, stagnant environments.</p>
                                </li>
                                <li>
                                    <p className="nak-head-box4">Dvitiya:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up"> Social interactions, learning new skills, travel, variety, building connections.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Isolation, rigid routines, stagnation, feeling restricted.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Tritiya:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Expressing creativity, trying new things, solving problems, communication, adventure.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up"> Repetition, lack of stimulation, being confined, excessive rules.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Chaturthi:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Stability, routine, organization, family time, building a secure foundation.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Sudden changes, chaos, unpredictability, feeling unrooted.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Panchami:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Growth opportunities, learning, expanding horizons, nurturing others, family gatherings.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Stagnation, narrow-mindedness, isolation, lack of support.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Shashthi:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Taking care of others, health and wellness activities, family bonding, routines.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Disruption, neglect of loved ones, feeling unappreciated, instability.</p>
                                </li>
                                <li>
                                    <p className="nak-head-box4">Saptami:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Seeking knowledge, introspection, spiritual practices, solitude, self-discovery.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Superficial interactions, distractions, busy environments, shallowness.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Ashtami:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up"> Overcoming challenges, self-improvement, deep transformation, taking responsibility.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Mediocrity, lack of motivation, being controlled by others, superficiality.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Navami:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up"> Fulfilling desires, helping others, charitable acts, harmony, family well-being.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Selfishness, discord, unfulfilled aspirations, isolation.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Dashami:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Leadership roles, achieving goals, being in control, making a positive impact.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Inefficiency, lack of direction, feeling unproductive, lack of responsibility.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Ekadashi:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Spiritual practices, self-reflection, devotion, self-purification, learning.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Materialism, superficiality, distractions, lack of purpose.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Dvadashi:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up"> Balancing material and spiritual pursuits, family bonding, introspection, traditions.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Imbalance, conflict, lack of harmony, isolation from loved ones.</p>
                                </li>
                                <li>
                                    <p className="nak-head-box4">Trayodashi:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Seeking guidance, personal growth, letting go of the past, renewal, inner transformation.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Stagnation, clinging to the past, resistance to change.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Chaturdashi:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Preparing for change, artistic expression, self-care, introspection, beauty.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Chaos, feeling rushed, neglecting self-care, lack of beauty.</p>
                                </li>

                                <li>
                                    <p className="nak-head-box4">Purnima:</p>
                                    <label className="label-likes-box4">Likes:</label>
                                    <p data-aos="fade-up">Celebration, fulfillment, spiritual pursuits, higher knowledge, expressing gratitude.</p>
                                    <label className="label-dislikes-box4">Dislikes:</label>
                                    <p data-aos="fade-up">Negativity, unfulfilled desires, lack of purpose, disharmony.</p>
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
                                            <NavLink className="remove-underline" to="/tithi-Deities">Tithi Deities</NavLink>
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
export default BoxPage8;