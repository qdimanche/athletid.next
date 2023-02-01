import Link from "next/link";
import Image from "next/image";
import Author from "@/src/components/Blog/_child/Author";
import fetcher from "../../../lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import Error from "@/src/components/Blog/_child/Error";
import React from "react";

const LatestPost = () => {
	
	
	
	const {data, isLoading, isError} = fetcher('api/posts');
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>
	
	return (<div className={'md:px-20 lg:pt-20 pt-16'}>
		<h1 className={'font bold text-4xl pb-12 text-center'}>Derniers articles</h1>
		
		<div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-14"}>
			{
				data.map((value, index) =>(
					<Post data={value} key={index}></Post>
				))
			}
		</div>
	</div>);
};

export default LatestPost;

function Post({data}) {
	const {title, subtitle, category, img, published, author} = data;
	
	return (<div className={"item"}>
		<div className="images">
			<Link href={`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`}><Image alt={""} width={500} height={350}  src={img || "/"}
			                        className={'rounded-medium'}/>
			</Link>
		</div>
		<div className="info flex justify-center flex-col py-4">
			<div className="space-x-4 mb-[10px] cat">
				<Link href={`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`} className={'text-timeRed '}>{category || "Inconnue"}</Link>
				<Link href={`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`} className={''}>{published || "Inconnue"}</Link>
			</div>
			<div className="title">
				<Link href={`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`} className={'text-2xl font-semibold hover:text-black text-gray-700 duration-300 '}>{title || "Titre"}</Link>
			</div>
			<p className={''}>{subtitle || "Sous-titre"}</p>
			{author ? <Author {...author}></Author> : <></>}
			
		</div>
	</div>)
}