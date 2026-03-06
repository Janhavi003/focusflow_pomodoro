import { useEffect, useState } from "react"
import { getTasks, saveTasks } from "../utils/storage"

function TaskManager() {

  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [activeTask, setActiveTask] = useState(null)

  useEffect(() => {
    const stored = getTasks()
    setTasks(stored)
  }, [])

  const addTask = () => {

    if (!newTask.trim()) return

    const task = {
      id: Date.now(),
      title: newTask,
      pomodoros: 0
    }

    const updated = [...tasks, task]

    setTasks(updated)
    saveTasks(updated)

    setNewTask("")
  }

  const deleteTask = (id) => {

    const updated = tasks.filter(t => t.id !== id)

    setTasks(updated)
    saveTasks(updated)
  }

  const selectTask = (id) => {
    setActiveTask(id)
  }

  return (

    <div className="card">

      <h2 className="text-xl font-semibold mb-4">
        Tasks
      </h2>

      <div className="flex gap-2 mb-4">

        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="flex-1 px-3 py-2 border rounded-lg dark:bg-gray-700"
        />

        <button
          onClick={addTask}
          className="btn-primary"
        >
          Add
        </button>

      </div>

      <div className="space-y-2">

        {tasks.map(task => (

          <div
            key={task.id}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer
              ${activeTask === task.id ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-700"}
            `}
          >

            <div
              onClick={() => selectTask(task.id)}
            >
              {task.title}

              <div className="text-xs opacity-70">
                Pomodoros: {task.pomodoros}
              </div>

            </div>

            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-400"
            >
              ✕
            </button>

          </div>

        ))}

      </div>

    </div>

  )

}

export default TaskManager