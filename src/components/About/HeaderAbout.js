import React from 'react';
import Avatar from '../../assets/images/utilisateur-athletid.webp'
import Curve from '../../assets/images/curve.webp'
import Image from 'next/image'

const HeaderAbout = () => {
    return (
        <div className={''}>
            <div
                className={'relative flex flex-col items-center justify-center text-left md:min-h-screen md:my-8 m-16 mb-16 '}>
                <div className={'flex flex-col items-center justify-center md:mt-0 mt-12'}>
                    <h1>Bienvenue chez</h1>
                    <div className={'lg:w-[50%] md:w-[60%] w-[36%]'}>
                        <span className={'md:text-[3.5em] text-[2.2em]  text-[#E63D31] '}>Athletid</span>
                        <Image src={Curve} className={'-mt-3'} alt=""/>
                    </div>
                </div>

                <Image src={Avatar} className={'w-24 rounded-full absolute top-64 xl:left-40 md:left-14 hidden md:block'}
                     alt=""/>
                <Image src={Avatar}
                     className={'w-24 rounded-full absolute top-56 xl:right-40 md:right-14 hidden md:block'} alt=""/>
                <Image src={Avatar} className={'w-24 rounded-full absolute top-20 hidden md:block'} alt=""/>
                <Image src={Avatar}
                     className={'w-24 rounded-full absolute bottom-24 xl:left-80 md:left-44 hidden md:block'} alt=""/>
                <Image src={Avatar}
                     className={'w-24 rounded-full absolute bottom-28 xl:right-80 md:right-44 hidden md:block'} alt=""/>
            </div>
        </div>
    );
};

export default HeaderAbout;