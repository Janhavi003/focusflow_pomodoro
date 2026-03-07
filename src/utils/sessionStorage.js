const SESSION_HISTORY_KEY = "focusflow_session_history"

export const getSessionHistory = () => {
  const data = localStorage.getItem(SESSION_HISTORY_KEY)
  return data ? JSON.parse(data) : []
}

export const addSession = (session) => {
  const history = getSessionHistory()

  history.push(session)

  localStorage.setItem(
    SESSION_HISTORY_KEY,
    JSON.stringify(history)
  )
}