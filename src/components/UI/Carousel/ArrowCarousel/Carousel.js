import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import React, {useState} from 'react'
import CarouselSlide from '@/src/components/UI/Carousel/ArrowCarousel/CarouselSlide'
import {CarouselItems} from '@/src/components/UI/Carousel/ArrowCarousel/CarouselItems'

const Carousel = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [isPrevious, setIsPrevious] = useState(false)
    const [isNext, setIsNext] = useState(false)

    return (
        <div className={'lg:my-40 my-28'}>
            <CarouselSlide
                title={CarouselItems[currentItemIndex].title}
                description={CarouselItems[currentItemIndex].description}
                image={CarouselItems[currentItemIndex].image}
            />

            <div className={'flex justify-between items-center mt-8'}>
                <div
                    className={
                        `w-[55px] h-[55px] border ${isPrevious ? 'border-timeRed' : 'border-black'} rounded-full flex items-center justify-center`
                    }
                >
                    <BsArrowLeft
                        size={20}
                        color={'black'}
                        onClick={() => {
                            if (currentItemIndex > 0) {
                                setCurrentItemIndex(currentItemIndex - 1)
                                setCount(count - 1)
                            } else {
                                setCurrentItemIndex(CarouselItems.length - 1)
                                setCount(CarouselItems.length - 1)
                            }
                            setIsPrevious(true)
                            setIsNext(false)
                        }}
                    />
                </div>
                <div className={'flex space-x-4'}>
                    {CarouselItems.map((item, index) => (
                        <div
                            key={index}
                            className={`border-2 border-red-500 ${
                                index === count ? 'bg-red-500' : ''
                            } rounded-full h-[15px] w-[15px]`}
                            onClick={() => {
                                if (count < CarouselItems.length - 1) {
                                    setCount(count + 1)
                                } else {
                                    setCount(count - 1)
                                }
                            }}
                        ></div>
                    ))}
                </div>
                <div
                    className={`w-[55px] h-[55px] border ${isNext ? 'border-timeRed' : 'border-black'}  rounded-full flex items-center justify-center`}
                >
                    <BsArrowRight
                        size={20}
                        color={'black'}
                        onClick={() => {
                            if (currentItemIndex < CarouselItems.length - 1) {
                                setCurrentItemIndex(currentItemIndex + 1)
                                setCount(count + 1)
                            } else {
                                setCurrentItemIndex(0)
                                setCount(0)
                            }
                            setIsPrevious(false)
                            setIsNext(true)
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Carousel


