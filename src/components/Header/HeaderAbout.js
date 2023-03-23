import React from 'react';
import Image from "next/image";
import TeamHeaderImageMobile from "@/public/assets/images/teamHeaderMobile.webp"

const HeaderAbout = () => {
    return (
        <div className={""}>
            <div className={'px-8 md:px-12 max-w-[1280px] mx-auto space-y-4 lg:my-40 my-28'}>
                <h1>Build a solid and durable sports routine.</h1>
                <p>Athletid is with you every step of the way to help you get the most out of regular exercise.</p>
            </div>
            <div className={'h-[820px] md:h-[750px]  lg:h-[535px] relative'}>
                <Image layout={"fill"} src={TeamHeaderImageMobile} alt={""} className={'object-cover'}/>
            </div>

        </div>
    );
};

export default HeaderAbout;