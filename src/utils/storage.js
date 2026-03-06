const TASK_KEY = "focusflow_tasks"

export const getTasks = () => {
  const data = localStorage.getItem(TASK_KEY)
  return data ? JSON.parse(data) : []
}

export const saveTasks = (tasks) => {
  localStorage.setItem(TASK_KEY, JSON.stringify(tasks))
}

export const addTask = (task) => {
  const tasks = getTasks()
  tasks.push(task)
  saveTasks(tasks)
}

export const updateTasks = (tasks) => {
  saveTasks(tasks)
}