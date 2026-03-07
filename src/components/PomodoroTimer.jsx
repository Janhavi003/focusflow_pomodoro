import { useEffect, useState, useRef } from "react"
import ProgressCircle from "./ProgressCircle"
import {
  getFocusSession,
  getNextSession,
  formatTime
} from "../utils/timerLogic"
import { addSession } from "../utils/sessionStorage"

function PomodoroTimer() {

  const focusSession = getFocusSession()

  const [timeLeft, setTimeLeft] = useState(focusSession.duration)
  const [totalTime, setTotalTime] = useState(focusSession.duration)
  const [isRunning, setIsRunning] = useState(false)
  const [sessionType, setSessionType] = useState("focus")
  const [sessionsCompleted, setSessionsCompleted] = useState(0)

  const audioRef = useRef(null)

  useEffect(() => {

    if (!isRunning) return

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {
          handleSessionComplete()
          return 0
        }

        return prev - 1

      })

    }, 1000)

    return () => clearInterval(timer)

  }, [isRunning])

  const handleSessionComplete = () => {

    audioRef.current?.play()

    if (sessionType === "focus") {

  addSession({
    date: new Date().toISOString().split("T")[0],
    task: "Focus Session",
    duration: 25
  })

  const newCount = sessionsCompleted + 1
  setSessionsCompleted(newCount)

  const next = getNextSession(newCount)

  setSessionType(next.type)
  setTimeLeft(next.duration)
  setTotalTime(next.duration)

} else {

      const focus = getFocusSession()

      setSessionType("focus")
      setTimeLeft(focus.duration)
      setTotalTime(focus.duration)

    }

  }

  const startTimer = () => setIsRunning(true)

  const pauseTimer = () => setIsRunning(false)

  const resetTimer = () => {
    const focus = getFocusSession()
    setIsRunning(false)
    setSessionType("focus")
    setTimeLeft(focus.duration)
    setTotalTime(focus.duration)
  }

  const skipBreak = () => {

    const focus = getFocusSession()

    setSessionType("focus")
    setTimeLeft(focus.duration)
    setTotalTime(focus.duration)

  }

  const progress = 1 - timeLeft / totalTime

  return (

    <div className="card flex flex-col items-center gap-6">

      <h2 className="text-xl font-semibold capitalize">
        {sessionType === "focus"
          ? "Focus Session"
          : sessionType === "shortBreak"
          ? "Short Break"
          : "Long Break"}
      </h2>

      <ProgressCircle
        progress={progress}
        time={formatTime(timeLeft)}
      />

      <div className="flex gap-4">

        <button
          onClick={startTimer}
          className="btn-primary"
        >
          Start
        </button>

        <button
          onClick={pauseTimer}
          className="btn-secondary"
        >
          Pause
        </button>

        <button
          onClick={resetTimer}
          className="btn-secondary"
        >
          Reset
        </button>

        {sessionType !== "focus" && (
          <button
            onClick={skipBreak}
            className="btn-secondary"
          >
            Skip
          </button>
        )}

      </div>

      <div className="text-sm text-gray-500">
        Sessions completed: {sessionsCompleted}
      </div>

      <audio
  ref={audioRef}
  src="/sounds/notification.mp3"
/>

    </div>

  )

}

export default PomodoroTimer