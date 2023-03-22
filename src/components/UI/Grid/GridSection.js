import React from 'react';
import clsx from "clsx";

const GridSection = ({children, gridClassName, ...props}) => {
    return (
        <div className={'md:mt-28 mt-72'}>
            <div
                className={
                    'flex flex-col items-center md:w-1/2 md:w-3/4 mx-auto md:mb-24 mb-8 text-center '
                }
            >
                <p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div
                className={clsx(`relative overflow-hidden grid gap-4`, gridClassName)
                }
            >
                {children}
            </div>
        </div>
    );
};

export default GridSection;