import React from 'react';
import Image from "next/image";
import Julien from "@/public/assets/images/julien-nivaud.webp";

const Member = (props) => {
    return (
        <div className={'space-y-4 mx-auto'}>
                <Image src={props.image} height={300} width={300} alt={''} className={'rounded-medium '} />
            <div className={'space-y-2 whitespace-pre-line'}>
                <h4 className={'font-medium '}>{props.name}</h4>
                <p className={'!leading-6'}>{props.position}</p>
            </div>
        </div>
    );
};

export default Member;