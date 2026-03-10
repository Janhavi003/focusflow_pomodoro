import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import {
  Timer,
  BarChart3,
  Music,
  CheckCircle2
} from "lucide-react"

function LandingPage() {

  return (

    <div className="min-h-screen">

      {/* HERO */}

      <section className="container-app py-32 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text"
        >
          FocusFlow
        </motion.h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          A modern productivity system that helps you stay focused,
          manage tasks, and track your deep work sessions.
        </p>

        <Link
          to="/app"
          className="btn-primary text-lg"
        >
          Start Focus Session
        </Link>

      </section>

      {/* FEATURES */}

      <section className="container-app section">

        <h2 className="text-3xl font-bold text-center mb-12">
          Features Built for Deep Work
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card text-center hover:scale-105 transition">

            <Timer
              className="mx-auto mb-4 text-indigo-500"
              size={36}
            />

            <h3 className="text-lg font-semibold mb-2">
              Pomodoro Timer
            </h3>

            <p className="text-gray-500">
              Stay productive with 25-minute focus sessions
              and automatic breaks.
            </p>

          </div>

          <div className="card text-center hover:scale-105 transition">

            <BarChart3
              className="mx-auto mb-4 text-indigo-500"
              size={36}
            />

            <h3 className="text-lg font-semibold mb-2">
              Productivity Analytics
            </h3>

            <p className="text-gray-500">
              Visualize your productivity patterns
              with interactive charts.
            </p>

          </div>

          <div className="card text-center hover:scale-105 transition">

            <Music
              className="mx-auto mb-4 text-indigo-500"
              size={36}
            />

            <h3 className="text-lg font-semibold mb-2">
              Focus Sounds
            </h3>

            <p className="text-gray-500">
              Improve concentration with rain,
              forest, cafe and white noise.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="container-app section">

        <h2 className="text-3xl font-bold text-center mb-12">
          How FocusFlow Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="card">

            <CheckCircle2
              className="mx-auto mb-4 text-green-500"
              size={32}
            />

            <h3 className="font-semibold mb-2">
              Choose a Task
            </h3>

            <p className="text-gray-500">
              Select what you want to work on
              and start a session.
            </p>

          </div>

          <div className="card">

            <CheckCircle2
              className="mx-auto mb-4 text-green-500"
              size={32}
            />

            <h3 className="font-semibold mb-2">
              Focus for 25 Minutes
            </h3>

            <p className="text-gray-500">
              Work without distractions
              during your focus session.
            </p>

          </div>

          <div className="card">

            <CheckCircle2
              className="mx-auto mb-4 text-green-500"
              size={32}
            />

            <h3 className="font-semibold mb-2">
              Take a Break
            </h3>

            <p className="text-gray-500">
              Recharge with short breaks
              to maintain productivity.
            </p>

          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="container-app py-24 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Master Your Focus?
        </h2>

        <p className="text-gray-500 mb-8">
          Join thousands of users improving
          their productivity with FocusFlow.
        </p>

        <Link
          to="/app"
          className="btn-primary text-lg"
        >
          Start Focusing
        </Link>

      </section>

      {/* FOOTER */}

      <footer className="border-t mt-20 py-8 text-center text-gray-500">

        <p>
          © {new Date().getFullYear()} FocusFlow — Built with React & Tailwind
        </p>

      </footer>

    </div>

  )

}

export default LandingPage