import React from 'react'
import Marquee from 'react-fast-marquee'

const AnimatedBanner = () => {
  return (
    <Marquee className={'bg-black text-white flex mt-[65px]'}>
      <div className={"ml-4"}> 30 DAYS TRIAL SUBSCRIPTION FOR NEW USERS</div>
      <div className={'ml-4'}> 30 DAYS TRIAL SUBSCRIPTION FOR NEW USERS</div>
      <div className={'ml-4'}> 30 DAYS TRIAL SUBSCRIPTION FOR NEW USERS</div>
      <div className={'ml-4'}> 30 DAYS TRIAL SUBSCRIPTION FOR NEW USERS</div>
      <div className={'ml-4'}> 7 DAYS FREE TRIAL SUBSCRIPTION FOR NEW USERS</div>
    </Marquee>
  )
}

export default AnimatedBanner
