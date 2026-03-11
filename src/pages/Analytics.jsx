import { useEffect, useState } from "react"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

import { getSessionHistory } from "../utils/sessionStorage"

function Analytics() {

  const [dailyData, setDailyData] = useState([])
  const [weeklyData, setWeeklyData] = useState([])

  const generateAnalytics = () => {

    const history = getSessionHistory()

    const dailyMap = {}

    history.forEach((session) => {

      if (!dailyMap[session.date]) {
        dailyMap[session.date] = 0
      }

      dailyMap[session.date] += 1

    })

    const dailyArray = Object.keys(dailyMap).map((date) => ({
      date,
      sessions: dailyMap[date]
    }))

    setDailyData(dailyArray)

    setWeeklyData(dailyArray.slice(-7))

  }

  useEffect(() => {

    generateAnalytics()

    const handleStorageUpdate = () => {
      generateAnalytics()
    }

    window.addEventListener("storage", handleStorageUpdate)

    return () =>
      window.removeEventListener("storage", handleStorageUpdate)

  }, [])

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Productivity Analytics
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Daily Sessions Chart */}

        <div className="card">

          <h2 className="text-lg font-semibold mb-4">
            Daily Sessions
          </h2>

          <ResponsiveContainer width="100%" height={250}>

            <BarChart data={dailyData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Bar
                dataKey="sessions"
                fill="#6366f1"
                radius={[6, 6, 0, 0]}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* Weekly Productivity */}

        <div className="card">

          <h2 className="text-lg font-semibold mb-4">
            Weekly Productivity
          </h2>

          <ResponsiveContainer width="100%" height={250}>

            <LineChart data={weeklyData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="sessions"
                stroke="#22c55e"
                strokeWidth={3}
                dot={{ r: 4 }}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  )

}

export default Analytics