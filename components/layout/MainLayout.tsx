import { ReactNode } from 'react'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      {/*<Header />*/}
      <div className='flex h-full flex-[1_0_auto] flex-col'>{children}</div>
      <Footer className='sticky h-full' />
    </div>
  )
}
