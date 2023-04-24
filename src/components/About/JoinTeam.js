import React from 'react'
import Button from '@/src/components/UI/Button/Button'

const JoinTeam = () => {
  return (
    <div className={'mt-[92px] md:mt-[102px] md:grid md:grid-cols-2'}>
      <h2 className={'mb-4'}>Join the community.</h2>
      <div className={'flex flex-col'}>
        <p className={'mb-8'}>
          You are passionate about training, surpassing yourself and well-being?
          Then Athletid is for you! Regardless of your level of experience, your
          goals or your discipline, you will find here what you need to fully
          develop in your activity.
        </p>
        <Button
          variant={'red'}
          targetBlank
          content={'Join us'}
          link={'https://www.instagram.com/timerbyathletid/'}
          className={''}
        />
      </div>
    </div>
  )
}

export default JoinTeam;