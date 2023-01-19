import React from 'react';
import HeaderAbout from "@/src/components/About/HeaderAbout";
import Navbar from "@/src/components/Nav/Navbar";
import AboutContent from "@/src/components/About/AboutContent";
import Footer from "@/src/components/Footer/Footer";
import Newsletter from "@/src/components/Footer/Newsletter";

const About = () => {

    return (<>
        <Navbar/>
        <div id={'main-container'}>
            <HeaderAbout/>
            <AboutContent/>
            <Newsletter/>
            <Footer/>
        </div>
    </>);
};

export default About;