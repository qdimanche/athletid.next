import React from 'react'
import 'swiper/css'
import {useTranslation} from "next-i18next";
import SearchBar from "@/src/components/Search/SearchBar/SearchBar";

const HeaderBlog = () => {

    const { t } = useTranslation('blog')

    return (
        <div className={'mt-[142px] md:mt-[216px]'}>
            <h1 className={'mb-4'}>{t("blog:title")}</h1>
            <p className={'mb-[72px]'}>
                {t("blog:subTitle")}
            </p>
            <SearchBar/>
        </div>
    )
}

export default HeaderBlog;
