import React from 'react'
import {useTranslation} from "next-i18next";

const CompanyDescription = () => {

  const { t } = useTranslation('about')
  const companyDescriptionContent = t("about:companyDescription.content", {returnObjects:true})

  return (
    <div className={'md:mt-[129px] mt-[92px]'}>
      <div className={'flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'}>
        <h2 className={'mb-4 md:mb-0'}>{t("about:companyDescription.title")}</h2>
        <div className={''}>
          <p className={'!text-base md:!text-[28px] md:!leading-[28px] mb-8 space-y-[30px]'}>
            {t("about:companyDescription.subTitle")}
          </p>
          <div className={'space-y-[30px]'}>
            {companyDescriptionContent.map((value, index) => {
              return (
                  <p key={index}>
                    {value}
                  </p>
              )
            })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default CompanyDescription;