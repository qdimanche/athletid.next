import React from "react";
import DownloadPlayStore from "../assets/images/downloadPlayStore.svg";
import DownloadAppStore from "../assets/images/downloadAppStore.svg";
import Image from "next/image";

const DownloadApp = (props, ref) => {
    return (
        <div
            ref={ref}
            className={`flex ${props.flexDirection} ${props.marginBottom} text-center items-center`}
        >
            <h4 style={{ whiteSpace: "pre-line" }} className={"mb-10"}>
                {props.title}
            </h4>
            <div className={`flex ${props.justifyContent} space-x-4 !w-full`}>
                <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.athletid.athletid&gl=FR"
                >
                    <Image src={DownloadPlayStore}
                        className={
                            "hover:fill-white duration-300 rounded-[9px] hover:bg-black "
                        }
                    />
                </a>
                <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://apps.apple.com/fr/app/athletid/id6443471192"
                >
                    <img src={DownloadAppStore}
                        className={
                            "hover:fill-white duration-300 rounded-[9px]  hover:bg-black  "
                        }
                        alt=""
                    />
                </a>
            </div>
        </div>
    );
};

export default DownloadApp;