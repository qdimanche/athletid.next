import React from 'react';
import Marquee from "react-fast-marquee";
import Image from "next/image";
import {Images} from "@/src/components/LandingTimer/ImageCarousel/index";

const Carousel = () => {
    return (
      <Marquee autoFill={true} className={"mt-[56px] -space-x-4"}>
          {Images.map((value, index) => {
             return (
                 <div key={index} className={'w-[300px] h-[300px] relative'}>
                     <Image
                         src={value}
                         fill
                         className={'object-cover'}
                         alt={'Jimmy Mabillon'}
                     />
                 </div>
             )
          })}
      </Marquee>
    )
};

export default Carousel;