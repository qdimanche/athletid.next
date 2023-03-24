import React from 'react'
import Button from '../UI/Button/Button'
import Image from 'next/image'
import CaptorVertical from '@/public/assets/images/captor-vertical.webp'
import CaptorDiagonal from '@/public/assets/images/captor-diagonal.webp'
import Link from 'next/link'
import useMediaQuery from '@/src/components/Hooks/useMediaQuery'

const Footer = () => {
    const isTablet = useMediaQuery('(min-width: 768px)')

    return (
        <footer
            className={
                'mt-[92px] md:mt-[120px] bg-black text-white flex items-end pt-[90px] md:pt-[75px] lg:pt-[150px] pb-[34px]'
            }
        >
            <div
                className={
                    ' px-4 max-w-[350px] md:max-w-[1170px] mx-auto flex flex-col items-center'
                }
            >
                <div className={'grid md:grid-cols-2 md:mb-[50px]'}>
                    <div
                        className={
                            'flex flex-col md:items-start md:justify-center items-center md:text-left text-center mb-[72px] md:mb-0'
                        }
                    >
                        <h2 className={''}>Join the <br/>waiting list.</h2>
                        <p className={'mt-4 mb-6'}>
                            Our sensors are under development. If you are interested, you can
                            register for free on the waiting list and receive information
                            about the launch date.
                        </p>
                        <Button
                            variant={'red'}
                            link={'/'}
                            content={'Join the waiting list'}
                            className={'!w-full md:!w-fit'}
                        />
                    </div>
                    <div
                        className={'h-[300px] md:h-[400px] lg:h-[600px] w-full relative mb-8 mx-auto'}
                    >
                        <div
                            className={
                                'absolute z-[3] h-full w-full gradient-linear-background-black md:hidden'
                            }
                        ></div>
                        <Image
                            src={isTablet ? CaptorDiagonal : CaptorVertical}
                            layout={'fill'}
                            className={'absolute object-cover z-[1] object-top'}
                            alt={''}
                        />
                    </div>
                </div>

                <div
                    className={
                        'flex md:flex-row flex-col items-center md:items-start col-span-2 justify-between w-full space-y-4 md:space-y-0'
                    }
                >
                    <Image
                        className={'md:mb-0 mb-8'}
                        src={'/assets/icons/white-logo.svg'}
                        alt={''}
                        width={isTablet ? 110 : 90}
                        height={isTablet ? 40 : 30}
                    />
                    <div
                        className={
                            'flex  flex-col items-center md:items-end md:justify-end space-y-3 md:space-x-6'
                        }
                    >
                        <div className={'flex space-x-6'}>
                            <Link href={'/'}>Home</Link>
                            <Link href={'/timer'}>Timer</Link>
                            <Link href={'/apco'}>Apco</Link>
                            <Link href={'/about'}>About</Link>
                            <Link href={'/contact'}>Contact</Link>
                        </div>
                        <div className={'flex space-x-6 text-white/40 text-sm md:text-base'}>
                            <Link href={'#'}>Support</Link>
                            <Link href={'#'}>Privacy Policy</Link>
                            <Link href={'#'}>Terms of Service</Link>
                        </div>
                        <p className={'text-center text-white/40 !mt-8'}>
                            Copyright © 2022 ATHLETID Inc. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer