
function Author({name, img, designation, published, fontSize}) {
    if(!name && !img) return <></>;
    return (
        <div className={'w-full'}>
            <div className={`flex flex-col justify-center`}>
                <p className={`!text-lg ${fontSize}`}>Par {name || "Aucun nom"}</p>
                <div className={'flex justify-between w-full'}>
                    <span className={`!text-lg ${fontSize} font-normal`}>{designation || ""}</span>
                    <span className={`!text-lg ${fontSize} font-normal opacity-50`}>{published || ""}</span>
                </div>

            </div>
        </div>
    );
}

export default Author;