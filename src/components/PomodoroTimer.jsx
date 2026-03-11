import ProgressCircle from "./ProgressCircle"
import { useTimer } from "../context/TimerContext"

import { Play, Pause, RotateCcw } from "lucide-react"

function formatTime(seconds) {

  const m = Math.floor(seconds / 60)
  const s = seconds % 60

  return `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`

}

function PomodoroTimer() {

  const {
    timeLeft,
    setTimeLeft,
    sessionType,
    isRunning,
    setIsRunning,
    sessionsCompleted
  } = useTimer()

  const totalTime = sessionType === "focus" ? 1500 : 300
  const progress = 1 - timeLeft / totalTime

  const resetTimer = () => {

    setIsRunning(false)

    if (sessionType === "focus") {
      setTimeLeft(1500)
    } else {
      setTimeLeft(300)
    }

  }

  return (

    <div className="card flex flex-col items-center gap-6">

      <h2 className="text-xl font-semibold capitalize">

        {sessionType === "focus"
          ? "Focus Session"
          : "Break Time"}

      </h2>

      <ProgressCircle
        progress={progress}
        time={formatTime(timeLeft)}
      />

      <div className="flex gap-4">

        <button
          onClick={() => setIsRunning(true)}
          className="btn-primary flex items-center gap-2"
        >
          <Play size={16}/>
          Start
        </button>

        <button
          onClick={() => setIsRunning(false)}
          className="btn-secondary flex items-center gap-2"
        >
          <Pause size={16}/>
          Pause
        </button>

        <button
          onClick={resetTimer}
          className="btn-secondary flex items-center gap-2"
        >
          <RotateCcw size={16}/>
          Reset
        </button>

      </div>

      <div className="text-sm text-gray-500">
        Sessions completed: {sessionsCompleted}
      </div>

    </div>

  )

}

export default PomodoroTimer