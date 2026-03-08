import { Link } from "react-router-dom"
import PomodoroTimer from "../components/PomodoroTimer"
import TaskManager from "../components/TaskManager"
import DailyGoal from "../components/DailyGoal"
import FocusSoundPlayer from "../components/FocusSoundPlayer"
import ThemeToggle from "../components/ThemeToggle"

function Dashboard() {

  return (

    <div className="container-app py-10">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Focus Dashboard
        </h1>

        <ThemeToggle />

      </div>

      <div className="flex gap-4 mb-8">

        <Link to="/analytics" className="btn-primary">
          Analytics
        </Link>

        <Link to="/history" className="btn-secondary">
          History
        </Link>

      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        <PomodoroTimer />
        <TaskManager />
        <DailyGoal />
        <FocusSoundPlayer />

      </div>

    </div>

  )

}

export default Dashboard