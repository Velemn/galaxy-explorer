import { useEffect, useRef } from 'react'

const STAR_COUNT = 320
const DUST_COUNT = 90

export default function StarBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    let animationId
    let stars = []
    let dust = []

    const initStars = () => {
      stars = Array.from({ length: STAR_COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.35 + 0.25,
        opacity: Math.random() * 0.7 + 0.15,
        speed: Math.random() * 0.18 + 0.025,
        hue: Math.random() > 0.82 ? 205 + Math.random() * 55 : 0,
      }))
      dust = Array.from({ length: DUST_COUNT }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 2 + 0.8,
        opacity: Math.random() * 0.08 + 0.02,
        speed: Math.random() * 0.08 + 0.01,
      }))
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
      initStars()
    }
    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      const nebula = ctx.createRadialGradient(
        window.innerWidth * 0.48,
        window.innerHeight * 0.24,
        0,
        window.innerWidth * 0.48,
        window.innerHeight * 0.24,
        Math.max(window.innerWidth, window.innerHeight) * 0.72
      )
      nebula.addColorStop(0, 'rgba(96, 165, 250, 0.16)')
      nebula.addColorStop(0.32, 'rgba(217, 70, 239, 0.08)')
      nebula.addColorStop(0.62, 'rgba(20, 184, 166, 0.04)')
      nebula.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = nebula
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      for (const d of dust) {
        d.y += d.speed
        if (d.y > window.innerHeight + 10) {
          d.y = -10
          d.x = Math.random() * window.innerWidth
        }
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(125, 211, 252, ${d.opacity})`
        ctx.fill()
      }

      for (const s of stars) {
        s.y += s.speed
        if (s.y > window.innerHeight) {
          s.y = 0
          s.x = Math.random() * window.innerWidth
        }
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.hue
          ? `hsla(${s.hue}, 95%, 82%, ${s.opacity})`
          : `rgba(255,255,255,${s.opacity})`
        ctx.fill()
      }
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 bg-[#02030a]"
    />
  )
}
