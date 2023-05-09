import React from 'react'
import 'swiper/css'
import {useTranslation} from "next-i18next";

const HeaderBlog = () => {

    const { t } = useTranslation('blog')

    return (
        <div className={'mt-[142px] md:mt-[216px]'}>
            <h1 className={'mb-4'}>{t("blog:title")}</h1>
            <p>
                {t("blog:subTitle")}
            </p>
        </div>
    )
}

export default HeaderBlog;
