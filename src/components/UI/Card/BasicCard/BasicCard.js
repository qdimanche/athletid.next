import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import {AiOutlinePlus} from 'react-icons/ai'
import Button from '@/src/components/UI/Button/Button'
import Tag from '@/src/components/UI/Tag'
import WomanRedLine from "@/public/assets/images/woman-red-line.webp";

const BasicCard = ({className, ...props}) => {
    const [isClick, setIsClick] = useState(false)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (count % 2 === 0) {
            setIsClick(false)
        } else {
            setIsClick(true)
        }
    }, [count])

    return (
        <div
            className={clsx(
                `rounded-medium overflow-hidden relative w-full h-[500px] relative text-white`,
                className
            )}
        >
            <Image
                className={`object-cover  ${props.objectPosition}`}
                src={props.srcBg}
                fill
                priority={true}
                sizes={"100vw"}
                alt={''}
            />
            <div
                className={
                    isClick
                        ? 'hidden'
                        : ` flex flex-col  absolute h-full lg:w-full top-4 left-4 right-4`
                }
            >
                {props.tag && (
                    <Tag variant={'white'} text={'Soon available'} className={'mb-4'}/>
                )}
                <span className={`whitespace-pre-line text-4xl font-medium`}>
          {props.title}
        </span>
                <span
                    className={clsx(
                        `whitespace-pre-line text-white/40 font-medium md:!text-4xl`,
                        props.subTitleClassName
                    )}
                >
          {props.subTitle}
        </span>
            </div>
            {props.buttons === 'toggleButton' ? (
                <>
                    <div
                        className={`absolute h-full lg:w-full bg-white flex flex-col justify-center lg:p-[72px] p-[52px]  transition duration-300 
                ${isClick ? 'opacity-1' : 'opacity-0'}
                `}
                    >
                        <div
                            className={`${
                                isClick
                                    ? 'opacity-1 transition delay-[100ms] leading-[20px]  duration-300 flex items-center'
                                    : 'opacity-0'
                            } text-black ${props.paragraphWidth}`}
                        >
                            <div>
                                <p className={'text-[16px] font-[500] mb-2'}>{props.flipContentTitle}</p>
                                <p className={'text-[14px] whitespace-pre-line'}>{props.flipContent}</p>
                            </div>
                            <div className={`w-auto h-[${props.imageHeight}] relative`}>
                                {props.flipImageContent && (
                                    <Image src={props.flipImageContent} fill alt={""} sizes={"100vw"} className={'object-contain md:block hidden'} />
                                )}
                            </div>
                        </div>
                    </div>
                    <ToggleButton
                        text={'lorem'}
                        variant={'red'}
                        className={`absolute right-[39px] bottom-[39px] z-[100] !rounded-full ${
                            isClick ? 'rotate-45' : ''
                        }`}
                        content={<AiOutlinePlus size={24}/>}
                        onClick={() => {
                            setIsClick(true)
                            setCount(count + 1)
                        }}
                    />
                </>
            ) : (
                <Button
                    variant={'red'}
                    link={props.link}
                    className={clsx(
                        'absolute right-4 bottom-4 z-[100]',
                        props.buttonClassName
                    )}
                    content={'Discover'}
                />
            )}
        </div>
    )
}

export default BasicCard
