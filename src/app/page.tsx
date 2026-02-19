import SearchInterface from '@/components/SearchInterface'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto mb-8 glass p-8 rounded-3xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              📚 Book Finder
            </h1>
            <p className="text-lg md:text-xl muted-text max-w-2xl mx-auto">
              Discover your next great read! Search through millions of books using the Open Library database.
            </p>
          </div>
        </div>
        <SearchInterface />
      </div>
    </main>
  )
}