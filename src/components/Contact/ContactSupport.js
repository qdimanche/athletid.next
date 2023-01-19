import React from "react";
import RedButton from "../Buttons/RedButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import BlackBorderButton from "../Buttons/BlackBorderButton";

const ContactSupport = React.forwardRef((props, ref) => {
  return (
    <div
      className={
        "lg:duration-[2000ms] lg:opacity-1 grid md:grid-cols-2 grid-cols-1 2xl:ml-32 lg:ml-24 md:ml-16 mx-4 lg:mb-20 mb-16 overflow-hidden"
      }
    >
      <div
        className={
          " flex flex-col justify-center md:items-start items-center md:mt-6 order-2 md:order-1 md:w-full 2xl:pr-28 lg:pr-20 md:pr-12"
        }
      >
        <h2
          style={{ whiteSpace: "pre-line" }}
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
          <BlackBorderButton
            text={"Nous contacter"}
            link={"mailto:contact@athletid.com"}
          />
        </div>
      </div>
      <div className={"mx-auto max-h-[93vh] md:order-2 order-1 md:mb-0 mb-4"}>
        <LazyLoadImage
          alt={""}
          className={"self-end  md:w-full w-[70%] mx-auto"}
          src={props.src}
        />
      </div>
    </div>
  );
});

export default ContactSupport;
