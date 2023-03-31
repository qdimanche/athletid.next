import {dataCategories} from "@/pages/api/dataCategories";

export const TabMenu = (props) => {
    const handleTabClick = (index) => {
        props.setActiveTabIndex(index);
    };

    return (
        <div className={`flex space-x-4 border-b border-darkWhite' mb-[72px] md:mb-[120px] cursor-pointer`}>
            <div onClick={() => handleTabClick(-1)} className={'relative pb-6'}>
                <div className={`text-[14px] leading-[24px] ${props.activeTabIndex === -1 ? 'text-black font-[500]' : 'text-darkWhite'}`}>
                    View all
                </div>
                <div className={props.activeTabIndex === -1 ? 'border-b border-black bottom-0 absolute w-full' : ''}></div>
            </div>
            {dataCategories.map((value, index) => {
                const isActive = props.activeTabIndex === index;
                return (
                    <div key={index} onClick={() => handleTabClick(index)} className={'relative pb-6'}>
                        <div className={`text-[14px] leading-[24px] ${isActive ? 'text-black font-[500]' : 'text-darkWhite'}`}>
                            {value}
                        </div>
                        <div className={isActive ? 'border-b border-black bottom-0 absolute w-full' : ''}></div>
                    </div>
                );
            })}
        </div>
    );
};
