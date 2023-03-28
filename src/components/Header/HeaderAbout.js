import React from 'react';
import Image from "next/image";
import TeamHeaderImageMobile from "@/public/assets/images/teamHeaderMobile.webp"

const HeaderAbout = () => {
    return (
        <div className={""}>
            <div className={'px-4  max-w-[350px] md:max-w-[1170px] mx-auto space-y-4 mb-[72px] mt-[142px] lg:mt-[216px] md:grid md:grid-cols-2 md:gap-[32px]'}>
                <h1>Build a solid and durable sports routine.</h1>
                <p className={'md:flex md:items-end'}>Athletid is with you every step of the way to help you get the most out of regular exercise.</p>
            </div>
            <div className={'h-[820px] md:h-[750px]  lg:h-[1000px] relative'}>
                <Image layout={"fill"} src={TeamHeaderImageMobile} alt={""} className={'object-cover'}/>
            </div>

        </div>
    );
};

export default HeaderAbout;