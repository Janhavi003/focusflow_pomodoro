import { createContext, useContext, useState, useEffect, useRef } from "react"
import { addSession } from "../utils/sessionStorage"

const TimerContext = createContext()

export const TimerProvider = ({ children }) => {

  const [timeLeft, setTimeLeft] = useState(1500)
  const [sessionType, setSessionType] = useState("focus")
  const [isRunning, setIsRunning] = useState(false)
  const [sessionsCompleted, setSessionsCompleted] = useState(0)

  const focusAlarm = useRef(null)
  const breakAlarm = useRef(null)

  useEffect(() => {

    if (!isRunning) return

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {

          handleSessionComplete()

          return prev
        }

        return prev - 1

      })

    }, 1000)

    return () => clearInterval(timer)

  }, [isRunning])

  const handleSessionComplete = () => {

    if (sessionType === "focus") {

      focusAlarm.current?.play()

      const newCount = sessionsCompleted + 1
      setSessionsCompleted(newCount)

      // store session for analytics
      addSession({
        date: new Date().toISOString().split("T")[0],
        task: "Focus Session",
        duration: 25
      })

      // switch to break
      setSessionType("break")
      setTimeLeft(300)

    } else {

      breakAlarm.current?.play()

      // switch back to focus
      setSessionType("focus")
      setTimeLeft(1500)

    }

  }

  return (

    <TimerContext.Provider
      value={{
        timeLeft,
        setTimeLeft,
        sessionType,
        setSessionType,
        isRunning,
        setIsRunning,
        sessionsCompleted
      }}
    >

      {children}

      <audio ref={focusAlarm} src="/sounds/focus-end.mp3" />
      <audio ref={breakAlarm} src="/sounds/break-end.mp3" />

    </TimerContext.Provider>

  )

}

export const useTimer = () => useContext(TimerContext)