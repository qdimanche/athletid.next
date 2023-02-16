import React from 'react'
import Image from 'next/image'
import CarouselSlide from '@/src/components/UI/CarouselSlide'

const FeatureSquare = (props) => {
  return (
    <div className={'lg:my-40 mt-28'}>
      <div
        className={
          'flex flex-col items-center lg:w-1/2 md:w-3/4 mx-auto text-center lg:mb-12 mb-8'
        }
      >
        <h2 style={{ whiteSpace: 'pre-line' }}>{props.titleFeatureSquare}</h2>
        <p className={'w-full mt-[10px]'}>{props.subTitleFeatureSquare}</p>
      </div>
      <div
        className={
          'md:grid hidden md:grid-cols-3 lg:gap-16 md:gap-10 gap-6 md:mb-0 mb-10 hidden'
        }
      >
        <div className={''}>
          <div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
            <Image
              placeholder={'blur'}
              src={props.imgSquare1}
              className={'object-cover w-2/3 pt-14 mx-auto'}
              alt={props.altSquare1}
            />
          </div>
          <div className={'text-center mt-6 md:px-10 flex flex-col'}>
            <p style={{ whiteSpace: 'pre-line' }} className={'font-normal'}>
              {props.titleSquare1}
            </p>
          </div>
        </div>
        <div className={''}>
          <div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
            <Image
              placeholder={'blur'}
              src={props.imgSquare2}
              className={'object-cover w-2/3 pt-14 mx-auto '}
              alt={props.altSquare2}
            />
          </div>
          <div className={'text-center mt-6 md:px-10 flex flex-col'}>
            <p style={{ whiteSpace: 'pre-line' }} className={'font-normal'}>
              {props.titleSquare2}
            </p>
          </div>
        </div>
        <div className={''}>
          <div className="rounded-medium overflow-hidden bg-[#F5F4F5]">
            <Image
              placeholder={'blur'}
              src={props.imgSquare3}
              className={'object-cover w-2/3 pt-14 mx-auto '}
              alt={props.altSquare3}
            />
          </div>
          <div className={'text-center mt-6 md:px-10 flex flex-col'}>
            <p style={{ whiteSpace: 'pre-line' }} className={'font-normal'}>
              {props.titleSquare3}
            </p>
          </div>
        </div>
      </div>
      <CarouselSlide
        customWidth={'w-[80%]'}
        childrenSlide1={
          <div>
            <div className="slide rounded-medium overflow-hidden bg-[#F2F2F2] px-8 pt-8">
              <Image
                alt={props.altSquare1}
                src={props.imgSquare1}
                className={''}
              />
            </div>
            <p className="legend absolute !bottom-[-10px] !text-black !bg-white !h-16">
              {props.titleSquare1}
            </p>
          </div>
        }
        childrenSlide2={
          <div>
            <div className="slide rounded-medium overflow-hidden bg-[#F2F2F2] px-8 pt-8">
              <Image
                alt={props.altSquare2}
                src={props.imgSquare2}
                className={''}
              />
            </div>
            <p className="legend absolute !bottom-[-10px] !text-black !bg-white !h-16">
              {props.titleSquare2}
            </p>
          </div>
        }
        childrenSlide3={
          <div>
            <div className="slide rounded-medium overflow-hidden bg-[#F2F2F2] px-8 pt-8">
              <Image
                alt={props.altSquare3}
                src={props.imgSquare3}
                className={''}
              />
            </div>
            <p className="legend absolute !bottom-[-10px] !text-black !bg-white !h-16">
              {props.titleSquare3}
            </p>
          </div>
        }
      />
    </div>
  )
}


export default FeatureSquare;
