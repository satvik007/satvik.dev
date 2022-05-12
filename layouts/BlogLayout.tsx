import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import ViewCounter from 'components/ViewCounter'
import type { PropsWithChildren } from 'react'
import { Blog } from 'contentlayer/index'
import MainLayout from './MainLayout'
import Seo from '../components/Seo'

const editUrl = (slug) =>
  `https://github.com/satvik007/satvik.dev/edit/main/data/blog/${slug}/index.mdx`
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://satvik.dev/blog/${slug}`)}`

export default function BlogLayout({ children, post }: PropsWithChildren<{ post: Blog }>) {
  return (
    <MainLayout>
      <Seo
        templateTitle={`${post.title} - Satvik Choudhary`}
        date={format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
      />
      <article className='mx-auto mb-16 flex w-full max-w-2xl flex-col items-start justify-center pt-6'>
        <h1 className='mb-4 text-3xl font-bold tracking-tight text-black dark:text-white md:text-5xl'>
          {post.title}
        </h1>
        <div className='mt-2 flex w-full flex-col items-start justify-between md:flex-row md:items-center'>
          <div className='flex items-center'>
            <Image
              alt='Satvik Choudhary'
              height={24}
              width={24}
              src='/images/satvik_choudhary.jpg'
              className='rounded-full'
            />
            <p className='ml-2 text-sm text-gray-700 dark:text-gray-300'>
              {'Satvik Choudhary / '}
              {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className='min-w-32 mt-2 text-sm text-gray-600 dark:text-gray-400 md:mt-0'>
            {post.readingTime.text}
            {` • `}
            <ViewCounter slug={post.slug} />
          </p>
        </div>
        <div className='prose dark:prose-dark mt-4 w-full max-w-none'>{children}</div>
        <div className='pt-4 text-sm text-gray-700 dark:text-gray-300'>
          <a href={discussUrl(post.slug)} target='_blank' rel='noopener noreferrer'>
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a href={editUrl(post.slug)} target='_blank' rel='noopener noreferrer'>
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </MainLayout>
  )
}
