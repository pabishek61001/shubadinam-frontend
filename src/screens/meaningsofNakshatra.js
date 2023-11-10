import React from "react";
import { useEffect } from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import ScrollToTop from "react-scroll-to-top";

import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"

const MeaningsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
    return (
        <div>
            <div className="overall-container-privacy">
            <ScrollToTop smooth  />
                <div className="overall-percent">
                    <HeaderComponent></HeaderComponent>
                    <Top10px/>
                    <Top20px/>
                    <div className="center-container-privacy">
                        <br />

                        <h2 className="meanings-heading">Janma Nakshatra (Birth Star) Meanings in Hindu Way of life</h2>
                        <br />
                        <ol>
                      
                            <p className="letters-color-subhead1" data-aos="fade-up">In Hindu way of life, each person is born under a Nakshatra. There are 27 Nakshatras in total, and they are each associated with a different deity, animal, and set of qualities.</p>
                            

                            <p className="letters-color-subhead1">Here is a brief overview of the meanings of the 27 Nakshatras:</p>

                            <p className="letters-color-subhead1" data-aos="fade-up">This is a general overview of the characteristics associated with each Janma Nakshatra or Birth Star in Vedic astrology. However, it's important to remember that these traits are broad generalizations and should be taken as a starting point rather than definitive descriptions. </p>

                            <h2 className="letters-color-subhead">Here's an overview of the characteristics of individuals born on each Janma Nakshatra:</h2>

                            <h2 className="letters-color-subhead"></h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">This is a general overview of the characteristics associated with each Janma Nakshatra or Birth Star in Vedic astrology. However, it's important to remember that these traits are broad generalizations and should be taken as a starting point rather than definitive descriptions. </p>

                            <h2 className="letters-color-subhead">Here's an overview of the characteristics of individuals born on each Janma Nakshatra:</h2>

                            <h2 className="letters-color-subhead">1. Ashwini (Horse) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">: Ashwins are the twin celestial physicians. They are associated with good health, wealth, and prosperity. People born under this nakshatra are said to be intelligent, charming, and ambitious.</p>

                            <h2 className="letters-color-subhead">2. Bharani (Constellation with a dark spot):</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Bharani is associated with the goddess Durga. She is the divine mother and the protector of the universe. People born under this nakshatra are said to be strong, courageous, and compassionate.</p>

                            <h2 className="letters-color-subhead">3. Krittika (A group of six nakshatras) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Krittika is associated with the goddess Parvati. She is the wife of Shiva and the mother of Ganesha. People born under this nakshatra are said to be creative, intelligent, and organized.</p>

                            <h2 className="letters-color-subhead">4. Rohini (The red one) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Rohini is associated with the goddess Lakshmi. She is the goddess of wealth, prosperity, and fortune. People born under this nakshatra are said to be lucky, attractive, and popular.</p>

                            <h2 className="letters-color-subhead">5. Mrigashirsha (The deer head) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Mrigashirsha is associated with the god Vishnu. He is the preserver of the universe. People born under this nakshatra are said to be wise, compassionate, and kind.</p>

                            <h2 className="letters-color-subhead">6. Ardra (Rainy season) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Ardra is associated with the god Shiva. He is the destroyer of the universe. People born under this nakshatra are said to be passionate, intense, and independent.</p>

                            <h2 className="letters-color-subhead">7. Punarvasu (The second Janma) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Punarvasu is associated with the goddess Saraswati. She is the goddess of knowledge, wisdom, and music. People born under this nakshatra are said to be intelligent, creative, and eloquent.</p>

                            <h2 className="letters-color-subhead">8. Pushya (Nourishment) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Pushya is associated with the god Brahma. He is the creator of the universe. People born under this nakshatra are said to be intelligent, generous, and kind.</p>

                            <h2 className="letters-color-subhead">9. Ashlesha (Serpent) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Ashlesha is associated with the serpent goddess Lakshmi. She is the goddess of wealth, prosperity, and fortune. People born under this nakshatra are said to be wise, intuitive, and resourceful.</p>

                            <h2 className="letters-color-subhead">10. Magha (Great) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Magha is associated with the god Indra. He is the king of the gods. People born under this nakshatra are said to be powerful, ambitious, and successful.</p>

                            <h2 className="letters-color-subhead">11. Purva Phalguni (The eastern constellation of Phalguni) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Purva Phalguni is associated with the goddess Lakshmi. She is the goddess of wealth, prosperity, and fortune. People born under this nakshatra are said to be beautiful, charming, and wealthy.</p>

                            <h2 className="letters-color-subhead">12. Uttara Phalguni (The western constellation of Phalguni) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Uttara Phalguni is associated with the god Vishnu. He is the preserver of the universe. People born under this nakshatra are said to be wise, compassionate, and kind.</p>
                            
                            <h2 className="letters-color-subhead">13. Hasta (Hand) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Hasta is associated with the goddess Lakshmi. She is the goddess of wealth, prosperity, and fortune. People born under this nakshatra are said to be generous, compassionate, and kind.</p>

                            <h2 className="letters-color-subhead">14. Chitra (A nakshatra in the constellation of Scorpio) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">IChitra is associated with the god Shiva. He is the destroyer of the universe. People born under this nakshatra are said to be passionate, intense, and independent.</p>

                            <h2 className="letters-color-subhead">15. Swati (The sound of a drum) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Swati is associated with the god Indra. He is the king of the gods. People born under this nakshatra are said to be powerful, ambitious, and successful.</p>

                            <h2 className="letters-color-subhead">16. Vishakha (The constellation with a nakshatra in the center) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Vishakha is associated with the goddess Parvati. She is the wife of Shiva and the mother of Ganesha. People born under this nakshatra are said to be creative.</p>

                            <h2 className="letters-color-subhead">17. Anuradha (The nakshatra of fame) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Anuradha is associated with the god Vishnu. He is the preserver of the universe. People born under this nakshatra are said to be talented, successful, and popular.</p>

                            <h2 className="letters-color-subhead">18. Jyeshtha (The eldest)  :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Jyeshtha is associated with the goddess Lakshmi. She is the goddess of wealth, prosperity, and fortune. People born under this nakshatra are said to be wealthy, powerful, and influential.</p>

                            <h2 className="letters-color-subhead">19. Mula (The root) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Mula is associated with the god Yama. He is the god of death. People born under this nakshatra are said to be wise, intuitive, and resourceful.</p>

                            <h2 className="letters-color-subhead">20. Purvashada (The eastern constellation of Shata) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Purvashada is associated with the god Surya. He is the god of the sun. People born under this nakshatra are said to be intelligent, creative, and confident.</p>

                            <h2 className="letters-color-subhead">21. Uttarashada (The western constellation of Shata) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Uttarashada is associated with the god Rudra. He is the god of destruction. People born under this nakshatra are said to be passionate, intense, and independent.</p>

                            <h2 className="letters-color-subhead">22. Shravana (The elephant) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Shravana is associated with the god Ganesha. He is the god of wisdom, prosperity, and good fortune. People born under this nakshatra are said to be intelligent, compassionate, and kind.</p>

                            <h2 className="letters-color-subhead">23. Dhanishtha (The wealth nakshatra) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Dhanishtha is associated with the god Kubera. He is the god of wealth. People born under this nakshatra are said to be wealthy, successful, and generous.</p>

                            <h2 className="letters-color-subhead">24. Shatabhishak (The hundred nakshatras) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Shatabhishak is associated with the god Vishnu. He is the preserver of the universe. People born under this nakshatra are said to be intelligent, creative, and organized.</p>

                            <h2 className="letters-color-subhead">25. Purva Bhadrapada (The eastern constellation of Bhadrapada) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">: Purva Bhadrapada is associated with the god Vishnu. He is the preserver of the universe. People born under this nakshatra are said to be intelligent, creative, and organized.</p>

                            <h2 className="letters-color-subhead">26. Uttara Bhadrapada (The western constellation of Bhadrapada) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Uttara Bhadrapada is associated with the god Shiva. He is the destroyer of the universe. People born under this nakshatra are said to be passionate, intense, and independent.</p>

                            <h2 className="letters-color-subhead">27. Revati (The nakshatra of wealth) :</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Revati is associated with the goddess Lakshmi. She is the goddess of wealth, prosperity, and fortune. People born under this nakshatra are said to be wealthy, successful, and generous.</p>
                        </ol>

                    </div>
                    <BottomSpace/>

                    <FooterComponent></FooterComponent>

                </div>
            </div>
        </div>
    )
}

export default MeaningsPage;