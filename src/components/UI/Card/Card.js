import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import Tag from '@/src/components/UI/Tag'
import Button from '@/src/components/UI/Button'
import clsx from 'clsx'

const Card = ({className, tagVariantOverride, ...props}) => {
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
                `rounded-medium overflow-hidden relative h-[500px] relative`,
                className
            )}
        >
            <Image
                className={
                    isClick ? 'hidden' : `object-cover object-top ${props.objectPosition}`
                }
                src={props.srcBg}
                alt={''}
                layout={'fill'}
            />
            <div
                className={
                    isClick
                        ? 'hidden'
                        : `${props.paragraphWidth} flex flex-col  absolute h-full lg:w-full md:top-8 md:left-8 top-4 left-4`
                }
            >
                <Tag
                    text={props.tagContent}
                    className={`${props.tag} mb-4`}
                    variant={tagVariantOverride ? tagVariantOverride : 'white'}
                />
                <h2 className={`text-${props.textColor} whitespace-pre-line font-medium text-[2em]`}>
                    {props.title}
                </h2>
                <h2 className={`mt-2 whitespace-pre-line text-[2em] ${props.subTitleColor}`}>{props.subtitle}</h2>
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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci
                    at beatae doloribus eaque eum ex fuga, fugit mollitia nihil nulla
                    numquam pariatur, perspiciatis praesentium sed suscipit tenetur vero
                    voluptatibus!
                </p>
            </div>
        </div>
    )
}

export default Card
