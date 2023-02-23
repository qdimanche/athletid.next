import React from 'react'
import Image from 'next/image'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import {useIntl} from 'react-intl'
import Button from '@/src/components/UI/Button'

const HeaderJustifySelfEnd = (props) => {
    const intl = useIntl()

    return (
        <header
            className={`lg:h-[95vh] md:min-h-[60vh] min-h-[40vh] relative  overflow-hidden flex rounded-[30px] justify-center lg:justify-start rounded-header-mobile-tablet safari-overflow-fix mt-4 bg-[#F5F4F5]`}
        >
            <div
                style={{whiteSpace: 'pre-line'}}
                className={
                    'lg:mt-0 lg:mt-3 flex flex-col justify-center  z-[3] lg:p-0 items-center max-w-[1024px] 2xl:max-w-[1280px] mx-auto'
                }
            >
                <div
                    className={
                        'md:w-[55%] mr-auto lg:pt-0 pt-16 md:pb-16 pb-8 xl:pl-0 md:pl-8 md:pr-0 px-4'
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
                    <div
                        className={`flex md:justify-start justify-center space-x-4 ${props.visibilityButton}`}
                    >
                        <Button variant={'red'} link={props.link} text={'Découvrir'}/>
                    </div>
                </div>
                <Image
                    src={props.imageSrc}
                    width={props.imageWidth}
                    className={`md:absolute md:right-0 2xl:right-32 md:bottom-0`}
                />
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
