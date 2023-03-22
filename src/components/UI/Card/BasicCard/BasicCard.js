import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import {AiOutlinePlus} from 'react-icons/ai'

const BasicCard = ({className, tagVariantOverride, ...props}) => {
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
                `rounded-medium overflow-hidden relative h-[500px] relative text-white`,
                className
            )}
        >
            <Image
                className={
                    isClick ? 'hidden' : `object-cover object-top`
                }
                src={props.srcBg}
                alt={''}
                layout={'fill'}
            />
            <div
                className={
                    isClick
                        ? 'hidden'
                        : `w-3/4 md:w-1/3 flex flex-col  absolute h-full lg:w-full top-8 left-8`
                }
            >
                <h2
                    className={`whitespace-pre-line font-medium text-[2em]`}
                >
                    {props.title}
                </h2>
                <h2 className={`whitespace-pre-line text-[2em] !text-white/40`}>
                    {props.subTitle}
                </h2>
            </div>
            <div
                className={`absolute h-full lg:w-full bg-white flex flex-col justify-center p-8 pt-0 transition duration-300 
                ${isClick ? 'opacity-1' : 'opacity-0'}
                `}
            >
                <p
                    className={`${
                        isClick
                            ? 'opacity-1 transition delay-[100ms] duration-300'
                            : 'opacity-0'
                    }`}
                >
                    {props.flipContent}
                </p>
            </div>
            <ToggleButton
                text={'lorem'}
                variant={'red'}
                className={`absolute right-8 bottom-8 z-[100] !rounded-full !p-3 ${
                    isClick ? 'rotate-45' : ''
                }`}
                content={<AiOutlinePlus size={30}/>}
                onClick={() => {
                    setIsClick(true)
                    setCount(count + 1)
                }}
            />
        </div>
    )
}

export default BasicCard
