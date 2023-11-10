import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { useEffect } from "react";

import ScrollToTop from "react-scroll-to-top";


import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"
import { NavLink } from "react-router-dom";
import AdsenseComp from "../components/AdsenseComp";

AOS.init({
    duration: 500 // Notice the single quotes around '2s'
});

const BoxPage1 = () => {

    useEffect(() => {
        window.scrollTo(0, 1); // Scroll to the top when component mounts
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
                        <img src={require("../images/boxesImages/food1.jpg")} onContextMenu={(e) => e.preventDefault()} />
                    </div>

                    <Top20px />

                    <div className="center-container-box1">

                        <div className="box-cnt-left">
                            <h2 className="box-heading-font">Nakshatra Food</h2>
                            <ol>

                                <p className="letters-color-subhead1" data-aos="fade-up">In Hindu astrology, a person's birth star, also known as Nakshatra, plays a significant role in their life and is believed to influence various aspects, including food preferences. Each Nakshatra is associated with a ruling deity, animal, and symbol, and it is believed that these characteristics influence a person's nature, behaviour, and tastes, including their food choices.</p>

                                <h2 className="letters-color-subhead">Here's an overview of the food preferences associated with each of the 27 Nakshatras:</h2>

                                <h2 className="letters-color-subhead">Ashwini :</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" > People born under this Nakshatra may have a preference for energetic and easily digestible foods. They might enjoy fresh fruits, salads, and foods that provide quick bursts of energy.</p>

                                <h2 className="letters-color-subhead">Bharani:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals born under this Nakshatra might appreciate hearty and nourishing foods. They could enjoy comfort foods, rich stews, and traditional dishes.</p>

                                <h2 className="letters-color-subhead">Krittika:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Those with this Nakshatra might have a taste for spicy and tangy foods. They might enjoy bold flavors, such as chili, garlic, and pickled foods.</p>

                                <h2 className="letters-color-subhead">Rohini:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" > People born under this Nakshatra might appreciate indulgent and comfort foods. They could have a fondness for sweets, dairy products, and foods that provide emotional comfort.</p>

                                <h2 className="letters-color-subhead">Mrigashira:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals with this Nakshatra might have a preference for light and refreshing foods. They could enjoy salads, raw foods, and dishes with a variety of textures.</p>

                                <h2 className="letters-color-subhead">Ardra:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals born under the Ardra Nakshatra might find themselves drawn to foods with bold and intense flavors. They could have a liking for dishes that offer a spicy and pungent experience.</p>

                                <h2 className="letters-color-subhead">Punarvasu:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >People with the Punarvasu Nakshatra might have a fondness for foods that bring a sense of comfort and nourishment. Home-cooked meals and dishes that evoke nostalgia could be particularly appealing to them.</p>

                                <h2 className="letters-color-subhead">Pushya:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Those born under the Pushya Nakshatra might lean towards wholesome and well-balanced meals. They could have an appreciation for foods that contribute to their overall well-being.</p>

                                <h2 className="letters-color-subhead">Ashlesha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals belonging to the Ashlesha Nakshatra might have a taste for foods that hold an air of mystery and complexity. They might enjoy dishes that offer hidden flavors and unique combinations.</p>

                                <h2 className="letters-color-subhead">Magha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >People born under the Magha Nakshatra could have an inclination towards foods that exude a sense of opulence and luxury. Rich and abundant dishes might resonate with their preferences.</p>

                                <h2 className="letters-color-subhead">Purva Phalguni:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Those with the Purva Phalguni Nakshatra might appreciate foods that are not only delicious but also visually appealing. They could find joy in beautifully plated and aesthetically pleasing dishes.</p>

                                <h2 className="letters-color-subhead">Uttara Phalguni:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals born under the Uttara Phalguni Nakshatra might have an affinity for foods that promote balance and harmony. They could favor well-balanced meals that aid digestion.</p>

                                <h2 className="letters-color-subhead">Hasta:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >People with the Hasta Nakshatra might show a preference for foods that are meticulously prepared and thoughtfully presented. They might enjoy dishes with intricate and refined flavors.</p>

                                <h2 className="letters-color-subhead">Chitra:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Those born under the Chitra Nakshatra might have an appreciation for foods that are not only delicious but also artistically presented. Colorful and creatively crafted dishes might align with their tastes.</p>

                                <h2 className="letters-color-subhead">Swati:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals belonging to the Swati Nakshatra might lean towards foods that are light and delicate. They might enjoy dishes with gentle and airy flavor profiles.</p>

                                <h2 className="letters-color-subhead">Vishakha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >People born under the Vishakha Nakshatra might find themselves drawn to foods that offer a harmonious blend of flavors. Dishes that combine sweet, salty, sour, and spicy elements could be appealing to them.</p>

                                <h2 className="letters-color-subhead">Anuradha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Those with the Anuradha Nakshatra might have a liking for foods that foster deep connections and meaningful experiences. They could enjoy communal meals shared with loved ones.</p>

                                <h2 className="letters-color-subhead">Jyeshta (Jyeshtha):</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals born under the Jyeshta Nakshatra might appreciate foods with strong and distinctive flavors. Bold spices and impactful dishes might resonate with their palate.</p>

                                <h2 className="letters-color-subhead">Mula:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >People with the Mula Nakshatra might have a preference for foods that provide grounding and comfort. Dishes containing root vegetables, grains, and heartiness could be appealing to them.</p>

                                <h2 className="letters-color-subhead">Purva Ashadha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Those born under the Purva Ashadha Nakshatra might have an inclination towards foods that evoke a sense of adventure and exploration. They could be open to trying new and exotic cuisines.</p>

                                <h2 className="letters-color-subhead">Uttara Ashadha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals with the Uttara Ashadha Nakshatra might favor foods that contribute to a balanced and harmonious taste experience. They could seek out foods that support their overall well-being.</p>

                                <h2 className="letters-color-subhead">Shravana:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >People born under the Shravana Nakshatra might hold a preference for foods that are deeply rooted in tradition and heritage. Classic and time-honored dishes might resonate with them.</p>

                                <h2 className="letters-color-subhead">Dhanishta (Shatabhisha):</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Those with the Dhanishta Nakshatra might have an appreciation for foods that embrace innovation and forward-thinking. They might enjoy modern and creatively designed culinary experiences.</p>

                                <h2 className="letters-color-subhead">Shatabhisha (Dhanishta):</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals born under the Shatabhisha Nakshatra could have a liking for foods that stand out due to their unconventional and unique nature. They might enjoy dishes that offer unexpected flavors.</p>

                                <h2 className="letters-color-subhead">Purva Bhadrapada:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >People with the Purva Bhadrapada Nakshatra might prefer foods that carry a spiritual and introspective quality. They could find satisfaction in simple dishes prepared with mindfulness.</p>

                                <h2 className="letters-color-subhead">Uttara Bhadrapada:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Those born under the Uttara Bhadrapada Nakshatra might enjoy foods that encompass a deep and profound flavor profile. They might be drawn to foods that evoke a sense of mystery and depth.</p>

                                <h2 className="letters-color-subhead">Revati:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up" >Individuals with the Revati Nakshatra might lean towards foods that are gentle and soothing. They could find comfort in foods that promote relaxation and inner tranquility.</p>
                            </ol>
                        </div>

                        <div className="box-cnt-right">




                            <div className="related-searches">
                                <h5 className="related-searches-title">Related Searches</h5>
                                <div className="related-links">
                                    <ol>
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

                            <div className="ads-space">

                                {/* side rail */}

                            <ins className="adsbygoogle"
                                    style={{ display: "block" }}
                                    data-ad-client="ca-pub-2681350025331153"
                                    data-ad-slot="3244505238"
                                    data-ad-format="auto"
                                    data-full-width-responsive="true">
                                </ins>

                            </div>

                        </div>



                    </div>
                    <BottomSpace />
                    {/* <div className="empty-container-footer"> */}
                    <FooterComponent></FooterComponent>
                    {/* </div> */}
                </div>
            </div >
        </div >

    )
}
export default BoxPage1;