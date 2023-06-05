import React from 'react';
import SearchResult from "@/src/components/Search/SearchResults/SearchResult";
import Format from "@/src/layout/format"
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import HeaderBlog from "@/src/components/Blog/HeaderBlog";

const Search = () => {

    return (
        <Format>
            <div className={'max-w-[350px] md:max-w-[1170px] mx-auto px-4'}>
                <HeaderBlog/>
                <SearchResult/>
            </div>
        </Format>
    );
};

export default Search;

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'footer',
                'blog',
                'navbar',
                'uiComponents',
            ])),
        },
    }
}