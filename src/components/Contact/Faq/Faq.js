import React from 'react'
import SimpleAccordion from '@/src/components/UI/Accordion/SimpleAccordion'
import { faqContent } from '@/src/components/Contact/Faq/index'

const Faq = () => {
  return (
    <div className={'mt-[72px]'}>
      <div className={'text-center mb-[72px]'}>
        <p className={'text-sm text-black/20 '}>FAQs</p>
        <h2 className={'my-2'}>Frequently asked questions</h2>
        <p className={'text-sm text-black/20'}>
          Have questions ? We’re here to help
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
