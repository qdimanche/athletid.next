import React from 'react';
import {BsShieldCheck} from "react-icons/bs";

const Responsability = (props) => {
    return (
        <div className={"flex flex-col items-center mt-12"}>
            <div className="">
                {props.icon}
            </div>
            <div className={"text-center mt-6  flex flex-col"}>
                <span className={'font-semibold mb-6 whitespace-pre-line'}>{props.title}</span>
                <p style={{whiteSpace: "pre-line", textAlign: "justify", textJustify: "auto"}}
                   className={"font-normal"}>
                    {props.subtitle}
                </p>
            </div>
        </div>
    );
};

export default Responsability;