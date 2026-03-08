import { useState } from "react"
import { getSessionHistory } from "../utils/sessionStorage"

function SessionHistory() {

  const [history] = useState(() => {
    const sessions = getSessionHistory()
    return sessions.reverse()
  })

  return (

    <div className="card">

      <h2 className="text-xl font-semibold mb-4">
        Session History
      </h2>

      {history.length === 0 ? (

        <p className="text-gray-500">
          No sessions completed yet.
        </p>

      ) : (

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            <thead>

              <tr className="border-b">

                <th className="py-2">Date</th>
                <th className="py-2">Task</th>
                <th className="py-2">Duration</th>

              </tr>

            </thead>

            <tbody>

              {history.map((session, index) => (

                <tr
                  key={index}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
                >

                  <td className="py-2">
                    {session.date}
                  </td>

                  <td className="py-2">
                    {session.task}
                  </td>

                  <td className="py-2">
                    {session.duration} min
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  )

}

export default SessionHistory