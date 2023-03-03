import React from 'react'
import Image from 'next/image'
import Carousel from '@/src/components/UI/Carousel/FeatureCarousel/Carousel'
import TimerScreen01 from "@/public/assets/images/application-timer-creation-entrainement.webp";
import TimerScreen02 from "@/public/assets/images/application-timer-athletid-tempo.webp";
import TimerScreen03 from "@/public/assets/images/application-timer-chronometre.webp";

const Feature = (props) => {
    return (
        <div className={'lg:my-40 mt-28'}>
            <div
                className={
                    'flex flex-col items-center lg:w-1/2 md:w-3/4 mx-auto text-center lg:mb-12 mb-8'
                }
            >
                <h2 style={{whiteSpace: 'pre-line'}}>Accessible à tous.</h2>
                <p className={'w-full mt-[10px]'}>
                    Conçu en collaboration avec des sportifs et des experts du monde
                    entier. Ton application Timer t’accompagne quel que soit ton niveau,
                    ta discipline ou encore tes objectifs.
                </p>
            </div>
            <div
                className={
                    'md:grid hidden md:grid-cols-3 lg:gap-16 md:gap-10 gap-6 md:mb-0 mb-10 hidden'
                }
            >
                <div className={''}>
                    <div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
                        <Image
                            placeholder={'blur'}
                            src={props.imgSquare1}
                            className={'object-cover w-2/3 pt-14 mx-auto'}
                            alt={props.altSquare1}
                        />
                    </div>
                    <div className={'text-center mt-6 md:px-4 flex flex-col'}>
                        <p style={{whiteSpace: 'pre-line'}} className={'font-normal'}>
                            {props.titleSquare1}
                        </p>
                    </div>
                </div>
                <div className={''}>
                    <div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
                        <Image
                            placeholder={'blur'}
                            src={props.imgSquare2}
                            className={'object-cover w-2/3 pt-14 mx-auto '}
                            alt={props.altSquare2}
                        />
                    </div>
                    <div className={'text-center mt-6 md:px-4 flex flex-col'}>
                        <p style={{whiteSpace: 'pre-line'}} className={'font-normal'}>
                            {props.titleSquare2}
                        </p>
                    </div>
                </div>
                <div className={''}>
                    <div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
                        <Image
                            placeholder={'blur'}
                            src={props.imgSquare3}
                            className={'object-cover w-2/3 pt-14 mx-auto '}
                            alt={props.altSquare3}
                        />
                    </div>
                    <div className={'text-center mt-6 md:px-4 flex flex-col'}>
                        <p style={{whiteSpace: 'pre-line'}} className={'font-normal'}>
                            {props.titleSquare3}
                        </p>
                    </div>
                </div>
            </div>
            <Carousel/>
        </div>
    )
}


export default Feature;
