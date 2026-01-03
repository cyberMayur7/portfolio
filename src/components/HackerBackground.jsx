import { useEffect } from "react"

export default function HackerBackground() {
  useEffect(() => {
    const canvas = document.getElementById("matrix")
    const ctx = canvas.getContext("2d")

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const letters = "01"
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.08)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#00ff00"
      ctx.font = fontSize + "px monospace"

      drops.forEach((y, i) => {
        const text = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(text, i * fontSize, y * fontSize)
        if (y * fontSize > canvas.height && Math.random() > 0.95)
          drops[i] = 0
        drops[i]++
      })
    }

    const interval = setInterval(draw, 50)
    return () => clearInterval(interval)
  }, [])

  return <canvas id="matrix"></canvas>
}
