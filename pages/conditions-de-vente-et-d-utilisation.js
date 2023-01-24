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
                <meta property="og:title" content="Conditions de vente et d'utilisation" />
                <meta property="og:description" content="Libérez votre potentiel grâce aux apps mobiles ATHLETID" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://athletid.com/conditions-de-vente-et-d-utilisation" />
                <meta property="og:image" content={'https://i.imgur.com/aHBOGFc.png'} />
                <meta property="og:image:secure_url" content="https://i.imgur.com/aHBOGFc.png"/>
                <meta property="og:image:width" content="800"/>
                <meta property="og:image:height" content="530"/>
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