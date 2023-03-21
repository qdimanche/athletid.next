import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import React, {useState} from 'react'
import CarouselSlide from '@/src/components/UI/Carousel/ArrowCarousel/CarouselSlide'
import {CarouselItems} from '@/src/components/UI/Carousel/ArrowCarousel/CarouselItems'

const Carousel = (props) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [isPrevious, setIsPrevious] = useState(false)
    const [isNext, setIsNext] = useState(false)

    return (
        <div className={'lg:my-40 my-28'}>

            <div
                className={
                    'flex flex-col items-center px-8 mx-auto mb-16 text-center'
                }
            >
                <p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div className={'relative'}>
                <CarouselSlide
                    title={CarouselItems[currentItemIndex].title}
                    description={CarouselItems[currentItemIndex].description}
                    image={CarouselItems[currentItemIndex].image}
                    className={'relative'}
                />

                <div
                    className={
                        'flex justify-between items-center mt-8 md:mt-0 md:absolute md:transform md:top-1/2 md:-translate-y-1/2 md:w-full'
                    }
                >
                    <div
                        className={`w-[55px] h-[55px] border ${
                            isPrevious ? 'border-timeRed' : 'border-black'
                        } rounded-full flex items-center justify-center`}
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
                    >
                        <BsArrowLeft size={20} color={'black'}/>
                    </div>
                    <div className={'flex space-x-4 md:hidden'}>
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
                        className={`w-[55px] h-[55px] border ${
                            isNext ? 'border-timeRed' : 'border-black'
                        }  rounded-full flex items-center justify-center`}
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
                    >
                        <BsArrowRight size={20} color={'black'}/>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Carousel


