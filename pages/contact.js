import React from 'react';
import ContactForm from "../src/components/Contact/ContactForm";
import Head from "next/head";
import Format from "../src/layout/format"

const Contact = () => {

    return (
        <>
            <Head>
                <title>Contact</title>
                <meta property="og:title" content="Contact" />
                <meta property="og:type" content="website" />
            </Head>
            
            
            <Format>
                <ContactForm/>
            </Format>

        </>
    );
};

export default Contact;