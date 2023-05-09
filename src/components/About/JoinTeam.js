import React from 'react'
import Button from '@/src/components/UI/Button/Button'
import {useTranslation} from "next-i18next";

const JoinTeam = () => {

    const { t } = useTranslation('about')

  return (
    <div className={'mt-[92px] md:mt-[102px] md:grid md:grid-cols-2'}>
      <h2 className={'mb-4'}>{t("about:joinTeam.title")}</h2>
      <div className={'flex flex-col'}>
        <p className={'mb-8'}>
            {t("about:joinTeam.subTitle")}
        </p>
        <Button
          variant={'red'}
          targetBlank
          content={t("uiComponents:buttons.join-us")}
          link={'https://www.instagram.com/timerbyathletid/'}
          className={''}
        />
      </div>
    </div>
  )
}

export default JoinTeam;