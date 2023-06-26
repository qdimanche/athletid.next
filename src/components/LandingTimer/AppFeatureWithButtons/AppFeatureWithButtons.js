import React, { useState } from 'react'
import { Content } from './index'
import Image from 'next/image'

const AppFeatureWithButtons = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="mt-[70px] text-center">
      <h2>Accessible to</h2>
      <h2 className="font-semibold text-timeRed mb-[18px]">everyone</h2>
      <p>
        Designed in collaboration with athletes and experts from around the
        world. Your Timer application accompanies you whatever your level, your
        discipline or your goals.
      </p>
      <div>
        {activeIndex !== null && (
          <div className="mt-5">
            <div className="w-fit mx-auto">
              <p className="text-lg font-semibold">
                {Content[activeIndex].title}
              </p>
              <p className="text-lg mb-3">{Content[activeIndex].subTitle}</p>
              <Image
                src={Content[activeIndex].screen}
                className="bg-blend-multiply"
                width={222}
                height={390}
                alt="screen Timer"
              />
            </div>
          </div>
        )}
        <div className="flex justify-center mt-[60px]">
          {Content.map((value, index) => (
            <div
              key={index}
              className={`border-black border  py-[6px] px-[14px] rounded-full cursor-pointer mx-[30px] ${
                activeIndex === index ? 'bg-black text-white' : ''
              }`}
              onClick={() => handleClick(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppFeatureWithButtons
