import React from 'react';
import {IoStar} from "react-icons/io5";
import Image from "next/image";


const TestimonialCard = (props) => {


    return (
        <div className={'p-8 bg-white rounded-medium flex flex-col justify-center h-[280px]' }>
            <div className={'flex flex-col items-center space-y-4'}>
                <Image priority={true} src={props.image} width={110} height={110} alt={""}/>
                <span className={'font-semibold'}>{props.name}</span>
                <div className={'flex items-center space-x-2 text-[#D86A59]'}>
                    <IoStar className={"text-[#D86A59] text-xl"}/>
                    <p className={'font-semibold'}>{props.star}</p>
                </div>
            </div>
{/*            <div className={'flex space-x-3 items-start'}>
                <div className={'flex flex-col'}>
                    <div className={'-mb-2'}>
                        <p className={'font-bold text-[0.8em]'}>{props.name}</p>
                    </div>
                    <p className={'text-[0.8em]'}>{props.publicationDate}</p>

                </div>

            </div>

            <div className={'flex'}>
                {countStar()}
            </div>

            <div className={'flex flex-col'}>
                <p className={'text-[0.8em] !font-bold !leading-5 mb-2'}>{props.title}</p>
                <p style={{ whiteSpace: "pre-line" }} className={'text-[0.8em] !leading-5'}>{props.comment}</p>
            </div>*/}

        </div>
    );
};

export default TestimonialCard;
