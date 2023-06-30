import React from 'react'
import Image from 'next/image'
import {useIsMobile} from "@/src/components/Hooks/useMediaQuery";

const Features = (props) => {

    const isMobile = useIsMobile();

  return (
    <div className={'mt-[85px] flex flex-col space-y-[32px] items-center text-center'}>
      <h2>
        Designed
        <div className={'flex justify-between'}>
          by <div className={'font-semibold text-timeRed mx-2'}>athletes</div>
        </div>{' '}
        <div className={'flex justify-between'}>
          for <div className={'font-semibold text-timeRed mx-2'}>athletes</div>
        </div>
      </h2>
        {isMobile ?
            <div
                className={'h-[240px] md:h-[750px] w-full relative rounded-small overflow-hidden'}
            >
                <Image src={props.imgMobile} fill className={'object-cover'} alt={'Athlet'} />
            </div> :
            <Image src={props.img} className={"h-[75Opx] w-full"} alt={'Athlet'} />
        }

    </div>
  )
}

export default Features