import { motion } from 'framer-motion'

export default function Section({ children, id, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={`cosmic-shell relative z-10 px-5 py-24 md:px-8 md:py-32 w-full flex justify-center ${className}`}
    >
      <div className="w-full max-w-6xl flex flex-col items-center text-center">
        {children}
      </div>
    </motion.section>
  )
}
