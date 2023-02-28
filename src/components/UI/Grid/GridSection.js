import React from 'react';
import clsx from "clsx";

const GridSection = ({children, gridClassName}) => {
    return (
        <div className={'md:my-40 mt-28'}>
            <div
                className={
                    'flex flex-col items-center md:w-1/2 md:w-3/4 mx-auto md:mb-8 mb-8 text-center'
                }
            >
                <h2 style={{whiteSpace: 'pre-line'}}>Lorem ipsum dolor sit amet.</h2>
                <p className={'w-full mt-[10px]'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt,
                    tenetur!
                </p>
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