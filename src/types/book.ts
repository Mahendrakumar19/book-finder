export interface Book {
  key: string
  title: string
  authors: string[]
  firstPublishYear?: number
  isbn?: string
  coverImageId?: number
  subjects: string[]
  languages: string[]
  publishers: string[]
  numberOfPages?: number
}

export interface SearchParams {
  query: string
  searchType: 'title' | 'author' | 'subject' | 'isbn' | 'general'
  limit?: number
}