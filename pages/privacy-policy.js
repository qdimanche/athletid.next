import React from 'react';
import Navbar from "../src/components/Nav/Navbar";
import PrivacyContent from "../src/components/PrivacyPolicy/PrivacyContent";
import Footer from "../src/components/Footer/Footer";

const PrivacyPolicy = () => {
    return (
        <div>
            <Navbar/>
            <PrivacyContent/>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;