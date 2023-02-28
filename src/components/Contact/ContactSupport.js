import React from "react";
import Button from "../UI/Button";
import Image from 'next/image'
import StatistiquesApplication from "@/public/assets/images/statistiques-application-athletid.webp";

const ContactSupport = (props, ref) => {
    return (
        <div
            className={
                "lg:duration-[2000ms] lg:opacity-1 grid md:grid-cols-2 grid-cols-1 2xl:ml-28 lg:ml-20 md:ml-12 mx-4 lg:my-40 mb-24 overflow-hidden"
            }
        >
            <div
                className={
                    " flex flex-col justify-center md:items-start items-center md:mt-6 lg:mb-0 mb-6 order-2 md:order-1 md:w-full md:pr-12"
                }
            >
                <h2
                    style={{whiteSpace: "pre-line"}}
                    className={"mb-[10px] md:text-left text-center"}
                >
                    Vos idées sont nos priorités !
                </h2>
                <p className={"mb-[20px] md:text-left text-center"}>
                    Soucieux de vous apporter la meilleure application, nous sommes à l’écoute de toutes vos suggestions pour faire évoluer notre solution.
                </p>
                <div className={"flex items-center space-x-4"}>
                    <Button variant={"black"}
                        text={"Nous contacter"}
                        link={"mailto:contact@athletid.com"}
                    />
                </div>
            </div>
            <div className={"order-2 md:mb-0 mb-4"}>
                <Image
                    alt={"Différentes étapes de construction de l'application Athletid Network"}
                    className={"self-end lg:w-[80%] w-full mx-auto"}
                    src={StatistiquesApplication}
                />
            </div>
        </div>
    );
};

export default ContactSupport;
