import React from 'react'
import Button from '@/src/components/UI/Button/Button'
import Tag from '@/src/components/UI/Tag'

const HeaderApco = () => {
    
    return (
        <div className={'h-[1000px] w-screen mx-auto relative'}>
            <div
                className={
                    'pt-28 max-w-[1280px] w-full absolute space-y-4 flex flex-col items-center px-8 z-[50] transform -translate-x-1/2 left-1/2'
                }
            >
                <Tag text={'Soon available'} variant={'black'}/>
                <h1
                    className={`text-center text-black white whitespace-pre-wrap`}
                >
                    The futur of fitness <br/>and wellness
                </h1>
                <div className={`flex md:justify-start justify-center space-x-4`}>
                    <Button className={'text-[16px]'} variant={'red'} link={'/'} content={"Join the waiting list"}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderApco