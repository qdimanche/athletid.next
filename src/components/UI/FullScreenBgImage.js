import React from 'react'
import Image from 'next/image'
import Tag from '@/src/components/UI/Tag'
import Button from '@/src/components/UI/Button'
import clsx from "clsx";

const FullScreenBgImage = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        `rounded-medium overflow-hidden relative  min-h-[380px] max-h-[500px] md:min-h-0 md:max-h-[1080px] ${props.bgColor}`,
        className
      )}
    >
      {
        props.srcBg ?       <Image
            className={'object-cover'}
            src={props.srcBg}
            width={1920}
            height={props.imageHeight}
        /> : <></>
      }
      <div
        className={
          'flex flex-col justify-between absolute h-full w-full top-4 left-4 lg:top-8 lg:left-8'
        }
      >
        <div className={`${props.paragraphWidth} `}>
          <Tag
            text={'lorem'}
            className={`${props.tag} mb-4`}
            variant={'white'}
          />
          <h2 className={`text-${props.textColor}`}>
            Lorem ipsum dolor sit amet
          </h2>
        </div>
        <Button
          link={'/timer'}
          text={'lorem'}
          variant={'red'}
          className={'absolute right-8 bottom-8 lg:right-16 lg:bottom-16'}
        />
        <Image
          className={
            ` drop-shadow-custom lg:-translate-x-8 -translate-x-4 mt-4 w-fit mx-auto px-4 md:hidden ${props.mockupDisplay}`
          }
          src={props.srcMockup}
          width={400}
          alt={''}
        />
      </div>
    </div>
  )
}

export default FullScreenBgImage
