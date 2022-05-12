import BlogLayout from 'layouts/BlogLayout'
import { useMDXComponent } from 'next-contentlayer/hooks'
// import { getTweets } from 'lib/twitter'
import components from 'components/MDXComponents'
// import Tweet from 'components/Tweet'
import { allBlogs, Blog } from 'contentlayer/index'

export default function Post({ post }: { post: Blog }) {
  const Component = useMDXComponent(post.body.code)

  return (
    <BlogLayout post={post}>
      <Component
        components={
          {
            ...components,
          } as any
        }
      />
    </BlogLayout>
  )
}

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug)
  // const tweets = await getTweets(post.tweetIds);

  return {
    props: {
      post,
      // tweets
    },
  }
}
