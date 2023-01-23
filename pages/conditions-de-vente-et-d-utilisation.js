import React from 'react';
import Navbar from "../src/components/Nav/Navbar";
import TermsContent from "../src/components/TermsOfUse/TermsContent";
import Footer from "../src/components/Footer/Footer";
import Head from "next/head";

const ConditionsDeVenteEtDUtilisation = () => {
    return (
        <>
            <Head>
                <title>Conditions de vente et d&apos;utilisation</title>
                <meta name="robots" content="noindex"/>
            </Head>

            <div>
                <Navbar/>
                <TermsContent/>
                <Footer/>
            </div>
        </>



    );
};

export default ConditionsDeVenteEtDUtilisation;