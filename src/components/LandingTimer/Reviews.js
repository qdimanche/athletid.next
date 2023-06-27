import React from 'react'
import Marquee from 'react-fast-marquee'
import {BsStarFill} from "react-icons/bs";

const Reviews = () => {
  return (
    <div>
      <h2 className={"mt-[75px] mb-[64px] flex flex-col items-center"}>Many of you <div className={'flex'}>already <div className={'font-semibold text-timeRed ml-2'}>love</div></div>the app</h2>
      <Marquee autoFill={true} className={''}>
        <div className={'w-[310px] border border-black rounded-small p-8 flex flex-col ml-6'}>
          <p>
            “Finally, an app. Really useful in the gym! At least there&apos;s no need
            to have several apps for different muscle-strengthening exercises.
            The settings for the perfect session are really worth it. Well
            done!!!!”
          </p>
          <div className={'flex justify-between items-center mt-[20px]'}>
              <div className={'font-semibold'}>Philippe</div>
            <div className={'flex space-x-2'}>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>

            </div>
          </div>
        </div>
        <div className={'w-[310px] border border-black rounded-small p-8 flex flex-col ml-6'}>
          <p>
            “Finally, an app. Really useful in the gym! At least there&apos;s no need
            to have several apps for different muscle-strengthening exercises.
            The settings for the perfect session are really worth it. Well
            done!!!!”
          </p>
          <div className={'flex justify-between items-center mt-[20px]'}>
              <div className={'font-semibold'}>Philippe</div>
            <div className={'flex space-x-2'}>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>

            </div>
          </div>
        </div>
      </Marquee>
      <Marquee direction={"right"} autoFill={"true"} className={"mt-[56px]"}>
        <div className={'w-[310px] border border-black rounded-small p-8 flex flex-col ml-6'}>
          <p>
            “Finally, an app. Really useful in the gym! At least there&apos;s no need
            to have several apps for different muscle-strengthening exercises.
            The settings for the perfect session are really worth it. Well
            done!!!!”
          </p>
          <div className={'flex justify-between items-center mt-[20px]'}>
              <div className={'font-semibold'}>Philippe</div>
            <div className={'flex space-x-2'}>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>

            </div>
          </div>
        </div>
        <div className={'w-[310px] border border-black rounded-small p-8 flex flex-col ml-6'}>
          <p>
            “Finally, an app. Really useful in the gym! At least there&apos;s no need
            to have several apps for different muscle-strengthening exercises.
            The settings for the perfect session are really worth it. Well
            done!!!!”
          </p>
          <div className={'flex justify-between items-center mt-[20px]'}>
              <div className={'font-semibold'}>Philippe</div>
            <div className={'flex space-x-2'}>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>
              <BsStarFill width={20} height={20} color={"black"}/>

            </div>
          </div>
        </div>
      </Marquee>
    </div>
  )
}

export default Reviews
