import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Author from "@/src/components/Blog/_child/Author";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper";
import 'swiper/css';
import fetcher from "@/lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import Error from "@/src/components/Blog/_child/Error";
const HeaderBlog = () => {
	
	SwiperCore.use([Autoplay])
	const {data, isLoading, isError} = fetcher('api/trending');
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>
	
	return (<div className={'lg:pt-28 pt-20'}>
		<Swiper
			slidesPerView={1}
			loop={true}
			autoplay={{
				delay:3000
			}}
		>
			{
				data.map((value, index) => (
					<SwiperSlide key={index}><Slide data={value}></Slide></SwiperSlide>
				))
			}
		</Swiper>
	
	
	</div>);
};

export default HeaderBlog;


function Slide({data}) {
	const {id, title, subtitle, category, img, published, author} = data;
	return (<div className={'grid md:grid-cols-2 gap-10'}>
		<div className={'image'}>
			<Link href={`/posts/${id}`}><Image alt={""} width={600} height={600} src={img||"/"}/>
			</Link>
		</div>
		<div className="info flex flex-col justify-center">
			<div className="space-x-4 mb-[10px] cat">
				<Link href={`/posts/${id}`} className={'text-timeRed '}>{category || "Inconnue"}</Link>
				<Link href={`/posts/${id}`} className={''}>{published || "Inconnue"}</Link>
			</div>
			
			<div className="title">
				<Link href={`/posts/${id}`} className={'text-6xl hover:text-black text-gray-700 duration-300 font-semibold'}>{title || "Titre"}</Link>
			</div>
			<p className={''}>{subtitle || "Sous-titre"}</p>
			{author ? <Author {...author}></Author> : <></>}
		
		</div>
	</div>);
}