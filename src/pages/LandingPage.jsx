import { Link } from "react-router-dom"

function LandingPage() {
  return (
    <div className="container-app py-20 text-center">

      <h1 className="text-5xl font-bold mb-6">
        FocusFlow
      </h1>

      <p className="text-xl text-gray-500 mb-10">
        A modern Pomodoro productivity app to help you stay focused.
      </p>

      <Link to="/app" className="btn-primary">
        Start Focus Session
      </Link>

    </div>
  )
}

export default LandingPage