import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { milkyWayStats } from '../data/galaxies'
import Section from './Section'

function CountUp({ target, suffix, isInView }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = target / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [target, isInView])

  return (
    <span className="tabular-nums">{count.toLocaleString()}{suffix}</span>
  )
}

export default function MilkyWay() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <Section>
      <div ref={ref} className="mb-14 text-center">
        <p className="mb-2 text-[13px] font-semibold uppercase text-fuchsia-100/55">Milky Way</p>
        <h2 className="text-[40px] font-semibold text-[#f5f5f7] md:text-[52px]">银河系</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-white/52">
          我们的家园星系——一个拥有数千亿颗恒星的棒旋星系。
          从地球仰望，银河横跨夜空，形成壮丽的银道带。
        </p>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {milkyWayStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-panel rounded-lg p-5 text-center md:p-6"
          >
            <div className="text-[30px] font-bold text-[#f5f5f7] md:text-[38px]">
              <CountUp target={stat.value} suffix={stat.suffix} isInView={isInView} />
            </div>
            <div className="mt-1 text-[13px] text-white/42">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid w-full gap-6 text-left md:grid-cols-[1.05fr_1fr]"
      >
        <div className="photo-card relative min-h-[340px] overflow-hidden rounded-lg">
          <img
            src="/nasa/andromeda-wide.jpg"
            alt="旋涡星系参考图"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),rgba(0,0,0,0.78))]" />
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-[12px] uppercase text-white/36">NASA / Hubble Reference Image</p>
            <h3 className="mt-2 text-[24px] font-semibold text-white">旋涡结构参考</h3>
            <p className="mt-2 text-[14px] leading-7 text-white/56">
              用真实星系照片替代示意圆盘，保留结构说明但不再伪造“银河系外观”。
            </p>
          </div>
        </div>
        <div className="glass-panel rounded-lg p-7 md:p-8">
          <h3 className="mb-5 text-[24px] font-semibold text-[#f5f5f7]">银河系结构</h3>
          <div className="space-y-5 text-[14px] leading-7 text-white/48">
            <div>
              <span className="font-semibold text-amber-100/76">银核</span>
              <p className="mt-1">中心核球区域，密集分布着年老恒星，核心处潜伏着超大质量黑洞「人马座A*」，质量约为太阳的430万倍。</p>
            </div>
            <div>
              <span className="font-semibold text-cyan-100/76">银盘</span>
              <p className="mt-1">直径约10万光年的扁平盘状结构，包含四条主要旋臂。太阳位于猎户臂内侧，距银心约2.6万光年。</p>
            </div>
            <div>
              <span className="font-semibold text-fuchsia-100/76">银晕</span>
              <p className="mt-1">包裹银盘的球形区域，包含球状星团和暗物质。直径约30万光年，是银河系最外层的结构。</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  )
}
