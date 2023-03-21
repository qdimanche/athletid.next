import React from 'react'
import Image from 'next/image'
import CaptorReverse from '@/public/assets/images/captor-reverse.webp'
import Button from '@/src/components/UI/Button'
import Tag from '@/src/components/UI/Tag'

const Header = () => {
    return (
        <div className={'lg:h-[1000px] md:min-h-[60vh] h-[1050px] max-w-[1280px] mx-auto relative'}>
            <Image
                layout={'fill'}
                src={CaptorReverse}
                className={'object-cover'}
                alt={''}
            />
            <div
                className={
                    'pt-28 max-w-[1280px] w-full mx-auto absolute space-y-4 flex flex-col items-center'
                }
            >
                <Tag text={'Nouveau'} variant={'black'}/>
                <h1
                    className={`md:text-left text-center text-black white whitespace-pre-wrap`}
                >
                    Lorem ipsum dolor sit amet.
                </h1>
                <div className={`flex md:justify-start justify-center space-x-4`}>
                    <Button variant={'red'} link={'/'} content={"Découvrir"}/>
                </div>
            </div>
        </div>
    )
}

export default Header