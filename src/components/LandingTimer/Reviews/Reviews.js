import React from 'react'
import Marquee from 'react-fast-marquee'
import { BsStarFill } from 'react-icons/bs'
import { Content1 } from './index'
import { Content2 } from './index'

const Reviews = () => {
  return (
    <div id={"reviews"}>
      <h2 className={'mt-[75px] mb-[64px] flex flex-col items-center'}>
        Many of you{' '}
        <div className={'flex'}>
          already <div className={'font-semibold text-timeRed ml-2'}>love</div>
        </div>
        the app
      </h2>
      <Marquee autoFill={true} className={''}>
        {Content1.map((value, index) => {
          return (
            <div
              key={index}
              className={
                'w-[310px] border border-black rounded-small p-8 ml-6 h-[200px] md:h-[300px] flex flex-col justify-around'
              }
            >
              <p className={'whitespace-preline'}>{value.comment}</p>
              <div className={'flex justify-between items-center mt-[20px]'}>
                <div className={'font-semibold'}>{value.author}</div>
                <div className={'flex space-x-2'}>
                  <BsStarFill width={20} height={20} color={'black'} />
                  <BsStarFill width={20} height={20} color={'black'} />
                  <BsStarFill width={20} height={20} color={'black'} />
                  <BsStarFill width={20} height={20} color={'black'} />
                  <BsStarFill width={20} height={20} color={'black'} />
                </div>
              </div>
            </div>
          )
        })}
      </Marquee>
      <Marquee autoFill={true} direction={"right"} className={'mt-[56px]'}>
        {Content2.map((value, index) => {
          return (
              <div
                  key={index}
                  className={
                    'w-[310px] border border-black rounded-small p-8  ml-6 h-[200px] md:h-[300px] flex flex-col justify-around'
                  }
              >
                <p className={'whitespace-preline'}>{value.comment}</p>
                <div className={'flex justify-between items-center mt-[20px]'}>
                  <div className={'font-semibold'}>{value.author}</div>
                  <div className={'flex space-x-2'}>
                    <BsStarFill width={20} height={20} color={'black'} />
                    <BsStarFill width={20} height={20} color={'black'} />
                    <BsStarFill width={20} height={20} color={'black'} />
                    <BsStarFill width={20} height={20} color={'black'} />
                    <BsStarFill width={20} height={20} color={'black'} />
                  </div>
                </div>
              </div>
          )
        })}
      </Marquee>
    </div>
  )
}

export default Reviews
