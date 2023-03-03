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
                        : `${props.paragraphWidth} flex flex-col  absolute h-full w-full top-8 left-8`
                }
            >
                <Tag
                    text={'lorem'}
                    className={`${props.tag} mb-4`}
                    variant={tagVariantOverride ? tagVariantOverride : 'white'}
                />
                <h2 className={`text-${props.textColor} font-medium `}>
                    Lorem ipsum dolor sit amet
                </h2>
            </div>
            <div
                className={`absolute h-full w-full bg-white flex flex-col justify-center p-8 pt-0 transition duration-300 
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
            <Button
                href={props.link}
                text={'lorem'}
                variant={'red'}
                className={clsx(
                    `absolute right-8 bottom-8 z-[100] ${isClick ? 'rotate-45' : ''}`,
                    props.buttonClassName
                )}
                content={props.buttonContent}
                onClick={() => {
                    setIsClick(true)
                    setCount(count + 1)
                }}
            />
        </div>
    )
}

export default Card
