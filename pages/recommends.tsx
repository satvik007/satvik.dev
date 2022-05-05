import MainLayout from '@/components/layout/MainLayout'
import Seo from '@/components/Seo'
import BooksGrid from '@/components/BooksGrid'
import { fetchBooks } from '@/lib/fetcher'
import { useEffect, useState } from 'react'
import { components } from '@/components/icons'
import { FaAngleUp } from 'react-icons/fa'
import { Book } from 'types/data'

export default function Recommends({ books }: { books: Book[] }) {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <MainLayout>
      <Seo templateTitle='Recommends' />
      <main className='flex flex-col'>
        <BookSection books={books} />
        <MovieSection movies={[]} />
        <MusicSection music={[]} />
        <p className='h-full flex-1 text-center text-3xl '>Work in progress!</p>
      </main>{' '}
      {showTopBtn && (
        <FaAngleUp
          className='fixed right-6 bottom-6 z-10 rounded-full bg-emerald-400 p-2 hover:bg-emerald-500 sm:h-12 sm:w-12 lg:h-14 lg:w-14'
          onClick={goToTop}
        />
      )}{' '}
    </MainLayout>
  )
}

export function BookSection({ books }: { books: Book[] }) {
  return (
    <Section name='Books' initialOpen={true}>
      <div className='my-4 flex flex-col justify-center px-3'>
        <blockquote className='text-center text-lg'>
          A reader lives a thousand lives before he dies . . . The man who never reads lives only
          one.
        </blockquote>
        <BooksGrid books={books} />
      </div>
    </Section>
  )
}

export function MovieSection({ movies }: { movies: any[] }) {
  return (
    <Section name='Movies' initialOpen={false}>
      <div className='my-4 flex flex-col justify-center px-3'>
        <blockquote className='text-center text-lg'>
          Cinema is a matter of what's in the frame and what's out.
        </blockquote>
      </div>
    </Section>
  )
}

export function MusicSection({ music }: { music: any[] }) {
  return (
    <Section name='Music' initialOpen={false}>
      <div className='my-4 flex flex-col justify-center px-3'>
        <blockquote className='text-center text-lg'>Your music rescues me!</blockquote>
      </div>
    </Section>
  )
}

export function Section({
  name,
  children,
  initialOpen = false,
}: {
  name: string
  children?: any
  initialOpen?: boolean
}) {
  const [isOpen, setIsOpen] = useState(initialOpen)

  const onClick = (x: boolean) => setIsOpen(x)

  return (
    <section className='min-w-full bg-white'>
      <AboveLine name={name} isOpen={isOpen} onClick={onClick} />
      {!!isOpen && children}
    </section>
  )
}

export function AboveLine({ name, isOpen, onClick }) {
  return (
    <div className='border border-sky-400 bg-sky-200'>
      <button
        className='flex w-full items-center gap-4 px-4 py-1 text-center text-xl font-bold'
        onClick={() => onClick(!isOpen)}
      >
        <components.down />
        <h2 className='text-center text-2xl font-bold'>{name}</h2>
      </button>
    </div>
  )
}

export async function getStaticProps() {
  const books = await fetchBooks()
  return {
    props: {
      books,
    },
  }
}
