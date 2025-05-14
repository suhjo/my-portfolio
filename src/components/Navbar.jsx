import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-4 left-4 bg-white rounded-lg shadow-md px-4 py-2 flex gap-3 z-50">
      <div className="flex gap-3">
      <Link
        to="/"
        className="font-medium text-gray-700 hover:text-blue-600 transition-colors"
      >
        Home
      </Link>
      <Link
        to="/projects"
        className="font-medium text-gray-700 hover:text-green-600 transition-colors"
      >
        Projects
      </Link>
      <Link
        to="/blog"
        className="font-medium text-gray-700 hover:text-purple-600 transition-colors"
      >
        Blog
      </Link>
      </div>
    </nav>
  )
}

export default Navbar