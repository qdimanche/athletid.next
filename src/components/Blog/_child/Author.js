import Image from "next/image";
import Link from "next/link";

function Author({name, img, designation}) {
	if(!name && !img) return <></>;
	return (
		<div className={'author flex py-5'}>
			<Image width={50} height={50} src={img || "/"} alt={''} className={"rounded-full"}></Image>
			<div className="flex flex-col justify-center px-4">
				<Link href={"/"} className={'text-md font-semibold'}>{name || "Aucun nom"}</Link>
				<span className={'text-sm font-normal'}>{designation || ""}</span>
			</div>
		</div>
	);
}

export default Author;