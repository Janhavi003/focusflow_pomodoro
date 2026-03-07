import { useRef, useState } from "react"

const sounds = {
  rain: "/sounds/rain.mp3",
  forest: "/sounds/forest.mp3",
  cafe: "/sounds/cafe.mp3",
  white: "/sounds/white.mp3"
}

function FocusSoundPlayer() {

  const audioRef = useRef(null)

  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)

  const playSound = (sound) => {

    if (!audioRef.current) return

    audioRef.current.src = sounds[sound]
    audioRef.current.volume = volume
    audioRef.current.loop = true

    audioRef.current.play()

    setIsPlaying(true)
  }

  const pauseSound = () => {
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const handleVolume = (e) => {
    const v = Number(e.target.value)

    setVolume(v)

    if (audioRef.current) {
      audioRef.current.volume = v
    }
  }

  return (

    <div className="card">

      <h2 className="text-xl font-semibold mb-4">
        Focus Sounds
      </h2>

      <div className="grid grid-cols-2 gap-2 mb-4">

        <button
          className="btn-secondary"
          onClick={() => playSound("rain")}
        >
          Rain
        </button>

        <button
          className="btn-secondary"
          onClick={() => playSound("forest")}
        >
          Forest
        </button>

        <button
          className="btn-secondary"
          onClick={() => playSound("cafe")}
        >
          Cafe
        </button>

        <button
          className="btn-secondary"
          onClick={() => playSound("white")}
        >
          White Noise
        </button>

      </div>

      <div className="flex items-center gap-3 mb-3">

        <button
          onClick={pauseSound}
          className="btn-secondary"
        >
          Pause
        </button>

        <span className="text-sm">
          {isPlaying ? "Playing" : "Stopped"}
        </span>

      </div>

      <div>

        <label className="text-sm block mb-1">
          Volume
        </label>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className="w-full"
        />

      </div>

      <audio ref={audioRef} />

    </div>

  )

}

export default FocusSoundPlayer