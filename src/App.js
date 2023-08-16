import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./css/App.css";

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
import TestimonialScreen from "./screens/testimonials";

import DataSharingContext from "./context/data-sharing-context";
import SecondDataSharing from "./context/second-data-sharing";

import AdminPage from "./screens/admin-page";

import TamilPanchangam from "./screens/tamilPanchangam";
import TeluguPanchangam from "./screens/teluguPanchangam";
import KannadamPanchangam from "./screens/KannadamPanchangam";
import MalayalamPanchangam from "./screens/MalayalamPanchangam";
import HindiPanchangam from "./screens/HindiPanchangam";
import GujaratiPanchangam from "./screens/GujaratiPanchangam";
import BengaliPanchangam from "./screens/Benglipanchangam";



import VerifyEmailPage from "./screens/verify-email";

import ProtectedRoute from "./screens/protectedroute";

import BoxPage1 from "./screens/box1";
import BoxPage2 from "./screens/box2";
import BoxPage3 from "./screens/box3";
import BoxPage4 from "./screens/box4";
import BoxPage5 from "./screens/box5";
import BoxPage6 from "./screens/box6";
import Bg from "./screens/bg";


import PageNotFound from "./screens/404-error";
import WhyUsPage from "./screens/why-us";



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
            <Route path="" element={
              <ProtectedRoute>
                <LoginScreen></LoginScreen>
              </ProtectedRoute>
            }></Route>

            <Route path="signup" element={<SingupScreen></SingupScreen>}></Route>

            <Route path="home" element={
              <ProtectedRoute>
                <HomeScreen></HomeScreen>
              </ProtectedRoute>
            }></Route>


            <Route path="rough" element={<Rough></Rough>}></Route>
            <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
            <Route path="faq" element={<FaqScreen></FaqScreen>}></Route>
            <Route path="contact" element={<ContactScreen></ContactScreen>}></Route>
            <Route path="privacypolicy" element={<PrivacyPolicyScreen></PrivacyPolicyScreen>}></Route>
            <Route path="termsandconditions" element={<TermsAndConditionsScreen></TermsAndConditionsScreen>}></Route>
              <Route path="why-us" element={<WhyUsPage></WhyUsPage>}></Route>
              <Route path="meanings" element={<MeaningsPage></MeaningsPage>}></Route>


            {/* <Route path="testimonials" element={<TestimonialScreen></TestimonialScreen>}></Route> */}


            <Route path="/box1" element={<BoxPage1></BoxPage1>}></Route>
            <Route path="/box2" element={<BoxPage1></BoxPage1>}></Route>
            <Route path="/box3" element={<BoxPage1></BoxPage1>}></Route>
            <Route path="/box4" element={<BoxPage1></BoxPage1>}></Route>
            <Route path="/box5" element={<BoxPage1></BoxPage1>}></Route>
            <Route path="/box6" element={<BoxPage1></BoxPage1>}></Route>

            <Route path="/bg" element={<Bg></Bg>}></Route>


            <Route path="verify/:id" element={<VerifyEmailPage></VerifyEmailPage>}></Route>


            <Route path="adminpage" element={<AdminPage></AdminPage>}>
              <Route path="tamilpanchangam" element={<TamilPanchangam></TamilPanchangam>}></Route>
              <Route path="telugupanchangam" element={<TeluguPanchangam></TeluguPanchangam>}></Route>
              <Route path="kannadampanchangam" element={<KannadamPanchangam></KannadamPanchangam>}></Route>
              <Route path="malayalampanchangam" element={<MalayalamPanchangam></MalayalamPanchangam>}></Route>
              <Route path="gujaratipanchangam" element={<GujaratiPanchangam></GujaratiPanchangam>}></Route>
              <Route path="hindipanchangam" element={<HindiPanchangam></HindiPanchangam>}></Route>
              <Route path="bengalipanchangam" element={<BengaliPanchangam></BengaliPanchangam>}></Route>
            </Route>


            <Route path="*" element={<PageNotFound></PageNotFound>}></Route>


          </Routes>
        </BrowserRouter>
      </SecondDataSharing.Provider>
    </DataSharingContext.Provider>
  )
}
export default App;