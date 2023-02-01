import React from "react";
import TestimonialCard from "./TestimonialCard";
import TestimonialCardData from "./TestimonialCardData";

const Testimonial = (props) => {
    return (
        <div
            className={"lg:px-4 lg:my-40 lg:mb-32 mt-20 mb-28"}
        >
            <div className={"text-center"}>
                <h2 style={{whiteSpace: "pre-line"}} className={"mb-[10px]"}>
                    {props.titleTestimonial}
                </h2>
                <p>{props.subTitleTestimonial}</p>
            </div>

            <div className={"h-[60vh] overflow-hidden white-inner-shadow "}>
                <div
                    className={
                        "lg:columns-4 md:columns-3 columns-2 gap-4 relative z-[-2] px-0 p-8"
                    }
                >
                    {TestimonialCardData.slice(0, 12).map((val, ind) => {
                        return (
                            <TestimonialCard
                                key={ind}
                                name={val.name}
                                surname={val.surname}
                                publicationDate={val.publicationDate}
                                title={val.title}
                                comment={val.comment}
                                star={val.star}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
