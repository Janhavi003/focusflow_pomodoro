import { Link } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"

function Navbar() {

  return (

    <nav className="bg-white dark:bg-gray-800 shadow-md">

      <div className="container-app flex justify-between items-center py-4">

        <Link
          to="/"
          className="text-xl font-bold text-primary"
        >
          FocusFlow
        </Link>

        <div className="flex items-center gap-4">

          <Link
            to="/app"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            Dashboard
          </Link>

          <Link
            to="/analytics"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            Analytics
          </Link>

          <Link
            to="/history"
            className="text-gray-600 dark:text-gray-300 hover:text-primary"
          >
            History
          </Link>

          <ThemeToggle />

        </div>

      </div>

    </nav>

  )

}

export default Navbar