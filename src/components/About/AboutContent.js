import React from 'react';
import HeroVideoHome from "../../assets/videos/heroVideoHome.mp4";
import ImgHeaderHome from "../../assets/images/femme-entrainement-exterieur-fitness.webp"

const AboutContent = () => {
    return (
        <div data-scroll-section
             className={'2xl:mt-[15rem]  lg:!m-8  border-b border-white/10 overflow-x-hidden m-4 mb-16'}>
            <div className={'flex lg:flex-row flex-col lg:space-y-0 space-y-6 items-center'}>
                <div className={' md:text-left text-center'}>
                    <span className={'text-[1.5em]'}>Notre Vision. </span>
                </div>
                <div className={'flex flex-col md:text-left text-center lg:ml-8'}>
                    <p>Donner à chacun la possibilité d’atteindre ses objectifs. Lorsque deux forces sont jointes, leur
                        efficacité est double</p>
                </div>
            </div>

            <div className={'flex lg:flex-row flex-col lg:space-y-0 space-y-6 items-center my-8'}>
                <div className={' md:text-left text-center'}>
                    <span className={'text-[1.5em]'}>Notre Mission.</span>
                </div>
                <div className={'flex flex-col md:text-left text-center lg:ml-8 '}>
                    <p>Créer une expérience et un environnement qui sont le reflet des sportifs du monde entier, dans le
                        but de les accompagner dans leur quêtes.</p>
                </div>
            </div>

            <div
                className={'lg:h-[60vh] h-[35vh] rounded-[30px] relative overflow-hidden flex mb-0  safari-overflow-fix'}>
                <video className={'w-full h-full object-cover lg:block hidden'} src={HeroVideoHome} autoPlay loop muted
                       playsInline type="video/mp4"/>
                <img src={ImgHeaderHome} alt="" className={'lg:hidden w-full h-full object-cover pointer-events-none'}/>
            </div>


        </div>
    );
};

export default AboutContent;