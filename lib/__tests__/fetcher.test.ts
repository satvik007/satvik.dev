import { fetchBooks } from 'lib/fetcher'

describe('Test suite for fetcher', () => {
  it('run fetchBooks', async () => {
    const books = await fetchBooks()
    expect(books).toBeArray()
    console.log(books)
  })
})
