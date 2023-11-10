// import React, { useState } from 'react';
// import translate from 'google-translate-api';

// const TranslationApp = () => {
//   const [text, setText] = useState('');
//   const [translation, setTranslation] = useState('');

//   const handleTranslate = () => {
//     translate(text, { to: 'en' }) // Target language (English)
//       .then((response) => {
//         setTranslation(response.text);
//       })
//       .catch((error) => {
//         console.error('Translation error:', error);
//       });
//   };

//   return (
//     <div>
//       <h1>Text Translator</h1>
//       <div>
//         <textarea
//           placeholder="Enter text to translate"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//         />
//       </div>
//       <div>
//         <button onClick={handleTranslate}>Translate</button>
//       </div>
//       <div>
//         <p>Translation: {translation}</p>
//       </div>
//     </div>
//   );
// };

// export default TranslationApp;
