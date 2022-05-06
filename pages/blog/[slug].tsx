import components from 'components/MDXComponents'
import { Blog } from 'types/data'
import { useMDXComponent } from 'next-contentlayer/hooks'
import BlogLayout from 'layouts/BlogLayout'

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
  const allBlogs = []
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const allBlogs = []
  const post = allBlogs.find((post) => post.slug === params.slug)

  return { props: { post } }
}
