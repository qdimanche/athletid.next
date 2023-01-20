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