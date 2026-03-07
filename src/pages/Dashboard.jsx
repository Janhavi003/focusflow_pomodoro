import { Link } from "react-router-dom"
import PomodoroTimer from "../components/PomodoroTimer"
import TaskManager from "../components/TaskManager"
import DailyGoal from "../components/DailyGoal"
import FocusSoundPlayer from "../components/FocusSoundPlayer"

function Dashboard() {

  return (

    <div className="container-app py-10">

      {/* Navigation */}
      <div className="flex gap-4 mb-8">

        <Link
          to="/analytics"
          className="btn-primary"
        >
          View Analytics
        </Link>

        <Link
          to="/history"
          className="btn-secondary"
        >
          Session History
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