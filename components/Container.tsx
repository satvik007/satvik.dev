import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import clsx from 'clsx'

import Footer from 'components/Footer'
import MobileMenu from 'components/MobileMenu'

function NavItem({ href, text }) {
  const router = useRouter()
  const isActive = router.asPath === href

  return (
    <NextLink href={href}>
      <a
        className={clsx(
          isActive
            ? 'font-semibold text-gray-800 dark:text-gray-200'
            : 'font-normal text-gray-600 dark:text-gray-400',
          'hidden rounded-lg p-1 transition-all hover:bg-gray-200 dark:hover:bg-gray-800 sm:px-3 sm:py-2 md:inline-block'
        )}
      >
        <span className='capsize'>{text}</span>
      </a>
    </NextLink>
  )
}

export default function Container(props) {
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const { children, ...customMeta } = props
  const router = useRouter()
  const meta = {
    title: 'Lee Robinson – Developer, writer, creator.',
    description: `Front-end developer, JavaScript enthusiast, and course creator.`,
    image: 'https://leerob.io/static/images/banner.png',
    type: 'website',
    ...customMeta,
  }

  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`https://leerob.io${router.asPath}`} />
        <link rel='canonical' href={`https://leerob.io${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Lee Robinson' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@leeerob' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && <meta property='article:published_time' content={meta.date} />}
      </Head>
      <div className='flex flex-col justify-center px-8'>
        <nav className='relative mx-auto flex w-full max-w-2xl items-center justify-between border-gray-200 bg-gray-50 bg-opacity-60 pt-8 pb-8  text-gray-900 dark:border-gray-700  dark:bg-gray-900 dark:text-gray-100 sm:pb-16'>
          <a href='#skip' className='skip-nav'>
            Skip to content
          </a>
          <div className='ml-[-0.60rem]'>
            <MobileMenu />
            <NavItem href='/' text='Home' />
            <NavItem href='/guestbook' text='Guestbook' />
            <NavItem href='/dashboard' text='Dashboard' />
            <NavItem href='/blog' text='Blog' />
            <NavItem href='/snippets' text='Snippets' />
          </div>
        </nav>
      </div>
      <main id='skip' className='flex flex-col justify-center bg-gray-50 px-8 dark:bg-gray-900'>
        {children}
        <Footer />
      </main>
    </div>
  )
}
