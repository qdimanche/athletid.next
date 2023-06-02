import Format from '../../src/layout/format'
import getPost from '@/lib/helper'
import getPosts from '@/lib/helper'
import fetcher from '@/lib/fetcher'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Author from '@/src/components/Blog/_child/Author'
import Image from 'next/image'
import { IoIosTimer } from 'react-icons/io'
import { Post } from '@/src/components/Blog/ArchivePosts/Post'
import CircleSpinner from '@/src/components/UI/Spinner/CircleSpinner'
import Error from '@/src/components/Blog/_child/Error'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Page({ fallback }) {
  let router = useRouter()
  let { postSlug } = router.query
  const [post, setPost] = useState(null)
  const [sections, setSections] = useState(null)
  const [posts, setPosts] = useState(null)
  const [author, setAuthor] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      await fetcher(`api/posts/${postSlug}`)
        .then(({ data, isError }) => {
          setPost(data)
          setIsError(isError)
        })
        .catch(() => setIsError(true))
        .finally(() => setIsLoading(false))
    }

    fetchData().then()
  }, [postSlug])

  useEffect(() => {
    const fetchData = async () => {
      if (post) {
        await fetcher(`api/sections/${post.id}`)
          .then(({ data, isError }) => {
            setSections(data.sort((a, b) => a.order - b.order))
            setIsError(isError)
          })
          .catch(() => setIsError(true))
          .finally(() => setIsLoading(false))
        await fetcher('api/posts')
          .then(({ data, isError }) => {
            setPosts(data)
            setIsError(isError)
          })
          .catch(() => setIsError(true))
          .finally(() => setIsLoading(false))

        await fetcher(`api/users/${post.authorId}`).then(
          ({ data, isError }) => {
            setAuthor(data)
            setIsError(isError)
          }
        )
      }
    }
    fetchData().then()
  }, [post])

  useEffect(() => {
    if (posts && post) {
      setRelatedPosts(
        posts.filter(
          (item) =>
            item.categories === post.categories && item.name !== post.name
        )
      )
    }
  }, [post, posts])

  if (isLoading) return <CircleSpinner></CircleSpinner>
  if (isError) return <Error></Error>



  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>{post?.name}</title>
        <meta property="og:title" content="Athletid" />
        <meta property="og:type" content="article" />
      </Head>
      <Format>
        <div className={'max-w-[350px] md:max-w-[1170px] mx-auto px-4'}>
          <Article {...post} author={author} sections={sections}></Article>
          <RelatedPost sections={sections} relatedPosts={relatedPosts} />
        </div>
      </Format>
    </SWRConfig>
  )
}

function Article({ name, img, ...props }) {
  return (
    <div className={''}>
      <div className={'mt-[142px] md:mt-[216px] mb-[32px] md:mb-[64px]'}>
        <h1 className={''}>{name}</h1>
      </div>
      <div className={'flex justify-between'}>
        <Author author={props.author} />
        <div className={'flex space-x-4 pt-1'}>
          <IoIosTimer size={20} color={'darkGrey'} />
          <p className={'text-darkGrey '}>2 minutes read</p>
        </div>
      </div>

      <div
        className={
          'w-full h-[290px] md:h-[575px] relative rounded-small overflow-hidden mt-[24px] md:mt-[64px]'
        }
      >
        <Image
          sizes={'100vw'}
          fill
          src={img}
          className={'object-cover'}
          alt={''}
        />
      </div>

      <div
        className={'mt-[32px] md:mt-[64px]  mb-[64px] border-b border-darkGrey'}
      >
        {props.sections?.map((section, index) => {
          return (
            <div key={index} className={'mb-16'}>
              <h3 className={'mb-8'}>{section.subTitle}</h3>
              <p className={'whitespace-pre-line'}>{section.paragraph}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function RelatedPost(props) {
  return (
    <div
      className={
        'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'
      }
    >
      {props.relatedPosts?.slice(0, 2).map((value, index) => (
        <Post key={index} sections={props.sections} data={value} />
      ))}
    </div>
  )
}

export async function getStaticProps({ params, locale }) {
  const posts = await getPost(params.postSlug)

  return {
    props: {
      fallback: {
        'api/posts': posts,
      },
      ...(await serverSideTranslations(locale, [
        'blog',
        'footer',
        'navbar',
        'uiComponents',
      ])),
    },
  }
}

export async function getStaticPaths({ locales }) {
  const posts = await getPosts()

  const paths = []

  for (const locale of locales) {
    for (const post of posts) {
      paths.push({ params: { postSlug: post.slug }, locale })
    }
  }

  return {
    paths,
    fallback: false,
  }
}
