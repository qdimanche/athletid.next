import React from 'react'
import Image from 'next/image'
import {useIsMobile, useIsTablet} from '@/src/components/Hooks/useMediaQuery'
import {apcoImages, timerImages} from '@/src/components/ImageSection/ImageSectionData'

const ImageSection = (props) => {

    const isMobile = useIsMobile();
    const isTablet = useIsTablet();

    let images = []

    const {imageData: propsImageData} = props

    if (propsImageData === 'timer') {
        images = [...timerImages]
    }else if (propsImageData === 'apco'){
        images = [...apcoImages]
    }

    return (
        <div className={'mt-[92px] md:mt-[120px]'}>
            <div
                className={
                    'flex flex-col items-center md:w-1/2 md:w-3/4 mx-auto mb-[72px] text-center'
                }
            >
                <h2 style={{whiteSpace: 'pre-line'}}>Accessible to everyone</h2>
                <p className={'w-full mt-4'}>
                    Designed in collaboration with athletes and experts from around world.
                    Your Timer application accompanies you whatever your level, your
                    discipline or your goals.
                </p>
            </div>
            <div className={'md:grid md:grid-cols-[1fr_370px_1fr] lg:grid-cols-[1fr_470px_1fr] h-full'}>
                <Image
                    src={images[0]}
                    width={isMobile ? 230 : 360}
                    height={isMobile ? 470 : 730}
                    className={' mx-auto my-8'}
                    alt="Application Apco Dashboard Full"
                />
                <div
                    className={
                        'relative h-[300px] md:w-full md:h-[570px] lg:h-full mx-auto md:order-first'
                    }
                >
                    <Image
                        src={images[1]}
                        width={isTablet ? 160 : 130}
                        height={200}
                        className={
                            'absolute top-0 left-0 md:left-auto md:top-16 lg:top-32 md:right-0 rounded-[8px]'
                        }
                        alt={''}
                    />
                    <Image
                        src={images[2]}
                        width={isTablet  ? 160 : 130}
                        height={200}
                        className={'absolute bottom-0 right-0 md:bottom-0 lg:bottom-32 rounded-[8px]'}
                        alt={''}
                    />
                </div>
                <div
                    className={
                        'relative h-[300px] md:w-full md:h-full w-[400px] mx-auto md:order-last hidden md:block'
                    }
                >
                    <Image
                        src={images[3]}
                        width={160}
                        height={218}
                        className={
                            'absolute top-0 right-0 md:right-auto md:top-0 lg:top-8 md:left-0 rounded-[8px]'
                        }
                        alt={''}
                    />
                    <Image
                        src={images[4]}
                        width={180}
                        height={218}
                        className={'absolute bottom-0 left-0 md:bottom-12 lg:bottom-40 rounded-[8px]'}
                        alt={''}
                    />
                </div>
            </div>
        </div>
    )
}

export default ImageSection
