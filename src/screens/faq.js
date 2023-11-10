import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Top20px from "./Top20px";
import Top10px from "./Top10px";
import BottomSpace from "./BottomSpace"
import ScrollToTop from "react-scroll-to-top";

import { IonAccordion, IonAccordionGroup, IonItem, IonLabel } from '@ionic/react';




const FaqScreen = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when component mounts
  }, []);


  // ▼



  const [faqData, setFaqData] = useState([
    {
      id: 1,
      question: 'What is the difference between Birthday as per English Calendar and Janma Dinam as per Indian Calendar?',
      answer:
        'Birthday as per English calendar only takes into account the rotation of the earth around the Sun which is 365 days. In case of Janma Dinam as per Indian calendar we take into account the position of multiple celestial bodies like Sun, Moon, Earth, Stars, and Planets etc. which are also constantly rotating different axis. Hence it is more precise. The effects of these celestial bodies on earth and its beings are recognised by both science and our Shastras. For example the tides in the Sea are high on specific days like Poornima and Amavasya etc. You can find more articles about this in our blogs section.',
      isOpen: false, // Initially, the answer is hidden
    },
    {
      id: 2,
      question: 'Why birthday (Janma Dinam) as per Indian calendar is considered a Shuba Dinam to celebrate?',
      answer:
        'Birthday as per Indian Calendar falls on the day when many celestial bodies are on the same constellation as at the time of our birth. Hence it is believed that the blessings received on that day from elders and gods are more concentrated. The effects of good karma done on that day manifolds as compared to other common days. For example a paper placed under the Sun may heat and not burn. But when a Magnifying lens is placed in between, the same paper may catch fire due the concentrated stream of sun rays. You can find more articles about the effects of Nakshatras and Tithis on our personality in our blogs section.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'What is Shubadinam.com?',
      answer:
        'Shubadinam.com is a unique online platform that helps you to get notified easily about the Birth Star (Janma Nakshatra) or Birth Tithi (Janma Tithi) of your family and friends every year. It also provides insights into the significance of nakshatra or tithi in one’s life journey.',
      isOpen: false, // Initially, the answer is hidden
    },
    {
      id: 4,
      question: 'How does Shubadinam.com work?',
      answer:
        'After free registration you can add Unlimited Janma Dinam details of your Family and Friends. After this one time setup you will be receiving Notifications through Email, SMS or WhatsApp as applicable.',
      isOpen: false,
    },
    {
      id: 5,
      question: 'Is Shubadinam.com a free service?',
      answer:
        'Absolutely! The basic services of Shubadinam.com are completely free to use. Our aim is to empower individuals to embrace and celebrate their birth star heritage. To make your celebrations convenient we may provide some value added services in future that you can choose to buy if interested.',
      isOpen: false,
    },
    {
      id: 6,
      question: 'Why Shubadinam.com?',
      answer:
        (
          <div>

            <p>
              At Shubadinam, we're more than just a website. We're here to help you rediscover your roots and celebrate your Hindu identity. Imagine us as your guide on a journey to the ancient wisdom that's part of your heritage.
            </p>
            <p>
              We're not only about dates. Shubadinam shows you the magic of Birth Star (Janma nakshatra)/Janma Tithi. It's like unlocking secrets of the stars on the day you were born. These cosmic constellations are a part of you, and we're here to help you celebrate your special day, your Janmadinam.
            </p>
            <p>
              It's not just about the past, it's about making tradition a part of your daily life. We're a community that connects people who love their Hindu heritage. Join us at Shubadinam to celebrate who you are, learn about your roots and light up your unique cosmic spark.
            </p>


          </div>
        ),
      isOpen: false,
    },
  ]);

  const [faqData2, setFaqData2] = useState([
    {
      id: 1,
      question: 'What is a birth star (Janma Nakshatra)?',
      answer:
        `It is believed, a birth star (Janma Nakshatra), is a celestial entity representing the moon's position in the sky at the time of your birth. Each Nakshatra holds distinct qualities and influences that shape your personality and life path.`,
      isOpen: false, // Initially, the answer is hidden
    },
    {
      id: 2,
      question: 'How does my birth star impact me?',
      answer:
        'It is believed, your birth star has a significant impact on various aspects of your life, including character traits,strengths, and challenges. Understanding your birth star can provide valuable insights into your nature and potential.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Can I have multiple birth stars?',
      answer:
        'No, each individual has one primary birth star based on their birth time.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'What if the birth star comes twice in a month?',
      answer: (
        <div>
          According to Dharma Shastras, the birth day must be celebrated every month in the 1st year of birth.
          <ol>
            <li>
              If the birth star comes on 2 days in a solar month, the second one only must be considered as the birth day.
            </li>
            <li>
              If the birth star is on 2 days (starting from the previous day to the next day), the next day only must be considered. The sunrise coming on the day of the star determines the birth day.
            </li>
            <li>
              Even if the star is there for a few minutes on the next day, only the next day is considered as the birth day.
            </li>
            <li>
              If the birth star is there in the next day for less than 8 minutes, only then the previous day must be considered.
            </li>
            <li>
              If the birth star does not happen to be there at the time of sunrise on any day (previous day or the next morning), then one must celebrate it in the next solar month.
            </li>
          </ol>
          <br />



          For more information, please read this blog post{' '}
          <a
            href="https://jayasreesaranathan.blogspot.com/2009/04/how-to-celebrate-birthday.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            jayasreesaranathan.blogspot.com
          </a>
          .
        </div>
      ),
      isOpen: false,
    },
  ]);

  const [faqData3, setFaqData3] = useState([
    {
      id: 1,
      question: 'What is a birth Tithi?',
      answer:
        'It is believed, a birth Tithi is a lunar day calculated from the moon position in relation to the sun at the time of your birth. Tithis hold spiritual significance and guide timing for various rituals and events.',
      isOpen: false, // Initially, the answer is hidden
    },
    {
      id: 2,
      question: 'How does my birth Tithi matter?',
      answer:
        'It is believed, your birth Tithi is a reflection of the moon phase on the day you were born. It provides insights into your individual characteristics and helps you align with the moon cycles.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Should I celebrate Janma Nakhshatra or Janma Tithi?',
      answer:
        'You can Celebrate the birthday (Janma dinam) according to either Birth Star (Nakshatra) or Birth Tithi (Janma Tithi). Both are meaningful ways to connect with cosmic rhythms. It is purely as per traditional practises in family. We recommend confirming the same with elders in the family. For Example some part of Andhra Pradesh Celebrates Janma Tithi while the other part of same state celebrates Janma Nakshatra.',
      isOpen: false,
    },
  ]);

  const toggleAnswer = (id) => {

    setFaqData((prevFaqData) =>
      prevFaqData.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleAnswer2 = (id) => {

    setFaqData2((prevFaqData) =>
      prevFaqData.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  const toggleAnswer3 = (id) => {

    setFaqData3((prevFaqData) =>
      prevFaqData.map((item) =>
        item.id === id ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (

    <div className="overall-container">
      <ScrollToTop smooth/>
      <div className="overall-percent">
        <HeaderComponent></HeaderComponent>
        <Top10px />
        {/* <Top20px/> */}
        <div className="center-container-faq">

          <div className="faq-area">
            <h2 className="faq-heading-font">Frequently Asked Questions:</h2>
            <br />
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                    What is the difference between Birthday as per English Calendar and Janma Dinam as per Indian Calendar?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div class="accordion-body">
                    Birthday as per the English calendar only takes into account the rotation of the earth around the Sun, which is 365 days. In the case of Janma Dinam as per the Indian calendar, we take into account the position of multiple celestial bodies like the Sun, Moon, Earth, Stars, and Planets, etc., which are also constantly rotating on different axes. Hence, it is more precise. The effects of these celestial bodies on the earth and its beings are recognized by both science and our Shastras. For example, the tides in the sea are high on specific days like Poornima and Amavasya, etc. You can find more articles about this in our blogs section.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                    Why birthday (Janma Dinam) as per the Indian calendar is considered a Shuba Dinam to celebrate?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div class="accordion-body">
                    Birthday as per the Indian Calendar falls on the day when many celestial bodies are on the same constellation as at the time of our birth. Hence, it is believed that the blessings received on that day from elders and gods are more concentrated. The effects of good karma done on that day multiply as compared to other common days. For example, a paper placed under the Sun may heat and not burn. But when a Magnifying lens is placed in between, the same paper may catch fire due to the concentrated stream of sun rays. You can find more articles about the effects of Nakshatras and Tithis on our personality in our blogs section.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                    What is Shubadinam.com?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                  <div class="accordion-body">
                    Shubadinam.com is a unique online platform that helps you get notified easily about the Birth Star (Janma Nakshatra) or Birth Tithi (Janma Tithi) of your family and friends every year. It also provides insights into the significance of Nakshatra or Tithi in one's life journey.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                    How does Shubadinam.com work?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                  <div class="accordion-body">
                    After free registration, you can add Unlimited Janma Dinam details of your Family and Friends. After this one-time setup, you will receive Notifications through Email, SMS, or WhatsApp as applicable.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                    Is Shubadinam.com a free service?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                  <div class="accordion-body">
                    Absolutely! The basic services of Shubadinam.com are completely free to use. Our aim is to empower individuals to embrace and celebrate their birth star heritage. To make your celebrations convenient, we may provide some value-added services in the future that you can choose to buy if interested.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                    Why Shubadinam.com?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                  <div class="accordion-body">
                    <p>
                      At Shubadinam, we're more than just a website. We're here to help you rediscover your roots and celebrate your Hindu identity. Imagine us as your guide on a journey to the ancient wisdom that's part of your heritage.
                    </p>
                    <p>
                      We're not only about dates. Shubadinam shows you the magic of Birth Star (Janma Nakshatra)/Janma Tithi. It's like unlocking secrets of the stars on the day you were born. These cosmic constellations are a part of you, and we're here to help you celebrate your special day, your Janmadinam.
                    </p>
                    <p>
                      It's not just about the past, it's about making tradition a part of your daily life. We're a community that connects people who love their Hindu heritage. Join us at Shubadinam to celebrate who you are, learn about your roots, and light up your unique cosmic spark.
                    </p>
                  </div>
                </div>
              </div>



            </div>

            <div className="faq-adspace">
            </div>

            <h2 className="faq-heading-font">Birth Star and Nakshatra FAQs:</h2>
            <br />
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="false" aria-controls="panelsStayOpen-collapseSeven">
                    What is a birth star (Janma Nakshatra)?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                  <div class="accordion-body">
                    It is believed, a birth star (Janma Nakshatra), is a celestial entity representing the moon's position in the sky at the time of your birth. Each Nakshatra holds distinct qualities and influences that shape your personality and life path.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingEight">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="false" aria-controls="panelsStayOpen-collapseEight">
                    How does my birth star impact me?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                  <div class="accordion-body">
                    It is believed, your birth star has a significant impact on various aspects of your life, including character traits, strengths, and challenges. Understanding your birth star can provide valuable insights into your nature and potential.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingNine">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="false" aria-controls="panelsStayOpen-collapseNine">
                    Can I have multiple birth stars?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingNine">
                  <div class="accordion-body">
                    No, each individual has one primary birth star based on their birth time.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTen">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="false" aria-controls="panelsStayOpen-collapseTen">
                    What if the birth star comes twice in a month?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
                  <div class="accordion-body">
                    According to Dharma Shastras, the birth day must be celebrated every month in the 1st year of birth.
                    <ol>
                      <li>If the birth star comes on 2 days in a solar month, the second one only must be considered as the birth day.</li>
                      <li>If the birth star is on 2 days (starting from the previous day to the next day), the next day only must be considered. The sunrise coming on the day of the star determines the birth day.</li>
                      <li>Even if the star is there for a few minutes on the next day, only the next day is considered as the birth day.</li>
                      <li>If the birth star is there in the next day for less than 8 minutes, only then the previous day must be considered.</li>
                      <li>If the birth star does not happen to be there at the time of sunrise on any day (previous day or the next morning), then one must celebrate it in the next solar month.</li>
                    </ol>
                    <br />
                    For more information, please read this blog post{' '}
                    <a
                      href="https://jayasreesaranathan.blogspot.com/2009/04/how-to-celebrate-birthday.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jayasreesaranathan.blogspot.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="faq-heading-font">Birth Tithi FAQs:</h2>
            <br />
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingEleven">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="false" aria-controls="panelsStayOpen-collapseEleven">
                    What is a birth Tithi?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseEleven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEleven">
                  <div class="accordion-body">
                    It is believed, a birth Tithi is a lunar day calculated from the moon's position in relation to the sun at the time of your birth. Tithis hold spiritual significance and guide timing for various rituals and events.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwelve">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwelve">
                    How does my birth Tithi matter?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwelve" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwelve">
                  <div class="accordion-body">
                    It is believed, your birth Tithi is a reflection of the moon phase on the day you were born. It provides insights into your individual characteristics and helps you align with the moon cycles.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThirteen">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThirteen" aria-expanded="false" aria-controls="panelsStayOpen-collapseThirteen">
                    Should I celebrate Janma Nakhshatra or Janma Tithi?
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseThirteen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThirteen">
                  <div class="accordion-body">
                    You can celebrate the birthday (Janma dinam) according to either Birth Star (Nakshatra) or Birth Tithi (Janma Tithi). Both are meaningful ways to connect with cosmic rhythms. It is purely as per traditional practices in the family. We recommend confirming the same with elders in the family. For example, some parts of Andhra Pradesh celebrate Janma Tithi, while other parts of the same state celebrate Janma Nakshatra.
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="faq-siderail">
          </div>




























          {/* <h2 className="faq-heading-font">Frequently Asked Questions:</h2>
          <br /> */}


          {/* {faqData.map((item) => (
            <div key={item.id} className="faq-item">
              <div className="drop-arrow-cnt">

                <button type="submit" className="faq-button" onClick={() => toggleAnswer(item.id)}>
                  {item.question}
                </button>
                <div className="drop-arrow-icon" onClick={() => toggleAnswer(item.id)}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </div>
              <div className={`faq-answer ${item.isOpen ? 'open' : ''}`}>
                {item.isOpen && <p className="letters-color-faq">{item.answer}</p>}
              </div>
            </div>
          ))} */}

          {/* <br />
          <div className="faq-adspace">

          </div> */}
          {/* <h2 className="faq-heading-font">Birth Star and Nakshatra FAQs:</h2>
        <br /> */}

          {/* {faqData2.map((item) => (
          <div key={item.id} className="faq-item">
            <div className="drop-arrow-cnt">
              <button type="submit" className="faq-button" onClick={() => toggleAnswer2(item.id)}>
                {item.question}
              </button>
              <div className="drop-arrow-icon" onClick={() => toggleAnswer2(item.id)}>
                {/* ▼ */}
          {/* <FontAwesomeIcon icon={faAngleDown} />
              </div>
            </div>
            <div className={`faq-answer ${item.isOpen ? 'open' : ''}`}>
              {item.isOpen && <p className="letters-color-faq">{item.answer}</p>}
            </div>
          </div> */}
          {/* ))}  */}

          {/* <br />
        <h2 className="faq-heading-font">Birth Tithi FAQs:</h2>
        <br /> */}

          {/* {faqData3.map((item) => (
            <div key={item.id} className="faq-item">
              <div className="button-faq">
                <div className="drop-arrow-cnt">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" onClick={() => toggleAnswer3(item.id)}>
                    {item.question}
                  </button>
                  <div className="drop-arrow-icon" onClick={() => toggleAnswer3(item.id)}>
                    <FontAwesomeIcon icon={faAngleDown} />
                  </div>
                </div>
              </div>
              <div className={`faq-answer ${item.isOpen ? 'open' : ''}`}>
                {item.isOpen && <p className="letters-color-faq">{item.answer}</p>}
              </div>
            </div>
          ))} */}

          {/* <br />
          <br />
          <br /><br />
          <br />
          <br />
          <br /> */}




          {/* <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                What is the difference between Birthday as per English Calendar and Janma Dinam as per Indian Calendar?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                <div class="accordion-body">
                 Birthday as per English calendar only takes into account the rotation of the earth around the Sun which is 365 days. In case of Janma Dinam as per Indian calendar we take into account the position of multiple celestial bodies like Sun, Moon, Earth, Stars, and Planets etc. which are also constantly rotating different axis. Hence it is more precise. The effects of these celestial bodies on earth and its beings are recognised by both science and our Shastras. For example the tides in the Sea are high on specific days like Poornima and Amavasya etc. You can find more articles about this in our blogs section.
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                Why birthday (Janma Dinam) as per Indian calendar is considered a Shuba Dinam to celebrate?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                <div class="accordion-body">
                Birthday as per Indian Calendar falls on the day when many celestial bodies are on the same constellation as at the time of our birth. Hence it is believed that the blessings received on that day from elders and gods are more concentrated. The effects of good karma done on that day manifolds as compared to other common days. For example a paper placed under the Sun may heat and not burn. But when a Magnifying lens is placed in between, the same paper may catch fire due the concentrated stream of sun rays. You can find more articles about the effects of Nakshatras and Tithis on our personality in our blogs section.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                What is Shubadinam.com?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                Shubadinam.com is a unique online platform that helps you to get notified easily about the Birth Star (Janma Nakshatra) or Birth Tithi (Janma Tithi) of your family and friends every year. It also provides insights into the significance of nakshatra or tithi in one's life journey.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                How does Shubadinam.com work?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                <div class="accordion-body">
                After free registration you can add Unlimited Janma Dinam details of your Family and Friends. After this one time setup you will be receiving Notifications through Email, SMS or WhatsApp as applicable.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                Is Shubadinam.com a free service?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                <div class="accordion-body">
                Absolutely! The basic services of Shubadinam.com are completely free to use. Our aim is to empower individuals to embrace and celebrate their birth star heritage. To make your celebrations convenient we may provide some value added services in future that you can choose to buy if interested.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
                Why Shubadinam.com?
                </button>
              </h2>
              <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                <div class="accordion-body">
                <p>
              At Shubadinam, we're more than just a website. We're here to help you rediscover your roots and celebrate your Hindu identity. Imagine us as your guide on a journey to the ancient wisdom that's part of your heritage.
            </p>
            <p>
              We're not only about dates. Shubadinam shows you the magic of Birth Star (Janma nakshatra)/Janma Tithi. It's like unlocking secrets of the stars on the day you were born. These cosmic constellations are a part of you, and we're here to help you celebrate your special day, your Janmadinam.
            </p>
            <p>
              It's not just about the past, it's about making tradition a part of your daily life. We're a community that connects people who love their Hindu heritage. Join us at Shubadinam to celebrate who you are, learn about your roots and light up your unique cosmic spark.
            </p>

                </div>
              </div>
            </div>
















          </div> */}

          {/*          
          <h2 className="faq-heading-font">Birth Star and Nakshatra FAQs:</h2>
          <br /> */}





        </div>
        <BottomSpace />
        {/* <div className="empty-container-footer"> */}
        <FooterComponent></FooterComponent>
        {/* </div> */}
      </div >
    </div >

  )
}
export default FaqScreen;






