import Script from 'next/script'
import Image from 'next/image'
import Link from '@/components/Link'

export default function HomeHeader() {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='absolute flex min-h-screen items-center justify-center bg-blue-300'>
        <canvas id='gradient-canvas' className='min-h-screen' />
        <Script src='/scripts/gradient.js' strategy='beforeInteractive' />
      </div>

      <div className='z-10 m-20'>
        <div>
          <div className='ml-6 mb-4 text-[1.5vw]'>Hi, I’m</div>
          <h1 className='text-[6vw] font-extrabold capitalize leading-none'>Satvik</h1>
          <h1 className='text-[6vw] font-extrabold capitalize leading-none'>Choudhary</h1>
        </div>

        <div className='mt-12 text-2xl leading-normal'>
          <p>I write code, think about data and create awesome applications.</p>
          <p>
            Currently Senior Software Engineer at Envestnet Yodlee doing R&D on next generation
            fintech applications.
          </p>
        </div>

        <div className=''>
          <p className='mt-12 text-2xl'>
            Read{' '}
            <Link href='/blog'>
              <a className='font-bold'>articles I've written</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
