import React from 'react';
import Link from "next/link";

const WhiteBorderButton = (props) => {
    return (
        <div>
            <Link href={props.link} >
                <div className={`bg-transparent transition duration-300 px-3 md:px-6 py-2 rounded-[30px] border-[1px] border-white text-white w-fit`}>
                    {props.text}
                </div>
            </Link>
        </div>
    );
};

export default WhiteBorderButton;
