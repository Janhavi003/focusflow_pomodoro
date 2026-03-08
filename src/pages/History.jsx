import { Link } from "react-router-dom"
import SessionHistory from "../components/SessionHistory"

function History() {

  return (

    <div className="container-app py-10">

      <div className="flex justify-between items-center mb-6">

        <h1 className="text-3xl font-bold">
          Session History
        </h1>

        <Link
          to="/app"
          className="btn-secondary"
        >
          Back to Dashboard
        </Link>

      </div>

      <SessionHistory />

    </div>

  )

}

export default History