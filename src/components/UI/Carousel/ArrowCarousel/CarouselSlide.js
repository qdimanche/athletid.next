import Image from "next/image";
import React from "react";
import clsx from "clsx";

export default function CarouselSlide(props) {
  const { title, description, image } = props

  return (
    <div className={''}>
      <div className={'relative rounded-medium overflow-hidden h-[400px]'}>
        <Image
          src={image}
          layout={'fill'}
          className={'object-cover object-top'}
          alt={''}
        />
      </div>
      <div className={'space-y-4 flex flex-col mt-8'}>
        <p className={'text-center w-full text-3xl'}>{title}</p>
        <p className={'text-black w-full  text-center'}>{description}</p>
      </div>
    </div>
  )
}