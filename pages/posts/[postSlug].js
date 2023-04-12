import Format from '../../src/layout/format'
import getPost from '@/lib/helper'
import fetcher from '@/lib/fetcher'
import Spinner from '@/src/components/UI/Spinner/CircleSpinner'
import ErrorComponent from '@/src/components/Blog/_child/Error'
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import Head from 'next/head'
import React from 'react'
import Author from '@/src/components/Blog/_child/Author'
import Image from 'next/image'
import { Post } from '@/src/components/Blog/ArchivePosts/Post'
import {IoIosTimer} from "react-icons/io";

export default function Page({ fallback }) {
  const router = useRouter()
  const { postSlug } = router.query
  const { data, isLoading, isError } = fetcher(`api/posts/${postSlug}`)
  if (isLoading) return <Spinner></Spinner>
  if (isError) return <ErrorComponent></ErrorComponent>

  return (
    <SWRConfig value={{ fallback }}>
      <Head>
        <title>
          {data.title.charAt(0).toUpperCase() + data.title.slice(1)}
        </title>
        <meta property="og:title" content="Athletid" />
        <meta property="og:type" content="article" />
      </Head>
      <Format>
        <div className={'max-w-[350px] md:max-w-[1170px] mx-auto px-4'}>
          <Article {...data}></Article>
          <RelatedPost relatedCategory={data.category} id={data.id} />
        </div>
      </Format>
    </SWRConfig>
  )
}

function Article({ title, img, author, sections }) {
  return (
    <div className={''}>
      <div className={'mt-[142px] md:mt-[216px] mb-[32px] md:mb-[64px]'}>
        <h1 className={''}>{title}</h1>
      </div>
      <div className={'flex justify-between'}>
        <Author {...author}></Author>
          <div className={'flex space-x-4 pt-1'}>
              <IoIosTimer size={20} color={'darkGrey'}/>
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
        className={
          'mt-[32px] md:mt-[64px]  mb-[64px] border-b border-darkGrey'
        }
      >
          {sections.map((section, index) => {
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
  const {
    data: relatedPostData,
    isLoading,
    isError,
  } = fetcher(`api/posts/categories/${props.relatedCategory}`)

  if (isLoading) return <Spinner />
  if (isError) return <ErrorComponent />


  const filteredRelatedPostData = relatedPostData.filter(
        (post) => post.id !== props.id
  )

  return (
    <div
      className={
        'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'
      }
    >
      {filteredRelatedPostData.slice(0, 2).map((value, index) => (
        <Post key={index} data={value} />
      ))}
    </div>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getPost(params.postSlug)

  return {
    props: {
      fallback: {
        'api/posts': posts,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getPost()

  const paths = posts.map((value) => {
    return {
      params: {
        postSlug: value.slug,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
