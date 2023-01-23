import React from 'react';
import WhiteBorderButton from "../Buttons/WhiteBorderButton";
import ImgHeader from "../../../public/assets/images/femme-entrainement-exterieur-fitness.webp"
import Image from "next/image"

const CompetitionFeature = () => {
    return (
        <div>
            <div className={'lg:h-[95vh] md:h-[80vh] h-[60vh] relative overflow-hidden flex rounded-[30px] justify-center md:justify-start rounded-header-mobile-tablet m-4 mb-20 safari-overflow-fix'}>
                <div className={"absolute top-0 left-0 w-full h-full bg-[black]/20 z-[1] "}></div>
                <Image src={ImgHeader} alt="" className={'w-full h-full object-cover pointer-events-none'}/>
                <div style={{whiteSpace:"pre-line"}} className={'lg:mt-0 md:mt-3 absolute-vertical-center-header absolute-vertical-center-mobile-header flex flex-col justify-center md:items-start items-center  z-[3] md:p-0 px-8 md:grid md:grid-cols-2'}>
                    <div className={'2xl:ml-28 lg:ml-20 md:ml-12'}>
                        <h1 className={'md:text-left text-center text-white md:w-[80%]'}>Participe <br/> à notre concours génial !</h1>
                        <p className={'mt-[10px] mb-[20px] text-white md:text-left text-center '}>Voici les conditions</p>
                        <div className={`flex md:justify-start justify-center space-x-4`}>
                            <WhiteBorderButton link={"/network"} text={"Participer"}/>
                        </div>
                    </div>
                </div>
             </div>
        </div>

    );
};

export default CompetitionFeature;