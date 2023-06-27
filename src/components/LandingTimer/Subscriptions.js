import React from 'react'
import { useIsMobile } from '@/src/components/Hooks/useMediaQuery'
import { AiOutlineCheck } from 'react-icons/ai'
import { FiX } from 'react-icons/fi'

const Subscriptions = () => {
  const isMobile = useIsMobile()

  return (
    <div className={'mt-[54px] mb-[54px] md:mb-0 md:mt-[156px] text-center'}>
      <h2>
        <div className="flex md:justify-center">
          The
          <div className="font-semibold text-timeRed mx-2">most</div>
          powerful
        </div>
        and complete
      </h2>
      {isMobile ? (
        <p className={'mt-[18px]'}>
          Try if for free now and discover the complete workout builder. Build
          and save your workout quickly and easily.
        </p>
      ) : (
        <p className={'mt-[18px]'}>
          Try if for free now and discover the complete workout builder.<br/>Build
          and save your workout quickly and easily.
        </p>
      )}

      {isMobile ? (
        <div
          className={
            'border border-b-0 border-black/10 mt-[20px] grid grid-cols-2'
          }
        >
          <div
            className={
              'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
            }
          >
            <p>Classic Timers</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-black/10 flex justify-between'
            }
          >
            <p className={'text-timeGreen'}>Free & Prenium</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-black/10 flex justify-between'
            }
          >
            <p>Save Sessions</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-black/10 flex justify-between'
            }
          >
            <p className={'text-timeGreen'}>Free & Prenium</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
            }
          >
            <p>Tempo, Breathing Interval</p>
          </div>{' '}
          <div
            className={
              'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
            }
          >
            <p className={'text-timeRed'}>Only Premium users</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
            }
          >
            <p>Tempo, Breathing Interval</p>
          </div>{' '}
          <div
            className={
              'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
            }
          >
            <p className={'text-timeRed'}>Full session</p>
          </div>
        </div>
      ) : (
        <div
          className={
            'border border-b-0 border-t-0 border-l-0 border-black/10 mt-[20px] grid grid-cols-4'
          }
        >
          <div className={'col-span-2'}></div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-l border-t border-r border-black/10 flex justify-center'
            }
          >
            <p className={''}>Free</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-t border-black/10 flex justify-center bg-greyShade'
            }
          >
            <p className={''}>Prenium</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-t border-l border-black/10 flex justify-between text-left col-span-2'
            }
          >
            <p>EMOM, Timer, Stopwatch, Meditation</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-l  border-r border-black/10 flex justify-center'
            }
          >
            <AiOutlineCheck color={'#4DAF00'} width={32} height={24} />
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b  border-black/10 flex justify-center bg-greyShade'
            }
          >
            <AiOutlineCheck color={'#4DAF00'} width={32} height={24} />
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-l border-black/10 flex justify-between text-left col-span-2'
            }
          >
            <p>Save Favorites Workout</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-l  border-r border-black/10 flex justify-center'
            }
          >
            <AiOutlineCheck color={'#4DAF00'} width={32} height={24} />
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b  border-black/10 flex justify-center bg-greyShade'
            }
          >
            <AiOutlineCheck color={'#4DAF00'} width={32} height={24} />
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-l border-black/10 flex justify-between text-left col-span-2'
            }
          >
            <p>Tempo, Interval, Breathing</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-l  border-r border-black/10 flex justify-center'
            }
          >
            <FiX color={'#E63D31'} width={32} height={24} />
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b  border-black/10 flex justify-center bg-greyShade'
            }
          >
            <AiOutlineCheck color={'#4DAF00'} width={32} height={24} />
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-l border-black/10 flex justify-between text-left col-span-2'
            }
          >
            <p>Full Session</p>
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b border-l  border-r border-black/10 flex justify-center'
            }
          >
            <FiX color={'#E63D31'} width={32} height={24} />
          </div>
          <div
            className={
              'px-[32px] py-[24px] border-b  border-black/10 flex justify-center bg-greyShade'
            }
          >
            <AiOutlineCheck color={'#4DAF00'} width={32} height={24} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Subscriptions
