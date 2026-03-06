import PomodoroTimer from "../components/PomodoroTimer"
import TaskManager from "../components/TaskManager"

function Dashboard() {

  return (

    <div className="container-app py-10 grid md:grid-cols-2 gap-6">

      <PomodoroTimer />

      <TaskManager />

    </div>

  )

}

export default Dashboard