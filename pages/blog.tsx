import MainLayout from 'components/../layouts/MainLayout'
import Script from 'next/script'
import HomeHeader from 'components/HomeHeader'

import { useState } from 'react'

import BlogPost from 'components/BlogPost'
import { InferGetStaticPropsType } from 'next'
import { pick } from 'lib/utils'
import { allBlogs } from 'contentlayer/index'

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <MainLayout>
      <div className='bg-prism flex flex-1 flex-col items-center justify-center'>
        <div className='mx-auto mb-16 flex max-w-xl flex-col items-start justify-center bg-white px-16 py-16 lg:max-w-3xl lg:rounded-3xl lg:border-2 lg:border-amber-500'>
          <h1 className='mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl'>
            Blog
          </h1>
          <p className='mb-4 text-gray-600 dark:text-gray-400'>
            {`I write about Software Engineering and anything that makes me curious.
            In total, I've written ${posts.length} articles on my blog.
            Use the search below to filter by title.`}
          </p>
          <div className='relative mb-4 w-full'>
            <input
              aria-label='Search articles'
              type='text'
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder='Search articles'
              className='block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'
            />
            <svg
              className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              />
            </svg>
          </div>
          {/*{!searchValue && (*/}
          {/*  <>*/}
          {/*    <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">*/}
          {/*      Most Popular*/}
          {/*    </h3>*/}
          {/*    <BlogPost*/}
          {/*      title=""*/}
          {/*      summary=""*/}
          {/*      slug=""*/}
          {/*    />*/}
          {/*    <BlogPost*/}
          {/*      title=""*/}
          {/*      summary=""*/}
          {/*      slug=""*/}
          {/*    />*/}
          {/*    <BlogPost*/}
          {/*      title=""*/}
          {/*      summary=""*/}
          {/*      slug=""*/}
          {/*    />*/}
          {/*  </>*/}
          {/*)}*/}
          <h3 className='mt-8 mb-4 text-2xl font-bold tracking-tight text-black dark:text-white md:text-4xl'>
            All Posts
          </h3>
          {!filteredBlogPosts.length && (
            <p className='mb-4 text-gray-600 dark:text-gray-400'>No posts found.</p>
          )}
          {filteredBlogPosts.map((post) => (
            <BlogPost key={post.title} {...post} />
          ))}
        </div>{' '}
      </div>
    </MainLayout>
  )
}

export function getStaticProps() {
  const posts = allBlogs
    .map((post) => pick(post, ['slug', 'title', 'summary', 'publishedAt']))
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

  return { props: { posts } }
}
