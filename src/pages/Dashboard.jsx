import PomodoroTimer from "../components/PomodoroTimer"
import TaskManager from "../components/TaskManager"
import DailyGoal from "../components/DailyGoal"

function Dashboard() {

  return (

    <div className="container-app py-10 grid lg:grid-cols-3 gap-6">

      <PomodoroTimer />

      <TaskManager />

      <DailyGoal />

    </div>

  )

}

export default Dashboard