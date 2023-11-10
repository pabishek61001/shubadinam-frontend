import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Hamburger from 'hamburger-react';
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import CenteredSlider from "./CenteredSlider";
import Top10px from "./Top10px";
import Top20px from "./Top20px";
import BottomSpace from "./BottomSpace"


const BlogScreen = () => {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when component mounts
    }, []);

    return (
        <div className="overall-container">
            <div className="overall-percent">
                <HeaderComponent></HeaderComponent>
                <Top10px />
                <br />

                <div className="blog-title">
                    <img src={require("../images/blogs-image.jpg")} />
                    {/* <h3>BLOGS</h3> */}
                </div>
                <div className="top20">
                    {/* banner */}

                    <ins className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-2681350025331153"
                        data-ad-slot="6616774036"
                        data-ad-format="auto"
                        data-full-width-responsive="true">
                    </ins>

                </div>

                {/* <Top20px /> */}
                <div className="center-container-blogs">
                    <div className="blogs-area">

                        <div className="blog-trip-boxes">
                            <div className="blog-container1" onContextMenu={(e) => e.preventDefault()}>
                                <div className="blog-boxes1">
                                    <NavLink className="text-noblue" to="/nakshatra-foods" >
                                        <div className="blog-pic">
                                            <img src={require("../images/boxesImages/food1.jpg")} />
                                        </div>
                                        <div className="blog-name">
                                            <label className="blog-name-text">Nakshatra Food</label>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="blog-boxes2">
                                    <NavLink to="/nakshatra-characteristics" className="text-noblue">
                                        <div className="blog-pic">
                                            <img src={require("../images/boxesImages/char1.jpg")} />
                                        </div>
                                        <div className="blog-name">
                                            Nakshatra Characteristics
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="blog-boxes3">
                                    <NavLink to="/nakshatra-deities" className="text-noblue">
                                        <div className="blog-pic">
                                            <img src={require("../images/boxesImages/deity1.png")} />
                                        </div>
                                        <div className="blog-name">
                                            Nakshatra Deity
                                        </div>
                                    </NavLink>
                                </div>
                                {/* <CenteredSlider/> */}
                            </div>

                            <div className="blog-container2" onContextMenu={(e) => e.preventDefault()}>
                                <div className="blog-boxes4">
                                    <NavLink to="/nakshatra-likes-dislikes" className="text-noblue">
                                        <div className="blog-pic">
                                            <img src={require("../images/boxesImages/likes11.jpg")} />
                                        </div>
                                        <div className="blog-name">
                                            Nakshatra likes and Dislikes
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="blog-boxes5">
                                    <NavLink to="/tithi-foods" className="text-noblue">
                                        <div className="blog-pic">
                                            <img src={require("../images/boxesImages/food2.jpg")} />
                                        </div>
                                        <div className="blog-name">
                                            Tithi Food
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="blog-boxes6">
                                    <NavLink to="/tithi-characteristics" className="text-noblue">
                                        <div className="blog-pic">
                                            <img src={require("../images/boxesImages/char22.jpg")} />
                                        </div>
                                        <div className="blog-name">
                                            Tithi Characteristics
                                        </div>
                                    </NavLink>
                                </div>
                                {/* <CenteredSlider/> */}
                            </div>

                            <div className="blog-container3" onContextMenu={(e) => e.preventDefault()}>
                                <div className="blog-boxes7">
                                    <NavLink to="/tithi-deities" className="text-noblue">
                                        <div className="blog-pic">
                                            <img src={require("../images/boxesImages/deity2.png")} />
                                        </div>
                                        <div className="blog-name">
                                            Tithi Deity
                                        </div>
                                    </NavLink>
                                </div>

                                <div className="blog-boxes8">
                                    <NavLink to="/tithi-likes-dislikes" className="text-noblue">
                                        <div className="blog-pic">
                                            <img src={require("../images/boxesImages/likes22.jpg")} />
                                        </div>
                                        <div className="blog-name">
                                            Tithi Likes and Dislikes
                                        </div>
                                    </NavLink>
                                </div>
                                {/* <CenteredSlider/> */}
                            </div>
                        </div>

                        <div className="blogs-ph-slider">
                            <div className="blogs-ph-slider-cnt">
                                <CenteredSlider />
                            </div>

                        </div>
                    </div>

                    <div className="blogs-adspace">

                    </div>






                </div>

                <BottomSpace />
                <FooterComponent></FooterComponent>
            </div>
        </div>
    );
};

export default BlogScreen;