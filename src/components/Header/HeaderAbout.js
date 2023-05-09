import React from 'react';
import Image from "next/image";
import TeamHeader from "@/public/assets/images/teamHeader.webp"
import {useIsMobile} from "@/src/components/Hooks/useMediaQuery";
import {useTranslation} from "next-i18next";

const HeaderAbout = () => {

    const isMobile = useIsMobile();
    const { t } = useTranslation('about')

    return (
        <div className={""}>
            <div className={'px-4  max-w-[350px] md:max-w-[1170px] mx-auto space-y-4 mb-[72px] mt-[142px] lg:mt-[216px] md:grid md:grid-cols-2 md:gap-[32px]'}>
                <h1>{t("about:header.title")}</h1>
                <p className={'md:flex md:items-end'}>{t("about:header.subTitle")}</p>
            </div>
            <div className={'h-[820px] md:h-[750px]  lg:h-[1000px] relative'}>
                <Image fill src={TeamHeader} alt={""} sizes={"100vw"} className={'object-cover md:object-center object-left'}/>
            </div>

        </div>
    );
};

export default HeaderAbout;