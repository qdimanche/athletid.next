import React from 'react';
import ContactForm from "../src/components/Contact/ContactForm";
import Footer from "../src/components/Footer/Footer";
import Navbar from "../src/components/Nav/Navbar";

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