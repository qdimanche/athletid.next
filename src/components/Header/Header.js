import React from 'react'
import Image from 'next/image'
import Tag from '@/src/components/UI/Tag'
import Button from '@/src/components/UI/Button/Button'
import {FaApple} from 'react-icons/fa'
import {TiVendorAndroid} from 'react-icons/ti'
import CircleSpinner from '@/src/components/UI/Spinner/CircleSpinner'
import clsx from "clsx";
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";

const Header = (props) => {

    const isMobile = useMediaQuery("(max-width:768px)")

    return (
        <header
            className={`header-height relative flex justify-center lg:justify-start bg-greyShade overflow-hidden`}
        >
            <div
                style={{whiteSpace: 'pre-line'}}
                className={
                    'lg:mt-0 lg:mt-3 flex md:grid md:grid-cols-2 flex-col  z-[3] lg:p-0 items-center w-screen max-w-[1280px] mx-auto'
                }
            >
                <div
                    className={
                        'pt-28  md:py-16  md:flex md:flex-col md:justify-center px-8 md:pl-12'
                    }
                >
                    <div
                        className={
                            'space-y-6 lg:space-y-8 flex flex-col items-center md:items-start z-[900]'
                        }
                    >
                        {props.buttons === 'downloadButton' && (
                            <Tag variant={'black'} text={'Available'}/>
                        )}
                        <h1
                            className={`md:text-left text-center text-black white whitespace-pre-line`}
                        >
                            {props.title}
                        </h1>
                        <p
                            className={`text-black md:text-left text-center text-xs md:text-base`}
                        >
                            {props.subTitle}
                        </p>
                        {props.buttons === 'downloadButton' ? (
                            <div className={`flex space-x-4 whitespace-nowrap`}>
                                <Button
                                    variant={'black'}
                                    link={''}
                                    content={
                                        <div className={'flex space-x-2 items-center'}>
                                            <FaApple color={'black'} size={20}/>
                                            <div>App Store</div>
                                        </div>
                                    }
                                />
                                <Button
                                    variant={'black'}
                                    link={''}
                                    content={
                                        <div className={'flex space-x-2 items-center'}>
                                            <TiVendorAndroid color={'black'} size={22}/>
                                            <div>Play Store</div>
                                        </div>
                                    }
                                />
                            </div>
                        ) : (
                            <Button
                                variant={isMobile ? 'redOutline' : 'red'}
                                link={props.link}
                                content={'Discover our apps '}
                                className={'md:!mt-[62px]'}
                            />
                        )}
                    </div>
                </div>

                <div
                    className={
                        'h-[500px] md:h-full w-screen md:w-[600px] lg:w-[650px] xl:w-[800px] 2xl:w-[1000px] md:absolute lg:-right-12 md:-right-40 md:bottom-0 relative'
                    }
                >
                    {props.imageSrc === '' ? (
                        <CircleSpinner/>
                    ) : (
                        <Image
                            src={props.imageSrc}
                            layout={'fill'}
                            className={clsx('object-top md:object-bottom', props.imageClassName)}
                            alt={''}
                        />
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
