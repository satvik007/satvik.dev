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

      <main className='flex flex-col items-center justify-center'>
        <section className='min-h-full min-w-full bg-white'>
          <div className='container mx-auto px-4 py-16'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-center text-3xl font-bold'>Contact</h1>
              <p className='text-center text-gray-600'>
                If you have any questions, please feel free to contact me.
              </p>
            </div>

            <div className='mt-4 text-center'>
              <p>My email is satvikchoudhary@gmail.com</p>
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
