import Sportif from "../../../public/assets/images/application-athletid-reseau-sportif.webp";
import Pro from "../../../public/assets/images/application-athletid-reseau-professionnel.webp";
import Entreprise from "../../../public/assets/images/application-athletid-reseau-entreprise.webp";
import React from "react";
import Image from "next/image";


const SocialAppContent = (props) => {


    return (
        <div className={'lg:px-0 md:px-12'}>
            <div className={'grid lg:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 lg:w-full  md:px-0 mx-auto'}>
                <div
                    className={'safari-overflow-fix rounded-medium lg:safari-overflow-fix rounded-[40px] h-fit order-1'}>
                    <Image placeholder={"blur"} src={Sportif} className={'object-cover object-top lg:object-center lg:h-full w-full h-[50vh]'}
                         alt={props.altAppFeature1}/>
                </div>
                <div className={'flex flex-col lg:items-start items-center justify-center order-2 2xl:px-28 lg:px-20'}>
                    <div
                        className={'px-4 py-1 safari-overflow-fix rounded-medium bg-black text-white mb-[10px] w-fit'}>{props.tagAppFeature1}</div>
                    <h2 style={{whiteSpace: "pre-line"}}
                        className={'mb-[10px] lg:text-left text-center'}>{props.titleAppFeature1}</h2>
                    <p style={{whiteSpace: "pre-line"}}
                       className={'lg:text-left text-center lg:mb-0 mb-8'}>{props.subtitleAppFeature1}</p>
                </div>

                <div
                    className={'flex flex-col justify-center lg:items-start items-center lg:order-3 order-4 2xl:px-28 lg:px-20'}>
                    <div
                        className={'px-4 py-1 safari-overflow-fix rounded-medium bg-black text-white mb-[10px] w-fit'}>{props.tagAppFeature2}</div>
                    <h2 style={{whiteSpace: "pre-line"}}
                        className={'mb-[10px] lg:text-left text-center'}>{props.titleAppFeature2}</h2>
                    <p style={{whiteSpace: "pre-line"}}
                       className={'lg:text-left text-center lg:mb-0 mb-8'}>{props.subtitleAppFeature2}</p>
                </div>
                <div
                    className={'safari-overflow-fix rounded-medium lg:safari-overflow-fix rounded-[40px] lg:order-4 order-3'}>
                    <Image placeholder={"blur"} src={Pro} className={'object-cover lg:h-full w-full md:object-center object-top h-[50vh]'}
                         alt={props.altAppFeature2}/>
                </div>

                <div className={'safari-overflow-fix rounded-medium  lg:safari-overflow-fix rounded-[40px] order-5'}>
                    <Image placeholder={"blur"} src={Entreprise}
                         className={'object-cover lg:h-full w-full lg:object-center object-top h-[50vh]'} alt={props.altAppFeature3}/>
                </div>
                <div className={' flex flex-col justify-center order-6 lg:items-start items-center 2xl:px-28 lg:px-20'}>
                    <div
                        className={'px-4 py-1 safari-overflow-fix rounded-medium bg-black text-white mb-[10px] w-fit'}>{props.tagAppFeature3}</div>
                    <h2 style={{whiteSpace: "pre-line"}}
                        className={'mb-[10px] lg:text-left text-center'}>{props.titleAppFeature3}</h2>
                    <p style={{whiteSpace: "pre-line"}}
                       className={'lg:text-left text-center lg:mb-0 mb-8'}>{props.subtitleAppFeature3}</p>
                </div>

            </div>


        </div>
    );
}

export default SocialAppContent;


