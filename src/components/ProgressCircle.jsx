import { motion } from "framer-motion"

function ProgressCircle({ progress, time }) {

  const radius = 110
  const circumference = 2 * Math.PI * radius
  const offset = circumference - progress * circumference

  return (

    <div className="relative w-64 h-64 flex items-center justify-center">

      <svg className="absolute w-full h-full -rotate-90">

        <circle
          cx="128"
          cy="128"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="10"
          fill="transparent"
        />

        <motion.circle
          cx="128"
          cy="128"
          r={radius}
          stroke="url(#gradient)"
          strokeWidth="10"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 0.5 }}
        />

        <defs>

          <linearGradient id="gradient">

            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#8b5cf6" />

          </linearGradient>

        </defs>

      </svg>

      <div className="text-4xl font-bold">
        {time}
      </div>

    </div>

  )

}

export default ProgressCircle