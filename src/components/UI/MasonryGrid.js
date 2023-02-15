import React from 'react';
import MasonryImages from '../../../public/assets/images/masonry';
import Image from 'next/image'
import Button from "@/src/components/UI/Button";


const MasonryGrid = (props) => {


    return (
        <div className={`relative lg:my-40 mt-28 mb-32 lg:-mx-4 max-w-screen lg:overflow-hidden lg:mb-[-15%]`}>
            <div className={`lg:mx-8 z-1`}>
                <div className={'text-center '}>
                    <div className={'lg:mb-20 flex flex-col items-center mb-6'} id={'titleMasonry'}>
                        <h2 style={{whiteSpace: "pre-line"}} className={''}>{props.titleMasonry}</h2>
                        <p style={{whiteSpace: "pre-line"}}
                           className={'mt-[10px] mb-[20px]'}>{props.subTitleMasonry}</p>
                        <Button variant={"black"} text={"Découvrir"} link={"/a-propos"}/>
                    </div>
                </div>
            </div>
            <div
                className={`flex gap-4  absolute lg:mx-[-10%] relative grid lg:grid-cols-[1fr_1fr_2fr_1fr_1fr_2fr_1fr] md:grid-cols-3 grid-cols-2`}>
                <div className={
                    'lg:translate-y-[-15%] translate-y-0 space-y-4 duration-1000 z-[800] lg:flex flex-col'}
                >
                    <Image
                           className={'object-cover h-[230px] lg:h-[400px] lg:w-full rounded-medium lg:block hidden'}
                           src={MasonryImages.img1} alt="Entrâinement d'un sportif sur un tapis d'entraînement"/>
                    <Image
                           className={'object-cover h-[230px] lg:h-[400px] lg:w-full rounded-medium lg:hidden md:block hidden'}
                           src={MasonryImages.img1Tablet} alt="Sportives souriantes utilisant l'application Athletid"/>
                    <Image
                           className={'object-cover h-[270px] lg:h-[400px] lg:w-full rounded-medium '}
                           src={MasonryImages.img2} alt=""/>
                    <Image className={'object-cover h-[225px] lg:w-full  rounded-medium'}
                           src={MasonryImages.img3} alt="Sportives faisant du sport en extérieur"/>
                    <Image
                           className={'object-cover lg:h-[350px] lg:w-full rounded-medium hidden md:block'}
                           src={MasonryImages.img4} alt="Homme soulevant une haltère"/>
                </div>
                <div
                    className={'space-y-4 lg:translate-y-[0px] md:translate-y-[190px] translate-y-[90px] lg:flex flex-col'}>
                    <Image className={'object-cover  h-[275px] lg:w-full rounded-medium '}
                           src={MasonryImages.img6} alt="Femme faisant un étirement avant de courir"/>
                    <Image
                           className={'object-cover  h-[180px] lg:h-[350px] lg:w-full rounded-medium lg:block hidden'}
                           src={MasonryImages.img7} alt="Coureur sur une piste de course"/>
                    <Image
                           className={'object-cover  h-[180px] lg:h-[350px] lg:w-full rounded-medium lg:hidden block'}
                           src={MasonryImages.img7Tablet} alt="Personne handicapée faisant du sport avec un coach"/>
                    <Image
                           className={'object-cover lg:h-[240px] lg:w-full  rounded-medium hidden md:block'}
                           src={MasonryImages.img8} alt="Le sport pour tous"/>
                </div>


                <div className={
                    ' translate-y-[5%]  space-y-4  duration-1000 z-[800] md:block hidden lg:flex flex-col'
                }>
                    <Image className={'object-cover h-[350px] w-2/3 rounded-medium '}
                           src={MasonryImages.img9}
                           alt="Homme en pleine séance de crossFit."/>
                    <Image className={'object-cover h-[420px] w-full rounded-medium '}
                           src={MasonryImages.img10}
                           alt="Femme à la salle de musculation soulevant une haltère"/>
                    <Image className={'object-cover h-[300px] w-full  rounded-medium '}
                           src={MasonryImages.img11} alt="Cycliste sur un terrain accidenté"/>

                </div>
                <div className={'space-y-4 translate-y-[13%] hidden lg:flex flex-col'}>
                    <Image className={'object-cover rounded-medium  lg:h-[300px] '}
                           src={MasonryImages.img12}
                           alt="Femme en train courir sur un tapis de course"/>
                    <Image className={'object-cover rounded-medium  lg:h-[360px]'}
                           src={MasonryImages.img13}
                           alt="Une famille pratiquant du sport ensemble"/>
                </div>
                <div className={'translate-y-[3%] space-y-4 duration-1000 z-[800] hidden lg:flex flex-col'
                }>
                    <Image className={'rounded-medium '} src={MasonryImages.img14}
                           alt="Adulte s'étirant après sa séance de sport"/>
                    <Image className={'object-cover h-[200px] w-full rounded-medium '}
                           src={MasonryImages.img15}
                           alt="Une famille faisant un footing ensemble"/>
                    <Image className={'rounded-medium '} src={MasonryImages.img16}
                           alt="Femme soulevent une haltère"/>
                    <Image className={'rounded-medium '} src={MasonryImages.img17}
                           alt="Sportive en entrâinement intensif"/>
                </div>
                <div className={'space-y-4 translate-y-[10%]  hidden lg:flex flex-col'}>
                    <Image className={'rounded-medium '} src={MasonryImages.img18}
                           alt="Étirement d'une sportive en tenue de sport"/>
                    <Image className={'rounded-medium '} src={MasonryImages.img19}
                           alt="Retraités regardant leur ordinateur pour faire du sport"/>
                </div>
                <div className={'translate-y-[-6%] space-y-4 duration-1000 z-[800] hidden lg:flex flex-col'
                }>
                    <Image className={'rounded-medium '} src={MasonryImages.img20}
                           alt="Entraînement sportif à la maison d'une débutante"/>
                    <Image className={'rounded-medium '} src={MasonryImages.img21}
                           alt="Amies faisant un étirement après une séance de sport"/>
                    <Image className={'rounded-medium '} src={MasonryImages.img22}
                           alt="Nageur handicapée à côté d'une piscine"/>
                    <Image className={'rounded-medium '} src={MasonryImages.img23}
                           alt="Boxeuse dans un ring attendant son prochain adversaire"/>
                </div>
            </div>
        </div>


    );
};

export default MasonryGrid;
