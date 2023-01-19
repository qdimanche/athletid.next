import React from 'react';
import Navbar from "../../athletid/src/components/Nav/Navbar";
import TermsContent from "../../athletid/src/components/TermsOfUse/TermsContent";
import Footer from "../../athletid/src/components/Footer/Footer";

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