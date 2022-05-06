import Head from 'next/head'
import { useRouter } from 'next/router'

export default function BookLayout({ children, meta, slug, latestPosts }) {
  return (
    <div>
      <h1>Blog Post Layout</h1>
    </div>
  )
}

export function getStaticProps() {
  return {
    props: {},
  }
}

function Metadata({ meta }) {
  let router = useRouter()

  return (
    <Head>
      <title>{meta.title} – Tailwind CSS</title>
      <meta name='twitter:site' content='@realsatvik007' />
      <meta name='twitter:creator' content='@realsatvik007' />
      <meta name='twitter:title' content={`${meta.title} – Satvik Choudhary Blog`} />
      <meta name='twitter:description' content={meta.description} />
      {meta.image ? (
        <>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:image' content={`https://satvik.dev${meta.image}`} />
        </>
      ) : (
        <>
          <meta name='twitter:card' content='summary' />
          <meta
            name='twitter:image'
            content={`https://satvik.dev${require('img/social-square.jpg').default}`}
          />
        </>
      )}
      <meta property='og:url' content={`https://satvik.dev${router.pathname}`} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={`${meta.title} – Satvik Choudhary blog`} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:image' content={`https://satvik.dev${meta.image}`} />
      <meta name='description' content={meta.description} />
    </Head>
  )
}
