import React from 'react'
import Image from 'next/image'
import Subscription from "@/src/components/Feature/Subscription";
import {timerSubscriptions} from "@/src/components/Feature/SubscriptionsData";
import {apcoSubscriptions} from "@/src/components/Feature/SubscriptionsData";

const Feature = (props) => {

    let subscriptions = [];
    let title;
    let subTitle;
    let titleFeatures;
    let imageSrc;

    const { subscriptions: propsSubscriptions } = props;

    if (propsSubscriptions === "timer") {
        subscriptions = [...timerSubscriptions];
        title = "The most powerfull \nand complet."
        subTitle = "Try it for free now and discover the complete workout \nbuilder. Build and save your workout quickly and easily."
        titleFeatures = "Timer By Athletid 2023"
        imageSrc = "/assets/images/training-recap.webp"
    } else if (props.subscriptions === "apco") {
        subscriptions = [...apcoSubscriptions];
        title = "Our app and \n" +
            "tracking system."
        subTitle = "Lorem ipsum dolor sit amet, consectetur \n" +
            "adipiscing elit. Aliquam sit amet tortoriac\n" +
            "culis, posuere enim at."
        titleFeatures = "Athletid system 2023"
        imageSrc = "/assets/images/session-constructor-cut.webp"
    }

    return (
        <div
            className={
                'md:mt-40 mt-28 md:grid md:grid-cols-[1fr_340px] md:items-center'
            }
        >
            <div
                className={
                    'flex flex-col text-left space-y-8 lg:w-3/4 lg:mx-auto md:pr-12 lg:pr-0'
                }
            >
                <h2 style={{whiteSpace: 'pre-line'}}>{title}</h2>
                <p className={'w-full mt-[10px]'}>{subTitle}</p>
                <div className={'flex flex-col'}>
                    <p className={'font-medium text-xl mb-4'}>{titleFeatures}</p>
                    {subscriptions.map((value, index) => {
                        return (
                            <Subscription
                                key={index}
                                subscriptionTitle={value.subscriptionTitle}
                                subscriptionType={value.subscriptionType}
                            />
                        )
                    })}
                </div>
            </div>
            <Image
                src={imageSrc}
                width={340}
                height={340}
                className={'mx-auto rounded-medium bg-[#F2F2F2]'}
                alt="Application Apco Dashboard Full"
            />
        </div>
    )
}

export default Feature;