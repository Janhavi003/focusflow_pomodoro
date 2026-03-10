import { Link, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  BarChart3,
  History,
  Timer
} from "lucide-react"

function Sidebar() {

  const location = useLocation()

  const menu = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/app" },
    { name: "Analytics", icon: BarChart3, path: "/analytics" },
    { name: "History", icon: History, path: "/history" }
  ]

  return (

    <aside className="w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700 min-h-screen">

      <Link
        to="/"
        className="p-6 text-xl font-bold text-primary flex items-center gap-2"
      >
        <Timer size={22} />
        FocusFlow
      </Link>

      <nav className="flex flex-col gap-2 px-4">

        {menu.map((item) => {

          const Icon = item.icon
          const active = location.pathname === item.path

          return (

            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition
                ${
                  active
                    ? "bg-indigo-100 dark:bg-gray-700 text-indigo-600"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >

              <Icon size={18} />

              {item.name}

            </Link>

          )

        })}

      </nav>

    </aside>

  )

}

export default Sidebar