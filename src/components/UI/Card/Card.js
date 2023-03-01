import React from 'react'
import Image from 'next/image'
import Tag from '@/src/components/UI/Tag'
import Button from '@/src/components/UI/Button'
import clsx from 'clsx'

const Card = ({className, tagVariantOverride, ...props}) => {
    return (
        <div
            className={clsx(
                `rounded-medium overflow-hidden relative h-[500px] relative`,
                className
            )}
        >
            <Image
                className={`object-cover object-top ${props.objectPosition}`}
                src={props.srcBg}
                alt={''}
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
                        variant={tagVariantOverride ? tagVariantOverride : 'white'}
                    />
                    <h2 className={`text-${props.textColor} font-medium `}>
                        Lorem ipsum dolor sit amet
                    </h2>
                </div>
                <Button
                    link={'/timer'}
                    text={'lorem'}
                    variant={'red'}
                    className={clsx('absolute right-16 bottom-16', props.buttonClassName)}
                    content={props.buttonContent}
                />
            </div>
        </div>
    )
}

export default Card
