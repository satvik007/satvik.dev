import Logo from '@/components/Logo'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'
import { ThemeProvider } from 'next-themes'

export default function Header() {
  return <header className="pt-2 lg:pt-2">{/*<ThemeProvider/>*/}</header>
}

export function NavItems() {
  return (
    <>
      <li>
        <Link href="/blog">
          <a className="hover:text-sky-500 dark:hover:text-sky-400">Blog</a>
        </Link>
      </li>
    </>
  )
}
