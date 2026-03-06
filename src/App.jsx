import { Routes, Route } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import History from "./pages/History"

function App() {
  return (
    <div className="min-h-screen">
      <Routes>

        {/* Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Main App */}
        <Route path="/app" element={<Dashboard />} />

        {/* Analytics */}
        <Route path="/analytics" element={<Analytics />} />

        {/* History */}
        <Route path="/history" element={<History />} />

      </Routes>
    </div>
  )
}

export default App