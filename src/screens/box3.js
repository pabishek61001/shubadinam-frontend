import React from "react";
import { useEffect } from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ScrollToTop from "react-scroll-to-top";
import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"


const BoxPage3 = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);



    useEffect(() => {
        AOS.refresh();
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
                        <img src={require("../images/boxesImages/deity1.png")} onContextMenu={(e) => e.preventDefault()} />
                    </div>
                    <Top20px />


                    <div className="center-container-box3">

                        <div className="box-cnt-left">
                            <h2 className="box-heading-font">Nakshatra Deities (Presiding Dieties of Birth Star)</h2>
                            <ol>
                                <p className="letters-color-subhead1" data-aos="fade-up">In Hindu way of life, Nakshatras are lunar mansions or constellations that play a significant role in determining one's personality, behaviour, and destiny. There are 27 Nakshatras, each associated with a ruling deity.  </p>

                                <p className="letters-color-subhead1" data-aos="fade-up">The importance of Nakshatra deities lies in their spiritual and astrological significance. The ruling deity is believed to govern the qualities, characteristics, and influences of individuals born under that Nakshatra.</p>

                                <p className="letters-color-subhead1" data-aos="fade-up">Here are some key points regarding the importance of Nakshatra deities:</p>

                                <h2 className="letters-color-subhead">Divine Connection:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Nakshatra deities are revered as celestial beings with distinct attributes and powers. Associating Nakshatras with these deities establishes a profound spiritual connection between individuals and these divine entities.</p>
                                <h2 className="letters-color-subhead">Personality Traits:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">The qualities and characteristics of the ruling deities are believed to shape the personality traits and behaviors of individuals born under a specific Nakshatra. For instance, individuals born under a nurturing and protective deity may exhibit caring and nurturing tendencies in their lives.</p>
                                <h2 className="letters-color-subhead">Life Path and Guidance:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Nakshatra deities are associated with distinct life paths and purposes. Recognizing the attributes of the ruling deity can offer valuable guidance and direction to individuals as they navigate their life's journey.</p>
                                <h2 className="letters-color-subhead">Astrological Interpretation:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Astrological readings consider the ruling deity of a Nakshatra to provide insights into an individual's potential strengths, challenges, and significant life experiences, enhancing the depth of astrological understanding.</p>
                                <h2 className="letters-color-subhead">Rituals and Offerings:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Devotees may engage in rituals, prayers, and offerings to honor the ruling deity of their Nakshatra. These practices are a way to seek blessings, protection, and guidance, fostering a deeper connection with the divine in various aspects of life.</p>
                                <h2 className="letters-color-subhead">Cultural and Spiritual Significance:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Nakshatra deities hold immense cultural and spiritual importance within Hindu traditions. Regarded as celestial beings embodying divine attributes, they are integral to Vedic practices and astrology, enriching the spiritual fabric of life.</p>
                                <h2 className="letters-color-subhead">Connection with Cosmic Forces:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Nakshatra deities are believed to encompass specific cosmic forces and energies that influence human existence. Acknowledging and honoring these deities aids individuals in aligning themselves with the broader cosmic order and its intricate workings.</p>
                                <p className="letters-color-subhead1" data-aos="fade-up">While the significance of Nakshatra deities is subjective and may vary based on individual viewpoints and cultural backgrounds, the decision to connect with and honor these divine entities remains deeply personal.</p>

                                <br />
                                <br />

                                <h2 className="letters-color-subhead">Here are the Nakshatras and their presiding deities:</h2>
                                <h2 className="letters-color-subhead">Certainly, here is a list of the 27 Nakshatras along with their presiding deities:</h2>

                                <br />


                                <h2 className="letters-color-subhead">Ashwini (Asvini) - The Horse Twins</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deities: Ashvins (Nasatya and Dasra), divine twin horsemen associated with health and medicine.
                                </p>

                                <h2 className="letters-color-subhead">Bharani - The Bearing Star</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Yama, the god of death and justice.
                                </p>

                                <h2 className="letters-color-subhead">Krittika - The Cutter</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Agni, the god of fire.
                                </p>

                                <h2 className="letters-color-subhead">Rohini - The Reddish One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Brahma, the creator god.
                                </p>

                                <h2 className="letters-color-subhead">Mrigashira (Mrigasira) - The Deer's Head</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Chandra, the moon god.
                                </p>

                                <h2 className="letters-color-subhead">Ardra - The Moist One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Rudra (Shiva), the god of destruction and transformation.
                                </p>

                                <h2 className="letters-color-subhead">Punarvasu - The Return of the Light</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Aditi, the mother of all gods.
                                </p>

                                <h2 className="letters-color-subhead">Pushya - The Nourisher</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Brihaspati, the teacher of the gods.
                                </p>

                                <h2 className="letters-color-subhead">Ashlesha - The Embrace</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Naga, the serpent deity.
                                </p>

                                <h2 className="letters-color-subhead">Magha - The Mighty One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Pitris, the ancestral spirits.
                                </p>

                                <h2 className="letters-color-subhead">Purva Phalguni - The Former Reddish One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Bhaga, the god of marital bliss and fortune.
                                </p>

                                <h2 className="letters-color-subhead">Uttara Phalguni - The Latter Reddish One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Aryaman, the god of contracts and unions.
                                </p>

                                <h2 className="letters-color-subhead">Hasta - The Hand</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Savitar, the god of creativity and craftsmanship.
                                </p>

                                <h2 className="letters-color-subhead">Chitra - The Bright One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Twashtar, the celestial architect.
                                </p>

                                <h2 className="letters-color-subhead">Swati - The Independent One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Vayu, the wind god.
                                </p>

                                <h2 className="letters-color-subhead">Vishakha - The Forked Branch</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Indra and Agni, representing strength and transformation.
                                </p>

                                <h2 className="letters-color-subhead">Anuradha - The Disciple of the Divine Spark</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Mitra, the god of friendship and partnership.
                                </p>

                                <h2 className="letters-color-subhead">Jyeshta (Jyeshtha) - The Eldest</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Indra, the king of gods.
                                </p>

                                <h2 className="letters-color-subhead">Mula - The Root</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Nirriti, the goddess of destruction and chaos.
                                </p>

                                <h2 className="letters-color-subhead">Purva Ashadha - The Former Invincible One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Apas, the water deity.
                                </p>

                                <h2 className="letters-color-subhead">Uttara Ashadha - The Latter Invincible One</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Vishvadevas, the universal gods.
                                </p>

                                <h2 className="letters-color-subhead">Shravana - The Hearing</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Vishnu, the preserver god.
                                </p>

                                <h2 className="letters-color-subhead">Dhanishta (Shatabhisha) - The Drummer</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Vasus, the elemental deities.
                                </p>

                                <h2 className="letters-color-subhead">Shatabhisha (Dhanishta) - The Hundred Stars</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Varuna, the god of cosmic order and water.
                                </p>

                                <h2 className="letters-color-subhead">Purva Bhadrapada - The Former Beautiful Foot</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Aja Ekapada, the one-footed goat, symbolizing divine sacrifice.
                                </p>

                                <h2 className="letters-color-subhead">Uttara Bhadrapada - The Latter Beautiful Foot</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Ahirbudhnya, the serpent or dragon of the deep.
                                </p>

                                <h2 className="letters-color-subhead">Revati - The Wealthy</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">
                                    - Presiding Deity: Pushan, the god of nourishment and journeys.
                                </p>



                            </ol>
                        </div>

                        <div className="box-cnt-right">
                           

                            <div className="ads-space">

                            </div>

                            <div className="related-searches">
                                <h5 className="related-searches-title">Related Searches</h5>
                                <div  className="related-links">
                                <ol>
                                    <li>
                                        <NavLink  className="remove-underline" to="/nakshatra-foods">Nakshatra Foods</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  className="remove-underline" to="/nakshatra-Characteristics">Nakshatra Characteristics</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  className="remove-underline" to="/nakshatra-likes-dislikes">Nakshatra Likes and Disikes</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  className="remove-underline" to="/tithi-foods">Tithi Foods</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  className="remove-underline" to="/tithi-characteristics">Tithi Characteristics</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  className="remove-underline" to="/tithi-deities">Tithi Deities</NavLink>
                                    </li>
                                    <li>
                                        <NavLink  className="remove-underline" to="/tithi-likes-dislikes">Tithi Likes and Disikes</NavLink>
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
export default BoxPage3;