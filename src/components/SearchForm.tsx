'use client'

import { useState } from 'react'

interface SearchFormProps {
  onSearch: (params: {
    query: string
    searchType: string
    limit?: number
  }) => void
  loading: boolean
}

export default function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [query, setQuery] = useState('')
  const [searchType, setSearchType] = useState('title')
  const [limit, setLimit] = useState(20)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch({ query: query.trim(), searchType, limit })
    }
  }

  const searchTypes = [
    { value: 'title', label: '📖 Title' },
    { value: 'author', label: '✍️ Author' },
    { value: 'subject', label: '🏷️ Subject/Genre' },
    { value: 'isbn', label: '🔢 ISBN' },
    { value: 'general', label: '🔍 General Search' }
  ]

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Search Type Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Search By
          </label>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {searchTypes.map((type) => (
              <button
                key={type.value}
                type="button"
                onClick={() => setSearchType(type.value)}
                className={`p-3 rounded-lg text-sm font-medium transition-colors ${
                  searchType === type.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search Input */}
        <div>
          <label htmlFor="search-query" className="block text-sm font-medium text-gray-700 mb-2">
            Search Query
          </label>
          <div className="relative">
            <input
              id="search-query"
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Enter ${searchType === 'general' ? 'any search term' : searchType}...`}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-lg"
              disabled={loading}
            />
          </div>
        </div>

        {/* Results Limit */}
        <div className="flex items-center space-x-4">
          <label htmlFor="limit" className="text-sm font-medium text-gray-700">
            Results:
          </label>
          <select
            id="limit"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            disabled={loading}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          disabled={!query.trim() || loading}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium text-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Searching...' : '🔍 Search Books'}
        </button>
      </form>

      {/* Search Tips */}
      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">💡 Search Tips:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• <strong>Title:</strong> Search for specific book titles</li>
          <li>• <strong>Author:</strong> Find books by author name</li>
          <li>• <strong>Subject:</strong> Discover books by genre or topic</li>
          <li>• <strong>ISBN:</strong> Look up books by their ISBN number</li>
          <li>• <strong>General:</strong> Search across all fields</li>
        </ul>
      </div>
    </div>
  )
}