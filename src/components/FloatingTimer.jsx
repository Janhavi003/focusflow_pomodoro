import { motion } from "framer-motion"
import { useTimer } from "../context/TimerContext"
import { Play, Pause } from "lucide-react"

function formatTime(seconds) {

  const m = Math.floor(seconds / 60)
  const s = seconds % 60

  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`

}

function FloatingTimer() {

  const { timeLeft, isRunning, setIsRunning } = useTimer()

  if (timeLeft === 1500) return null

  return (

    <motion.div
      drag
      dragElastic={0.2}
      dragMomentum={false}
      initial={{ x: 0, y: 0 }}
      className="fixed bottom-10 right-10 z-50 bg-white dark:bg-gray-800 shadow-2xl rounded-2xl px-6 py-4 flex items-center gap-6 cursor-grab active:cursor-grabbing"
    >

      <div className="text-2xl font-bold">
        {formatTime(timeLeft)}
      </div>

      <button
        onClick={() => setIsRunning(!isRunning)}
        className="btn-primary flex items-center gap-2"
      >

        {isRunning ? <Pause size={18} /> : <Play size={18} />}

      </button>

    </motion.div>

  )

}

export default FloatingTimer