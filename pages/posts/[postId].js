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

export default function Page({fallback}) {
	
	const router = useRouter()
	const {postId} = router.query
	const {data, isLoading, isError} = fetcher(`api/posts/${postId}`);
	
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <ErrorComponent></ErrorComponent>
	
	return (<SWRConfig value={{fallback}}>
			<Article {...data}></Article>
		</SWRConfig>)
}

function Article({title, subtitle, img, author, description}) {
	
	return (<Format>
		<div className={'md:px-2 lg:pt-28 pt-20 w-2/3 mx-auto relative'}>
			<div className={'flex justify-center'}>
				{author ? <Author></Author> : <></>}
			</div>
			<div className={'post pt-10 flex flex-col items-center'}>
				<h1 className={'font-bold text-4xl text-center pb-5'}>{title || "Titre"}</h1>
				<p className={'text-gray-500 text-xl text-center'}>{subtitle || "Sous-titre"} </p>
				<div className="py-10 h-[600px] w-[900px]">
					<Image objectFit={'cover'} height={600} width={900} src={img || "/"} alt={""}/>
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
	const posts = await getPost(params.postId);
	
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
				postId: value.id.toString()
			}
		}
	})
	
	return {
		paths, fallback: false
	}
}