import fetcher from '@/lib/fetcher'
import Spinner from '@/src/components/UI/Spinner/CircleSpinner'
import ErrorComponent from '@/src/components/Blog/_child/Error'
import React from 'react'
import {useTranslation} from "next-i18next";

export const TabMenu = (props) => {

  const handleCategoryClick = (category) => {
    props.setCategoryClick(category)
  }

  const { t } = useTranslation('blog')

  const { data, isLoading, isError } = fetcher(`api/posts`)
  if (isLoading) return <Spinner></Spinner>
  if (isError) return <ErrorComponent></ErrorComponent>

  const categoriesNames = [...new Set(data.map(value => value.category))]

  return (
      <div
          className={`flex space-x-4 border-b border-darkWhite' mb-[72px] md:mb-[65px] cursor-pointer overflow-x-auto pb-6`}
      >
        <div
            className={'relative'}
            onClick={() => handleCategoryClick(null)}
        >
          <div
              className={`text-[14px] leading-[24px] whitespace-nowrap ${
                  props.categoryClick === null ? 'text-black font-[500]' : 'text-darkGrey'
              }`}
          >
            {t("blog:buttons.view-all")}
          </div>
        </div>
        {categoriesNames.map((value, index) => {

          return (
              <div
                  key={index}
                  onClick={() => handleCategoryClick(value)}
                  className={'relative  '}
              >
                <div
                    className={`text-[14px] leading-[24px] ${
                        value === props.categoryClick ? 'text-black font-[500]' : 'text-darkGrey'
                    }`}
                >
                  {value}
                </div>
              </div>
          )
        })}
      </div>
  )
}