import React from 'react';
import Link from "next/link";

const RedButton = (props) => {

    return (
        <Link href={props.link}>
            <div
                className={'bg-timeRed hover:bg-timeRedHover transition duration-300 px-3 md:px-6 py-2 rounded-[30px] circle-boxShadow z-[900] !text-white'}
            >
                {props.text}
            </div>
        </Link>
    );
};

export default RedButton;
