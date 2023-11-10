import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"

const BoxPage4 = () => {
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
                        <img src={require("../images/boxesImages/likes11.jpg")} onContextMenu={(e) => e.preventDefault()} />
                    </div>
                    <Top20px />
                    <div className="center-container-box4">


                        <div className="box-cnt-left">
                            <h2 className="box-heading-font">Nakshatra Likes and Dislikes</h2>

                            <ol>
                                <p className="letters-color-subhead1">This is a general overview of some tendencies and preferences associated with each Nakshatra. Keep in mind that these are general traits and may not apply to every individual born under a particular Nakshatra. The position of other planets in the birth chart and personal experiences also influence an individual's likes and dislikes.</p>

                                <p className="letters-color-subhead1">Here's a concise description:</p>
                                <li>
                                    <p className="nak-head-box4">Ashwini:</p>
                                    <label className="label-likes-box4">Likes:</label>  Adventure, speed, independence, and aiding others.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Restrictions, monotony, and stagnation.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Bharani:</p>
                                    <label className="label-likes-box4">Likes:</label> Creativity, self-expression, material comforts, and affection.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Criticism and feeling unappreciated.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Krittika:</p>
                                    <label className="label-likes-box4">Likes:</label> Competition, recognition, leadership roles, and loyalty.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Dishonesty and being controlled.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Rohini:</p>
                                    <label className="label-likes-box4">Likes:</label> Beauty, luxury, stability, and nurturing others.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Chaos and unpredictability.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Mrigashira:</p>
                                    <label className="label-likes-box4">Likes:</label> Exploration, intellectual pursuits, and spiritual topics.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Clinginess and rigidity.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Ardra:</p>
                                    <label className="label-likes-box4">Likes:</label> Intellectual debates, embracing change, and finding solutions.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Superficiality and lack of depth.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Punarvasu:</p>
                                    <label className="label-likes-box4">Likes:</label> Family, tradition, learning, and spiritual pursuits.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Confrontation and instability.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Pushya:</p>
                                    <label className="label-likes-box4">Likes:</label> Assisting others, spirituality, and comfort.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Criticism and feeling unloved.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Ashlesha:</p>
                                    <label className="label-likes-box4">Likes:</label> Loyalty, forging deep connections, and inner transformation.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Betrayal and feeling controlled.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Magha:</p>
                                    <label className="label-likes-box4">Likes:</label> Respect, authority, recognition, and generosity.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Disrespect and feeling insignificant.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Purva Phalguni:</p>
                                    <label className="label-likes-box4">Likes:</label> Romance, luxury, creativity, and celebrations.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Harsh criticism and feeling unloved.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Uttara Phalguni:</p>
                                    <label className="label-likes-box4">Likes:</label> Social gatherings, appreciation, and harmony.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Conflict and feeling unvalued.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Hasta:</p>
                                    <label className="label-likes-box4">Likes:</label> Creativity, precision, cleanliness, and organization.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Disorder and feeling misunderstood.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Chitra:</p>
                                    <label className="label-likes-box4">Likes:</label> Beauty, art, aesthetics, and innovation.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Mediocrity and feeling ignored.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Swati:</p>
                                    <label className="label-likes-box4">Likes:</label> Freedom, fairness, balance, and helping others.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Injustice and feeling restricted.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Vishakha:</p>
                                    <label className="label-likes-box4">Likes:</label> Achieving goals, social justice, and making a positive impact.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Manipulation and dishonesty.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Anuradha:</p>
                                    <label className="label-likes-box4">Likes:</label> Deep connections, loyalty, and spirituality.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Superficiality and disloyalty.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Jyeshtha:</p>
                                    <label className="label-likes-box4">Likes:</label> Power, self-improvement, and uncovering truths.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Feeling controlled and stagnant.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Mula:</p>
                                    <label className="label-likes-box4">Likes:</label> Independence, exploration, and seeking spiritual truths.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Feeling restricted and superficiality.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Purva Ashadha:</p>
                                    <label className="label-likes-box4">Likes:</label> Ambition, leadership, and self-improvement.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Laziness and feeling directionless.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Uttara Ashadha:</p>
                                    <label className="label-likes-box4">Likes:</label> Achievements, responsibility, and spiritual pursuits.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Feeling underappreciated and aimless.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Shravana:</p>
                                    <label className="label-likes-box4">Likes:</label> Learning, teaching, and self-development.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Arrogance and ignorance.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Dhanishta:</p>
                                    <label className="label-likes-box4">Likes:</label> Socializing, achieving goals, and being recognized.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Isolation and feeling undervalued.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Shatabhisha:</p>
                                    <label className="label-likes-box4">Likes:</label> Innovation, introspection, and seeking higher knowledge.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Feeling restricted and conventional.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Purva Bhadrapada:</p>
                                    <label className="label-likes-box4">Likes:</label> Depth, self-awareness, and spiritual growth.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Feeling misunderstood and undervalued.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Uttara Bhadrapada:</p>
                                    <label className="label-likes-box4">Likes:</label> Assisting others, selflessness, and spiritual pursuits.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Selfishness and arrogance.
                                </li> <br />
                                <li>
                                    <p className="nak-head-box4">Revati:</p>
                                    <label className="label-likes-box4">Likes:</label> Compassion, creativity, and spirituality.
                                    <br />
                                    <label className="label-dislikes-box4">Dislikes:</label> Cruelty and feeling ungrounded.
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
                                            <NavLink className="remove-underline" to="/nakshatra-foods">Nakshatra Foods</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-Characteristics">Nakshatra Characteristics</NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="remove-underline" to="/nakshatra-deities">Nakshatra deities</NavLink>
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
export default BoxPage4;