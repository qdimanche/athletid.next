import fetcher from '@/lib/fetcher'
import Spinner from '@/src/components/UI/Spinner/CircleSpinner'
import Error from '@/src/components/Blog/_child/Error'
import React, {useEffect, useState} from 'react'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import {TabMenu} from '@/src/components/Blog/ArchivePosts/TabMenu'
import {Post} from '@/src/components/Blog/ArchivePosts/Post'
import {useIsMobile} from "@/src/components/Hooks/useMediaQuery";
import Image from 'next/image'

const ArchivePost = () => {

    const isMobile = useIsMobile();

    let [countLoadMore, setCountLoadMore] = useState(0)
    let [postsToShow, setPostsToShow] = useState(6)

    const [categoryClick, setCategoryClick] = useState(null)
    const {data, isLoading, isError} = fetcher(
        `api/posts/categories${categoryClick === null ? '' : `/${categoryClick}`}`
    )
    
    useEffect(() => {
        countLoadMore && setPostsToShow((postsToShow += 6))
    }, [countLoadMore])

    if (isLoading) return <Spinner></Spinner>
    if (isError) return <Error></Error>

    return (
        <div className={'mt-[72px] md:mt-[120px]'}>
            <TabMenu
                categoryClick={categoryClick}
                setCategoryClick={setCategoryClick}
            />
            <div className={'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'}>
                {data.slice(0, postsToShow).map((value, index) => {
                    return <Post data={value} key={index}/>
                })}
            </div>
            {postsToShow < data.length && (
                <ToggleButton
                    variant={'red'}
                    className={' mx-auto mt-[68px] py-4 px-8 !rounded-full'}
                    content={
                    <div className={'flex space-x-2 items-center'}>
                        <Image src={"/assets/icons/arrowdown.svg"} width={24} height={24} sizes={"10vw"} alt={""}/>
                        <p className={'text-[16px] leading-[19px]'}>Load more</p>
                    </div>
                }
                    link={'/'}
                    onClick={() => {
                        setCountLoadMore((countLoadMore += 1))
                    }}
                />
            )}
        </div>
    )
}

export default ArchivePost;