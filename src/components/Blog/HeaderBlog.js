import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay} from "swiper";
import 'swiper/css';
import fetcher from "@/lib/fetcher";
import Spinner from "@/src/components/Blog/_child/Spinner";
import Error from "@/src/components/Blog/_child/Error";
import Button from "@/src/components/UI/Button";

const HeaderBlog = () => {
	
	SwiperCore.use([Autoplay])
	const {data, isLoading, isError} = fetcher('api/posts');
	if (isLoading) return <Spinner></Spinner>
	if (isError) return <Error></Error>
	
	return (<div className={'lg:pt-28 pt-20 max-w-[1024px] mx-auto'}>
		<Swiper
			slidesPerView={1}
			loop={true}
			autoplay={{
				delay: 5000
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
	const {title, description, category, img, published} = data;
	return (<Link href={`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`}>
		<div className={'grid md:grid-cols-2 gap-10'}>
			<div className={'image'}>
				<Image alt={""} width={600} height={600}
				       src={img || "/"}/>
			</div>
			<div className="info flex flex-col justify-center">
				<div className="space-x-4 flex">
					<p className={'text-timeRed '}>{category || "Inconnue"}</p>
					<p className={''}>{published || "Inconnue"}</p>
				</div>
				
				<div
					className="mt-8 mb-4 !whitespace-normal  font-semibold hover:text-black text-gray-700 duration-300 text-5xl">
					{title || "Titre"}
				</div>
				<div className={'mb-8 text-xl'}>{truncate(description || "Aucune description", 34)}</div>
				<Button variant={'black'} link={`/posts/${title.replace(/\s+/g, '-').toLowerCase()}`}
				        text={"Découvrir"}/>
			</div>
		</div>
	</Link>);
}

function truncate(str, no_words) {
	return str.split(" ").splice(0, no_words).join(" ") + " ...";
}