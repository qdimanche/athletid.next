import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Author from "@/src/components/Blog/_child/Author";
import fetcher from "@/lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import Error from "@/src/components/Blog/_child/Error";

const PopularPost = () => {
	const {data, isLoading, isError} = fetcher('api/popular');
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>
	return (<div className={'md:px-20 lg:pt-20 pt-16'}>
			<h1 className={'font bold text-4xl pb-12 text-center'}>Most Popular</h1>
		
			<Swiper
				slidesPerView={1}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween:30
					}
				}}
			>
				{data.map((value, index) => (<SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>))}
			</Swiper>
		</div>);
};

export default PopularPost;

function Post({data}) {
	const {id, title, subtitle, category, img, published, author} = data;
	return (<div className={"grid"}>
		<div className="images">
			<Link href={`/posts/${id}`}><Image alt={""} width={600} height={400} src={img || "/"}
			                                   className={'rounded-medium'}/>
			</Link>
		</div>
		<div className="info flex justify-center flex-col py-4">
			<div className="space-x-4 mb-[10px] cat">
				<Link href={`/posts/${id}`} className={'text-timeRed '}>{category || "Inconnue"}</Link>
				<Link href={`/posts/${id}`} className={''}>{published || "Inconnue"}</Link>
			</div>
			<div className="title">
				<Link href={`/posts/${id}`}
				      className={'md:text-4xl text-3xl font-semibold hover:text-black text-gray-700 duration-300 '}>{title || "Titre"}</Link>
			</div>
			<p className={''}>{subtitle || "Sous-titre"}</p>
			{author ? <Author {...author}></Author> : <></>}
		</div>
	</div>)
}