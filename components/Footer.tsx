// import Link from './Link'
import siteMetadata from 'data/siteMetadata.json'
import Icon from 'components/icons'
import Link from 'next/link';

export default function Footer({className}: {className?: string;}) {
  return (
    <footer className={className}>
      <div className="flex flex-col items-center mt-16">
        <div className="prose dark:prose-dark flex mb-5 space-x-4">
          <Icon kind="github" href={siteMetadata.github} />
          <Icon kind="linkedin" href={siteMetadata.linkedin} />
          <Icon kind="twitter" href={siteMetadata.twitter} />
        </div>
        <div className="text-lg text-gray-700 dark:text-gray-200 flex mb-2 space-x-2">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>
            <p>Personal Website</p>
          </div>
        </div>
        <div className="text-lg text-gray-700 dark:text-gray-200 mb-8">
          <p>Made with Next.js, Tailwind and hosted on Vercel</p>
        </div>
      </div>
    </footer>
  )
}
