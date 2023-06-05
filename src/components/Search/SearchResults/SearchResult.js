import React from 'react'
import { Post } from '@/src/components/Blog/ArchivePosts/Post'
import { useSearchParams } from 'next/navigation'
import useSWR from 'swr'

const fetchPosts = async (url) => {
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error('failed to fetch posts')
    }

    return response.json()
}

const SearchResult = () => {
    const baseURL = `${process.env.NEXT_PUBLIC_API_URL}`

    const search = useSearchParams()
    const searchQuery = search ? search.get('q') : null

    const encodedSearchQuery = encodeURI(searchQuery || '')
    const { data, isLoading } = useSWR(
        `${baseURL}api/posts/search?q=${encodedSearchQuery}`,
        fetchPosts
    )

    if (!data?.posts){
        return null;
    }

    return (
        <div className={'mt-[72px] md:mt-[120px]'}>
            <div
                className={
                    'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'
                }
            >
                {data.posts.map((value, index) => {
                    return <Post data={value} key={index} />
                })}
            </div>
        </div>
    )
}

export default SearchResult
