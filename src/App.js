import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


// css
import "./css/App.css";
import "./css/Tithi.css";
import "./css/ForgetPassword.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"

import LoginScreen from "./screens/login";
import SingupScreen from "./screens/signup";

import Rough from "./screens/sample";

import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import FaqScreen from "./screens/faq";
import PrivacyPolicyScreen from "./screens/privacy-policy";
import TermsAndConditionsScreen from "./screens/terms-conditions";
import ContactScreen from "./screens/contact";
import MeaningsPage from "./screens/meaningsofNakshatra"
// import TestimonialScreen from "./screens/testimonials";

import DataSharingContext from "./context/data-sharing-context";
import SecondDataSharing from "./context/second-data-sharing";

import AdminPage from "./screens/admin-page";
import AdminAccess from "./screens/adminAccess";

// panchangam
import TamilPanchangam from "./screens/tamilPanchangam";
import TeluguPanchangam from "./screens/teluguPanchangam";
import KannadamPanchangam from "./screens/KannadamPanchangam";
import MalayalamPanchangam from "./screens/MalayalamPanchangam";
import HindiPanchangam from "./screens/HindiPanchangam";
import GujaratiPanchangam from "./screens/GujaratiPanchangam";
import BengaliPanchangam from "./screens/Benglipanchangam";

// tithi
import TamilTithi from "../src/screens/TamilTithi";
import TelulguTithi from "../src/screens/TelulguTithi";
import KannadaTithi from "../src/screens/KannadaTithi";
import MalayalamTithi from "../src/screens/MalayalamTithi";
import HindiTithi from "../src/screens/HindiTithi";
import GujaratiTithi from "../src/screens/GujaratiTithi";
import BengaliTithi from "../src/screens/BengaliTithi";


import VerifyEmailPage from "./screens/verify-email";

import ProtectedRoute from "./screens/protectedroute";
import ForgotProtected from "./screens/ForgotProtected";

import BoxPage1 from "./screens/box1";
import BoxPage2 from "./screens/box2";
import BoxPage3 from "./screens/box3";
import BoxPage4 from "./screens/box4";
import BoxPage5 from "./screens/box5";
import BoxPage6 from "./screens/box6";
import BoxPage8 from "./screens/box8";
import BoxPage7 from "./screens/box7";
import Bg from "./screens/bg";


import PageNotFound from "./screens/404-error";
import WhyUsPage from "./screens/why-us";
import BlogScreen from "./screens/BlogScreen";
import PasswordMail from "./screens/PasswordMail";
import ChangePassword from "./screens/ChangePassword";
import Verifyforgotpassword from "./screens/Verifyforgotpassword";
import RotatingCube from "./screens/three";







