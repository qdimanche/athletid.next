import React, {useState} from "react";
import Tempo from "../../../public/assets/images/application-timer-tempo.webp";
import Intervalle from "../../../public/assets/images/application-timer-intervalle.webp";
import Breath from "../../../public/assets/images/application-timer-respiration.webp";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import Image from "next/image";

const AppFeature = (props) => {
    const [countTab, setCountTab] = useState(1);
    
    return (
        <div className={" p-4"}>
            <div className={"lg:mt-40 mt-28 lg:w-[45%]  md:w-2/3 w-full mx-auto"}>
                <div className={"flex items-center space-x-16"}>
                    <div
                        className={
                            "w-1/2 h-full border-[3px] border-almostBlack rounded-medium overflow-hidden"
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
                    <div className={"w-1/2 flex flex-col justify-center"}>
                        {countTab === 1 ? (
                            <div className={"mb-6 space-y-3"}>
                                <span className={"font-semibold"}>Musculaire.</span>
                                <p>
                                    Fitness, Crossfit, musculation, bodybuilding…
                                </p>
                            </div>
                        ) : countTab === 2 ? (
                            <div className={"mb-6 space-y-3"}>
                                <span className={"font-semibold"}>Cardio.</span>
                                <p>
                                    Running, cyclisme, natation…
                                </p>
                            </div>
                        ) : (
                            <div className={'mb-6 space-y-3'}>
                                <span className={"font-semibold"}>Bien-être.</span>
                                <p>
                                    Yoga, streching, méditation, Pilates…
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
