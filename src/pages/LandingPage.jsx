import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function LandingPage() {

  return (

    <div className="min-h-screen">

      {/* HERO SECTION */}

      <section className="container-app py-24 text-center">

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          FocusFlow
        </motion.h1>

        <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto">
          A modern Pomodoro productivity app designed to help you
          focus deeply, track progress, and achieve your daily goals.
        </p>

        <Link
          to="/app"
          className="btn-primary text-lg"
        >
          Start Focus Session
        </Link>

      </section>

      {/* FEATURES */}

      <section className="container-app py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Powerful Productivity Features
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="card text-center">

            <h3 className="text-lg font-semibold mb-2">
              ⏱ Pomodoro Timer
            </h3>

            <p className="text-gray-500">
              Stay focused using scientifically proven
              Pomodoro sessions with automatic breaks.
            </p>

          </div>

          <div className="card text-center">

            <h3 className="text-lg font-semibold mb-2">
              📊 Productivity Analytics
            </h3>

            <p className="text-gray-500">
              Visualize your focus sessions and track
              daily productivity with interactive charts.
            </p>

          </div>

          <div className="card text-center">

            <h3 className="text-lg font-semibold mb-2">
              🎧 Focus Sounds
            </h3>

            <p className="text-gray-500">
              Enhance concentration with rain, forest,
              cafe ambience and white noise.
            </p>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="container-app py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="card">

            <h3 className="text-lg font-semibold mb-2">
              1️⃣ Choose a Task
            </h3>

            <p className="text-gray-500">
              Add your tasks and select what you want
              to work on.
            </p>

          </div>

          <div className="card">

            <h3 className="text-lg font-semibold mb-2">
              2️⃣ Focus for 25 Minutes
            </h3>

            <p className="text-gray-500">
              Start the Pomodoro timer and work with
              complete concentration.
            </p>

          </div>

          <div className="card">

            <h3 className="text-lg font-semibold mb-2">
              3️⃣ Take a Break
            </h3>

            <p className="text-gray-500">
              Recharge with short breaks to maintain
              long-term productivity.
            </p>

          </div>

        </div>

      </section>

      {/* CALL TO ACTION */}

      <section className="container-app py-24 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Boost Your Focus?
        </h2>

        <p className="text-gray-500 mb-8">
          Start using FocusFlow and take control
          of your productivity today.
        </p>

        <Link
          to="/app"
          className="btn-primary text-lg"
        >
          Start Focusing
        </Link>

      </section>

    </div>

  )

}

export default LandingPage