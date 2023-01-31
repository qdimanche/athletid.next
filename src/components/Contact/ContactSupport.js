import React from "react";
import Button from "../UI/Button";
import Image from 'next/image'

const ContactSupport = (props, ref) => {
    return (
        <div
            className={
                "lg:duration-[2000ms] lg:opacity-1 grid md:grid-cols-2 grid-cols-1 2xl:ml-28 lg:ml-20 md:ml-12 mx-4 lg:my-40 mb-24 overflow-hidden"
            }
        >
            <div
                className={
                    " flex flex-col justify-center md:items-start items-center md:mt-6 lg:mb-0 mb-6 order-2 md:order-1 md:w-full 2xl:pr-28 lg:pr-20 md:pr-12"
                }
            >
                <h2
                    style={{whiteSpace: "pre-line"}}
                    className={"mb-[10px] md:text-left text-center"}
                >
                    Ton avis est important
                </h2>
                <p className={"mb-[20px] md:text-left text-center"}>
                    Dans le but de répondre au mieux à tes besoins, n’hésites pas à nous
                    faire tes suggestions d’améliorations pour nos solutions. Nous
                    essayerons d’y répondre au mieux.
                </p>
                <div className={"flex items-center space-x-4"}>
                    <Button variant={"black"}
                        text={"Nous contacter"}
                        link={"mailto:contact@athletid.com"}
                    />
                </div>
            </div>
            <div className={"order-2 md:mb-0 mb-4"}>
                <Image placeholder={"blur"}
                    alt={"Différentes étapes de construction de l'application Athletid Network"}
                    className={"self-end lg:w-[80%] w-full mx-auto"}
                    src={props.src}
                />
            </div>
        </div>
    );
};

export default ContactSupport;
