import siteMetadata from 'data/siteMetadata.json'
import Icon from '@/components/icons'
import Image from 'next/image'

export default function Welcome() {
  return (
    <>
      <div className="mb-10 items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
        <div className="flex flex-col items-center pt-8 space-x-2">
          <Image
            src={siteMetadata.image}
            alt="avatar"
            height={250}
            width={250}
            className="rounded-full"
          />
          <div className="flex pt-6 space-x-3 hover:text-primary-600 dark:hover:text-primary-400">
            <Icon kind="twitter" href={siteMetadata.twitter} />
            <Icon kind="linkedin" href={siteMetadata.linkedin} />
            <Icon kind="github" href={siteMetadata.github} />
          </div>
        </div>
        <div className=" prose dark:prose-dark pt-8 pb-8 xl:col-span-2">
          <h1>Hey, I am Satvik</h1>
          <p>
            I am senior software engineer at Envestnet Yodlee and I am a full stack developer. I am
            passionate about building products that solve real world problems.
          </p>
        </div>
      </div>
    </>
  )
}
