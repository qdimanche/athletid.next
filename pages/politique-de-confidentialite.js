import React from 'react';
import Navbar from "../src/components/Nav/Navbar";
import PrivacyContent from "../src/components/PrivacyPolicy/PrivacyContent";
import Footer from "../src/components/Footer/Footer";
import Head from "next/head";

const PolitiqueDeConfidentialite = () => {
    return (
        <>
            <Head>
                <title>Politique de confidentialité</title>
                <meta name="robots" content="noindex"/>
            </Head>


            <div>
                <Navbar/>
                <PrivacyContent/>
                <Footer/>
            </div>

        </>


    );
};

export default PolitiqueDeConfidentialite;