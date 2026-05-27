import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { famousGalaxies } from '../data/galaxies'
import Section from './Section'

export default function FamousGalaxies() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-45%'])

  return (
    <Section>
      <div className="mb-12 text-center">
        <p className="mb-2 text-[13px] font-semibold uppercase text-teal-100/55">Gallery</p>
        <h2 className="text-[40px] font-semibold text-[#f5f5f7] md:text-[52px]">著名星系</h2>
        <p className="mt-3 text-[17px] text-white/52">跟随滚动浏览几个深空坐标</p>
      </div>

      <div ref={containerRef} className="relative h-[560px] w-full overflow-hidden md:h-[620px]">
        <motion.div
          style={{ x }}
          className="absolute top-0 flex h-full items-center gap-5"
        >
          {famousGalaxies.map((g, i) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="photo-card group flex-shrink-0 overflow-hidden rounded-lg p-0 text-left transition duration-300 hover:-translate-y-1"
              style={{ width: 'min(78vw, 372px)' }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={g.image}
                  alt={g.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.72))]" />
                <span className="absolute bottom-4 left-4 border border-white/12 bg-black/38 px-3 py-1 text-[11px] font-semibold text-white/62 backdrop-blur">
                  {g.type}
                </span>
              </div>
              <div className="p-7">
                <h3 className="mb-1 text-[23px] font-semibold text-[#f5f5f7]">{g.name}</h3>
                <p className="mb-4 text-[14px] text-white/38">{g.en}</p>
                <p className="mb-5 text-[14px] leading-7 text-white/50">{g.description}</p>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200/14 bg-cyan-300/9 px-3 py-1.5 text-[12px] text-cyan-100/75">
                  <span>距地球 {g.distance}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
