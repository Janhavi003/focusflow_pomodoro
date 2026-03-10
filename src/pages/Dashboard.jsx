import PomodoroTimer from "../components/PomodoroTimer"
import TaskManager from "../components/TaskManager"
import DailyGoal from "../components/DailyGoal"
import FocusSoundPlayer from "../components/FocusSoundPlayer"

function Dashboard() {

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      {/* Top row */}

      <div className="grid lg:grid-cols-3 gap-6 mb-6">

        <PomodoroTimer />

        <TaskManager />

        <DailyGoal />

      </div>

      {/* Bottom row */}

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="lg:col-span-3">
          <FocusSoundPlayer />
        </div>

      </div>

    </div>

  )

}

export default Dashboard