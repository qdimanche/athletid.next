import React from 'react'
import Image from 'next/image'
import clsx from "clsx";
import keyNumbers from "@/src/components/Timer/KeyNumbers";
import {useTranslation} from "next-i18next";

const KeyNumbers = () => {

    const { t } = useTranslation('about')
    const keyNumbersContent = t('about:keyNumbers', { returnObjects: true })

    return (

        <div
            className={
                'max-w-[350px] md:max-w-[1050px] mx-auto mt-[92px] md:mt-[126px] md:grid md:grid-cols-3 md:justify-between md:gap-[72px] '
            }
        >
            {keyNumbersContent.map((value, index) => {
                return (
                    <Number
                        key={index}
                        text={value.text}
                        number={value.number}
                    />
                )
            })}
        </div>
    )
}

export default KeyNumbers

function Number(props) {
    return (
        <div className={clsx("flex flex-col space-y-6 py-8 border-b border-black/6 md:border-none", props.className)}>
            <div className={'flex flex-col space-y-2'}>
                <span className={'font-[400] xl:text-[72px] xl:leading-[81px]'}>{props.number}</span>
                <p className={''}>{props.text}</p>
            </div>
        </div>
    )
}