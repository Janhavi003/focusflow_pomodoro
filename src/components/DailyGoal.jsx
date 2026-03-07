import { useState } from "react"
import {
  getDailyGoal,
  setDailyGoal,
  getCompletedSessions
} from "../utils/storage"

function DailyGoal() {

  const [goal, setGoal] = useState(() => getDailyGoal())
  const [completed] = useState(() => getCompletedSessions())

  const handleGoalChange = (e) => {
    const value = Number(e.target.value)

    setGoal(value)
    setDailyGoal(value)
  }

  const progress = Math.min((completed / goal) * 100, 100)

  return (

    <div className="card">

      <h2 className="text-xl font-semibold mb-4">
        Daily Goal
      </h2>

      <div className="mb-4">

        <label className="text-sm block mb-1">
          Pomodoro Goal
        </label>

        <input
          type="number"
          value={goal}
          onChange={handleGoalChange}
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700"
        />

      </div>

      <div className="mb-3 text-sm">
        Completed: {completed} / {goal}
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4">

        <div
          className="bg-primary h-4 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />

      </div>

    </div>

  )

}

export default DailyGoal