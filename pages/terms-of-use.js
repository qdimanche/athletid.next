import React from 'react';
import Navbar from "../src/components/Nav/Navbar";
import TermsContent from "../src/components/TermsOfUse/TermsContent";
import Footer from "../src/components/Footer/Footer";

const TermsOfUse = () => {
    return (
        <div>
            <Navbar/>
            <TermsContent/>
            <Footer/>
        </div>
    );
};

export default TermsOfUse;