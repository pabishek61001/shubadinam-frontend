import React, { useState } from "react";

const UserEditComponent = ({ object, onSaveUser, onClose }) => {


    const [editUserState, SetRelFunction] = useState({
        // editUName: object.userName,
        editUGender: "",
        editURelation: "Myself",
        editUnakshatraTithi: "",
        editUrelNakshathra: "",
        editUPaksham: "",
        editUTithi: "",
        editUMonth: "",
        editUCalender: "",
        firstuserid: object.firstuserid
    })


    const [editedObject, setEditedObject] = useState(object);

    const handleInput = (event) => {
        setEditedObject({ ...editedObject, [event.target.name]: event.target.value });
        SetRelFunction({ ...editUserState, [event.target.name]: event.target.value });
    };

    const handleSave = () => {
        SetRelFunction({ ...editUserState, relationId: editedObject.firstuserid });

        // Call the onSave function to save changes
        onSaveUser(editUserState);
        console.log(editedObject.userName);
        console.log(editUserState);
    };


    const Calender = [
        {
            name: "Tamil",
            calenderCode: 1,
            month: [{
                name: "CHITHIRAI/சித்திரை",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]


            },
            {
                name: "VAIGAASI/வைகாசி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]


            },
            {
                name: "AANI/ஆனி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "AADI/ஆடி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "AAVANI/ஆவணி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "PURATTASI/புரட்டாசி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "AYPPASI/ஐப்பசி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "KARTHHIGAI/கார்த்திகை",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "MARGAZHI/மார்கழி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "THAI/தை",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "MAASI/மாசி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            },
            {
                name: "PANGUNI/பங்குனி",
                nakshathira: ["ASWINI/அஸ்வினி", "BARANI/பரணி", "KRUTHIKAI/கார்த்திகை", "ROHINI/ரோகிணி", "MIRUGASIRDAM/மிருகசீரிடம்", "THIRUVATHIRA/திருவாதிரை", "PUNARPOOSAM/புனர்பூசம்", "POOSAM/பூசம்", "AYILYAM/ஆயில்யம்", "MAGAM/மகம்", "POORAM/பூரம்", "UTHIRAM/உத்திரம்", "ASTHAM/அஸ்தம்", "CHITHIRAI/சித்திரை", "SWATHI/சுவாதி", "VISAKAM/விசாகம்", "ANUSHAM/அனுஷம்", "KETTAI/கேட்டை", "MOOLAM/மூலம்", "POORADAM/பூராடம்", "UTHIRADAM/உத்திராடம்", "THIRUVONAM/திருவோணம்", "AVITTAM/அவிட்டம்", "SADHAYAM/சதயம்", "POORATATHI/பூரட்டாதி", "UTHIRATTATHI/உத்திரட்டாதி", "REVATHI/ரேவதி"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/சுக்லபக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "PURNIMA/பௌர்ணமி"],
                    },
                    {
                        name: "KRISHNA Paksha/கிருஷ்ண பக்ஷம்",
                        tithiNames: ["PRATHAMA/பிரதமை", "DWITIYA/துவிதியை", "TRITIYA/திருதியை", "CHARTURTHI/சதுர்த்தி", "PANCHAMI/பஞ்சமி", "SHASHTHI/ஷஷ்டி", "SAPTAMI/ஸப்தமி", "ASHTAMI/அஷ்டமி", "NAVAMI/நவமி", "DASAMI/தசமி", "EKADASI/ஏகாதசி", "DVADASI/துவாதசி", "TRAYODASI/த்ரயோதசி", "CHATURDASI/சதுர்த்தசி", "AMAVASYA/அமாவாசை"]

                    }
                ]

            }

            ]
        },
        {
            name: "Malayalam",
            calenderCode: 2,
            month: [
                {
                    name: "MEENAM/മീനം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]



                },
                {
                    name: "MEDAM/മെഡാം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "EDAVAM /എദാവം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "MITHUNAM/മിഥുനം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "KARKADAKAM/കാർകിഡകാം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "CHINGAM/ചിങ്കാം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "KANNI/കാനി",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "THULAM/തുലാം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "VRISHCHIKAM/വ്രിഷിക്കാം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "DHANU/ഭാനു",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "MAKARAM/മകരം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                },
                {
                    name: "KUMBHAM/കുംഹാം",
                    nakshathira: ["ASHWINI/അശ്വതി", "BHARANI/ഭരണി", "KRITTIKA/കാർത്തിക", "ROHINI/രോഹിണി", "MRIGASHIRSHA/മകീര്യം", "ARDRA/തിരുവാതിര", "PUNARVASU/പുണർതം", "PUSHYA/പൂയം", "ASHLESHA/ആയില്യം", "MAGHA/മകം", "PURVA PHALGUNI/പൂരം", "UTTRA PHALGUNI/ഉത്രം", "HASTA/അത്തം", "CHITRA/ചിത്ര", "SWATI/ചോതി", "VISHAKA/വിശാഖം", "ANURADHA/അനിഴം", "JYESHTA/തൃക്കേട്ട", "MOOLA/മൂലം", "PURVA ASHADHA/പൂരാടം", "UTTARA ASHADHA/പൂരാടം", "SAHRAVANA/തിരുവോണം", "DHANISTHA/അവിട്ടം", "SHATABHISAA/ചതയം", "PURVA BHADRAPADA/പൂരുരുട്ടാതി", "UTTARA BHADRAPADA/പൂരുരുട്ടാതി", "REVATI/രേവതി"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/വെളുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "POORNIMA/പൂർണ്ണിമ"],
                        },
                        {
                            name: "KRISHNA PAKSHA/കറുത്ത പക്ഷം",
                            tithiNames: ["PRATHAMA/പ്രതിപദം", "DWITIYA/ദ്വിതീയം", "TRITIYA/തൃതീയം", "CHARTURTHI/ചതുർത്ഥം", "PANCHAMI/പഞ്ചമി", "SHASHTHI/ഷോഡശി", "SAPTAMI/സപ്തമി", "ASHTAMI/അഷ്ടമി", "NAVAMI/നവമി", "DASAMI/ദശമി", "EKADASI/ഏകാദശി", "DVADASI/ദ്വാദശി", "TRAYODASI/ത്രിദശി", "CHATURDASI/ചതുർദശി", "AMAVASYA/അമാവാസി"]

                        }
                    ]

                }
            ]
        },
        {
            name: "Telugu",
            calenderCode: 3,
            month: [
                {
                    name: "Chaitramu/చైత్రము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]
                },
                {
                    name: "Vaishakhamu/వైశాఖము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Jyeshtamu/జ్యేష్ఠము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Ashadamu/ఆషాఢము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Sravanamu (Adhik)/శ్రావణము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Sravanamu/శ్రావణము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Bhaadrapadamu/భాద్రపదము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Ashwayujamu/ఆశ్వయుజము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Karthikam/కార్తీకము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Margashiramu/మార్గశిరము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Pushyamu/పుష్యము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]

                },
                {
                    name: "Maghamu/మాఘము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]
                },
                {
                    name: "Phalgunamu/ఫాల్గుణము",
                    nakshathira: ["Ashwini/అశ్విని", "Bharani/భరణి", "Krittika/కృత్తిక", "Rohini/రోహిణి", "Mrigashirsha/మృగశిర", "Ardra/ఆర్ద్ర", "Punarvasu/పునర్వసు", "Pushya/పపుష్యమి", "Ashlesha/ఆశ్లేష", "Magha/మాఘ", "Purva Phalguni/పూర్వ ఫల్గుని", "Uttara Phalguni/ఉత్తర ఫల్గుని", "Hasta/హస్త", "Chitra/చిత్త", "Swati/స్వాతి", "Vishaka/విశాఖ", "Anuradha/అనురాధ", "Jyeshta/జ్యేష్ట", "Moola/మూల", "Purva Ashadha/పూర్వాషాడ", "Uttara Ashada/ఉత్తరాషాడ", "Shravana/శ్రావణ", "Dhanistha/ధనిష్ఠ", "Shatabhisaa/శతభిష", "Purva Bhadrapada/పూర్వాభాద్ర", "Uttara Bhadrapada/ఉత్తరాభాద్ర", "Revati/రేవతి"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/శుక్లపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "POURNAMI/పౌర్ణమి/పౌర్ణమి"],
                        },
                        {
                            name: "KRISHNA PAKSHA/కృష్ణపక్షం",
                            tithiNames: ["PRATHAMA/పాడ్యమి", "DWITIYA/విదియ", "TRITIYA/తదియ", "CHARTURTHI/చవితి", "PANCHAMI/పంచమి", "SHASHTHI/షష్టి", "SAPTAMI/సప్తమి", "ASHTAMI/అష్టమి", "NAVAMI/నవమి", "DASAMI/దశమి", "EKADASI/ఏకాదశి", "DVADASI/ద్వాదశి", "TRAYODASI/త్రయోదశి", "CHATURDASI/చతుర్ధశి", "AMAVASYA/అమావాస్య"]

                        }
                    ]
                }
            ]
        },
        {
            name: "Kannada",
            calenderCode: 4,
            month: [{
                name: "CHAITRA/ಚೈತ್ರ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "VAISHAKHA/ವೈಶಾಖ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "JYESHTHA/ಜ್ಯೇಷ್ಠ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "ASHADHA/ಆಷಾಢ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "SAHRAVANA/ಶ್ರಾವಣ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "BHADRAPADA/ಭಾದ್ರಪದ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "ASHWEJA/ಆಶ್ವೇಜ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "KARTIKA/ಕಾರ್ತೀಕ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "MARGASHIRSHA/ಮಾರ್ಗಶೀರ್ಷ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "PAUSHA/ಪೌಷಾ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "MAGHA/ಮಾಘ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            {
                name: "PHALGUNA/ಫಲ್ಗುಣ",
                nakshathira: ["Ashwini/ಅಶ್ವಿನಿ", "Bharani/ಭರಣಿ", "Krittika/ಕೃತ್ತಿಕಾ", "Rohini/ರೋಹಿಣಿ", "Mrigashirsha/ಮೃಗಶಿರ", "Ardra/ಆರ್ದ್ರ", "Punarvasu/ಪುನರ್ವಸು", "Pushya/ಪುಷ್ಯ", "Ashlesha/ಆಶ್ಲೇಷ", "Magha/ಮಘ", "Purva Phalguni/ಪೂರ್ವ ಫಾಲ್ಗುನಿ", "Uttara Phalguni/ಉತ್ತರ ಫಾಲ್ಗುನಿ", "Hasta/ಹಸ್ತ", "Chitra/ಚಿತ್ತ", "Swati/ಸ್ವಾತಿ", "Vishakha/ವಿಶಾಖ", "Anuradha/ಅನುರಾಧ", "Jyeshta/ಜ್ಯೇಷ್ಠ", "Mula/ಮೂಲ", "Purva Ashadha/ಪೂರ್ವಾಷಾಢ", "Uttara Ashadha/ಉತ್ತರಾಷಾಢ", "Shravana/ಶ್ರವಣ", "Dhanishta/ಧನಿಷ್ಠ", "Shatabhisha/ಶತಭಿಷ", "Purva Bhadrapada/ಪೂರ್ವ ಭಾದ್ರಪದ", "Uttara Bhadrapada/ಉತ್ತರ ಭಾದ್ರಪದ", "Revati/ರೇವತೀ"],
                Paksham: [
                    {
                        name: "SHUKLA PAKSHA/ಶುಕ್ಲಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "PURNIMA/ಪೌರ್ಣಿಮಿ"],
                    },
                    {
                        name: "KRISHNA PAKSHA/ಕೃಷ್ಣಪಕ್ಷ",
                        tithiNames: ["PRATHAMA/ಪ್ರತಿಪದ", "DWITIYA/ದ್ವಿತಿ", "TRITIYA/ತ್ರಿತೀಯ", "CHARTURTHI/ಚತುರ್ಥಿ", "PANCHAMI/ಪಂಚಮಿ", "SHASHTHI/ಷಷ್ಠಿ", "SAPTAMI/ಸಪ್ತಮಿ", "ASHTAMI/ಅಷ್ಟಮಿ", "NAVAMI/ನವಮಿ", "DASAMI/ದಶಮಿ", "EKADASI/ಏಕಾದಶಿ", "DVADASI/ದ್ವಾದಶಿ", "TRAYODASI/ತ್ರಯೋದಶಿ", "CHATURDASI/ಚತುರ್ದಶಿ", "AMAVASYA/ಅಮಾವಾಸ್ಯೆ"]

                    }
                ]


            },
            ]
        },
        {
            name: "Hindi",
            calenderCode: 5,
            month: [
                {
                    name: "CHAITRA/चैत्र",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "JYESTHA/ज्येष्ठा",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "ASHADHA/आषाढ़",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "SHRAVANA(Adhik)/श्रावण",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "SHRAVANA/श्रावण",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "BHADRAPADA/भाद्रपद",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "ASHVIN/अश्विन",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "KATIKA/कार्तिक",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "MARGASIRSA/मार्गशीर्ष",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "VAISAKHA/वैशाख",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "PAUSA/पौष",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "MAGH/माघ",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                },
                {
                    name: "PHALGUNA/फाल्गुन",
                    nakshathira:
                        [
                            "ASHWINI/अश्विनी", "BHARANI/भरणी", "KRITTIKA/कृत्तिका", "ROHINI/रोहिणी", "MRIGASHIRSHA/म्रृगशीर्षा", "ARDRA/आद्रा", "PUNARVASU/पुनर्वसु", "PUSHYA/पुष्य", "ASHLESHA/आश्लेषा", "MAGHA/मघा", "PURVA PHALGUNI/पूर्व फाल्गुनी", "UTTARA PHALGUNI/उत्तर फाल्गुनी", "HASTA/हस्त", "CHITRA/चित्रा", "SWATI/स्वाती", "VISHAKA/विशाखा", "ANURADHA/अनुराधा", "JYESHTA/ज्येष्ठा", "MOOLA/मूल", "PURVA ASHADHA/पूर्वाषाढा", "UTTARA ASHADA/उत्तराषाढा", "SHRAVANA/श्रवण", "DHANISTHA/धनिष्ठा", "SHATABHISAA/शतभिषक्", "PURVA BHADRAPADA/पूर्वभाद्रपदा", "UTTARA BHADRAPADA/उत्तरभाद्रपदा", "REVATI/रेवती"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/शुक्ल पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "PURNIMA/पूर्णिमा"]
                        },
                        {
                            name: "KRISHNA PAKSHA/कृष्ण पक्ष",
                            tithiNames: ["PRATHAMA/प्रतिपदा", "DWITIYA/द्वितीया", "TRITIYA/तृतीया", "CHARTURTHI/चतुर्थी", "PANCHAMI/पंचमी", "SHASHTHI/षष्टी", "SAPTAMI/सप्तमी", "ASHTAMI/अष्टमी", "NAVAMI/नवमी", "DASAMI/दशमी", "EKADASI/एकादशी", "DVADASI/द्वादशी", "TRAYODASI/त्रयोदशी", "CHATURDASI/चतुर्दशी", "AMAVASYA/अमावस्या"]

                        }
                    ]
                }
            ]
        },
        {
            name: "Gujarati",
            calenderCode: 6,
            month: [
                {
                    name: "CHAITRA/ચૈત્ર",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]




                },
                {
                    name: "VAISHAKHA/વૈશાખા",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "JETHA/જેઠા",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "SHRAVANA adhik/શ્રાવણ",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "SHRAVANA/શ્રાવણ",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "BHADRAVO/ભાદરવો",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "ASO/આસો",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "KARKAT/કારતક",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "MAGSHAR/માગશર",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "POSH/પોષ",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "MAHA/મહા",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },
                {
                    name: "PHAGUNA/ફાગુના",
                    nakshathira: ["Ashwini/અશ્વિની", "Bharani/ભરણી", "Krittika/કૃતિકા", "Rohini/રોહિણી", "Mrigashirsha/મૃગશીર્ષ", "Ardra/આર્દ્રા", "Punarvasu/પુનર્વસુ", "Pushya/પુષ્ય", "Ashlesha/આશ્લેષા", "Magha/માગા", "Purva Phalguni/પૂર્વા ફાલ્ગુની", "Uttara Phalguni/ઉત્તરા ફાલ્ગુની", "Hasta/હસ્તા", "Chitra/ચિત્રા", "Swati/સ્વાતિ", "Vishaka/વિશાકા", "Anuradha/અનુરાધા", "Jyeshta/જ્યેષ્ટા", "Moola/મૂલા", "Purva Ashadha/પૂર્વા અષાઢ", "Uttara Ashada/ઉત્તરા અષાડા", "Shravana/શ્રાવણ", "Dhanistha/ધનિષ્ઠા", "Shatabhisaa/શતભિષા", "Purva Bhadrapada/પૂર્વા ભાદ્રપદ", "Uttara Bhadrapada/ઉત્તરા ભાદ્રપદ", "Revati/રેવતી"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/શુક્લ પક્ષમ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "PURNIMA/પૂર્ણિમા"],
                        },
                        {
                            name: "KRISHNA PAKSHA/કૃષ્ણ પક્ષ",
                            tithiNames: ["PRATHAMA/પ્રતિપદા", "DWITIYA/દ્વિતીયા", "TRITIYA/ત્રીતીયા", "CHARTURTHI/ચતુર્થી", "PANCHAMI/પંચમી", "SHASHTHI/ષષ્ઠી", "SAPTAMI/સપ્તમી", "ASHTAMI/આષ્ટમી", "NAVAMI/નવમી", "DASAMI/દશમી", "EKADASI/એકાદશી", "DVADASI/દ્વાદશી", "TRAYODASI/ત્રયોદશી", "CHATURDASI/ચતુર્દશી", "AMAVASYA/આમાસ્યા"]

                        }
                    ]


                },

            ]
        },
        {
            name: "Bengali",
            calenderCode: 7,
            month: [
                {
                    name: "BOISHAKH/বৈশাখ",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]



                },
                {
                    name: "JOISHTHO/জ্যৈষ্ঠ",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "ASHARH/আষাঢ়",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "BHADRO/ভাদ্র",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "ASHSHIN/আশ্বিন",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "KARTIK/কার্তিক",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "AGRAHAYAN/অগ্রহায়ণ",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "POUSH/পৌষ",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "MAGH/মাঘ",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "FALGUN/ফাল্গুন",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "MAHA/મહા",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },
                {
                    name: "CHAITRA/চৈত্র",
                    nakshathira: ["ASHWINI/আশ্বিনী", "BHARANI/ভরণী", "KRITTIKA//কৃত্তিকা", "ROHINI/রোহিণী", "MRIGASHIRSHA/মৃগশিরা", "ARDRA/আর্দ্রা", "PUNARVASU/পুনর্বাসু", "PUSHYA/পুষ্য", "ASHLESHA/আশ্লেষা", "MAGHA/মঘা", "PURVA PHALGUNI/পুর্বফাল্গুনী", "UTTARA PHALGUNI/উত্তরফাল্গুনী", "HASTA/হস্ত", "CHITRA/চিত্রা", "SWATI/স্বাতি", "VISHAKA/বিশাখা", "ANURADHA/আনুরাধা", "JYESHTA/জ্যেষ্ঠা", "MOOLA/মূলা", "PURVA ASHADHA/পূর্বাষাঢ়া", "UTTARA ASHADA/উত্তরাষাঢ়া", "SHRAVANA/শ্রবণ", "DHANISTHA/ধনিষ্ঠা", "SHATABHISAA/শতভিষা", "PURVA BHADRAPADA/পূর্বভাদ্রপদা", "UTTARA BHADRAPADA/উত্তরভাদ্রপদা", "REVATI/রেবতী"],
                    Paksham: [
                        {
                            name: "SHUKLA PAKSHA/শুক্ল পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "PURNIMA/পূর্ণিমা"],
                        },
                        {
                            name: "KRISHNA PAKSHA/কৃষ্ণ পক্ষ",
                            tithiNames: ["PRATHAMA/প্রতিপদ", "DWITIYA/দ্বিতীয়া", "TRITIYA/তৃতীয়া", "CHARTURTHI/চতুর্থী", "PANCHAMI/পঞ্চমী", "SHASHTHI/ষষ্ঠী", "SAPTAMI/সপ্তমী", "ASHTAMI/অষ্টমী", "NAVAMI/নবমী", "DASAMI/দশমী", "EKADASI/একাদশী", "DVADASI/দ্বাদশী", "TRAYODASI/ত্রয়োদশী", "CHATURDASI/চতুর্দশী", "AMAVASYA/অমাবস্যা"]

                        }
                    ]
                },

            ]
        }



    ]




    const [calender, SetCalender] = useState("")


    const [nakTithi, SetNakTithi] = useState()


    const [Pakshams, SetPaksham] = useState([])

    const [tithiname, SettithiName] = useState([])

    const [month, SetMonth] = useState("")


    const [months, SetMonths] = useState([])
    const [nakTithis, SetNakTithis] = useState([])


    const [nakshathra, SetNakshathra] = useState("")

    const [nakshathras, SetNakshathras] = useState([])



    const handleCalender = (event) => {
        const calender = Calender.filter((cal, val) => {
            return cal.name == event.target.value
        });
        SetCalender(event.target.value)
        SetMonths(Calender.find(clr => clr.name === event.target.value).month)
        SetRelFunction({ ...editUserState, [event.target.name]: event.target.value });
    }

    const handleMonth = (event) => {
        SetRelFunction({ ...editUserState, [event.target.name]: event.target.value });
        SetMonth(event.target.value)
        SetNakshathras(months.find(mth => mth.name === event.target.value).nakshathira)
        SetNakTithis(months.find(tth => tth.name === event.target.value).Paksham)
    }

    const handleNakTithi = (event) => {
        SetRelFunction({ ...editUserState, [event.target.name]: event.target.value });
        SetNakTithi(event.target.value)
    }

    const handleNakshathra = (event) => {
        SetRelFunction({ ...editUserState, [event.target.name]: event.target.value });
        SetNakshathra(event.target.value)
    }

    const handlePaksham = (event) => {
        SetRelFunction({ ...editUserState, [event.target.name]: event.target.value });
        SetPaksham(event.target.value)
        SettithiName(nakTithis.find(pks => pks.name === event.target.value).tithiNames)
    }

    const handleTithi = (event) => {
        SetRelFunction({ ...editUserState, [event.target.name]: event.target.value });
    }

    return (
        <div className="edit-popup">
            <div className="edit-title">
                <h2>Edit Details</h2>
            </div>

            <div className="edit-content">
                <div className="edit-form">
                    <div className="form-group">
                        <label htmlFor="relName" className="edit-label edit-keys">Name</label>
                        <input
                            className="edit-input"
                            type="text"
                            id="relName"
                            name="editUName"
                            onChange={handleInput}
                            value={editedObject.userName}
                            readOnly
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="relGender"className="edit-label edit-keys">Gender</label>
                        <select defaultValue={""} className="edit-input" name="editUGender" onChange={handleInput}>
                            <option disabled value="">Select your Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="relRelation"className="edit-label edit-keys">Relation:</label>

                        <input
                            className="edit-input"
                            type="text"
                            id="relName"
                            name="editURelation"
                            onChange={handleInput}
                            value={editedObject.userRelation}
                            readOnly
                        />

                        {/* <select value={editedObject.userRelation}
                            readOnly defaultValue={""} className="edit-input" name="editURelation" onChange={handleInput} >
                            <option disabled value="">Select Relation</option>
                            <option value="Parents">Parents</option>
                            <option value="Friends">Friends</option>
                            <option value="Relatives">Relatives</option>
                            <option value="Spouse">Spouse</option>
                            <option value="Siblings">Siblings</option>
                            <option value="Children">Children</option>

                        </select> */}
                    </div>

                    <div className="form-group">
                        <label htmlFor="relCelebrate"className="edit-label edit-keys">What do you celebrate</label>
                        <select defaultValue={""} className="edit-input" onChange={handleNakTithi} name="editUnakshatraTithi" >
                            <option disabled value="">--Nakshatra/Tithi--</option>
                            <option value="Nakshatra">Nakshatra</option>
                            <option value="Tithi">Tithi</option>
                        </select>

                    </div>

                    <div className="form-group">
                        <label htmlFor="relPanchang"className="edit-label edit-keys">Panchang</label>
                        <select defaultValue={""} className="edit-input" onChange={handleCalender} name="editUCalender" >
                            <option disabled value={""}>--Panchang--</option>
                            {
                                Calender.map((clr, index) => (
                                    <option key={index} value={clr.name} data-calendercode={clr.calenderCode}>{clr.name}</option>
                                ))
                            }
                        </select>



                    </div>

                    <div className="form-group">
                        <label htmlFor="relMonth"className="edit-label edit-keys">Month</label>
                        <select defaultValue={""} className="edit-input" onChange={handleMonth} name="editUMonth" >
                            <option disabled value="">--Month--</option>
                            {
                                months.map((mth, index) => (
                                    <option key={index} value={mth.name}>{mth.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    {
                        nakTithi && nakTithi === "Nakshatra" ?

                            <div className="form-group">
                                <label htmlFor="relNakshatra"className="edit-label edit-keys">Nakshatra</label>
                                {/* <div className="value-input"> */}
                                    <select defaultValue={""} className="edit-input" onChange={handleNakshathra} name="editUrelNakshathra">
                                        <option disabled value={""}>--Nakshatra--</option>
                                        {
                                            nakshathras.map((nakshathra, index) => (
                                                <option key={index}>{nakshathra}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            // </div>
                            :
                            <div></div>
                    }


                    {
                        nakTithi && nakTithi === "Tithi" ?
                            <div className="nakandtithi">
                                <div className="form-group">
                                    <label htmlFor="relPaksham"className="edit-label edit-keys">Paksha</label>
                                    {/* <div className="value-input"> */}
                                        <select defaultValue={""} className="edit-input" onChange={handlePaksham} name="editUPaksham">
                                            <option disabled value={""}>--Paksha--</option>
                                            {
                                                nakTithis.map((Paksham, index) => (
                                                    <option key={index} value={Paksham.name}>{Paksham.name}</option>
                                                ))
                                            }
                                        </select>
                                    {/* </div> */}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="relTithi"className="edit-label edit-keys">Tithi</label>
                                    {/* <div className="value-input"> */}
                                        <select defaultValue={""} className="edit-input" onChange={handleTithi} name="editUTithi">
                                            <option disabled value={""}>--Tithi--</option>
                                            {
                                                tithiname.map((tithi, index) => (
                                                    <option key={index} value={tithi}>{tithi}</option>
                                                ))
                                            }
                                        </select>
                                    {/* </div> */}
                                </div>
                            </div>
                            :
                            <div></div>
                    }

                </div>

            </div>

            {/* Add more input fields and display fields here */}
            <div className="edit-buttons">
                <button className="edit-changes" onClick={handleSave}  disabled={
                    editUserState.editUCalender === "" ||
                    editUserState.editUGender === "" ||
                    editUserState.editUMonth === "" ||
                    editUserState.editURelation === "" ||
                    editUserState.editUnakshatraTithi === "" ||
                    editUserState.editUrelNakshathra === "" && editUserState.editUTithi === ""
                }>Edit Changes</button>
                <button className="edit-close" onClick={onClose}>Close</button>
            </div>

        </div>
    );
};

export default UserEditComponent;
