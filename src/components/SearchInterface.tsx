'use client'

import { useState, useCallback } from 'react'
import SearchForm from './SearchForm'
import BookGrid from './BookGrid'
import LoadingSpinner from './LoadingSpinner'
import { Book } from '@/types/book'

export default function SearchInterface() {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = useCallback(async (searchParams: {
    query: string
    searchType: string
    limit?: number
  }) => {
    setLoading(true)
    setError(null)
    setHasSearched(true)

    try {
      const { query, searchType, limit = 20 } = searchParams
      let url = 'https://openlibrary.org/search.json?'
      
      // Build search URL based on search type
      switch (searchType) {
        case 'title':
          url += `title=${encodeURIComponent(query)}`
          break
        case 'author':
          url += `author=${encodeURIComponent(query)}`
          break
        case 'subject':
          url += `subject=${encodeURIComponent(query)}`
          break
        case 'isbn':
          url += `isbn=${encodeURIComponent(query)}`
          break
        default:
          url += `q=${encodeURIComponent(query)}`
      }
      
      url += `&limit=${limit}&fields=key,title,author_name,first_publish_year,isbn,cover_i,subject,language,publisher,number_of_pages_median`

      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      const data = await response.json()
      
      if (data.docs && data.docs.length > 0) {
        const formattedBooks: Book[] = data.docs.map((book: any) => ({
          key: book.key,
          title: book.title || 'Unknown Title',
          authors: book.author_name || [],
          firstPublishYear: book.first_publish_year,
          isbn: book.isbn?.[0],
          coverImageId: book.cover_i,
          subjects: book.subject?.slice(0, 5) || [],
          languages: book.language?.slice(0, 3) || [],
          publishers: book.publisher?.slice(0, 3) || [],
          numberOfPages: book.number_of_pages_median
        }))
        setBooks(formattedBooks)
      } else {
        setBooks([])
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while searching')
      setBooks([])
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className="max-w-7xl mx-auto">
      <SearchForm onSearch={handleSearch} loading={loading} />
      
      {loading && <LoadingSpinner />}
      
      {error && (
        <div className="mt-8 p-4 glass border border-red-200/30 rounded-lg">
          <p className="text-red-700">
            <strong>Error:</strong> {error}
          </p>
        </div>
      )}
      
      {hasSearched && !loading && !error && books.length === 0 && (
        <div className="mt-8 p-8 text-center glass rounded-lg">
          <p className="muted-text text-lg">
            No books found. Try adjusting your search terms or search type.
          </p>
        </div>
      )}
      
      {books.length > 0 && (
        <div className="mt-8">
          <div className="mb-4 text-gray-600">
            Found {books.length} books
          </div>
          <BookGrid books={books} />
        </div>
      )}
    </div>
  )
}