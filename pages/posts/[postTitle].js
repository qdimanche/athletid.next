import Format from "../../src/layout/format"
import Author from "@/src/components/Blog/_child/Author";
import Image from "next/image";
import RelatedPost from "@/src/components/Blog/_child/RelatedPost";
import getPost from "@/lib/helper"
import fetcher from "@/lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import ErrorComponent from "@/src/components/Blog/_child/Error";
import {useRouter} from "next/router";
import {SWRConfig} from "swr";
import Head from "next/head";

export default function Page({fallback}) {
	

	
	const router = useRouter()
	const {postTitle} = router.query
	const {data, isLoading, isError} = fetcher(`api/posts/${postTitle}`);
	
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <ErrorComponent></ErrorComponent>
	
	return (
		
		<SWRConfig value={{fallback}}>
			<Head>
				{}
				<title>{
					data.title.charAt(0).toUpperCase() +  data.title.slice(1)
				}</title>
				<meta property="og:title" content="Athletid"/>
				<meta property="og:type" content="article" />
			</Head>
			<Article {...data}></Article>
		</SWRConfig>)
}

function Article({title, subtitle, img, author, description}) {
	
	return (
		
		<Format>
		<div className={'md:px-2 lg:pt-28 pt-20 w-2/3 mx-auto relative'}>
			<div className={'flex justify-center'}>
				{author ? <Author></Author> : <></>}
			</div>
			<div className={'post pt-10 flex flex-col items-center'}>
				<h1 className={'font-bold text-4xl text-center pb-5'}>{title || "Titre"}</h1>
				<p className={'text-gray-500 text-xl text-center'}>{subtitle || "Sous-titre"} </p>
				<div className="my-10 h-[600px] w-full relative overflow-hidden">
					<Image layout={'fill'} className={'object-cover rounded-medium'}  src={img || "/"} alt={""}/>
				</div>
				
				<div className="content text-gray-600 text-lg flex flex flex-col gap-4">
					<p> {description}
					</p>
				</div>
			</div>
			<RelatedPost></RelatedPost>
		</div>
	</Format>);
}


export async function getStaticProps({params}) {
	const posts = await getPost(params.postTitle);
	
	return {
		props: {
			fallback: {
				'api/posts': posts
			}
		}
	}
}

export async function getStaticPaths() {
	const posts = await getPost();
	
	const paths = posts.map(value => {
		return {
			params: {
				postTitle: value.title.replace(/\s+/g, '-').toLowerCase()
			}
		}
	})
	
	return {
		paths, fallback: false
	}
}