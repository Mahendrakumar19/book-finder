import { Book } from '../types/book'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  const getCoverImageUrl = (coverId?: number) => {
    if (!coverId) return null
    return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
  }

  const getOpenLibraryUrl = (key: string) => {
    return `https://openlibrary.org${key}`
  }

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget
    target.style.display = 'none'
  }

  return (
    <article className="overflow-hidden transition-shadow duration-300 glass shadow-lg rounded-xl hover:shadow-xl">
      {/* Book Cover */}
      <div className="relative flex items-center justify-center h-64 bg-white/10">
        {book.coverImageId ? (
          <img
            src={getCoverImageUrl(book.coverImageId) || undefined}
            alt={`Cover of ${book.title}`}
            className="object-cover w-auto h-full"
            onError={handleImageError}
            loading="lazy"
          />
        ) : (
          <div className="p-4 text-center text-gray-400" role="img" aria-label="No cover available">
            <div className="mb-2 text-4xl">📚</div>
            <div className="text-sm">No Cover Available</div>
          </div>
        )}
      </div>

      {/* Book Details */}
      <div className="p-4">
        <h3 className="mb-2 overflow-hidden text-lg font-bold text-gray-800" 
            style={{ 
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical'
            }}>
          {book.title}
        </h3>
        
        {book.authors.length > 0 && (
          <p className="mb-2 text-sm muted-text">
            <span className="font-medium">Author(s):</span>{' '}
            {book.authors.slice(0, 2).join(', ')}
            {book.authors.length > 2 && ` (+${book.authors.length - 2} more)`}
          </p>
        )}

        <div className="mb-3 space-y-1 text-xs text-gray-500">
          {book.firstPublishYear && (
            <div>📅 Published: {book.firstPublishYear}</div>
          )}
          {book.numberOfPages && (
            <div>📄 Pages: {book.numberOfPages}</div>
          )}
          {book.isbn && (
            <div>🔢 ISBN: {book.isbn}</div>
          )}
        </div>

        {/* Subjects */}
        {book.subjects.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1" role="list" aria-label="Book subjects">
              {book.subjects.slice(0, 3).map((subject: string, index: number) => (
                <span
                  key={index}
                  role="listitem"
                  className="px-2 py-1 text-xs text-blue-800 bg-blue-100/60 rounded-full"
                >
                  {subject}
                </span>
              ))}
              {book.subjects.length > 3 && (
                <span 
                  role="listitem"
                  className="px-2 py-1 text-xs muted-text bg-gray-100/50 rounded-full"
                >
                  +{book.subjects.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <a
          href={getOpenLibraryUrl(book.key)}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-2 text-sm font-medium text-center text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
          aria-label={`View ${book.title} on Open Library`}
        >
          View on Open Library →
        </a>
      </div>
    </article>
  )
}