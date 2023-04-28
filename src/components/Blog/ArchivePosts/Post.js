import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {useTranslation} from "next-i18next";

export const Post = ({ data }) => {
  const { title, img, description, slug, sections } = data
  const { t } = useTranslation('blog')

  return (
      <Link href={`/posts/${slug}`}>
        <div className={'flex flex-col'}>
          <div
              className={'h-[380px] w-full relative rounded-small overflow-hidden'}
          >
            <Image
                src={img}
                fill
                sizes={'100vw'}
                className={'object-cover'}
                alt={''}
            />
          </div>
          <div className={'text-[20px] leading-[32px] mt-4 mb-2 underline'}>
            {title}
          </div>
          <p className={'text-[14px] leading-[24px] text-darkGrey mb-4'}>
            {sections[0].paragraph.substring(0, 100) + ' ...'}
          </p>
          <div className={'flex space-x-2'}>
            <div className={'text-[14px] leading-[17px]'}>{t("blog:buttons.read-post")}</div>
            <Image
                src={'/assets/icons/diagonal-arrow.svg'}
                width={7}
                height={7}
                sizes={'10vw'}
                alt={''}
            />
          </div>
        </div>
      </Link>
  )
}