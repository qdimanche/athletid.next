import React from 'react'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import Button from "@/src/components/UI/Button";
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";

const breakpointColumnsObj = {
    default: 7,
    1024: 3,
    768: 2,
}


const MasonryGrid = ({items, ...props}) => {

    const isTablet = useMediaQuery('(min-width:768px} and (max-width: 1024px)');
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <div className={'lg:px-0 px-4 md:px-8'}>
            <div className={`lg:-mb-[2%] lg:mt-40 mt-28 mb-8`}>
                <div className={'text-center '}>
                    <div className={'flex flex-col items-center'} id={'titleMasonry'}>
                        <h2 style={{whiteSpace: "pre-line"}} className={''}>{props.titleMasonry}</h2>
                        <p style={{whiteSpace: "pre-line"}}
                           className={'mt-[10px] mb-[20px]'}>{props.subTitleMasonry}</p>
                        <Button variant={"black"} content={"Découvrir"} link={"/a-propos"}/>
                    </div>
                </div>
            </div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex space-x-4 md:px-0 px-4"
                columnClassName="custom-grid-column"
            >
                {items.slice(0, isTablet ? 9 : isMobile ? 6 : 20).map((item, index) => (


                    <div key={index} className={`relative odd:h-[175px] even:h-[350px] grid-item mb-4`}>
                        <Image
                            alt={""}
                            layout={'fill'}
                            src={item}
                            className={`rounded-medium object-cover`}
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default MasonryGrid;
