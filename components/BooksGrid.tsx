import { Book } from 'types/data'
import NextImage from 'components/NextImage'

export default function BooksGrid({ books }: { books: Book[] }) {
  return (
    <div className='sm:grid-cols-2 lg:grid-cols-4'>
      {books.map((book, id) => (
        <BookCard key={id} book={book} />
      ))}
    </div>
  )
}

export function BookCard({ book }: { book: Book }) {
  return (
    <div className='p-4'>
      <div className='flex flex-col items-center'>
        <NextImage
          height={200}
          width={100}
          src={book.image}
          alt={book.title}
          className='h-32 w-32'
        />
        <div className='mt-2'>
          <h3 className='text-xl font-semibold'>{book.title}</h3>
          <p className='text-sm text-gray-600'>{book.authors.join(', ')}</p>
        </div>
      </div>
    </div>
  )
}
