import MainLayout from '@/components/layout/MainLayout'
import Script from 'next/script'
import HomeHeader from 'components/HomeHeader'
import Seo from '@/components/Seo'
import { RiAlarmWarningFill } from 'react-icons/ri'
import ArrowLink from '@/components/links/ArrowLink'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata.json'

export default function Home() {
  const [copySuccess, setCopySuccess] = useState(false)

  const copyToClipboard = (e: { target: { focus: () => void } }) => {
    setCopySuccess(true)
  }

  return (
    <MainLayout>
      <Seo templateTitle='Contact' />

      <main className='bg-prism flex flex-1 flex-col items-center justify-center'>
        <section className='flex min-w-full flex-1 flex-col'>
          <div className='container mx-auto flex flex-1 flex-col px-4 py-16'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-center text-5xl font-bold'>Contact</h1>
              <p className='mt-4 text-center text-lg text-gray-600'>
                If you have any questions, please feel free to contact me.
              </p>
            </div>

            <div className='mt-16 text-center text-xl'>
              <p>
                My email is{' '}
                <a
                  className='text-blue-600'
                  href='mailto:satvikchoudhary@gmail.com?Subject=(from:site)<enter your subject>'
                >
                  satvikchoudhary@gmail.com
                </a>
              </p>
              <p>
                You can also reach me via Twitter{' '}
                <a href={siteMetadata.twitter} className='text-blue-600'>
                  @realsatvik007
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
