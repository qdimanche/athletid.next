import React from 'react'
import Image from 'next/image'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useIntl} from 'react-intl'
import Button from '@/src/components/UI/Button'

const HeaderJustifySelfEnd = (props) => {
    const intl = useIntl()

    return (
        <header
            className={`header-height relative  overflow-hidden flex md:rounded-medium justify-center lg:justify-start bg-greyShade lg:m-4 md:mt-4 mt-0`}
        >
            <div
                style={{whiteSpace: 'pre-line'}}
                className={
                    'lg:mt-0 lg:mt-3 flex md:flex-row flex-col justify-center  z-[3] lg:p-0 items-center max-w-[1280px] mx-auto'
                }
            >
                <div
                    className={
                        'md:w-[45%] xl:w-[50%] md:mr-auto pt-28 md:pt-28 md:pr-8 md:py-16 xl:p-0 p-8 w-screen'
                    }
                >
                    <h1
                        className={`md:text-left text-center text-black white whitespace-pre-wrap`}
                    >
                        {props.title}
                    </h1>
                    <p
                        className={`mt-[10px] mb-[20px] text-black md:text-left text-center `}
                    >
                        {props.subTitle}
                    </p>
                    <div className={`flex md:justify-start justify-center space-x-4`}>
                        <Button variant={'red'} link={props.link} content={'Découvrir'} />
                    </div>
                </div>
                <div
                    className={
                        'min-h-[500px] lg:min-h-[90vh]  w-[500px] md:w-1/2  md:absolute md:bottom-0 md:right-0 relative'
                    }
                >
                    <Image
                        src={props.imageSrc}
                        layout={'fill'}
                        alt={''}
                        className={`object-cover object-left-top  md:right-0 md:bottom-0`}
                    />
                </div>
            </div>
            <div
                className={
                    'absolute bottom-[1.5rem] right-[1.5rem]  space-y-6 z-[900] text-[1.3em] lg:flex flex-col hidden'
                }
            >
                <a target={'_blank'} href={props.instaLink} rel="noreferrer">
                    <FaInstagram size={18} color={'black'}/>
                </a>
                <a
                    target={'_blank'}
                    href="https://www.facebook.com/TimerByAthletid"
                    rel="noreferrer"
                >
                    <FaFacebook size={18} color={'black'}/>
                </a>
                <a
                    target={'_blank'}
                    href="https://www.linkedin.com/company/athletid/"
                    rel="noreferrer"
                >
                    <FaLinkedin size={18} color={'black'}/>
                </a>
            </div>
        </header>
    )
}


export default HeaderJustifySelfEnd;
