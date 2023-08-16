import React, {useEffect} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const PrivacyPolicyScreen = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
      }, []);
    return (

        <div>
            <div className="overall-container">
                <div className="overall-percent">
                    <HeaderComponent></HeaderComponent>
                    <div className="center-container">
                        <br />

                        <h1>Privacy Policy</h1>
                        <ol className="letters-color-subhead">

                            <h2 className="letters-color-subhead">Introduction:</h2>
                            <p className="letters-color-subhead1">janmadinam.in values your privacy and is committed to protecting your personal information. This Privacy Policy
                                explains how we collect, use, and safeguard your information when you use our website ("Site").</p>


                            <h2 className="letters-color-subhead">Information We Collect:</h2>
                            <p className="letters-color-subhead1">We may collect personal information from you when you register on our Site, subscribe to our newsletter, or use
                                certain features of the Site. This information may include your name, email address, birthdate, and any other
                                information you voluntarily provide.</p>


                            <h2 className="letters-color-subhead">How We Use Your Information:</h2>
                            <p className="letters-color-subhead1">We use your information to provide and improve our services, respond to your inquiries, personalize your
                                experience, and send you updates and promotions related to our Site.</p>


                            <h2 className="letters-color-subhead">Third-Party Service Providers:</h2>
                            <p className="letters-color-subhead1">We may share your information with third-party service providers to assist us in operating the Site and
                                providing services to you. These providers are obligated to maintain the confidentiality and security of your
                                information.</p>


                            <h2 className="letters-color-subhead">Cookies and Similar Technologies:</h2>
                            <p className="letters-color-subhead1">We may use cookies and similar technologies to collect information about your browsing activities on the Site.
                                You can manage your cookie preferences through your browser settings.</p>


                            <h2 className="letters-color-subhead" >Data Security:</h2>
                            <p className="letters-color-subhead1">We implement industry-standard security measures to protect your information from unauthorized access,
                                disclosure, or alteration.</p>


                            <h2 className="letters-color-subhead">Children's Privacy:</h2>
                            <p className="letters-color-subhead1">Our Site is not intended for use by children under the age of 13. If we become aware that we have collected
                                personal information from a child under 13 without parental consent, we will take steps to delete that
                                information.</p>


                            <h2 className="letters-color-subhead">Changes to the Privacy Policy:</h2>
                            <p className="letters-color-subhead1">We reserve the right to modify or update this Privacy Policy at any time without notice. Any changes will be
                                effective immediately upon posting on the Site.</p>


                            <h2 className="letters-color-subhead">Contact Us:</h2>
                            <p className="letters-color-subhead1">If you have any questions or concerns about this Privacy Policy, please contact us at
                                <a href="mailto:info@janmadinam.in">info@janmadinam.in</a>.</p>

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
export default PrivacyPolicyScreen;