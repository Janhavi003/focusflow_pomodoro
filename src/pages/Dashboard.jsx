import PomodoroTimer from "../components/PomodoroTimer"

function Dashboard() {
  return (
    <div className="container-app py-10">

      <h1 className="text-3xl font-bold mb-6">
        Focus Dashboard
      </h1>

      <PomodoroTimer />

    </div>
  )
}

export default Dashboard