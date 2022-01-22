import Head from 'next/head'
import MainLayout from "layouts/MainLayout";
import { getAllFilesFrontMatter } from 'lib/mdx'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home() {
  return (
    <MainLayout>

      <div className="text-6xl">
        Under construction...
      </div>

    </MainLayout>
  )
}
