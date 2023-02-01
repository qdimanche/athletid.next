import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import HeaderNetwork from "../../../public/assets/images/application-athletid-reseau-social.png";
import DownloadApp from "../UI/DownloadApp";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <div className={"relative flex pt-20 pb-14 md:w-full "}>
        <div
          className={
            "flex flex-col justify-center z-[3] lg:w-2/3 md:w-3/4 mx-auto w-full lg:text-left text-center lg:pl-8 lg:pr-20"
          }
        >
          <h1 style={{ whiteSpace: "pre-line" }} className={""}>
            La communauté <br/> des sports addicts.
          </h1>
          <p
            style={{ whiteSpace: "pre-line" }}
            className={" mt-[10px] mb-[20px]  w-full md:block"}
          >
            Explorez l’univers Athletid, un réseau de partage dédié à l’entraînement  sportif et au bien-être. Découvre gratuitement des séances, des conseils et améliore ton expérience sportive.
          </p>
          <DownloadApp justifyContent={"lg:justify-start justify-center"} />
        </div>
        <div className={"w-1/2 lg:block hidden"}>
          <Image placeholder={"blur"} src={HeaderNetwork} className={"w-full "} alt="Interfaces de l'application Athletid Network" />
        </div>
        <div
          className={
            "absolute bottom-[1.75rem] lg:right-[2.5rem] right-[1.75rem] space-x-6 z-[900]  text-[1.3em] hidden md:flex"
          }
        >
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.instagram.com/athletid/"
          >
            <FaInstagram size={18} />
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.linkedin.com/company/athletid/"
          >
            <FaFacebook size={18} />
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://www.facebook.com/TimerByAthletid"
          >
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
