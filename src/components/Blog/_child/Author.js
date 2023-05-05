import Image from "next/image";



function Author() {
    return (
        <div className={'flex space-x-[8px] items-center'}>
            <div className={'h-[40px] w-[40px] bg-gray-300 relative rounded-full overflow-hidden'}>
                {/*<Image fill sizes={"50vw"} className={'object-cover'} src={img} alt={""}/>*/}
            </div>
            <div className={`flex flex-col`}>
                <p className={`!text-lg`}>Athletid</p>
                <p>S&C Coach</p>

            </div>
        </div>
    );
}

export default Author;