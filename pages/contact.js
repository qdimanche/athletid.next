import React from 'react';
import ContactForm from "../src/components/Contact/ContactForm";
import Head from "next/head";
import Format from "../src/layout/format"
import Faq from "@/src/components/Contact/Faq";

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
                <div className={'max-w-[350px] md:max-w-[630px] px-4 mx-auto'}>
                    <ContactForm/>
                </div>
                <div className={'max-w-[350px] md:max-w-[770px] px-4 mx-auto'}>
                    <Faq/>
                </div>
            </Format>

        </>
    );
};

export default Contact;