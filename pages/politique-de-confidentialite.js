import React from 'react';
import Navbar from "../src/components/Nav/Navbar";
import PrivacyContent from "../src/components/PrivacyPolicy/PrivacyContent";
import Footer from "../src/components/Footer/Footer";

const PolitiqueDeConfidentialite = () => {
    return (
        <div>
            <Navbar/>
            <PrivacyContent/>
            <Footer/>
        </div>
    );
};

export default PolitiqueDeConfidentialite;