import React from 'react';
import ContactForm from "../src/components/Contact/ContactForm";
import Head from "next/head";
import Format from "../src/layout/format"

const Contact = () => {

    return (
        <>
            <Head>
                <title>Nous contacter</title>
                <meta name="description"
                      content="Une question, un problème ou une simple envie de discuter ? Nous sommes là pour vous répondre !"/>
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