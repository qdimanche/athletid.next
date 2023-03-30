import React, {useRef} from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialCardData from "./TestimonialCardData";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";
import 'swiper/css';
import 'swiper/css/autoplay';


const Testimonial = (props) => {


    return (
        <div
            className={"lg:px-4 mt-[92px] md:mt-[120px]"}
        >
            <div
                className={
                    'flex flex-col items-center mx-auto mb-[72px] text-center max-w-[350px] md:max-w-full  mx-auto'
                }
            >
                <p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div className={"w-full overflow-hidden relative"}>
                <Swiper
                    modules={[Autoplay]}
                    className={'w-[200%] md:w-full absolute transform -translate-x-1/2 left-1/2'}
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
