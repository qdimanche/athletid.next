import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import React, {useState} from 'react'
import CarouselSlide from '@/src/components/UI/Carousel/ArrowCarouselBgImage/CarouselSlide'
import {apcoImages, timerImages} from '@/src/components/UI/Carousel/ArrowCarouselBgImage/CarouselItems'

const CarouselBgImage = (props) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0)
    const [count, setCount] = useState(0)
    const [isPrevious, setIsPrevious] = useState(false)
    const [isNext, setIsNext] = useState(false)

    let images = [];

    const {imageData : imageDataProps } = props ;

    if (imageDataProps === "timer"){
        images = [...timerImages];
    }else if (imageDataProps === "apco"){
        images = [...apcoImages];
    }


    return (
        <div className={'mt-[92px] md:mt-[120px] h-[800px] md:h-[1000px] relative'}>
            <CarouselSlide image={images[currentItemIndex]}/>

            <div
                className={
                    'absolute bottom-4 right-4 flex w-full justify-end space-x-4'
                }
            >
                <div
                    className={`w-[55px] h-[55px] border ${
                        isPrevious ? 'border-timeRed' : 'border-white'
                    } rounded-full flex items-center justify-center`}
                    onClick={() => {
                        if (currentItemIndex > 0) {
                            setCurrentItemIndex(currentItemIndex - 1)
                            setCount(count - 1)
                        } else {
                            setCurrentItemIndex(images.length - 1)
                            setCount(images.length - 1)
                        }
                        setIsPrevious(true)
                        setIsNext(false)
                    }}
                >
                    <BsArrowLeft size={20} color={'white'}/>
                </div>
                <div
                    className={`w-[55px] h-[55px] border ${
                        isNext ? 'border-timeRed' : 'border-white'
                    }  rounded-full flex items-center justify-center`}
                    onClick={() => {
                        if (currentItemIndex < images.length - 1) {
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
                    <BsArrowRight size={20} color={'white'}/>
                </div>
            </div>
        </div>
    )
}

export default CarouselBgImage


