import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Result = () => {
  return (
    <p className={'mt-2'}>
      Your message has been sent. Our team will contact you soon.
    </p>
  )
}

const ContactForm = () => {
  const form = useRef()

  const [result, showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_tlk1sli',
        'template_uk76snt',
        form.current,
        'hcpAOjPdQ9nbt4P17'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    showResult(true)
  }

  return (
    <div className={'pt-[142px] lg:pt-[216px]'}>
      <div className={'flex flex-col mb-[72px]'}>
        <h2 className={''}>Let’s talk together!</h2>
        <p className={'mt-4'}>Here you can chat with real humans</p>
      </div>

      <div className={'rounded-medium'}>
        <form
          action=""
          className={'flex flex-col space-y-6'}
          ref={form}
          onSubmit={sendEmail}
        >
          <div className={'flex flex-col'}>
            <label>Your name</label>
            <input
              className={'focus:ring-1 focus:ring-white'}
              type="text"
              required
              name="fullName"
              placeholder={'Your name...'}
            />
          </div>

          <div className={'flex flex-col'}>
            <label>Your email</label>
            <input type="mail" name="email" required placeholder={'Your email...'} />
          </div>

          <div className={'flex flex-col'}>
            <label>Object</label>
            <input
              type="text"
              name="object"
              required
              placeholder={'Sports advices, customer service...'}
            />
          </div>

          <div className={'flex flex-col'}>
            <label>Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder={'Message'}
            ></textarea>
          </div>
          <div className={'w-full flex justify-end'}>
            <input
              type="submit"
              value="Send your message"
              required
              className={
                '!bg-timeRed hover:!bg-timeRedHover !transition !duration-300  !px-6 py-3 !rounded-[26px] text-white'
              }
            />
          </div>
          <div className={result ? '' : 'hidden'}>
            {' '}
            {result ? <Result /> : null}{' '}
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
