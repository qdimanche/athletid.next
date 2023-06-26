import React from 'react'

const Subscriptions = () => {
  return (
    <div className={'mt-[54px] text-center'}>
      <h2>
        <div className="flex">
          The
          <div className="font-semibold text-timeRed mx-2">most</div>
          powerful
        </div>
        and complete
      </h2>
      <p className={'mt-[18px]'}>
        Try if for free now and discover the complete workout builder. Build and
        save your workout quickly and easily.
      </p>
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
    </div>
  )
}

export default Subscriptions
