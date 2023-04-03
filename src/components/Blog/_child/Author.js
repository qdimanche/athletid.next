import Image from "next/image";

function Author({name, img, designation}) {
    if(!name && !img) return <></>;
    return (
        <div className={'flex space-x-[8px] items-center'}>
            <div className={'h-[40px] w-[40px] relative rounded-full overflow-hidden'}>
                <Image fill sizes={"50vw"} className={'object-cover'} src={img} alt={""}/>
            </div>
            <div className={`flex flex-col`}>
                <p className={`!text-lg`}>{name} {}</p>
                <p>{designation}</p>

            </div>
        </div>
    );
}

export default Author;