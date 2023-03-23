import React from 'react'
import Image from 'next/image'

const Responsability = (props) => {
    return (
        <div className={'grid grid-cols-[50px_1fr] gap-x-6 gap-y-3 mt-12'}>
            <div className="flex items-center space-x-6">
                <Image src={props.icon} alt={''} height={40} width={40}/>
            </div>
            <h2 className={'font-medium whitespace-pre-line'}>{props.title}</h2>
            <div></div>
            <p
                style={{
                    whiteSpace: 'pre-line',
                    textAlign: 'justify',
                    textJustify: 'auto',
                }}
                className={'font-normal'}
            >
                {props.subtitle}
            </p>
        </div>
    )
}

export default Responsability;