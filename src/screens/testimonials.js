import React, { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, fa1, fa2, fa3, faUser, faL } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import { } from "@fortawesome/fontawesome-free"

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


AOS.init({
    duration: 600,
});

const TestimonialScreen = () => {




    const testimonials = [
        {
            id: 1,
            profilePic: require("../images/Profile Icon1.jpg"),
            text: 'Testimonial 1: This is the first testimonial.',
            author: 'Author 1',
            background: 'linear-gradient(to left,white, #daeff5)'
        },
        {
            id: 2,
            text: 'Testimonial 2: This is the second testimonial.',
            profilePic: require("../images/profile icon2.jpg"),
            author: 'Author 2',
            background: 'linear-gradient(to left,white, #f6dcdc)'
        },
        {
            id: 3,
            text: 'Testimonial 3: This is the third testimonial.',
            profilePic: require("../images/Profile Icon1.jpg"),
            author: 'Author 3',
            background: 'linear-gradient(to left,white, #daeff5)'
        },
    ];


    return (

        <Carousel centerMode centerSlidePercentage={100}>
            {testimonials.map(testimonial => (
                <div className='testimonial-h' key={testimonial.id} style={{
                    background: testimonial.background, // Use the background property
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // padding: '20px',
                }}>
                    <img src={testimonial.profilePic} alt={testimonial.author} className="testimonial-profile-pic" />
                    {/* <p className="testimonial-text">{testimonial.text}</p> */}
                    {/* <p className="testimonial-author">- {testimonial.author}</p> */}
                </div>
            ))}
        </Carousel>


    );
}

export default TestimonialScreen;