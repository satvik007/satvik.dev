import { ReactNode } from 'react'
import Footer from 'components/Footer'
import SectionContainer from 'components/SectionContainer'
import Header from '@/components/Header'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SectionContainer>
      <div className="flex flex-col min-h-screen">
        {/*<Header />*/}
        <main className="flex-[1_0_auto]">{children}</main>
        <Footer className="shrink-0" />
      </div>
    </SectionContainer>
  )
}
