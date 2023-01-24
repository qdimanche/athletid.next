import React from 'react';
import ContactForm from "../src/components/Contact/ContactForm";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Nav/Navbar";
import Head from "next/head";

const Contact = () => {

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta property="og:title" content="Contact" />
                <meta property="og:description" content="Libérez votre potentiel grâce aux apps mobiles ATHLETID" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://athletid.com/contact" />
                <meta property="og:image" content={'https://i.imgur.com/aHBOGFc.png'} />
                <meta property="og:image:secure_url" content="https://i.imgur.com/aHBOGFc.png"/>
                <meta property="og:image:width" content="800"/>
                <meta property="og:image:height" content="530"/>
            </Head>

            <Navbar />
            <div id={'main-container'}>
                <ContactForm/>
                <Footer/>
            </div>

        </>
    );
};

export default Contact;