const App = () => {

  

  const [globalVariable, UpdateDataShare] = useState([])
  const globalFunction = (data) => {
    UpdateDataShare(data)
  }

  const [globalState, UpdateDataPass] = useState([])
  const globalFunctionTwo = (data) => {
    UpdateDataPass(data)
  }


  return (
    
    <DataSharingContext.Provider value={{ globalFunction, globalVariable }}>
      <SecondDataSharing.Provider value={{ globalFunctionTwo, globalState }}>
        
        <BrowserRouter>
          <Routes>

            {/* <Route path="" element={<LoginScreen></LoginScreen>}></Route> */}

            <Route path="" element={
              <ProtectedRoute>
                <LoginScreen></LoginScreen>
              </ProtectedRoute>
            }></Route>

            {/* 
            <Route path="profile" 
            element={<ProtectedRoute>
              <SingupScreen></SingupScreen>
            </ProtectedRoute>
            }></Route> */}

            <Route path="profile" element={<SingupScreen></SingupScreen>}></Route>

            <Route path="home" element={
              <ProtectedRoute>
                <HomeScreen></HomeScreen>
              </ProtectedRoute>
            }></Route>

            {/* <Route path="home" element={<HomeScreen></HomeScreen>}></Route> */}



            <Route path="rough" element={<Rough></Rough>}></Route>
            <Route path="about-us" element={<AboutScreen></AboutScreen>}></Route>
            <Route path="faq" element={<FaqScreen></FaqScreen>}></Route>
            <Route path="blogs" element={<BlogScreen></BlogScreen>}></Route>
            <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
            <Route path="privacypolicy" element={<PrivacyPolicyScreen></PrivacyPolicyScreen>}></Route>
            <Route path="termsandconditions" element={<TermsAndConditionsScreen></TermsAndConditionsScreen>}></Route>
            <Route path="whyus" element={<WhyUsPage></WhyUsPage>}></Route>
            <Route path="meanings-of-janma-nakshatra" element={<MeaningsPage></MeaningsPage>}></Route>
            <Route path="forgotpassword" element={<PasswordMail></PasswordMail>}></Route>
            

            <Route path="change-password" element={
              <ForgotProtected>
                <ChangePassword></ChangePassword>
              </ForgotProtected>
            }></Route>

            {/* <Route path="changepass" element={<ChangePassword></ChangePassword>}></Route> */}


            {/* <Route path="testimonials" element={<TestimonialScreen></TestimonialScreen>}></Route> */}


            <Route path="/nakshatra-foods" element={<BoxPage1></BoxPage1>}></Route>
            <Route path="/nakshatra-characteristics" element={<BoxPage2></BoxPage2>}></Route>
            <Route path="/nakshatra-deities" element={<BoxPage3></BoxPage3>}></Route>
            <Route path="/nakshatra-likes-dislikes" element={<BoxPage4></BoxPage4>}></Route>
            <Route path="/tithi-foods" element={<BoxPage5></BoxPage5>}></Route>
            <Route path="/tithi-characteristics" element={<BoxPage6></BoxPage6>}></Route>
            <Route path="/tithi-deities" element={<BoxPage7></BoxPage7>}></Route>
            <Route path="/tithi-likes-dislikes" element={<BoxPage8></BoxPage8>}></Route>

            <Route path="/bg" element={<Bg></Bg>}></Route>


            <Route path="verify/:id" element={<VerifyEmailPage></VerifyEmailPage>}></Route>
            <Route path="verifyforgetpassword/:id" element={<Verifyforgotpassword></Verifyforgotpassword>}></Route>


            <Route path="adminaccess" element={<AdminAccess></AdminAccess>}></Route>

            <Route path="adminpage" element={<AdminPage></AdminPage>}>
              {/* PANCHANGAM */}
              <Route path="tamilpanchangam" element={<TamilPanchangam></TamilPanchangam>}></Route>
              <Route path="telugupanchangam" element={<TeluguPanchangam></TeluguPanchangam>}></Route>
              <Route path="kannadampanchangam" element={<KannadamPanchangam></KannadamPanchangam>}></Route>
              <Route path="malayalampanchangam" element={<MalayalamPanchangam></MalayalamPanchangam>}></Route>
              <Route path="gujaratipanchangam" element={<GujaratiPanchangam></GujaratiPanchangam>}></Route>
              <Route path="hindipanchangam" element={<HindiPanchangam></HindiPanchangam>}></Route>
              <Route path="bengalipanchangam" element={<BengaliPanchangam></BengaliPanchangam>}></Route>
              {/* TITHI */}
              <Route path="tamiltithi" element={<TamilTithi></TamilTithi>}></Route>
              <Route path="telugutithi" element={<TelulguTithi></TelulguTithi>}></Route>
              <Route path="kannadamtithi" element={<KannadaTithi></KannadaTithi>}></Route>
              <Route path="malayalamtithi" element={<MalayalamTithi></MalayalamTithi>}></Route>
              <Route path="gujaratitithi" element={<GujaratiTithi></GujaratiTithi>}></Route>
              <Route path="hinditithi" element={<HindiTithi></HindiTithi>}></Route>
              <Route path="bengalitithi" element={<BengaliTithi></BengaliTithi>}></Route>
            </Route>

            <Route path="three" element={<RotatingCube></RotatingCube>}></Route>


            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>


          </Routes>
        </BrowserRouter>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2681350025331153"
          crossOrigin="anonymous"></script>

        <script>
          (adsbygoogle = window.adsbygoogle || []).push({ })
        </script>



      </SecondDataSharing.Provider>
    </DataSharingContext.Provider>
  )
}
export default App;