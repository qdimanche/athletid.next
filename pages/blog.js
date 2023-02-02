import React from 'react';
import Head from "next/head";
import Format from "../src/layout/format"
import HeaderBlog from "@/src/components/Blog/HeaderBlog";
import LatestPost from "@/src/components/Blog/LatestPost";
import {defaultFallbackInView} from "react-intersection-observer";
import PopularPost from "@/src/components/Blog/PopularPost";

const Blog = () => {
	return (
		<>
			<Head>
				<title>Athletid</title>
				<meta property="og:title" content="Athletid"/>
				<meta property="og:type" content="website" />
			</Head>
			
			
			<Format>
				<HeaderBlog/>
				<LatestPost/>
				<PopularPost/>
			</Format>
			
		</>
	);
};

export default Blog;
