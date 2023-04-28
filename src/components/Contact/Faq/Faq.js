import React from 'react'
import SimpleAccordion from '@/src/components/UI/Accordion/SimpleAccordion'
import { faqContent } from '@/src/components/Contact/Faq/index'
import {useTranslation} from "next-i18next";

const Faq = () => {

    const {t} = useTranslation("contact")

  return (
    <div className={'mt-[72px]'}>
      <div className={'text-center mb-[72px]'}>
        <p className={'text-sm text-black/20 '}>FAQs</p>
        <h2 className={'my-2'}>{t("contact:faq.title")}</h2>
        <p className={'text-sm text-black/20'}>
            {t("contact:faq.subTitle")}
        </p>
      </div>
      <div className={'space-y-3.5'}>
        {faqContent.map((value, index) => {
          return <SimpleAccordion key={index} title={value.title} content={value.content} />
        })}
      </div>
    </div>
  )
}

export default Faq
