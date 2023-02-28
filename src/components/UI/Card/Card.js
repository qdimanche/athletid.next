import React from 'react'
import Image from 'next/image'
import Tag from '@/src/components/UI/Tag'
import Button from '@/src/components/UI/Button'
import clsx from 'clsx'

const Card = ({className, ...props}) => {
    return (
        <div
            className={clsx(
                `rounded-medium overflow-hidden relative md:h-[450px] h-[400px] relative`,
                className
            )}
        >
            <Image
                className={`object-cover object-top ${props.objectPosition}`}
                src={props.srcBg}
                alt={""}
                layout={'fill'}
            />
            <div
                className={
                    'flex flex-col justify-between absolute h-full w-full top-8 left-8'
                }
            >
                <div className={`${props.paragraphWidth} `}>
                    <Tag
                        text={'lorem'}
                        className={`${props.tag} mb-4`}
                        variant={'white'}
                    />
                    <h2 className={`text-${props.textColor} font-medium `}>
                        Lorem ipsum dolor sit amet
                    </h2>
                </div>
                <Button
                    link={'/timer'}
                    text={'lorem'}
                    variant={'red'}
                    className={'absolute right-16 bottom-16'}
                />
            </div>
        </div>
    )
}

export default Card
