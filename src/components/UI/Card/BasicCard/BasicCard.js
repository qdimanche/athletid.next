import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import {AiOutlinePlus} from 'react-icons/ai'
import Button from '@/src/components/UI/Button/Button'
import Tag from '@/src/components/UI/Tag'

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
                sizes={"70vw"}
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
                        className={`absolute h-full lg:w-full bg-white flex flex-col justify-center p-4 pt-0 transition duration-300 
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
                        className={`absolute right-4 bottom-4 z-[100] !rounded-full !p-3 ${
                            isClick ? 'rotate-45' : ''
                        }`}
                        content={<AiOutlinePlus size={30}/>}
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
