import React from 'react';
import ContactForm from "../../athletid/src/components/Contact/ContactForm";
import Footer from "../../athletid/src/components/Footer/Footer";
import Navbar from "../../athletid/src/components/Nav/Navbar";

const Contact = () => {

    return (
        <>
            <Navbar />
            <div id={'main-container'}>
                <ContactForm/>
                <Footer/>
            </div>

        </>
    );
};

export default Contact;