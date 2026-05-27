import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-end overflow-hidden px-5 pb-20 pt-28 text-center md:pb-24">
      <img
        src={`${import.meta.env.BASE_URL}nasa/andromeda-wide.jpg`}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-72"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(1,3,10,0.24)_0%,rgba(1,3,10,0.42)_45%,rgba(1,3,10,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,3,10,0.24)_58%,rgba(1,3,10,0.9)_100%)]" />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mb-4 inline-flex items-center gap-2 border border-white/12 bg-black/34 px-4 py-2 text-[13px] font-semibold text-white/76 backdrop-blur-md"
      >
        <Sparkles className="h-4 w-4 text-cyan-200" />
        NASA Deep Space Atlas
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative max-w-4xl text-[60px] font-bold leading-[0.95] text-[#f8fbff] md:text-[96px]"
      >
        星系图谱
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative mt-5 max-w-[680px] text-[18px] font-normal leading-8 text-slate-200/72 md:text-[21px]"
      >
        从银河系的旋臂到宇宙深处的星系群，用光、引力与时间重新阅读这片庞大的深空。
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.72 }}
        className="relative mt-9 grid w-full max-w-2xl grid-cols-3 gap-3"
      >
        {[
          ['2000亿+', '银河恒星'],
          ['10万光年', '银河直径'],
          ['数千亿', '可观测星系'],
        ].map(([value, label]) => (
          <div key={label} className="glass-panel rounded-lg px-4 py-4">
            <div className="text-[20px] font-semibold text-white md:text-[24px]">{value}</div>
            <div className="mt-1 text-[12px] text-white/42">{label}</div>
          </div>
        ))}
      </motion.div>

      <motion.a
        href="#overview"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative mt-10 flex items-center gap-2 border border-white/12 bg-white/8 px-5 py-3 text-[15px] font-semibold text-white/80 no-underline transition hover:border-white/24 hover:bg-white/12"
      >
        开始探索
        <ChevronDown className="w-4 h-4" />
      </motion.a>
      <p className="relative mt-8 text-[11px] uppercase text-white/30">
        Image: NASA / Hubble
      </p>
    </section>
  )
}
