import { ReactNode } from 'react'
import Footer from 'components/Footer'
import Header from 'components/Header'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-screen flex-col'>
      {/*<Header />*/}
      <div className='flex flex-[1_0_auto] flex-col'>{children}</div>
      <Footer className='sticky h-full' />
    </div>
  )
}
