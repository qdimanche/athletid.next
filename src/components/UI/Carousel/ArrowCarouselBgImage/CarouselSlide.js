import Image from 'next/image'
import React from 'react'

export default function CarouselSlide(props) {
    const {title, description, image} = props

    return (
        <Image
            src={image}
            layout={'fill'}
            className={'object-cover object-center'}
            alt={''}
        />
    )
}