import React from 'react';
import Link from "next/link";
import Image from "next/image";
import img from "@/public/assets/images/application-athletid-reseau-entreprise.webp";
import Author from "@/src/components/Blog/_child/Author";
import fetcher from "@/lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import Error from "@/src/components/Blog/_child/Error";
import useMediaQuery from "@/src/components/Hooks/useMediaQuery";

const RelatedPost = () => {
	const {data, isLoading, isError} = fetcher('api/posts');
	const isMobile = useMediaQuery('(max-width: 700px)');
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>
	
	
	return (<div className={'lg:pt-20 pt-16 max-w-[1024px] mx-auto'}>
		<h1 className={'font bold text-3xl pb-10'}>Articles connexes</h1>
		
		<div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-6">
			{isMobile ? data.slice(0, 1).map((value, index) => (
				<Post data={value} key={index}></Post>)) : data.slice(0, 6).map((value, index) => (
				<Post data={value} key={index}></Post>))}
		</div>
	
	</div>);
};

export default RelatedPost;

function Post({data}) {
	const {title, category, published, author} = data;
	return (<Link href={`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`}>
		<div className={"rounded-medium md:p-6 p-4 shadow-medium hover:shadow-mediumHover duration-300 h-full"}>
			<div className="images">
				<div className={`w-full relative overflow-hidden h-[200px]`}>
					<Image layout={'fill'} className={'object-cover rounded-medium'} src={img || "/"} alt={""}/>
				</div>
			</div>
			<div className="flex justify-center flex-col mt-4">
				<div className={`flex space-x-4 text-timeRed text-xl font-semibold`}>
					{category || "Inconnue"}
				</div>
				<div className={`my-4 font-semibold text-xl hover:text-black text-gray-700 duration-300`}>
					{title || "Titre"}
				</div>
				<div className={``}>
					{author ? <Author {...author} fontSize={'!text-sm !leading-6'}
					                  published={published}></Author> : <></>}
				</div>
			
			
			</div>
		</div>
	</Link>)
}