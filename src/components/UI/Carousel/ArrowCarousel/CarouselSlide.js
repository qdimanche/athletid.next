import Image from "next/image";
import React from "react";
import clsx from "clsx";

export default function CarouselSlide({className, ...props }) {
  const { title, description, image } = props

  return (
    <div className={'md:grid md:grid-cols-[1fr_370px] items-center justify-between md:w-3/4 mx-auto relative'}>
      <div className={'relative rounded-medium overflow-hidden h-[370px] md:w-[370px] w-full md:order-last bg-[#F2F2F2]'}>
        <Image
          src={image}
          layout={'fill'}
          className={'object-cover object-top'}
          alt={''}
        />
      </div>
      <div className={'space-y-4 md:space-y-8 flex flex-col md:justify-center md:h-full mt-8 md:mt-0'}>
        <p className={'text-center md:text-left w-full text-3xl md:mx-auto whitespace-pre-line'}>{title}</p>
        <p className={'text-black w-full  text-center md:text-left md:mx-auto whitespace-pre-line'}>{description}</p>
      </div>
    </div>
  )
}