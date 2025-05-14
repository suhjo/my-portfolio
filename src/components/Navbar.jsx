import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md px-4 py-2 flex justify-center items-center divide-x divide-gray-300 hover:shadow-lg hover:scale-100 transition-all">
      <div className="flex gap-3">
      <Link
        to="/"
        className="font-medium text-gray-700 hover:text-gray-400 transition-colors"
      >
        Home
      </Link>
      <Link
        to="/projects"
        className="font-medium text-gray-700 hover:text-gray-400 transition-colors"
      >
        Projects
      </Link>
      <Link
        to="/blog"
        className="font-medium text-gray-700 hover:text-gray-400 transition-colors"
      >
        Blog
      </Link>
      </div>
    </nav>
  )
}

export default Navbar