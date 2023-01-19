import React from 'react';
import {IoStar} from "react-icons/io5";


const TestimonialCard = (props) => {

    const countStar = () => {
        let stars = [];
        for (let i = 0; i < props.star; i++) {
            stars.push(<IoStar className={'text-timeRed'} key={i}/>);
        }
        return stars;
    }


    return (
        <div id={'box'} className={'p-4 bg-[#F5F4F5] rounded-[30px] flex flex-col space-y-4 h-fit w-full mb-4 break-inside-avoid-column inline-block' }>
            <div className={'flex space-x-3 items-start'}>
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
            </div>

        </div>
    );
};

export default TestimonialCard;
