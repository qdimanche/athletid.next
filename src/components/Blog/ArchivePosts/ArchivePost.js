import fetcher from '@/lib/fetcher'
import React, { useEffect, useState } from 'react'
import CircleSpinner from '@/src/components/UI/Spinner/CircleSpinner'
import Error from '@/src/components/Blog/_child/Error'
import { TabMenu } from '@/src/components/Blog/ArchivePosts/TabMenu'
import { Post } from '@/src/components/Blog/ArchivePosts/Post'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import Image from 'next/image'
import SortFilter from '@/src/components/Blog/Filter/SortFilter'

const ArchivePost = () => {
  let [countLoadMore, setCountLoadMore] = useState(0)
  let [postsToShow, setPostsToShow] = useState(6)
  const [categories, setCategories] = useState([])
  const [posts, setPosts] = useState([
    {
      id: '',
      createdAt: '',
      updatedAt: '',
      img: '',
      authorId: '',
      name: '',
      slug: '',
      status: '',
      categoryId: '',
    },
  ])
  const [postsCategory, setPostsCategory] = useState([])
  const [categoriesFound, setCategoriesFound] = useState([])
  const [postsInfosToShow, setPostsInfosToShow] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [categoryClick, setCategoryClick] = useState(null)
  const [ascendingOrder, setAscendingOrder] = useState(false)

  console.log(postsInfosToShow)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const categoriesResponse = await fetcher('api/categories')
        const postsResponse = await fetcher('api/posts')
        setCategories(categoriesResponse.data)
        setPosts(
            postsResponse.data.sort(
                (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
            )
        )
        setIsError(false)
      } catch (error) {
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData().then()
  }, [])

  useEffect(() => {
    posts.map((post) => {
      setPostsCategory((prevState) => [{ id: post.categoryId }, ...prevState])
    })
  }, [posts])

  useEffect(() => {
    const matchingCategories = categories.filter((category) =>
        postsCategory.some((postCategory) => postCategory.id === category.id)
    )
    setCategoriesFound(matchingCategories)
  }, [categories, postsCategory])

  useEffect(() => {
    if (posts && posts.filter((post) => post.status === 'PUBLISHED')) {
      if (categoryClick) {
        const postsInCategory = posts.filter((post) => post.categoryId === categoryClick);
        setPostsInfosToShow(postsInCategory);
      } else {
        setPostsInfosToShow(posts);
      }
    } else {
      console.log('Error, impossible to set PostsCategory');
    }
  }, [categoryClick, posts]);

  useEffect(() => {
    setPostsToShow(6 + countLoadMore * 6)
  }, [countLoadMore])

  useEffect(() => {
    if (ascendingOrder === false) {
      setPostsInfosToShow((prevState) =>
          Array.isArray(prevState)
              ? [...prevState].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
              : []
      );
    } else {
      setPostsInfosToShow((prevState) =>
          Array.isArray(prevState)
              ? [...prevState].sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
              : []
      );
    }
  }, [ascendingOrder]);

  const handleSortToggle = () => {
    setAscendingOrder((prevState) => !prevState)
  }

  console.log(ascendingOrder)

  if (isLoading) return <CircleSpinner></CircleSpinner>
  if (isError) return <Error></Error>

  return (
      <div className={'mt-[72px] md:mt-[120px]'}>
        <SortFilter
            onSortToggle={handleSortToggle}
            ascendingOrder={ascendingOrder}
        />
        <TabMenu
            categories={categories}
            categoryClick={categoryClick}
            setCategoryClick={setCategoryClick}
        />
        <div
            className={
              'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'
            }
        >
          {postsInfosToShow?.slice(0, postsToShow).map((value, index) => {
            return <Post data={value} key={index} />
          })}
        </div>
        {postsToShow < postsInfosToShow.length && (
            <ToggleButton
                variant={'red'}
                className={' mx-auto mt-[68px] py-4 px-8 !rounded-full'}
                content={
                  <div className={'flex space-x-2 items-center'}>
                    <Image
                        src={'/assets/icons/arrowdown.svg'}
                        width={24}
                        height={24}
                        sizes={'10vw'}
                        alt={''}
                    />
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

export default ArchivePost
