import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { NavLink } from "react-router-dom";

const AboutScreen = () => {
    return (

        <div>
            <div className="overall-container-about">
                <div className="overall-percent">
                    <HeaderComponent></HeaderComponent>
                    <div className="center-container-about">
                        <h1 className="about-align">About</h1>
                        <br />
                        <ol>

                            <h2 className="letters-color-subhead">Welcome to JanmaDinam: Embracing Your Hindu Identity Through Janma Nakshatra (Birth Stars)</h2>
                            <p className="letters-color-subhead1">JanmaDinam is a small contribution towards the larger good of Retaining and Reclaiming the rich cultural heritage of Hinduism by highlighting the significance of celebrating the Birth Stars, known as Janma Nakshatras. We firmly believe that understanding and celebrating one's Birth Star is a powerful way to connect with our Hindu identity and honor the timeless wisdom of our ancestors.</p>
                            <h2 className="letters-color-subhead">Our Journey of Rediscovery:</h2>
                            <p className="letters-color-subhead1">As students we were no different from the rest of the crowd influenced by colonial Hangover. Thanks to our exposure to Sanskrit Scholars and Astikas in our family a deep desire to preserve and celebrate the ancient wisdom embedded in our Hindu traditions was kindled. JanmaDinam was born out of this desire. </p>
                            <h2 className="letters-color-subhead">Action not Gyaan:</h2>
                            <p className="letters-color-subhead1">We brain stormed on several tradition and rituals. One led to the other. We zeroed in on “Birthday vs JanmaDinam”. (Click here to read more about<NavLink to="/whyus"> “ Why JanmaDinam?”</NavLink>
                                )
                                The biggest challenge we found was the lack of knowledge about our Hindu Calendar (Panchang) amidst our Generation. So remembering a 'Birthday' was more easy than 'JanmaDinam'. We decided to make it simple. Register once and get reminders for life.
                            </p>
                            <h2 className="letters-color-subhead">Empowering You to Celebrate Your Identity:</h2>
                            <p className="letters-color-subhead1">Our primary goal is to empower you to know and cherish the unique significance of your Janma Dinam that is signified by your Janma nakshatra (Birth Star). Through our user- friendly JanmaDinam finder, you can easily get notified of the real Birthday of yourself, friends and family. </p>
                            <h2 className="letters-color-subhead">Discover the Sacred Connection:</h2>
                            <p className="letters-color-subhead1">At JanmaDinam, we believe that recognizing and celebrating your Birth Star is a sacred act of connection with the divine. By understanding the traits and qualities associated with your Nakshatra, you can cultivate a deeper appreciation for your individuality and divine purpose. ( Click Here to read More on )<NavLink to="/meanings"> “Meanings of Janma Nakshatra”</NavLink>
                                Celebrate your Janma Dinam for Good Health, Longer Life, Ample Wealth, Great fame and spiritual Wisdom as you journey through the celestial influences that shape your life.
                            </p>
                        </ol>
                    </div>
                    <div className="empty-container-footer">
                        <FooterComponent></FooterComponent>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default AboutScreen;