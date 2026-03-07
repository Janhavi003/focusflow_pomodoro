const TASK_KEY = "focusflow_tasks"
const GOAL_KEY = "focusflow_daily_goal"
const SESSION_KEY = "focusflow_completed_sessions"

export const getTasks = () => {
  const data = localStorage.getItem(TASK_KEY)
  return data ? JSON.parse(data) : []
}

export const saveTasks = (tasks) => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks))
}

export const getDailyGoal = () => {
  const goal = localStorage.getItem(GOAL_KEY)
  return goal ? Number(goal) : 8
}

export const setDailyGoal = (goal) => {
  localStorage.setItem(GOAL_KEY, goal)
}

export const getCompletedSessions = () => {
  const data = localStorage.getItem(SESSION_KEY)
  return data ? Number(data) : 0
}

export const setCompletedSessions = (count) => {
  localStorage.setItem(SESSION_KEY, count)
}