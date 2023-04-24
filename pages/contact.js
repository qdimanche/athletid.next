import React from 'react';
import ContactForm from "../src/components/Contact/ContactForm";
import Head from "next/head";
import Format from "../src/layout/format"
import Faq from "@/src/components/Contact/Faq/Faq";

const Contact = () => {

    return (
        <>
            <Head>
                <title>Contact us</title>
                <meta name="description"
                      content="Do you have a question, a problem or just want to talk? We are here to answer you!"/>
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