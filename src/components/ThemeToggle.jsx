import { useEffect, useState } from "react"

function ThemeToggle() {

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("focusflow_theme")
    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      return true
    }
    return false
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
    }
  }, [dark])

  const toggleTheme = () => {

    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("focusflow_theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("focusflow_theme", "dark")
    }

    setDark(!dark)

  }

  return (

    <button
      onClick={toggleTheme}
      className="btn-secondary"
    >
      {dark ? "Light" : "Dark"}
    </button>

  )

}

export default ThemeToggle