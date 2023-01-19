import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import HeaderNetwork from "../../public/images/application-athletid-reseau-social.webp";
import DownloadApp from "../components/DownloadApp";

const Header = (props) => {
  return (
    <div>
      <div className={" relative flex px-4 pt-16 pb-20 md:w-full "}>
        <div
          className={
            "lg:mt-0 md:mt-3 flex flex-col justify-center z-[3] lg:w-1/2 md:w-2/3 mx-auto w-full lg:text-left text-center 2xl:px-28 lg:px-20"
          }
        >
          <h1 style={{ whiteSpace: "pre-line" }} className={""}>
            {props.title}
          </h1>
          <p
            style={{ whiteSpace: "pre-line" }}
            className={" mt-[10px] mb-[20px]  w-full md:block"}
          >
            {props.subTitle}
          </p>
          <DownloadApp justifyContent={"lg:justify-start justify-center"} />
        </div>
        <div className={"w-1/2 lg:block hidden"}>
          <img src={HeaderNetwork} className={"w-full "} alt="" />
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
    </div>
  );
};

export default Header;
