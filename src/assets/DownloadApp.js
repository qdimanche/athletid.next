import React from "react";
import {ReactComponent as DownloadPlayStore} from "../assets/images/downloadPlayStore.svg";
import {ReactComponent as DownloadAppStore} from "../assets/images/downloadAppStore.svg";

const DownloadApp = (props, ref) => {
    return (
        <div
            ref={ref}
            className={`flex ${props.flexDirection} ${props.marginBottom} text-center items-center`}
        >
            <h4 style={{whiteSpace: "pre-line"}} className={"mb-10"}>
                {props.title}
            </h4>
            <div className={`flex ${props.justifyContent} space-x-4 !w-full`}>
                <a
                    target={"_blank"}
                    rel="noreferrer"
                    href="https://play.google.com/store/apps/details?id=com.athletid.athletid&gl=FR"
                >
                    <DownloadPlayStore
                        width={162}
                        height={50}
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
                    <DownloadAppStore
                        width={162}
                        height={50}
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