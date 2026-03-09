import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"

import LandingPage from "./pages/LandingPage"
import Dashboard from "./pages/Dashboard"
import Analytics from "./pages/Analytics"
import History from "./pages/History"

function App() {

  return (

    <div className="min-h-screen">

      <Navbar />

      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/app" element={<Dashboard />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/history" element={<History />} />

      </Routes>

    </div>

  )

}

export default App