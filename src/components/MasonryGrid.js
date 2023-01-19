import React, {useState} from 'react';
import MasonryImages from '../../public/images/masonry';
import {useInView} from "react-intersection-observer";
import {LazyLoadImage} from "react-lazy-load-image-component";


const MasonryGrid = (props) => {


    const {ref: animationStart, inView: myAnimationStart} = useInView();
    const {ref: animationMiddle, inView: mySectionReachMiddle} = useInView();
    const {ref: animationEnd, inView: myAnimationEnd} = useInView();


    const [loaded, setLoaded] = useState(false);


    return (
        <div className={`relative lg:mx-0 md:py-16 pt-8 pb-16 lg:pb-0  mx-4  max-w-screen overflow-hidden`}>
            <div className={`lg:mx-8 z-1 lg:mb-48 ${props.displayTitle}`}>
                <div className={'text-center '}>
                    <div className={'mb-10 lg:mb-20 flex flex-col items-center'} id={'titleMasonry'}>
                        <h2 style={{whiteSpace: "pre-line"}} className={''}>{props.titleMasonry}</h2>
                        <p style={{whiteSpace: "pre-line"}}
                           className={'mt-[10px]'}>{props.subTitleMasonry}</p>
                        {/*<BlackBorderButton text={'À propos de nous'} link={props.link}/>*/}
                    </div>
                </div>
            </div>

            <div
                className={`flex space-x-4  absolute lg:mx-[-10%] lg:translate-y-[-8%] relative 3xl:min-h-[1400px] 2xl:h-[1250px] md:h-[1180px]  h-[560px] ${props.customMarginTop}`}>
                <div className={
                    props.previousElementIsVisible ? 'lg:translate-y-[-15%] translate-y-0 space-y-4  w-1/2 md:w-1/3 lg:w-[12%] duration-1000 z-[800]' :
                        myAnimationStart ? 'lg:translate-y-[-15%] translate-y-0 space-y-4 w-1/2 md:w-1/3 lg:w-[12%] duration-1000 z-[800]'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible ? 'lg:translate-y-[-30%] translate-y-0 space-y-4 w-1/2 md:w-1/3 lg:w-[12%] duration-1000 z-[800]' : 'lg:translate-y-[-15%] translate-y-0 space-y-4 w-1/2 md:w-1/3  lg:w-[12%] duration-1000 z-[800]'}
                >
                    <LazyLoadImage
                        className={'object-cover h-[230px] lg:h-[400px] lg:w-full rounded-[30px] lg:block hidden'}
                        src={MasonryImages.img1} alt=""/>
                    <LazyLoadImage
                        className={'object-cover h-[230px] lg:h-[400px] lg:w-full rounded-[30px] lg:hidden md:block hidden'}
                        src={MasonryImages.img1Tablet} alt=""/>
                    <LazyLoadImage className={'object-cover h-[270px] lg:h-[400px] lg:w-full rounded-[30px] '}
                                   src={MasonryImages.img2} alt=""/>
                    <LazyLoadImage className={'object-cover h-[225px] lg:w-full  rounded-[30px]'}
                                   src={MasonryImages.img3} alt=""/>
                    <LazyLoadImage className={'object-cover lg:h-[350px] lg:w-full rounded-[30px] hidden md:block'}
                                   src={MasonryImages.img4} alt=""/>
                </div>
                <div
                    className={'space-y-4 lg:translate-y-[0px] md:translate-y-[190px] translate-y-[90px] w-1/2 md:w-[33%] lg:w-[12%] h-fit'}>
                    <LazyLoadImage className={'object-cover  h-[275px] lg:w-full rounded-[30px] '}
                                   src={MasonryImages.img6} alt=""/>
                    <LazyLoadImage
                        className={'object-cover  h-[180px] lg:h-[350px] lg:w-full rounded-[30px] lg:block hidden'}
                        src={MasonryImages.img7} alt=""/>
                    <LazyLoadImage
                        className={'object-cover  h-[180px] lg:h-[350px] lg:w-full rounded-[30px] lg:hidden block'}
                        src={MasonryImages.img7Tablet} alt=""/>
                    <LazyLoadImage className={'object-cover lg:h-[240px] lg:w-full  rounded-[30px] hidden md:block'}
                                   src={MasonryImages.img8} alt=""/>
                </div>


                <div className={
                    props.previousElementIsVisible ? 'translate-y-[5%]  space-y-4 lg:w-1/5 md:w-1/3 w-[12%] duration-1000 z-[800] md:block hidden' :
                        myAnimationStart ? ' translate-y-[5%] space-y-4 lg:w-1/5 md:w-1/3 w-[12%] duration-1000 z-[800] md:block hidden'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible ? 'translate-y-[-10%] space-y-4 lg:w-1/5 md:w-1/3 w-[12%] duration-1000 z-[800] md:block hidden' : ' translate-y-[5%]  space-y-4 lg:w-1/5 md:w-1/3 w-[12%] duration-1000 z-[800] md:block hidden'
                }>
                    <LazyLoadImage className={'object-cover h-[350px] w-2/3 rounded-[30px] '} src={MasonryImages.img9}
                                   alt=""/>
                    <LazyLoadImage className={'object-cover h-[420px] w-full rounded-[30px] '} src={MasonryImages.img10}
                                   alt=""/>
                    <LazyLoadImage className={'object-cover h-[300px] w-full  rounded-[30px] '}
                                   src={MasonryImages.img11} alt=""/>

                </div>
                <div className={'space-y-4 translate-y-[13%] w-[12%] lg:block hidden'}>
                    <LazyLoadImage className={'object-cover rounded-[30px]  lg:h-[300px] '} src={MasonryImages.img12}
                                   alt=""/>
                    <LazyLoadImage className={'object-cover rounded-[30px]  lg:h-[360px]'} src={MasonryImages.img13}
                                   alt=""/>
                </div>
                <div className={
                    props.previousElementIsVisible ? 'translate-y-[3%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden' :
                        myAnimationStart ? 'translate-y-[3%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible ? 'translate-y-[3%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden' : 'translate-y-[3%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden'
                }>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img14} alt=""/>
                    <LazyLoadImage className={'object-cover h-[200px] w-full rounded-[30px] '} src={MasonryImages.img15}
                                   alt=""/>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img16} alt=""/>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img17} alt=""/>
                </div>
                <div className={'space-y-4 translate-y-[10%] w-[20%] lg:block hidden'}>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img18} alt=""/>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img19} alt=""/>
                </div>
                <div className={
                    props.previousElementIsVisible ? 'translate-y-[-6%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden' :
                        myAnimationStart ? 'translate-y-[-6%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden'
                            : mySectionReachMiddle || myAnimationEnd || props.nextElementIsVisible ? 'translate-y-[-6%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden' : 'translate-y-[-6%] space-y-4 w-[12%] duration-1000 z-[800] lg:block hidden'
                }>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img20} alt=""/>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img21} alt=""/>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img22} alt=""/>
                    <LazyLoadImage className={'object-contain rounded-[30px] '} src={MasonryImages.img23} alt=""/>
                </div>


                {/*                <div ref={animationStart} className={'top-[32%] lg:block hidden w-full absolute'}></div>
                <div ref={animationMiddle} className={'top-[80%] lg:block hidden w-full absolute'}></div>
                <div ref={animationEnd} className={'bottom-[5%] lg:block hidden w-full absolute'}></div>*/}
            </div>
        </div>


    );
};

export default MasonryGrid;
