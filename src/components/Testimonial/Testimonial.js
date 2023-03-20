import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialCardData from "./TestimonialCardData";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';

const Testimonial = (props) => {
    return (
        <div
            className={"lg:px-4 lg:my-40 lg:mb-32 my-28"}
        >
            <div
                className={
                    'flex flex-col items-center px-8 mx-auto mb-24 text-center'
                }
            >
                <p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div className={"w-full overflow-hidden relative"}>
                <Swiper
                    modules={[Autoplay]}
                    className={'w-[200%] absolute transform -translate-x-1/2 left-1/2'}
                    spaceBetween={30}
                    slidesPerView={3}
                    slidesPerGroup={1}
                    navigation
                    autoplay={{delay:2000}}
                    speed={1000}
                    loop={true}
                    loopPreventsSliding={true}
                >
                    {TestimonialCardData.slice(0, 12).map((val, ind) => {
                        return (
                            <SwiperSlide key={ind}>
                                <TestimonialCard
                                    image={val.image}
                                    name={val.name}
                                    surname={val.surname}
                                    publicationDate={val.publicationDate}
                                    title={val.title}
                                    comment={val.comment}
                                    star={val.star}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
