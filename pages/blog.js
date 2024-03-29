import React from 'react';
import Head from "next/head";
import Format from "../src/layout/format"
import HeaderBlog from "@/src/components/Blog/HeaderBlog";
import ArchivePost from "@/src/components/Blog/ArchivePosts/ArchivePost";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Blog = () => {
    return (
        <>
            <Head>
                <title>Athletid</title>
                <meta property="og:title" content="Athletid"/>
                <meta property="og:type" content="website" />
            </Head>


            <Format>
                <div className={'max-w-[350px] md:max-w-[1170px] mx-auto px-4'}>
                    <HeaderBlog/>
                    <ArchivePost/>
                </div>
            </Format>

        </>
    );
};

export default Blog;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'blog',
                'footer',
                'navbar',
                'uiComponents',
            ])),
        },
    }
}