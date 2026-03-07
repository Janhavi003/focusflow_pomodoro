import PomodoroTimer from "../components/PomodoroTimer"
import TaskManager from "../components/TaskManager"
import DailyGoal from "../components/DailyGoal"
import FocusSoundPlayer from "../components/FocusSoundPlayer"

function Dashboard() {

  return (

    <div className="container-app py-10 grid lg:grid-cols-2 gap-6">

      <PomodoroTimer />

      <TaskManager />

      <DailyGoal />

      <FocusSoundPlayer />

    </div>

  )

}

export default Dashboard