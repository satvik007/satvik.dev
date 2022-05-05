import Script from 'next/script'
import Image from 'next/image'
import Link from '@/components/Link'
import { useEffect } from 'react'
import Gradient from 'lib/gradient'

export default function HomeHeader() {
  useEffect(() => {
    /*
     *Finally initializing the Gradient class, assigning a canvas to it and calling Gradient.connect() which initializes everything,
     * Use Gradient.pause() and Gradient.play() for controls.
     *
     * Here are some default property values you can change anytime:
     * Amplitude:    Gradient.amp = 0
     * Colors:       Gradient.sectionColors (if you change colors, use normalizeColor(#hexValue)) before you assign it.
     *
     *
     * Useful functions
     * Gradient.toggleColor(index)
     * Gradient.updateFrequency(freq)
     */
    const gradient: any = new Gradient()
    gradient.initGradient('#gradient-canvas')
  }, [])

  return (
    <div className='flex min-h-screen flex-col items-center justify-center'>
      <div className='min-w-screen canvas-container absolute flex min-h-screen items-center justify-center'>
        <canvas id='gradient-canvas' className='min-w-screen min-h-screen' />
      </div>

      <div className='z-10 m-20'>
        <div>
          <div className='ml-6 mb-4 text-[1.35em]'>Hi, I’m</div>
          <h1 className='text-[5.4em] font-extrabold capitalize leading-none'>Satvik</h1>
          <h1 className='text-[5.4em] font-extrabold capitalize leading-none'>Choudhary</h1>
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
