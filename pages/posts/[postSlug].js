import Format from "../../src/layout/format"
import Author from "@/src/components/Blog/_child/Author";
import Image from "next/image";
import getPost from "@/lib/helper"
import fetcher from "@/lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import ErrorComponent from "@/src/components/Blog/_child/Error";
import {useRouter} from "next/router";
import {SWRConfig} from "swr";
import Head from "next/head";
import {
	FacebookIcon,
	FacebookShareButton,
	InstapaperIcon,
	InstapaperShareButton, LinkedinIcon,
	LinkedinShareButton,
} from 'next-share';
import RelatedPost from "@/src/components/Blog/_child/RelatedPost";

export default function Page({fallback}) {
	
	
	const router = useRouter()
	const {postSlug} = router.query
	const {data, isLoading, isError} = fetcher(`api/posts/${postSlug}`);
	
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <ErrorComponent></ErrorComponent>
	
	return (
		
		<SWRConfig value={{fallback}}>
			<Head>
				<title>{data.title.charAt(0).toUpperCase() + data.title.slice(1)}</title>
				<meta property="og:title" content="Athletid"/>
				<meta property="og:type" content="article"/>
			</Head>
			<Article {...data}></Article>
		</SWRConfig>)
}

function Article({title, img, author, description, published, category}) {
	
	return (
		
		<Format>
			<div className={''}>
				<div className={'grid lg:grid-cols-[2fr_1fr] grid-cols-1 max-w-[1100px] mx-auto gap-20 lg:my-40 my-20'}>
					<div className={'flex flex-col items-center lg:items-start  space-y-12'}>
						<span className={`font-normal opacity-50 !text-base lg:mt-0 mt-6`}>{published || ""}</span>
						<h1 className={'!whitespace-normal lg:text-left text-center'}>{title || "Titre"}</h1>
						<div
							className={`flex text-white bg-timeRed hover:bg-timeRedHover rounded-medium px-3 py-2 text-sm w-fit lg:order-last order-first`}>
							{category || "Inconnue"}
						</div>
					</div>
					<div className={'flex flex-col justify-between '}>
						<div className={'flex flex-col'}>
							<p className={'mb-3'}>Partager sur :</p>
							<div className={'flex space-x-3'}>
								<FacebookShareButton
									url={`localhost/3000/posts/ ${title.replace(/\s+/g, '-').toLowerCase()}`}
									quote={'next-share is a social share buttons for your next React apps.'}
									hashtag={'#nextshare'}
								>
									<FacebookIcon size={32} round/>
								</FacebookShareButton>
								<LinkedinShareButton
									url={`localhost/3000/posts/ ${title.replace(/\s+/g, '-').toLowerCase()}`}
									quote={'next-share is a social share buttons for your next React apps.'}
									hashtag={'#nextshare'}
								>
									<LinkedinIcon size={32} round/>
								</LinkedinShareButton>
							</div>

						</div>
						{author ? <Author {...author} ></Author> : <></>}
					</div>
				
				</div>
				<div className={'flex flex-col items-center'}>
					<div className="h-[600px] w-full relative overflow-hidden max-w-[1280px] mb-20">
						<Image layout={'fill'} className={'object-cover rounded-medium'} src={img || "/"} alt={""}/>
					</div>
					
					<div className="content text-gray-600 text-lg flex flex flex-col gap-4 max-w-[1024px]">
						<p className={'whitespace-pre-line'}> {description || 'Aucune description'}</p>
					</div>
				</div>
				
				<RelatedPost></RelatedPost>
			</div>
		</Format>);
}


export async function getStaticProps({params}) {
	const posts = await getPost(params.postSlug);
	
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
				postSlug: value.slug
			}
		}
	})
	
	return {
		paths, fallback: false
	}
}