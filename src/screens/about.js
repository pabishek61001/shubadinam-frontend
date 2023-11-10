import React , {useEffect} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ScrollToTop from "react-scroll-to-top";
import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"


const AboutScreen = () => {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);

      const getStarted=()=>{
        navigate("/")
      }
    return (

        <div>
            <div className="overall-container-about">
            <ScrollToTop smooth />
                <div className="overall-percent">
                    
                    <HeaderComponent></HeaderComponent>
                    <Top10px/>
                    <Top20px/>
                    <div className="center-container-about">
                       
                        <h2 className="about-align" data-aos="fade-up">About Us</h2>
                        <br />
                        <ol>

                            <h2 className="letters-color-subhead-about" data-aos="slide-right">Welcome to Shubadinam.com: Embracing Your Hindu Identity Through Janma Nakshatra (Birth Stars)</h2>
                            <p className="letters-color-subhead1-about" data-aos="fade-up">Shubadinam is a small contribution towards the larger good of Retaining and Reclaiming the rich cultural heritage of Hinduism by highlighting the significance of celebrating the Birth Stars, known as Janma Nakshatras and Janma Tithi. We firmly believe that understanding and celebrating one's Birth Star(Janma Nakshatra)/Janma Tithi is a powerful way to connect with our Hindu identity and honor the timeless wisdom of our ancestors.</p>
                            <h2 className="letters-color-subhead-about">Our Journey of Rediscovery:</h2>
                            <p className="letters-color-subhead1-about" data-aos="fade-up">As students we were no different from the rest of the crowd influenced by colonial Hangover. Thanks to our exposure to Sanskrit Scholars and Astikas in our family a deep desire to preserve and celebrate the ancient wisdom embedded in our Hindu traditions was kindled. Shubadinam was born out of this desire. </p>
                            <h2 className="letters-color-subhead-about">Action not Gyaan:</h2>
                            <p className="letters-color-subhead1-about" data-aos="fade-up">We brain stormed on several tradition and rituals. One led to the other. We zeroed in on “Birthday vs JanmaDinam”. (Click here to read more about<NavLink to="/whyus"> “ Why Shubadinam.com?”</NavLink>
                                )
                                The biggest challenge we found was the lack of knowledge about our Hindu Calendar (Panchang) amidst our Generation. So remembering a 'Birthday' was more easy than 'JanmaDinam'. We decided to make it simple. Register once and get reminders for life.
                            </p>
                            <h2 className="letters-color-subhead-about">Empowering You to Celebrate Your Identity:</h2>
                            <p className="letters-color-subhead1-about" data-aos="fade-up">Our primary goal is to empower you to know and cherish the unique significance of your JanmaDinam that is signified by your Birth Star (Janma nakshatra)/Janma Tithi. Through our user-friendly Shubadinam finder, you can easily get notified of the real Birthday of yourself, friends and family. </p>
                            <h2 className="letters-color-subhead-about">Discover the Sacred Connection:</h2>
                            <p className="letters-color-subhead1-about" data-aos="fade-up">At Shubadinam, we believe that recognizing and celebrating your Birth Star (Janma nakshatra)/Janma Tithi is a sacred act of connection with the divine. By understanding the traits and qualities associated with your Nakshatra/Tithi, you can cultivate a deeper appreciation for your individuality and divine purpose. ( Click Here to read More on )<NavLink to="/meanings-of-janma-nakshatra"> “Meanings of Janma Nakshatra”</NavLink> Celebrate your JanmaDinam for Good Health, Longer Life, Ample Wealth, Great fame and spiritual Wisdom as you journey through the celestial influences that shape your life.
                            </p>
                            
                            <button className="getstart" onClick={()=>getStarted()}>Get Started</button>
                        </ol>
                        
                    </div>
                    <BottomSpace/>
                    {/* <div className="empty-container-footer-about"> */}
                        <FooterComponent></FooterComponent>
                    {/* </div> */}
                </div>
            </div>
        </div>

    )
}
export default AboutScreen;