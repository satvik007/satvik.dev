import siteMetadata from 'data/siteMetadata.json'
import Icon from 'components/icons'
import clsx from 'clsx'
import Link from 'next/link'

const links1 = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
]

const links2 = [
  {
    title: 'Recommends',
    path: '/recommends',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
]

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={clsx(className, 'bg-prism')}>
      <div className='flex flex-col items-center pt-4 pb-2'>
        <div className='grid grid-cols-4 items-center'>
          <div className='col-span-2 mb-5 flex space-x-4'>
            <Icon kind='github' size='40px' href={siteMetadata.github} />
            {/*<Icon kind="linkedin" href={siteMetadata.linkedin} />*/}
            <Icon kind='twitter' size='40px' href={siteMetadata.twitter} />
          </div>
          <div className='flex flex-col'>
            {links1.map((link) => (
              <Link href={link.path} key={link.path}>
                <a className='text-xl'>{link.title}</a>
              </Link>
            ))}
          </div>
          <div className='flex flex-col'>
            {links2.map((link) => (
              <Link href={link.path} key={link.path}>
                <a className='text-xl'>{link.title}</a>
              </Link>
            ))}
          </div>
        </div>

        <div className='mt-4 flex space-x-2 text-lg text-gray-700 dark:text-gray-200'>
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
