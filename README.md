# 📚 Book Finder

A modern React application that helps users discover books using the Open Library API. Built specifically for Alex, a college student who wants to search for books in multiple ways.

## 🌟 Features

- **Multiple Search Types**: Search by title, author, subject/genre, ISBN, or general search
- **Rich Book Information**: Display book covers, authors, publication year, page count, subjects, and more
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with Tailwind CSS styling
- **Fast Performance**: Built with Next.js 15 and React 18
- **Direct Integration**: Links to Open Library for detailed book information

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🔍 How to Use

1. **Choose Search Type**: Select how you want to search - by title, author, subject, ISBN, or general search
2. **Enter Search Query**: Type your search term in the input field
3. **Set Results Limit**: Choose how many results you want (10, 20, 50, or 100)
4. **Search**: Click the search button to find books
5. **Browse Results**: View book covers, details, and click to see more on Open Library

## 🛠️ Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **API**: Open Library Search API
- **Deployment**: Ready for Vercel, Netlify, or other platforms

## 📱 Search Types Explained

- **📖 Title**: Search for specific book titles
- **✍️ Author**: Find books by author name
- **🏷️ Subject/Genre**: Discover books by topic or genre
- **🔢 ISBN**: Look up books by their ISBN number
- **🔍 General Search**: Search across all book fields

## 🎯 Project Goals

This application was built as part of the Aganitha Web Developer Take-Home Exercise to demonstrate:

- Understanding of user requirements (Alex's needs as a college student)
- Implementation of a clean, functional React application
- Integration with public APIs
- Modern web development practices
- Responsive design principles

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🌐 API Information

This application uses the [Open Library Search API](https://openlibrary.org/dev/docs/api/search):
- Base URL: `https://openlibrary.org/search.json`
- No authentication required
- Returns comprehensive book data including covers, metadata, and more

## 📄 License

This project is created for educational and evaluation purposes as part of the Aganitha take-home exercise.

## 🙏 Acknowledgments

- Open Library for providing the free book search API
- Next.js team for the excellent React framework
- Tailwind CSS for the utility-first styling approach