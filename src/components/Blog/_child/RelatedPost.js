import React from 'react';
import Link from "next/link";
import Image from "next/image";
import headerImage from "@/public/assets/images/application-athletid-reseau-entreprise.webp";
import Author from "@/src/components/Blog/_child/Author";
import fetcher from "@/lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import Error from "@/src/components/Blog/_child/Error";

const RelatedPost = () => {
	const {data, isLoading, isError} = fetcher('api/posts');
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>
	return (
		<div className={'lg:pt-20 pt-16'}>
			<h1 className={'font bold text-3xl pb-10'}>Articles connexes</h1>
			
			<div className="flex flex-col gap-10">
				{data.map((value, index) => (
					<Post key={index} data={value}></Post>
				))}
			</div>
		
		</div>
	);
};

export default RelatedPost;

function Post({data}){
	const {title, category, published} = data;
	return (
		<div className={"flex gap-5"}>
			<div className={'h-[200px] w-[300px]'}>
				<Link href={`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`}><Image alt={""} objectFit={'cover'} src={headerImage}
				                        className={'rounded-medium'}/>
				</Link>
			</div>
			<div className={'info flex justify-center flex-col'}>
				<div className="space-x-4 mb-[10px] cat">
					<Link href={title.replace(/\s+/g, '-').toLowerCase()} className={'text-timeRed '}>{category || "Inconnue"}</Link>
					<Link href={title.replace(/\s+/g, '-').toLowerCase()} className={''}>{published || "Inconnue"}</Link>
				</div>
				<div className="title">
					<Link href={title.replace(/\s+/g, '-').toLowerCase()} className={'text-xl font-semibold hover:text-black text-gray-700 duration-300 '}>{title || "Titre"}</Link>
				</div>
				<Author></Author>
			</div>
		</div>
	)
}