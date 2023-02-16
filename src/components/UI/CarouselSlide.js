import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

export const CarouselSlide = (props) => {

    const images = [
        props.imgSquare1,
        props.imgSquare2,
        props.imgSquare3
    ];


    return (
        <Carousel
            className={`${props.customWidth} max-w-[400px] mx-auto block md:hidden`}
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
                {props.childrenSlide1}
            </div>
            <div className={'pb-16'}>
                {props.childrenSlide2}
            </div>
            <div className={'pb-16'}>
                {props.childrenSlide3}
            </div>
        </Carousel>
    );
};


export default CarouselSlide;