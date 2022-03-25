import siteMetadata from '@/data/siteMetadata.json'
import Icon from '@/components/icons'
import clsx from "clsx"
import Link from 'next/link'

const links = [
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Recommends',
    path: "/recommends",
  },
  {
    title: 'Contact',
    path: '/contact',
  }
]

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx(className, "bg-green-50 py-2")}>
      <div className="flex flex-col items-center mt-16">
        <div className="grid grid-cols-3 items-center">
          <div className="prose dark:prose-dark flex mb-5 space-x-4 col-span-2">
            <Icon kind="github" size="40px" href={siteMetadata.github} />
            {/*<Icon kind="linkedin" href={siteMetadata.linkedin} />*/}
            <Icon kind="twitter" size="40px" href={siteMetadata.twitter} />
          </div>
          <div className="flex flex-col">
            {links.map(link =>
              (
                <Link href={link.path}><a className="text-xl">
                  {link.title}
                </a></Link>
              )
            )}
          </div>
        </div>

        <div className="text-lg text-gray-700 dark:text-gray-200 flex mt-4 space-x-2">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>
            <p>Personal Website</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
