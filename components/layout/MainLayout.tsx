import { ReactNode } from 'react'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      {/*<Header />*/}
      <main className='flex-[1_0_auto] flex-col items-center justify-center'>{children}</main>
      <Footer className='sticky h-full' />
    </div>
  )
}
