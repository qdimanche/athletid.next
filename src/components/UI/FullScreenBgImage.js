import React, {useState} from 'react';
import {useInView} from "react-intersection-observer";
import Button from "./Button";
import Image from 'next/image'

const FullScreenBgImage = (props) => {


    if (process.browser) {
        const scrollEl = document.querySelector("#main-container");
    }

    const {ref: sectionAnimation, inView: mySectionHasAnimations} = useInView({triggerOnce: true, threshold: 0.02});

    const [button, showButton] = useState(false);

    return (<div id={props.idSection}>
            <div ref={sectionAnimation}
                 className={'grid md:grid-cols-2 grid-cols-1 md:m-4 md:mb-4 mb-8 pt-4  overflow-hidden md:bg-[#F5F4F5] md:rounded-[30px] 2xl:pl-28 lg:pl-20 md:pl-12 md:pr-0 px-4'}>
                <div
                    className={' flex flex-col justify-center md:items-start items-center md:order-1 order-2 md:w-full 2xl:pr-28 lg:pr-20 md:pr-12'}>
                    <div
                        className={'px-4 py-1 rounded-[30px] bg-black text-white mb-[10px] text-[0.9em] md:text-left text-center lg:mt-0 mt-[20px]'}>{props.tag}</div>
                    <h2 style={{whiteSpace: "pre-line"}}
                        className={'mb-[10px] md:text-left text-center'}>{props.title}</h2>
                    <p className={'mb-[20px] md:text-left text-center'}>{props.subtitle}</p>
                    <div
                        className={props.button ? 'flex items-center space-x-4 md:pb-[20px] md:text-left text-center' : 'hidden'}>
                        <Button variant={"black"} text={"Découvrir"} link={props.link}/>
                    </div>
                </div>
                <div
                    className={'overflow-hidden flex self-end md:order-2 order-1 md:bg-unset md:bg-transparent bg-black/5 md:h-full h-fit rounded-[30px] w-full  lg:pt-4'}>
                    <Image placeholder={"blur"} alt={''}
                           className={'self-end lg:w-[89%] md:w-full w-[60%] object-cover mx-auto lg:hidden block'}
                           src={props.src}/>

                    <video
                        className={'lg:w-full w-3/4 mx-auto lg:block hidden object-contain pointer-events-none self-end'}
                        loop muted autoPlay playsInline preload="metadata">
                        <source src={props.video + "#t=0.5"} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>

    )
        ;
}

export default FullScreenBgImage;
