import React from 'react';
import Navbar from "../../athletid/src/components/Nav/Navbar";
import PrivacyContent from "../../athletid/src/components/PrivacyPolicy/PrivacyContent";
import Footer from "../../athletid/src/components/Footer/Footer";

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