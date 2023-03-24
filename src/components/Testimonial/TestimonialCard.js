import React from 'react';
import {IoStar} from "react-icons/io5";
import Image from "next/image";


const TestimonialCard = (props) => {


    return (
        <div className={'p-8 bg-white rounded-medium flex flex-col justify-center h-[280px]' }>
            <div className={'flex flex-col items-center space-y-4'}>
                <Image priority={true} src={props.image} width={110} height={110} alt={""}/>
                <p className={'font-semibold text-[24px] leading-[28px]'}>{props.name}</p>
                <div className={'flex items-center space-x-2 text-[#D86A59]'}>
                    <IoStar className={"text-[#D86A59] text-xl"}/>
                    <p className={'font-semibold'}>{props.star}</p>
                </div>
            </div>

        </div>
    );
};

export default TestimonialCard;
