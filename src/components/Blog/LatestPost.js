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
	
	
	return (<div className={'max-w-[1024px] mx-auto  md:pt-40 pt-28'}>
		<h2 className={'pb-12 text-center'}>Derniers articles</h2>
		
		<div className={"flex lg:gap-8 gap-6 grid md:grid-cols-2"}>
			<div>
				<Post data={data[0]} key={data[0]} marginTopAuthor={"mt-6"} marginYCategory={'py-6'} titleFontSize={"text-4xl"} imageHeight={"md:h-[400px] h-[250px] "}
				      marginYTitle={"md:mt-6 mt-3 md:mb-8 mb-4"}></Post>
			</div>
			<div className={'grid md:grid-cols-1 grid-cols-2 md:grid-rows-2 lg:gap-8 gap-6'}>
				<Post titleFontSize={"text-xl"} imageHeight={"h-[190px]"} marginYCategory={'py-3'} data={data[1]} publishedDisplay={"hidden"}
				      authorDisplay={"hidden"} key={data[1]}></Post>
				<Post titleFontSize={"text-xl"} imageHeight={"h-[190px]"} marginYCategory={'py-3'} data={data[2]} publishedDisplay={"hidden"}
				      authorDisplay={"hidden"} key={data[2]}></Post>
			</div>
		
		</div>
	</div>);
};

export default LatestPost;


const Post = ({data, imageHeight, marginTopAuthor, authorDisplay, marginYCategory, titleFontSize}) => {
	const {title, category, img, published, author, slug} = data;
	
	return (<Link href={`/posts/${slug}`}>
			<div className={"rounded-medium md:p-6 p-4 shadow-medium hover:shadow-mediumHover duration-300 h-full"}>
				<div className="images">
					
					<div className={`${imageHeight} w-full relative overflow-hidden`}>
						<Image layout={'fill'} className={'object-cover rounded-medium'} src={img || "/"} alt={""}/>
					</div>
				
				</div>
				<div className="flex justify-center flex-col">
					<div className={`flex space-x-4 text-timeRed text-xl font-semibold ${marginYCategory}`}>
						{category || "Inconnue"}
					</div>
					<div
						className={` font-semibold hover:text-black text-gray-700 duration-300 ${titleFontSize}`}>
						{title || "Titre"}
					</div>
					<div className={`${authorDisplay} ${marginTopAuthor}`}>
						{author ? <Author {...author} published={published}></Author> : <></>}
					</div>
				
				
				</div>
			</div>
		</Link>)
}