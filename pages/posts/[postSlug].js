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
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from 'next-share'

export default function Page({ fallback }) {
  let router = useRouter()
  const currentUrl = process.env.NEXT_PUBLIC_SITE_URL + router.asPath
  let { postSlug } = router.query
  const [post, setPost] = useState(null)
  const [sections, setSections] = useState(null)
  const [posts, setPosts] = useState(null)
  const [author, setAuthor] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [url, setUrl] = useState('')

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

  console.log(sections)

  if (isLoading) return <CircleSpinner></CircleSpinner>
  if (isError) return <Error></Error>

  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>{post?.name}</title>
        <meta property="og:title" content={post?.name} />
        <meta property="og:type" content="article" />
      </Head>
      <Format>
        <div className={'max-w-[350px] md:max-w-[1170px] mx-auto px-4'}>
          <Article
            {...post}
            url={currentUrl}
            author={author}
            sections={sections}
          ></Article>
          <RelatedPost sections={sections} relatedPosts={relatedPosts} />
        </div>
      </Format>
    </SWRConfig>
  )
}

function Article({ name, img, url, ...props }) {
  return (
    <div className={''}>
      <div className={'mt-[142px] md:mt-[216px] mb-[64px]'}>
        <h1 className={''}>{name}</h1>
      </div>
      <div className={'flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between'}>
        <Author author={props.author} />
        <div className={'flex md:flex-col justify-between items-center md:items-start md:justify-start md:space-y-4'}>
          <div className={'flex space-x-4 pt-1 order-last md:order-fist'}>
            <IoIosTimer size={20} color={'darkGrey'} />
            <p className={'text-darkGrey '}>2 minutes read</p>
          </div>
          <div className={'flex space-x-4 order-first md:order-last'}>
            <FacebookShareButton url={url ? url : ''}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <LinkedinShareButton url={url ? url : ''}>
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <EmailShareButton url={url ? url : ''}>
              <EmailIcon size={32} round />
            </EmailShareButton>
          </div>
        </div>
      </div>

      <div
        className={
          'w-full h-[290px] md:h-[575px] relative rounded-small overflow-hidden mt-[64px]'
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
