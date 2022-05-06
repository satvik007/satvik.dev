import Head from 'next/head'
import { useRouter } from 'next/router'

import { openGraph } from 'lib/helper'

const defaultMeta = {
  title: 'ninjadeals',
  siteName: 'ninjadeals',
  description:
    'ninjadeals is a platform for price history, set price alerts and discover the best deals from popular online stores around the world. Discover best deals from Amazon, Flipkart, Myntra, Ajio and many more.',
  /** Without additional '/' on the end, e.g. https://theodorusclarence.com */
  url: 'https://ninjadeals.xyz',
  type: 'website',
  robots: 'follow, index',
  /** No need to be filled, will be populated with openGraph function */
  image: '',
}

type SeoProps = {
  date?: string
  templateTitle?: string
} & Partial<typeof defaultMeta>

export default function Seo(props: SeoProps) {
  const router = useRouter()
  const meta = {
    ...defaultMeta,
    ...props,
  }
  meta['title'] = props.templateTitle ? `${props.templateTitle} | ${meta.siteName}` : meta.title

  // Use siteName if there is templateTitle
  // but show full title if there is none
  meta['image'] = openGraph({
    description: meta.description,
    siteName: props.templateTitle ? meta.siteName : meta.title,
    templateTitle: props.templateTitle,
  })

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta name='publish_date' property='og:publish_date' content={meta.date} />
          <meta name='author' property='article:author' content='satvik.choudhary' />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='TileColor' content='#ffffff' />
      <meta name='Ninja' content='/favicon/favicon.ico' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  )
}

type Favicons = {
  rel: string
  href: string
  sizes?: string
  type?: string
}

// TODO: this is the default favicon, you can generate your own from https://www.favicon-generator.org/ then replace the whole /public/favicon folder
const favicons: Array<Favicons> = [
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    sizes: '48x48',
    href: '/favicon/favicon.ico',
  },
  {
    rel: 'apple-touch-icon',
    type: 'png',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-chrome-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '512x512',
    href: '/favicon/android-chrome-512x512.png',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
]
