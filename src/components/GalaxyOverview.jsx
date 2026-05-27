import { motion } from 'framer-motion'
import { galaxyTypes } from '../data/galaxies'
import Section from './Section'

export default function GalaxyOverview() {
  return (
    <Section id="overview">
      <div className="mb-16 text-center">
        <p className="mb-2 text-[13px] font-semibold uppercase text-cyan-100/55">Overview</p>
        <h2 className="text-[40px] font-semibold text-[#f5f5f7] md:text-[52px]">星系概述</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-8 text-white/52">
          星系是由恒星、行星、气体、尘埃和暗物质通过引力束缚而成的庞大天体系统。
          宇宙中估计存在数千亿个星系，每个星系包含数百万到数万亿颗恒星。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {galaxyTypes.map((g, i) => (
          <motion.div
            key={g.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="photo-card group overflow-hidden rounded-lg text-left transition duration-300 hover:-translate-y-1"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={g.image} alt={g.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.05),rgba(0,0,0,0.74))]" />
              <p className="absolute bottom-4 left-5 text-[12px] font-semibold uppercase text-white/58">
                {g.en}
              </p>
            </div>
            <div className="p-6">
              <div
                className="mb-4 h-px w-16"
                style={{ background: g.color }}
              />
              <h3 className="mb-3 text-[26px] font-semibold text-[#f5f5f7]">
                {g.title}
              </h3>
              <p className="mb-6 text-[15px] leading-7 text-white/52">
                {g.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {g.features.map(f => (
                  <li key={f} className="border border-white/10 bg-black/24 px-3 py-1.5 text-[12px] text-white/50">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
