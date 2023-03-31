import fetcher from '@/lib/fetcher'
import Spinner from '@/src/components/UI/Spinner/CircleSpinner'
import Error from '@/src/components/Blog/_child/Error'
import React, {useEffect, useState} from 'react'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import {TabMenu} from '@/src/components/blog/PostsSection/TabMenu'
import {dataCategories} from '@/pages/api/dataCategories'
import {Post} from '@/src/components/Blog/PostsSection/Post'

const PostsSection = () => {
    let [countLoadMore, setCountLoadMore] = useState(0)
    let [postsToShow, setPostsToShow] = useState(3)

    useEffect(() => {
        countLoadMore && setPostsToShow((postsToShow += 3))
    }, [countLoadMore])

    const [activeTabIndex, setActiveTabIndex] = useState(-1)
    const categoryTabName = dataCategories[activeTabIndex]
        ? dataCategories[activeTabIndex].toLowerCase()
        : undefined
    const {data, isLoading, isError} = fetcher(
        `api/${categoryTabName === undefined ? 'posts' : categoryTabName}`
    )

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (
        <div className={'mt-[72px] md:mt-[120px]'}>
            <TabMenu
                activeTabIndex={activeTabIndex}
                setActiveTabIndex={setActiveTabIndex}
            />
            <div className={'space-y-[68px] flex flex-col'}>
                {data.slice(0, postsToShow).map((value, index) => {
                    return <Post data={value} key={index}/>
                })}
            </div>
            {postsToShow < data.length && (
                <ToggleButton
                    variant={'red'}
                    className={'flex mx-auto mt-[68px] px-6 py-3 rounded-[40px]'}
                    content={'Load more'}
                    link={'/'}
                    onClick={() => {
                        setCountLoadMore((countLoadMore += 1))
                    }}
                />
            )}
        </div>
    )
}

export default PostsSection;