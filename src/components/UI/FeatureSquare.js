import React from "react";
import Image from "next/image";
import CarouselSlide from "@/src/components/UI/CarouselSlide";

const FeatureSquare = (props) => {
    return (<div
        className={"min-h-[93vh] relative px-4 lg:pb-20 pb-14"}
    >
        <div
            className={"flex flex-col items-center lg:w-1/2 md:w-3/4 mx-auto text-center lg:mb-12 mb-8"}
        >
            <h2 style={{whiteSpace: "pre-line"}}>{props.titleFeatureSquare}</h2>
            <p className={"w-full mt-[10px]"}>{props.subTitleFeatureSquare}</p>
        </div>
        <div
            className={"md:grid hidden md:grid-cols-3 lg:gap-16 md:gap-10 gap-6 md:mb-0 mb-10 hidden"}
        >
            <div className={""}>
                <div className="rounded-[30px] overflow-hidden bg-[#F2F2F2]">
                    <Image placeholder={"blur"}
                           src={props.imgSquare1}
                           className={"object-cover w-2/3 pt-14 mx-auto"}
                           alt=""
                    />
                </div>
                <div className={"text-center mt-6 md:px-10 flex flex-col"}>
            <span style={{whiteSpace: "pre-line"}} className={"font-normal"}>
              {props.titleSquare1}
            </span>
                </div>
            </div>
            <div className={""}>
                <div className="rounded-[30px] overflow-hidden bg-[#F2F2F2]">
                    <Image placeholder={"blur"}
                           src={props.imgSquare2}
                           className={"object-cover w-2/3 pt-14 mx-auto "}
                           alt=""
                    />
                </div>
                <div className={"text-center mt-6 md:px-10 flex flex-col"}>
            <span style={{whiteSpace: "pre-line"}} className={"font-normal"}>
              {props.titleSquare2}
            </span>
                </div>
            </div>
            <div className={""}>
                <div className="rounded-[30px] overflow-hidden bg-[#F2F2F2]">
                    <Image placeholder={"blur"}
                           src={props.imgSquare3}
                           className={"object-cover w-2/3 pt-14 mx-auto "}
                           alt=""
                    />
                </div>
                <div className={"text-center mt-6 md:px-10 flex flex-col"}>
            <span style={{whiteSpace: "pre-line"}} className={"font-normal"}>
              {props.titleSquare3}
            </span>
                </div>
            </div>
        </div>
        <CarouselSlide imgSquare1={props.imgSquare1} titleSquare1={props.titleSquare1} imgSquare2={props.imgSquare2}
                       titleSquare2={props.titleSquare2} imgSquare3={props.imgSquare3}
                       titleSquare3={props.titleSquare3}/>
    </div>);


};

export default FeatureSquare;
