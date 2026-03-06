export const FOCUS_TIME = 25 * 60
export const SHORT_BREAK = 5 * 60
export const LONG_BREAK = 15 * 60

export const getNextSession = (sessionCount) => {
  if (sessionCount > 0 && sessionCount % 4 === 0) {
    return {
      type: "longBreak",
      duration: LONG_BREAK
    }
  }

  return {
    type: "shortBreak",
    duration: SHORT_BREAK
  }
}

export const getFocusSession = () => {
  return {
    type: "focus",
    duration: FOCUS_TIME
  }
}

export const formatTime = (seconds) => {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60

  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`
}