import { useMemo } from "react"
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

  const dailyData = useMemo(() => {
    const history = getSessionHistory()

    const dailyMap = {}

    history.forEach(session => {

      if (!dailyMap[session.date]) {
        dailyMap[session.date] = 0
      }

      dailyMap[session.date] += 1

    })

    return Object.keys(dailyMap).map(date => ({
      date,
      sessions: dailyMap[date]
    }))
  }, [])

  const weeklyData = useMemo(() => dailyData.slice(-7), [dailyData])

  return (

    <div className="container-app py-10">

      <h1 className="text-3xl font-bold mb-8">
        Productivity Analytics
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

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
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

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
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>

  )

}

export default Analytics