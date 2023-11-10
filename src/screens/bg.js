// import React, { useState } from "react";
// import axios from 'axios';

// const Bg = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOTP] = useState('');
//   const [message, setMessage] = useState('');

//   const sendOTP = () => {
//     // Send the phone number to the Node.js server for sending OTP
//     axios.post('https://backend.shubadinam.com/sendOTP', { phoneNumber })
//       .then(response => {
//         setMessage(response.data.message);
//         console.log(response);
//       })
//       .catch(error => {
//         setMessage(`Error: ${error.message}`);
//       });
//   };

//   const verifyOTP = () => {
//     // Verify the OTP entered by the user
//     axios.post('https://backend.shubadinam.com/verifyOTP', { phoneNumber, otp })
//       .then(response => {
//         setMessage(response.data.message);
//       })
//       .catch(error => {
//         setMessage(`Error: ${error.message}`);
//       });
//   };

//   return (
//     <div className="overall-container">
//       <div>
//         <h2>OTP Verification</h2>
//         <input
//           type="text"
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChange={e => setPhoneNumber(e.target.value)}
//         />
//         <br />
//         <button onClick={sendOTP}>Send OTP</button>
//         <br />
//         <input
//           type="text"
//           placeholder="Enter OTP"
//           value={otp}
//           onChange={e => setOTP(e.target.value)}
//         />
//         <br />
//         <button onClick={verifyOTP}>Verify OTP</button>
//         <br />
//         <div>{message}</div>
//       </div>
//     </div>
//   )
// }

// export default Bg;
