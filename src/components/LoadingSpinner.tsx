export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="glass p-6 rounded-lg flex items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="mt-0 text-center muted-text">
          Searching for books...
        </div>
      </div>
    </div>
  )
}