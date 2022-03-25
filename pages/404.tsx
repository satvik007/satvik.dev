import MainLayout from 'layouts/MainLayout'
import Script from 'next/script'
import HomeHeader from 'components/HomeHeader'
import Seo from "@/components/Seo";
import ArrowLink from "@/components/links/ArrowLink";
import { RiAlarmWarningFill } from 'react-icons/ri'

export default function four04() {
  return (
    <MainLayout>
      <Seo templateTitle='Not Found' />

      <main className='min-h-full min-w-full flex flex-col items-center justify-center'>
        <section className='min-h-full min-w-full bg-white'>
          <div className='layout flex min-h-full flex-col items-center justify-center text-center text-black'>
            <RiAlarmWarningFill
              size={60}
              className='drop-shadow-glow animate-flicker text-red-500'
            />
            <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
            <ArrowLink className='mt-4 md:text-lg' href='/'>
              Back to Home
            </ArrowLink>
          </div>
        </section>
      </main>
    </MainLayout>
  )
}
