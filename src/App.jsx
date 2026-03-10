import { Routes, Route, useLocation } from "react-router-dom"

import Sidebar from "./components/Sidebar"

import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import History from "./pages/History"
import FloatingTimer from "./components/FloatingTimer"

function App() {

  const location = useLocation()

  const showSidebar = location.pathname !== "/"

  return (

    <div className="flex">

      {showSidebar && <Sidebar />}

      <main className="flex-1 min-h-screen bg-gray-50 dark:bg-gray-900">

        <Routes>

          <Route path="/" element={<LandingPage />} />

          <Route path="/app" element={<Dashboard />} />

          <Route path="/analytics" element={<Analytics />} />

          <Route path="/history" element={<History />} />

        </Routes>

      </main>
      <FloatingTimer />

    </div>

  )

}

export default App