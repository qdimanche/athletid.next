import fetcher from '@/lib/fetcher'
import React, { useEffect, useState } from 'react'
import { TabMenu } from '@/src/components/Blog/ArchivePosts/TabMenu'
import { Post } from '@/src/components/Blog/ArchivePosts/Post'
import ToggleButton from '@/src/components/UI/Button/ToggleButton'
import Image from 'next/image'
import CircleSpinner from '@/src/components/UI/Spinner/CircleSpinner'
import Error from '@/src/components/Blog/_child/Error'

const ArchivePost = () => {
  let [countLoadMore, setCountLoadMore] = useState(0)
  let [postsToShow, setPostsToShow] = useState(6)
  const [categories, setCategories] = useState(null)
  const [posts, setPosts] = useState(null)
  const [postsCategory, setPostsCategory] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [categoryClick, setCategoryClick] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      await fetcher(`api/posts`)
        .then(({ data, isError }) => {
          setPosts(data)
          setIsError(isError)
        })
        .catch((error) => {
          setIsError(true)
        })
        .finally(() => {
          setIsLoading(false)
        })

      await fetcher(`api/categories`)
        .then(({ data, isError }) => {
          const filteredCategoriesSet = new Set(data);
          const filteredCategories = [...filteredCategoriesSet]
          setCategories(filteredCategories)
          setIsError(isError)
        })
        .catch((error) => {
          setIsError(true)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (posts) {
      if (categoryClick) {
        setPostsCategory(
          posts.filter((value) => value.category === categoryClick)
        )
      } else {
        setPostsCategory(posts)
      }
    } else {
      console.log('Error, impossible to set PostsCategory')
    }
  }, [categoryClick, posts])

  useEffect(() => {
    countLoadMore && setPostsToShow((postsToShow += 6))
  }, [countLoadMore])

  if (isLoading) return <CircleSpinner></CircleSpinner>
  if (isError) return <Error></Error>

  return (
    <div className={'mt-[72px] md:mt-[120px]'}>
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
        {postsCategory?.slice(0, postsToShow).map((value, index) => {
          return <Post data={value} key={index} />
        })}
      </div>
      {postsToShow < postsCategory?.length && (
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
