import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css'; // Import AOS sty
import ScrollToTop from "react-scroll-to-top";
import { NavLink } from "react-router-dom";
import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"

const BoxPage6 = () => {

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
                        <img src={require("../images/boxesImages/char22.jpg")} onContextMenu={(e) => e.preventDefault()} />
                    </div>
                    <Top20px />
                    <div className="center-container-box6">


                        <div className="box-cnt-left">
                            <h2 className="box-heading-font">Tithi characteristics</h2>
                            <ol>
                                <p className="letters-color-subhead1" data-aos="fade-up">This is a general overview of the characteristics associated with each Janma Tithi in Vedic astrology. However, it's important to remember that these traits are broad generalizations and should be taken as a starting point rather than definitive descriptions. </p>

                                <h2 className="letters-color-subhead" data-aos="slide-right">Here's an overview of the characteristics of individuals born on each Janma Tithi:</h2>
                                <br />

                                <label className="label-head-box6">Pratipada:</label>
                                <p data-aos="fade-up"> People born on Pratipada possess an inherent spark of innovation and creativity. They have a natural leadership quality that drives them to initiate new projects and ventures. Their dynamic approach and ability to take charge make them effective problem solvers. Routine tasks may not excite them, as they thrive on novelty and challenges. They are adept at turning ideas into reality, often serving as pioneers in their endeavors.</p>


                                <label className="label-head-box6">Dvitiya:</label>
                                <p data-aos="fade-up">Those born on Dvitiya are adaptable and sociable individuals who have a knack for building relationships. Communication is their strength, and they enjoy interacting with people from various walks of life. Their versatile nature allows them to excel in different fields, as they are quick learners and love trying new things. Learning and personal growth are significant to them, and they often find themselves in roles where they can make connections and share knowledge.</p>

                                <label className="label-head-box6">Tritiya:</label>
                                <p data-aos="fade-up">Individuals born on Tritiya are blessed with artistic flair and boundless creativity. They express themselves through various forms of art and enjoy engaging in activities that allow them to explore their imagination. They are adept at finding innovative solutions to problems and are not afraid to think outside the box. Their proactive nature and ability to take action contribute to their ongoing pursuit of growth and self-improvement.</p>

                                <label className="label-head-box6">Chaturthi:</label>
                                <p data-aos="fade-up">Stability and practicality define those born on Chaturthi. They are grounded individuals who value routine and organization. Family is a central focus, and they often play a vital role in providing stability within their household. While they appreciate tradition and structure, they can also be relied upon to make practical decisions in times of uncertainty. Their reliability and responsibility make them trusted members of their community.</p>

                                <label className="label-head-box6">Panchami:</label>
                                <p data-aos="fade-up">People born on Panchami are characterized by their enthusiasm for growth and expansion. They have a hunger for knowledge and a thirst for learning. Their curiosity drives them to explore various subjects and domains, making them well-rounded individuals. Nurturing relationships is important to them, and they often find joy in nurturing their loved ones through their creativity and care.</p>

                                <label className="label-head-box6">Shashthi:</label>
                                <p data-aos="fade-up">Nurturing and protective, those born on Shashthi have a natural inclination to care for others. They prioritize the well-being of their family and loved ones and are often sought after for their dependable support. Health and wellness are significant aspects of their lives, as they strive to maintain a balance between their responsibilities and personal care. They find fulfillment in acts of service and the bonds they create with those around them.</p>

                                <label className="label-head-box6">Saptami:</label>
                                <p data-aos="fade-up">Individuals born on Saptami possess a quest for knowledge and spiritual understanding. They are introspective individuals who seek deeper meanings in life. Their analytical minds are often drawn to philosophical and spiritual topics, and they find joy in spending time alone for self-reflection. Their balanced and diplomatic nature allows them to mediate conflicts and foster harmony among others.</p>

                                <label className="label-head-box6">Ashtami:</label>
                                <p data-aos="fade-up">Born with a strong determination and ambition, those on Ashtami are not afraid of challenges. They are drawn to transformative experiences and often undergo personal growth through overcoming obstacles. Their disciplined approach enables them to rise above difficulties and emerge stronger. They are known for their leadership qualities and their ability to inspire and motivate others.</p>

                                <label className="label-head-box6">Navami:</label>
                                <p data-aos="fade-up">Individuals born on Navami have a generous and charitable spirit. They find fulfillment in helping others and are often involved in acts of service or philanthropic endeavors. Their strong moral values guide their actions, and they hold a deep sense of duty towards their family and community. Their desire to fulfill their aspirations is matched by their commitment to the well-being of those around them.</p>

                                <label className="label-head-box6">Dashami:</label>
                                <p data-aos="fade-up">Born leaders, those on Dashami possess the qualities needed to take charge and make a positive impact. They thrive in positions of authority and are motivated to achieve their goals. Their organized and goal-oriented nature enables them to tackle challenges with confidence. They are often looked up to for their strong work ethic and their ability to inspire others to contribute their best.</p>

                                <label className="label-head-box6">Ekadashi:</label>
                                <p data-aos="fade-up">People born on Ekadashi have a deep spiritual inclination and a strong desire for self-purification. They value introspection and may spend significant time engaged in meditation and spiritual practices. Their empathy and compassionate nature extend to all living beings, and they often adopt a vegetarian or plant-based lifestyle. Their pursuit of higher truths and enlightenment shapes their choices and aspirations.</p>

                                <label className="label-head-box6">Dvadashi:</label>
                                <p data-aos="fade-up">Individuals born on Dvadashi are adept at balancing material and spiritual aspects of life. They have a strong connection to family and traditions, and their actions reflect a desire for harmony and stability. Their adaptability allows them to navigate various situations, and they often play a crucial role in maintaining equilibrium within their environment.</p>

                                <label className="label-head-box6">Trayodashi:</label>
                                <p data-aos="fade-up">Born on Trayodashi, these individuals have a deep understanding of the cycles of letting go and renewal. They are inclined towards seeking guidance and insights from mentors and spiritual leaders. Their wisdom guides them in making decisions that lead to personal growth and transformation. They have a knack for simplifying complex situations and finding clarity in challenging circumstances.</p>

                                <label className="label-head-box6">Chaturdashi:</label>
                                <p data-aos="fade-up">Those born on Chaturdashi are drawn to introspection and self-care. They value preparation for change and appreciate moments of solitude to reflect on their inner thoughts. Their creative pursuits often involve artistic expressions that contribute to their well-being. They understand the importance of self-renewal and engage in practices that promote their emotional and spiritual health.</p>

                                <label className="label-head-box6">Purnima:</label>
                                <p data-aos="fade-up">Individuals born on Purnima are marked by a sense of fulfillment and celebration. They have a vibrant personality and bring joy to their surroundings. Their appreciation for life's blessings is often expressed through their creativity and artistic endeavors. They are natural hosts and enjoy bringing people together for meaningful gatherings and festivities.</p>




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
export default BoxPage6;