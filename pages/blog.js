import React from 'react';
import Head from "next/head";
import Format from "../src/layout/format"
import HeaderBlog from "@/src/components/Blog/HeaderBlog";
import {defaultFallbackInView} from "react-intersection-observer";

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
			</Format>
			
		</>
	);
};

export default Blog;

function Slide() {
	return (
		<div className={''}>
		
		</div>
	)
}