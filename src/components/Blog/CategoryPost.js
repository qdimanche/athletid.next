import Link from "next/link";
import Image from "next/image";
import React from "react";
import Author from "@/src/components/Blog/_child/Author";
import fetcher from "@/lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import Error from "@/src/components/Blog/_child/Error";


const CategoryPost = () => {
	const {data, isLoading, isError} = fetcher('api/trending');
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>
	return (<div className={'px-20 lg:pt-20 pt-16'}>
		<div className={'grid grid-cols-2'}>
			<div className={'item'}>
				<h1 className={'font bold text-4xl py-12'}>Buisness</h1>
				<div className={'flex flex-col gap-6'}>
					{data[0] ?<Post data={data[0]}></Post>:<></>}
					{data[1] ?<Post data={data[1]}></Post>:<></>}
					{data[2] ?<Post data={data[2]}></Post>:<></>}
				</div>
			</div>
			<div className={'item'}>
				<h1 className={'font bold text-4xl py-12'}>Nutrition</h1>
				<div className={'flex flex-col gap-6'}>
					{data[3] ?<Post data={data[3]}></Post>:<></>}
					{data[4] ?<Post data={data[4]}></Post>:<></>}
					{data[2] ?<Post data={data[2]}></Post>:<></>}
				</div>
			</div>
		</div>
	</div>);
};

export default CategoryPost;

function Post({data}) {
	
	const {id, title, subtitle, category, img, published, author} = data;
	return (<div className={'flex gap-5'}>
		<div className="image flex flex-col justify-start">
			<Link href={`/posts/${id}`}><Image alt={""} width={300} height={250} src={img || "/"}
			                        className={'rounded-medium'}/>
			</Link>
		</div>
		<div className={'info flex justify-center flex-col'}>
			<div className="space-x-4 mb-[10px] cat">
				<Link href={`/posts/${id}`} className={'text-timeRed '}>{category || "Inconnue"}</Link>
				<Link href={`/posts/${id}`} className={''}>{published || "Inconnue"}</Link>
			</div>
			<div className="title">
				<Link href={`/posts/${id}`}
				      className={'text-xl font-semibold hover:text-black text-gray-700 duration-300 '}>{title || "Titre"}</Link>
			</div>
			{author ? <Author {...author}></Author> : <></>}
		</div>
	</div>)
}