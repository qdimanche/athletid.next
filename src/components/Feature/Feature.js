import React from 'react'
import Image from 'next/image'
import ConstuctionEntrainement from '@/public/assets/images/training-recap.webp'
import Subscription from "@/src/components/Feature/Subscription";
import {timerSubscriptions} from "@/src/components/Feature/SubscriptionsData";
import {apcoSubscriptions} from "@/src/components/Feature/SubscriptionsData";

const Feature = (props) => {

    let subscriptions = [];
    let title;
    let subTitle;
    let titleFeatures;

    const { subscriptions: propsSubscriptions } = props;

    if (propsSubscriptions === "timer") {
        subscriptions = [...timerSubscriptions];
        title = "The most powerfull \nand complet."
        subTitle = "Try it for free now and discover the complete workout \nbuilder. Build and save your workout quickly and easily."
        titleFeatures = "Timer By Athletid 2023"
    } else if (props.subscriptions === "apco") {
        subscriptions = [...apcoSubscriptions];
    }

    return (
        <div
            className={
                'md:my-40 mt-28 md:grid md:grid-cols-[1fr_340px] md:items-center'
            }
        >
            <div
                className={
                    'flex flex-col md:mb-8 text-left space-y-8 md:w-3/4 md:mx-auto'
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
                src={ConstuctionEntrainement}
                width={340}
                className={'mx-auto rounded-medium'}
                alt="Application Apco Dashboard Full"
            />
        </div>
    )
}

export default Feature;