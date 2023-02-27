import React from 'react'
import Button from '@/src/components/UI/Button'
import Image from 'next/image'
import CaptorVertical from '@/public/assets/images/captor-vertical.webp'
import CaptorDiagonal from '@/public/assets/images/captor-diagonal.webp'
import WhiteLogo from '@/public/assets/images/white-logo-athletid.webp'
import Link from 'next/link'
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";

const Footer = () => {

    const isTablet = useMediaQuery('(min-width: 768px)')


    return (
        <footer
            className={
                'lg:mt-40 mt-28 bg-black text-white flex items-end md:p-12 p-8'
            }
        >
            <div
                className={
                    'max-w-[1280px] mx-auto flex flex-col items-center pt-20  md:pt-0'
                }
            >
                <div
                    className={'grid md:grid-cols-2 h-full items-center md:min-h-[70vh] w-full'}
                >
                    <div
                        className={
                            'flex flex-col md:items-start items-center md:text-left text-center mb-8'
                        }
                    >
                        <h2>Rejoignez la liste d&apos;attente</h2>
                        <p className={'!my-8'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dignissimos minima, sequi. Dolor fuga libero provident quas
                            reiciendis ut voluptate.
                        </p>
                        <Button
                            variant={'red'}
                            link={'/'}
                            text={"Rejoignez la liste d'attente"}
                            className={'!w-2/3 md:mx-0 md:!w-fit'}
                        />
                    </div>
                    <div className={'h-[300px] w-[300px] xl:w-[550px] xl:h-[550px] relative mb-8 mx-auto'}>
                        <div
                            className={
                                'absolute z-[3] h-full w-full gradient-linear-background-black md:hidden'
                            }
                        ></div>
                        <Image
                            src={isTablet ? CaptorDiagonal : CaptorVertical}
                            layout={'fill'}
                            className={'absolute object-cover z-[1] md:scale-110 xl:scale-[120%]'}
                            alt={''}
                        />
                    </div>
                </div>

                <div
                    className={
                        'flex md:flex-row flex-col items-center col-span-2 justify-between md:mb-8 w-full'
                    }
                >
                    <Image
                        className={'md:mb-0 mb-8'}
                        src={WhiteLogo}
                        alt={''}
                        width={110}
                        height={40}
                    />
                    <div className={'flex flex-col'}>
                        <p className={'text-white/40 mb-4 text-center md:hidden'}>
                            Copyright © 2022 ATHLETID Inc. All rights reserved.
                        </p>
                        <div className={'flex md:flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4 md:items-left items-center'}>
                            <Link href={'/contact'}>Support</Link>
                            <Link href={'/contact'}>Conditions d&apos;utilisation</Link>
                            <Link href={'/contact'}>Poltique de confidentialité</Link>
                        </div>
                    </div>
                </div>
                <p className={'text-white/40 w-full text-left hidden md:block'}>
                    Copyright © 2022 ATHLETID Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
