import React, {useState} from "react";
import Tempo from "../../../public/assets/images/application-timer-tempo.webp";
import Intervalle from "../../../public/assets/images/application-timer-intervalle.webp";
import Breath from "../../../public/assets/images/application-timer-respiration.webp";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import Image from "next/image";

const AppFeature = (props) => {
    const [countTab, setCountTab] = useState(1);
    console.log(countTab);

    return (
        <div className={" p-4"}>
            <div className={"md:my-20 my-8 lg:w-[45%]  md:w-2/3 w-full mx-auto"}>
                <div className={"flex items-center space-x-16"}>
                    <div
                        className={
                            "w-1/2 h-full border-[6px] border-almostBlack rounded-[35px] overflow-hidden"
                        }
                    >
                        {countTab === 1 ? (
                            <Image src={Tempo} className={"object-contain"} alt=""/>
                        ) : countTab === 2 ? (
                            <Image src={Intervalle} className={"object-contain"} alt=""/>
                        ) : (
                            <Image src={Breath} className={"object-contain"} alt=""/>
                        )}
                    </div>
                    <div className={"w-1/2 flex flex-col justify-center space-y-3"}>
                        {countTab === 1 ? (
                            <div>
                                <p className={"text-timeRed"}>{countTab}</p>
                                <span className={"my-3 text-xl"}>Musculaire.</span>:
                                <p>
                                    Les meilleurs Timers pour des entraînements en puissansse !
                                </p>
                            </div>
                        ) : countTab === 2 ? (
                            <div>
                                <p className={"text-timeRed"}>{countTab}</p>
                                <span className={"my-3 text-xl"}>Cardio.</span>:
                                <p>
                                    Les meilleurs Timers pour des entraînements intenses !
                                </p>
                            </div>
                        ) : (
                            <div>
                                <p className={"text-timeRed"}>{countTab}</p>
                                <span className={"my-3 text-xl"}>Bien-être.</span>:
                                <p>
                                    Les meilleurs Timers pour des sessions relaxantes !
                                </p>
                            </div>
                        )}
                        <div className={"flex space-x-6"}>
                            <div
                                onClick={() =>
                                    countTab > 1
                                        ? setCountTab(countTab - 1)
                                        : setCountTab(countTab)
                                }
                                className={
                                    "border border-black p-[8px] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center cursor-pointer"
                                }
                            >
                                <BsChevronLeft color={"black"} className={""}/>
                            </div>
                            <div
                                onClick={() =>
                                    countTab < 3
                                        ? setCountTab(countTab + 1)
                                        : setCountTab(countTab)
                                }
                                className={
                                    "border border-black p-[8px] w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center cursor-pointer"
                                }
                            >
                                <BsChevronRight color={"black"} className={""}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppFeature;
