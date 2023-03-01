import React from 'react'
import ApplicationApcoDashboardFull from '@/public/assets/images/application-apco-dashboard-full.webp'
import CircleStats from '@/public/assets/images/CircleStats.webp'
import Post from '@/public/assets/images/post.webp'
import Image from "next/image";

const ImageSection = () => {
    return (
        <div className={'md:my-40 mt-28'}>
            <div
                className={
                    'flex flex-col items-center md:w-1/2 md:w-3/4 mx-auto md:mb-8 text-center'
                }
            >
                <h2 style={{whiteSpace: 'pre-line'}}>Lorem ipsum dolor sit amet.</h2>
                <p className={'w-full mt-[10px]'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                    tenetur!
                </p>
            </div>
            <Image src={ApplicationApcoDashboardFull} width={470} className={'mx-auto'} alt="Application Apco Dashboard Full"/>
            <div className={'relative h-[300px] w-[400px] mx-auto'}>
                <Image src={CircleStats} width={160} className={'absolute top-0 left-0'} alt={""}/>
                <Image src={Post} width={180} className={'absolute bottom-0 right-0'} alt={""}/>
            </div>
        </div>
    )
}

export default ImageSection;