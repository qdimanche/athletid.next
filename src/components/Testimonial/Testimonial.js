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
            <div className={"text-center lg:w-1/2 md:w-3/4  mx-auto"}>
                <h2 style={{whiteSpace: "pre-line"}} className={"mb-[10px]"}>
                    {props.titleTestimonial}
                </h2>
                <p>{props.subTitleTestimonial}</p>
            </div>

            <div className={"h-[60vh] w-full overflow-hidden relative"}>
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
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {TestimonialCardData.slice(0, 12).map((val, ind) => {
                        return (
                            <SwiperSlide key={ind}>
                                <TestimonialCard
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
