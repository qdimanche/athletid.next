import React from 'react'

export const TabMenu = (props) => {
  const handleCategoryClick = (category) => {
    props.setCategoryClick(category)
  }

  return (
    <div
      className={`flex space-x-4 border-b border-darkWhite' mb-[72px] md:mb-[65px] cursor-pointer overflow-x-auto pb-6`}
    >
      <div className={'relative'} onClick={() => handleCategoryClick(null)}>
        <div
          className={`text-[14px] leading-[24px] whitespace-nowrap ${
            props.categoryClick === null
              ? 'text-black font-[500]'
              : 'text-darkGrey'
          }`}
        >
          View all
        </div>
      </div>
      {props.categories.map((value, index) => {
        return (
          <div
            key={index}
            onClick={() => handleCategoryClick(value.id)}
            className={'relative  '}
          >
            <div
              className={`text-[14px] leading-[24px] ${
                value.id === props.categoryClick
                  ? 'text-black font-[500]'
                  : 'text-darkGrey'
              }`}
            >
              {value.name}
            </div>
          </div>
        )
      })}
    </div>
  )
}
