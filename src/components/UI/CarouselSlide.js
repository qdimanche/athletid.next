import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import Image from 'next/image'
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";



export const CarouselSlide = (props) => {

    const images = [
        props.imgSquare1,
        props.imgSquare2,
        props.imgSquare3
    ];

    console.log(props.imgSquare1)


    return (
        <Carousel
            className={'w-[80%] max-w-[400px] mx-auto block md:hidden'}
            showStatus={false}
            showThumbs={false}
            statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button type="button" onClick={onClickHandler} title={label} style={{left : 0, zIndex:2, display: "inline-block", position: 'absolute',
                        top: 'calc(50% - 40px)',
                        cursor: 'pointer', }}>
                        <BsChevronLeft color={'black'} size={30}/>
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button type="button" onClick={onClickHandler} title={label} style={{right : 0, zIndex:2, display: "inline-block", position: 'absolute',
                        top: 'calc(50% - 40px)',
                        cursor: 'pointer', }}>
                        <BsChevronRight color={'black'} size={30}/>
                    </button>
                )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}
        >
            <div className={'pb-16'}>
                <div className="slide rounded-medium overflow-hidden bg-[#F2F2F2] px-8 pt-8">
                    <Image alt={props.altSquare1} src={props.imgSquare1} className={''}/>
                </div>
                <p className="legend absolute !bottom-0 !text-black !bg-white !h-16">{props.titleSquare1}</p>
            </div>
            <div className={'pb-16'}>
                <div className="slide rounded-medium overflow-hidden bg-[#F2F2F2] px-8 pt-8">
                    <Image alt={props.altSquare2} src={props.imgSquare2} className={''}/>
                </div>
                <p className="legend absolute !bottom-0 !text-black !bg-white !h-16">{props.titleSquare2}</p>
            </div>
            <div className={'pb-16'}>
                <div className="slide rounded-medium overflow-hidden bg-[#F2F2F2] px-8 pt-8">
                    <Image alt={props.altSquare3} src={props.imgSquare3} className={''}/>
                </div>
                <p className="legend absolute !bottom-0 !text-black !bg-white !h-16">{props.titleSquare3}</p>
            </div>
        </Carousel>
    );
};


export default CarouselSlide;