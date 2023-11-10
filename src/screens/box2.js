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

const BoxPage2 = () => {
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
                    <Top10px />
                    <br />
                    <div className="boxes-image-container">
                        <img src={require("../images/boxesImages/char1.jpg")} onContextMenu={(e) => e.preventDefault()} />                    </div>
                    <Top20px />

                    <HeaderComponent></HeaderComponent>
                    <div className="center-container-box2">

                        <div className="box-cnt-left">

                            <h2 className="box-heading-font">Nakshatra Characteristics</h2>
                            <ol>
                                <p className="letters-color-subhead1" data-aos="fade-up">This is a general overview of the characteristics associated with each Janma Nakshatra or Birth Star in Vedic astrology. However, it's important to remember that these traits are broad generalizations and should be taken as a starting point rather than definitive descriptions. </p>

                                <h2 className="letters-color-subhead">Here's an overview of the characteristics of individuals born on each Janma Nakshatra:</h2>

                                <h2 className="letters-color-subhead">Ashwini (Asvini):</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Ashwini Nakshatra are often characterized by their dynamic energy and self-motivated nature. Their quick wit and innate curiosity position them as natural initiators and leaders. They hold a deep desire to heal and nurture others, reflecting the compassionate energy of the divine twin horsemen, the Ashvins.</p>
                                <h2 className="letters-color-subhead">Bharani:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Those born under Bharani Nakshatra exhibit a determined and strong-willed disposition. With a profound sense of responsibility, they tend to be protective of their loved ones. While drawn to traditions and rituals for stability, they also possess a creative and artistic facet that finds expression in various forms.</p>
                                <h2 className="letters-color-subhead">Krittika:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Krittika Nakshatra combine determination with a fiery energy. Their strong ethical compass compels them to stand up for justice. As natural leaders seeking recognition, they possess an intrinsic need for acknowledgment. Their connection to the deity Agni signifies their transformative nature and their thirst for personal growth.</p>
                                <h2 className="letters-color-subhead">Rohini:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Rohini Nakshatra radiate gentleness, affection, and nurturing qualities. Drawn to beauty and comfort, they flourish in stable environments. Their creative inclinations are evident, and they possess a strong sense of artistic creativity. Their link to Brahma, the creator god, symbolizes their potential to introduce novel ideas and concepts.</p>
                                <h2 className="letters-color-subhead">Mrigashira (Mrigasira):</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Mrigashira Nakshatra possess an inquisitive and explorative nature. Their curiosity fuels a love for learning, while adaptability enables them to connect effortlessly with diverse individuals. The symbol of the deer's head reflects their graceful navigation through life's experiences.</p>
                                <h2 className="letters-color-subhead">Ardra:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Ardra Nakshatra exude deep emotional and intellectual intensity. Driven by a strong sense of purpose, they embrace transformation and excel in analytical fields. Their connection to Rudra (Shiva) symbolizes their capacity for both destruction and regeneration, a powerful force driving personal growth.</p>
                                <h2 className="letters-color-subhead">Punarvasu:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Punarvasu Nakshatra possess a nurturing and empathetic demeanor. Their desire to offer comfort and support to others is paramount. Adaptable and versatile, they thrive in various circumstances. The connection to Aditi, the mother of all gods, reflects their universal approach to care and nurturing.</p>
                                <h2 className="letters-color-subhead">Pushya:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Those born under Pushya Nakshatra are characterized by their nurturing, responsible, and compassionate traits. Anchored in strong family values, they naturally care for loved ones. They excel in roles involving guidance and mentorship, embodying the wisdom of Brihaspati, the teacher of the gods.</p>
                                <h2 className="letters-color-subhead">Ashlesha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Ashlesha Nakshatra possess a unique blend of cunning intelligence and emotional depth. Their finesse in navigating social situations is underpinned by adaptability. A strong attachment to family roots and traditions is characteristic, aligned with the transformative and secretive energy of the Naga (serpent).</p>
                                <h2 className="letters-color-subhead">Magha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Magha Nakshatra exude a regal and authoritative presence. Deep respect for tradition and heritage is inherent, enabling them to excel in leadership and organizational roles. Their connection to the Pitris (ancestral spirits) signifies their awareness of the past's impact on the present.</p>
                                <h2 className="letters-color-subhead">Purva Phalguni:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Those born under Purva Phalguni Nakshatra often charm with their creativity and charisma. A love for beauty and aesthetics is prominent, while a generous and loving nature fosters meaningful social connections. Their connection to Bhaga, the god of marital bliss, underlines their pursuit of harmonious relationships.</p>
                                <h2 className="letters-color-subhead">Uttara Phalguni:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Uttara Phalguni Nakshatra exhibit a strong sense of duty and responsibility. Their dedication to commitments is matched by pragmatism and an organized approach to life. Their connection to Aryaman, the god of contracts, underscores their commitment to honoring promises.</p>
                                <h2 className="letters-color-subhead">Hasta:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Hasta Nakshatra display skillfulness, adaptability, and creativity. Their pursuit of mastery in chosen fields drives them to excel, while attention to detail and precision define their approach. Their connection to Savitar, the god of craftsmanship, reflects their ability to create with care.</p>
                                <h2 className="letters-color-subhead">Chitra:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Chitra Nakshatra epitomize artistry, creativity, and innovation. They possess a fervent desire for self-expression, excelling in domains involving design and aesthetics. Their charismatic presence draws others in, with a connection to Twashtar, the celestial architect, symbolizing their ability to shape their own reality.</p>
                                <h2 className="letters-color-subhead">Swati:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Swati Nakshatra radiate a balanced and harmonious nature. Their strong sense of justice and fairness makes them adept at navigating diverse situations. Diplomatic and adaptable, they embody the qualities of Vayu, the wind god, embracing a free-spirited and versatile approach to life.</p>
                                <h2 className="letters-color-subhead">Vishakha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Vishakha Nakshatra are driven and goal-oriented. Their determination fuels ambitions, while networking and forming connections come naturally. The connection to Indra and Agni underscores their ability to balance power and transformation in their pursuits.</p>
                                <h2 className="letters-color-subhead">Anuradha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Anuradha Nakshatra are known for their loyalty, compassion, and supportiveness. Deep and meaningful relationships are their forte. Upholding justice and integrity, their connection to Mitra, the god of friendship, highlights their skill in fostering and maintaining harmonious connections.</p>
                                <h2 className="letters-color-subhead">Jyeshta (Jyeshtha):</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Jyeshta Nakshatra embody self-respect and authority. They tackle challenges head-on with determination, displaying a drive for learning and growth. Their connection to Indra, the king of gods, signifies their leadership potential and inner strength.</p>
                                <h2 className="letters-color-subhead">Mula:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Mula Nakshatra are driven by curiosity and a thirst for exploration. They delve into uncovering hidden truths and experiencing transformation, leading to personal growth. Their connection to Nirriti reflects their adeptness at navigating challenges and finding hidden potentials.</p>
                                <h2 className="letters-color-subhead">Purva Ashadha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Purva Ashadha Nakshatra possess ambition and a clear purpose. They overcome obstacles with determination while remaining adaptable. Their connection to Apas, the water deity, symbolizes their ability to flow like water, adapting to different situations.</p>
                                <h2 className="letters-color-subhead">Uttara Ashadha:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Uttara Ashadha Nakshatra hold a strong work ethic and a sense of responsibility. Disciplined and committed to their goals, they aim to make a positive impact on society. Their connection to the Vishvadevas reflects their universal outlook and contributions.</p>
                                <h2 className="letters-color-subhead">Shravana:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Shravana Nakshatra are diligent and attentive, characterized by keen observation and strong listening skills. Their deep respect for tradition and values aligns with their sense of duty, guided by their connection to Vishnu, the preserver god.</p>
                                <h2 className="letters-color-subhead">Dhanishta (Shatabhisha):</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Dhanishta Nakshatra exhibit a practical and organized approach. They excel in efficient endeavors and are often innovative and creative. Their connection to Vasus, the elemental deities, signifies their connection to fundamental building blocks of life.</p>
                                <h2 className="letters-color-subhead">Shatabhisha (Dhanishta):</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Shatabhisha Nakshatra possess a distinct and unconventional perspective. They challenge norms and embrace forward-thinking ideas. Their connection to Varuna reflects their deep connection to cosmic order and spirituality.</p>
                                <h2 className="letters-color-subhead">Purva Bhadrapada:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Purva Bhadrapada Nakshatra possess a philosophical and introspective nature. They seek spiritual truths and approach life with empathy and compassion. Their connection to Aja Ekapada reflects their potential for profound transformation and self-sacrifice.</p>
                                <h2 className="letters-color-subhead">Uttara Bhadrapada:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">Individuals born under Uttara Bhadrapada Nakshatra possess a mysterious and spiritual essence. Drawn to mystical practices, they seek deeper meanings in life. Their connection to Ahirbudhnya reflects their deep connection to hidden wisdom.</p>
                                <h2 className="letters-color-subhead">Revati:</h2>
                                <p className="letters-color-subhead1" data-aos="fade-up">People born under Revati Nakshatra embody a gentle and nurturing disposition. Compassion and caring for others come naturally to them. Their deep empathy and healing qualities are reflected in their connection to Pushan, the protector and guide.</p>
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
export default BoxPage2;