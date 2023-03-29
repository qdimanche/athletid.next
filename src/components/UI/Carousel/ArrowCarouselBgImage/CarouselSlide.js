import Image from 'next/image'
import React from 'react'

export default function CarouselSlide(props) {

    return (
        <Image
            src={props.image}
            fill
            className={'object-cover object-center'}
            alt={''}
            sizes={"100vw"}
        />
    )
}