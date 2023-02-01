import React from "react";
import Image from "next/image";
import CarouselSlide from "@/src/components/UI/CarouselSlide";

const FeatureSquare = (props) => {
	return (<div
		className={"min-h-[93vh] relative lg:my-40 mt-28"}
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
				<div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
					<Image placeholder={"blur"}
					       src={props.imgSquare1}
					       className={"object-cover w-2/3 pt-14 mx-auto"}
					       alt={props.altSquare1}
					/>
				</div>
				<div className={"text-center mt-6 md:px-10 flex flex-col"}>
					<p style={{whiteSpace: "pre-line"}} className={"font-normal"}>
						{props.titleSquare1}
					</p>
				</div>
			</div>
			<div className={""}>
				<div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
					<Image placeholder={"blur"}
					       src={props.imgSquare2}
					       className={"object-cover w-2/3 pt-14 mx-auto "}
					       alt={props.altSquare2}
					/>
				</div>
				<div className={"text-center mt-6 md:px-10 flex flex-col"}>
					<p style={{whiteSpace: "pre-line"}} className={"font-normal"}>
						{props.titleSquare2}
					</p>
				</div>
			</div>
			<div className={""}>
				<div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
					<Image placeholder={"blur"}
					       src={props.imgSquare3}
					       className={"object-cover w-2/3 pt-14 mx-auto "}
					       alt={props.altSquare3}
					/>
				</div>
				<div className={"text-center mt-6 md:px-10 flex flex-col"}>
					<p style={{whiteSpace: "pre-line"}} className={"font-normal"}>
						{props.titleSquare3}
					</p>
				</div>
			</div>
		</div>
		<CarouselSlide imgSquare1={props.imgSquare1} titleSquare1={props.titleSquare1} imgSquare2={props.imgSquare2}
		               titleSquare2={props.titleSquare2} imgSquare3={props.imgSquare3}
		               titleSquare3={props.titleSquare3} altSquare1={props.altSquare1} altSquare2={props.altSquare2}
		               altSquare3={props.altSquare3}/>
	</div>);
	
	
};

export default FeatureSquare;
