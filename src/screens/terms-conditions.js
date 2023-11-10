import React, { useEffect } from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ScrollToTop from "react-scroll-to-top";
import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"

const TermsAndConditionsScreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
    
    return (

        <div>
            <div className="overall-container-terms">
            <ScrollToTop smooth />
                <div className="overall-percent">
                    <HeaderComponent></HeaderComponent>
                    <Top10px/>
                    <Top20px/>
                    <div className="center-container-terms">
                        
                        <h2 className="term-title" data-aos="fade-up">Terms and Conditions</h2>
                        <ol>

                            <h2 className="letters-color-subhead">Introduction:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">Welcome to Shubadinam.com! These Terms and Conditions ("Terms") govern your use of our website ("Site")
                                and all services provided by Shubadinam.com which is part of the parent body Samanta Communications Private
                                Limited. By accessing and using our Site, you agree to comply with these Terms.</p>

                            <h2 className="letters-color-subhead">Use of the Site:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">You must be at least 18 years old to use our Site. You agree to use the Site for personal and non-commercial
                                purposes only. Any commercial use, reproduction, or distribution of the Site's content without our explicit
                                permission is strictly prohibited.</p>

                            <h2 className="letters-color-subhead">Intellectual Property:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">All content and materials on the Site, including but not limited to text, images, graphics, logos, and software,
                                are the intellectual property of Samanta Communications Private Limited and protected by applicable copyright
                                and trademark laws. You may not use, copy, or distribute any of our intellectual property without our prior
                                written consent.</p>

                            <h2 className="letters-color-subhead">User Conduct:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">You agree to use the Site responsibly and refrain from engaging in any activities that may harm, interfere with,
                                or disrupt the functioning of the Site. This includes but is not limited to hacking, spamming, or transmitting
                                harmful content.</p>

                            <h2 className="letters-color-subhead">Accuracy of Information:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">While we strive to provide accurate and up-to-date information, we make no warranties or representations about
                                the accuracy, completeness, or reliability of any content on the Site. Use the information on the Site at your
                                own risk.</p>

                            <h2 className="letters-color-subhead">Third-Party Links:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">The Site may contain links to third-party websites or services that are not controlled or endorsed by us. We are
                                not responsible for the content, privacy policies, or practices of any third-party websites or services. Use
                                them at your own risk.</p>

                            <h2 className="letters-color-subhead">Changes to the Terms:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">We reserve the right to modify or update these Terms at any time without notice. It is your responsibility to
                                review these Terms periodically for changes. By continuing to use the Site after any modifications, you agree
                                to be bound by the updated Terms.</p>

                            <h2 className="letters-color-subhead">Disclaimer of Liability:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">To the extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, or
                                special damages arising from your use of the Site or any content therein.</p>

                            <h2 className="letters-color-subhead">Governing Law and Jurisdiction:</h2>
                            <p className="letters-color-subhead1" data-aos="fade-up">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out
                                of these Terms shall be subject to the exclusive jurisdiction of the courts in Chennai / India.</p>
                        </ol>

                    </div>
                    <BottomSpace/>
                        <FooterComponent></FooterComponent>
                    
                </div>
            </div>
        </div>

    )
}
export default TermsAndConditionsScreen;