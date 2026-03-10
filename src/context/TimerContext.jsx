import { createContext, useContext, useState, useEffect } from "react"

const TimerContext = createContext()

export const TimerProvider = ({ children }) => {

  const [timeLeft, setTimeLeft] = useState(1500)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {

    if (!isRunning) return

    const timer = setInterval(() => {

      setTimeLeft((prev) => {

        if (prev <= 1) {
          setIsRunning(false)
          return 0
        }

        return prev - 1

      })

    }, 1000)

    return () => clearInterval(timer)

  }, [isRunning])

  return (

    <TimerContext.Provider
      value={{
        timeLeft,
        setTimeLeft,
        isRunning,
        setIsRunning
      }}
    >

      {children}

    </TimerContext.Provider>

  )

}

export const useTimer = () => useContext(TimerContext)