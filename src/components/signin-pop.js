import React, { useState, useEffect, useContext } from "react";
import HomeScreen from "../screens/home";
import DataSharingContext from "../context/data-sharing-context";
import SecondDataSharing from "../context/second-data-sharing";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {

    



    // useEffect(()=>{
    //     signInHome()
    // },[])

    // const context = useContext(DataSharingContext);

    const context = useContext(SecondDataSharing);

    const navigate = useNavigate();

    const [queryResult, setQueryResult] = useState([]);

    const [dynamicArray, setDynamicArray] = useState([])

    const defaultEmail = localStorage.getItem("email");
    // console.log(defaultEmail);

    const [dynamicState, DynamicFunction] = useState({
        userName: "",
        userEmail: defaultEmail,
        userGender: "",
        userRelation:"",
        userCalender: "",
        userMonth: "",
        userNakshathra: ""
    })

    const Calender = [
        {
            name: "Tamil",
            calenderCode: 1,
            month: [{
                name: "CHITHIRAI/சித்திரை",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]

            },
            {
                name: "VAIGAASI/வைகாசி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]

            },
            {
                name: "AANI/ஆனி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "AADI/ஆடி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "AAVANI/ஆவணி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "PURATTASI/புரட்டாசி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "AYPPASI/ஐப்பசி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "KARTHHIGAI/கார்த்திகை",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "MARGAZHI/மார்கழி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "THAI/தை",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "MAASI/மாசி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            },
            {
                name: "PANGUNI/பங்குனி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"]
            }

            ]
        },
        {
            name: "Malayalam",
            calenderCode: 2,
            month: [
                {
                    name: "MEENAM/മീനം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                    // nakshathira: ["ASWATI/അശ്വതി", "BHARANI/ഭരണി", "KAARTHIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MAKKERYAM/മകീര്യം", "THIRUVAATHIRA/തിരുവാതിര", "PUNARTHAM/പുണർതം", "POOYYAM/പൂയം", "AYILYAM/ആയില്യം", "MAKHAM/മകം", "POORAM/പൂരം", "UTHRAM/ഉത്രം", "ATHAM/അത്തം", "CHITRA/ചിത്ര", "CHOTHI/ചോതി", "VISHAAKAM/വിശാഖം", "ANIZHAM/അനിഴം", "THRIKKETTA/തൃക്കേട്ട", "MOOLAM/മൂലം", "POORADAM/പൂരാടം", "UTHRADAM/ഉത്രാടം", "THRIUVONAM/തിരുവോണം", "AVITTAM/അവിട്ടം", "CHATHAYAM/ചതയം", "POORUTTATHI/പൂരുരുട്ടാതി", "UTHARATTADHI/ഉത്രട്ടാതി", "REVATHI/രേവതി"]

                },
                {
                    name: "MEDAM/മെഡാം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "EDAVAM /എദാവം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "MITHUNAM/മിഥുനം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "KARKADAKAM/കാർകിഡകാം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "CHINGAM/ചിങ്കാം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "KANNI/കാനി",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "THULAM/തുലാം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "VRISHCHIKAM/വ്രിഷിക്കാം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "DHANU/ഭാനു",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "MAKARAM/മകരം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                },
                {
                    name: "KUMBHAM/കുംഹാം",
                    nakshathira : ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"]

                }
            ]
        },
        {
            name: "Telugu",
            calenderCode: 3,
            month: [
                {
                    name: "Chaitramu/చైత్రము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]
                },
                {
                    name: "Vaishakhamu/వైశాఖము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: " Jyeshtamu/జ్యేష్ఠము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: "Ashadamu/ఆషాఢము ",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: "Sravanamu (Adhik)/శ్రావణము ",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: "Sravanamu/శ్రావణము  ",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: " Bhaadrapadamu/భాద్రపదము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: "Ashwayujamu/ఆశ్వయుజము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: "Karthikam/కార్తీకము ",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: "Margashiramu/మార్గశిరము ",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: " Pushyamu/పుష్యము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]

                },
                {
                    name: " Maghamu/మాఘము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]
                },
                {
                    name: "Phalgunamu/ఫాల్గుణము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"]
                }
            ]
        },
        {
            name: "Kannada",
            calenderCode: 4,
            month: [{
                name: "CHAITRA/ಚೈತ್ರ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]

            },
            {
                name: "VAISHAKHA/ವೈಶಾಖ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "JYESHTHA/ಜ್ಯೇಷ್ಠ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "ASHADHA/ಆಷಾಢ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "SAHRAVANA/ಶ್ರಾವಣ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "BHADRAPADA/ಭಾದ್ರಪದ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "ASHWEJA/ಆಶ್ವೇಜ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "KARTIKA/ಕಾರ್ತೀಕ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "MARGASHIRSHA/ಮಾರ್ಗಶೀರ್ಷ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "PAUSHA/ಪೌಷಾ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "MAGHA/ಮಾಘ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            {
                name: "PHALGUNA/ಫಲ್ಗುಣ",
                nakshathira : ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"]
            },
            ]
        },
        {
            name: "Hindi",
            calenderCode: 5,
            month: [
                {
                    name: "CHAITRA/ಚೈತ್ರ",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "JYESTHA/ज्येष्ठा",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "ASHADHA/आषाढ़",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "SHRAVANA(Adhik)/श्रावण",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "SHRAVANA/श्रावण",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "BHADRAPADA/भाद्रपद",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "ASHVIN/अश्विन",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "KATIKA/कार्तिक",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "MARGASIRSA/मार्गशीर्ष",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "VAISAKHA/वैशाख",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "PAUSA/पौष",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: " MAGH/माघ",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                },
                {
                    name: "PHALGUNA/फाल्गुन",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"]
                }
            ]
        },
        {
            name: "Gujarati",
            calenderCode: 6,
            month: [
                {
                    name: "CHAITRA/ચૈત્ર",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]

                },
                {
                    name: "VAISHAKHA/વૈશાખા",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "JETHA/જેઠા",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "SHRAVANA adhik/શ્રાવણ",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "SHRAVANA/શ્રાવણ",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "BHADRAVO/ભાદરવો ",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "ASO/આસો",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "KARKAT/કારતક ",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "MAGSHAR/માગશર",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "POSH/પોષ",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: "MAHA/મહા",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                {
                    name: " PHAGUNA/ફાગુના",
                    nakshathira : ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"]
                },
                
            ]
        },
        {
            name: "Bengali",
            calenderCode: 7,
            month: [
                {
                    name: "BOISHAKH/বৈশাখ",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]


                },
                {
                    name: "JOISHTHO/জ্যৈষ্ঠ",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "ASHARH/আষাঢ়",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "BHADRO/ভাদ্র",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "ASHSHIN/আশ্বিন",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "KARTIK/কার্তিক ",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "AGRAHAYAN/অগ্রহায়ণ",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "POUSH/পৌষ ",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "MAGH/মাঘ",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "FALGUN/ফাল্গুন",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: "MAHA/મહા",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                {
                    name: " CHAITRA/চৈত্র",
                    nakshathira : ["ASHWINI/আশ্বিনী","BHARANI/ভরণী","KRITTIKA//কৃত্তিকা","ROHINI/রোহিণী","MRIGASHIRSHA/মৃগশিরা","ARDRA/আর্দ্রা","PUNARVASU/পুনর্বাসু","PUSHYA/পুষ্য","ASHLESHA/আশ্লেষা","MAGHA/মঘা","PURVA PHALGUNI/পুর্বফাল্গুনী","UTTARA PHALGUNI/উত্তরফাল্গুনী","HASTA/হস্ত","CHITRA/চিত্রা","SWATI/স্বাতি","VISHAKA/বিশাখা","ANURADHA/আনুরাধা","JYESHTA/জ্যেষ্ঠা","MOOLA/মূলা","PURVA ASHADHA/পূর্বাষাঢ়া","UTTARA ASHADA/উত্তরাষাঢ়া","SHRAVANA/শ্রবণ","DHANISTHA/ধনিষ্ঠা","SHATABHISAA/শতভিষা","PURVA BHADRAPADA/পূর্বভাদ্রপদা","UTTARA BHADRAPADA/উত্তরভাদ্রপদা","REVATI/রেবতী"]
                },
                
            ]
        }



    ]

    const [calender, SetCalender] = useState("")

    const [month, SetMonth] = useState("")

    const [nakshathra, SetNakshathra] = useState("")

    const [months, SetMonths] = useState([])
    const [nakshathras, SetNakshathras] = useState([])



    const handleCalender = (event) => {
        const calender = Calender.filter((cal, val) => {
            return cal.name == event.target.value
        });
        DynamicFunction({ ...dynamicState, [event.target.name]: event.target.value, calenderCode: calender[0].calenderCode })
        SetCalender(event.target.value)
        SetMonths(Calender.find(clr => clr.name === event.target.value).month)
    }

    const handleMonth = (event) => {
        DynamicFunction({ ...dynamicState, [event.target.name]: event.target.value })
        SetMonth(event.target.value)
        SetNakshathras(months.find(mth => mth.name === event.target.value).nakshathira)
    }

    const handleNakshathra = (event) => {
        DynamicFunction({ ...dynamicState, [event.target.name]: event.target.value })
        SetNakshathra(event.target.value)
    }

    const handleInput = (event) => {
        DynamicFunction({ ...dynamicState, [event.target.name]: event.target.value })
    }

    const { userName, userEmail, userGender,userRelation, userCalender, userMonth, userNakshathra } = dynamicState


    
    const handleSubmit = (event) => {
        event.preventDefault();
        signInHome();
    };


    const signInHome = () => {

        setDynamicArray([...dynamicArray, { userName, userEmail, userGender,userRelation, userCalender, userMonth, userNakshathra }])
        // context.globalFunction([...dynamicArray, dynamicState]);

        // navigate("/home")


        const URL = "http://localhost:4000/add"

        axios.post(URL, dynamicState)
            .then((response) => {
                const addUser = response.data
                let impId = addUser.insertedId
                console.log(impId)
                // console.log(dynamicState);
                addUserForm(impId)
            })
            .catch((error) => {
                console.log(error);
            })




        const addUserForm = (impId) => {
            const URL = `http://localhost:4000/list?userEmail=${dynamicState.userEmail}&userMonth=${dynamicState.userMonth}&userNakshathra=${dynamicState.userNakshathra}&userCalender=${dynamicState.userCalender}&impId=${impId}`;


            axios.get(URL)
                .then((response) => {
                    const getData = response.data
                    console.log(getData);
                    // setQueryResult(getData)
                    context.globalFunctionTwo(getData)
                    localStorage.setItem('myDataKey', JSON.stringify(getData));
                    window.location.reload();


                    

                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }



    useEffect(() => {
        // console.log(dynamicArray)
    }, [dynamicArray]);

    useEffect(() => {
        console.log(context);
    }, [context]);





    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">ADD</button>
            </div>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog custom-modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sign Up</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="modal-overall-container">
                            <form onSubmit={handleSubmit}>

                                <div className="title-name">
                                    <div className="key-title">Name:</div>
                                    <div className="value-input">
                                        <input className="singup-input-box" type="text" name="userName" onChange={handleInput} />
                                    </div>
                                </div>
                                <div className="title-email hidden">
                                    <div className="key-title" >Email:</div>
                                    <div className="value-input">
                                        <input className="singup-input-box hidden" type="email" placeholder="please enter user email" name="userEmail" value={defaultEmail} readOnly />
                                    </div>
                                </div>
                                <div className="title-gender">
                                    <div className="key-title">Gender:</div>
                                    <div className="value-input">
                                        <select defaultValue={""} className="singup-input-box" name="userGender" onChange={handleInput}>
                                            <option disabled value="">Select your Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="title-relation">
                                    <div className="key-title">Relation:</div>
                                    <div className="value-input">
                                        <select defaultValue={""} className="singup-input-box" name="userRelation" onChange={handleInput}>
                                            <option disabled value="">Select Relation</option>
                                            <option value="Parents">Parents</option>
                                            <option value="Friends">Friends</option>
                                            <option value="Relatives">Relatives</option>
                                            <option value="Spouse">Spouse</option>
                                            <option value="Siblings">Siblings</option>
                                            <option value="Children">Children</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div className="title-calender">
                                    <div className="key-title">Panchang:</div>
                                    <div className="value-input">
                                        <select defaultValue={""} className="singup-input-box" onChange={handleCalender} name="userCalender" >
                                            <option disabled value={""}>--Panchang--</option>
                                            {
                                                Calender.map((clr, index) => (
                                                    <option key={index} value={clr.name} data-calendercode={clr.calenderCode}>{clr.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="title-month">
                                    <div className="key-title">Month:</div>
                                    <div className="value-input">
                                        <select defaultValue={""} className="singup-input-box" onChange={handleMonth} name="userMonth" >
                                            <option disabled value="">--Month--</option>
                                            {
                                                months.map((mth, index) => (
                                                    <option key={index} value={mth.name}>{mth.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className="title-nakshathra">
                                    <div className="key-title">Nakshatra:</div>
                                    <div className="value-input">
                                        <select defaultValue={""} className="singup-input-box" onChange={handleNakshathra} name="userNakshathra">
                                            <option disabled value={""}>--Nakshatra--</option>
                                            {
                                                nakshathras.map((nakshathra, index) => (
                                                    <option key={index} value={nakshathra}>{nakshathra}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                </div>
                                </form>


                                <div className="title-signup-btn">
                                    <button onClick={() => signInHome()} className="signup-btn-style" data-bs-dismiss="modal" disabled={
                                        dynamicState.userName.length === 0 ||
                                        // dynamicState.userEmail.length === 0 ||
                                        dynamicState.userGender.length === 0 ||
                                        dynamicState.userRelation.length === 0 ||
                                        dynamicState.userCalender.length === 0 ||
                                        dynamicState.userMonth.length === 0 ||
                                        dynamicState.userNakshathra.length === 0
                                    }>click here</button>
                                </div>

                            </div>
                        </div>
                        <div className="modal-footer">
                            {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            {/* <button type="button" className="btn btn-primary">Sign up</button> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SignInComponent;