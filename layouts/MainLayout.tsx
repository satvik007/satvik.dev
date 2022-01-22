import { ReactNode } from 'react'
import Footer from 'components/Footer'
import SectionContainer from 'components/SectionContainer'
import headerNavLinks from 'data/headerNavLinks'
import Link from 'components/Link'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileNav from '@/components/MobileNav'
import Script from 'next/script'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen min-w-1/2">
        <header className="flex items-center justify-center py-10">
          <div className="flex items-center text-base leading-7">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="mb-auto font-medium text-lg text-gray-800 dark:text-gray-100 sm:p-4 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}
