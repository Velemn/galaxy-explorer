import { motion } from 'framer-motion'
import { planets } from '../data/galaxies'
import Section from './Section'

const planetImages = {
  水星: '/nasa/planet-mercury.jpg',
  金星: '/nasa/planet-venus.jpg',
  地球: '/nasa/planet-earth.jpg',
  火星: '/nasa/planet-mars.jpg',
  木星: '/nasa/planet-jupiter.jpg',
  土星: '/nasa/planet-saturn.jpg',
  天王星: '/nasa/planet-uranus.jpg',
  海王星: '/nasa/planet-neptune.jpg',
}

export default function SolarSystem() {
  const featured = planets.find(p => p.name === '地球')
  const archivePlanets = planets.filter(p => p.name !== '地球')

  return (
    <Section className="bg-[#03050d]">
      <div className="mb-12 grid w-full gap-6 text-left md:grid-cols-[0.9fr_1.1fr] md:items-end">
        <div>
          <p className="mb-3 text-[12px] font-semibold uppercase text-white/42">Planetary Archive</p>
          <h2 className="text-[40px] font-semibold leading-tight text-[#f5f5f7] md:text-[56px]">太阳系影像</h2>
        </div>
        <p className="max-w-2xl text-[16px] leading-8 text-white/52 md:justify-self-end">
          这一段改用 NASA 行星影像做资料档案式展示，避免低质 3D 模型带来的塑料感。颜色和裁切保持克制，重点放在真实照片本身。
        </p>
      </div>

      <div className="grid w-full gap-4 md:grid-cols-[1.35fr_1fr]">
        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="photo-card overflow-hidden rounded-lg text-left"
        >
          <div className="relative aspect-[16/11] overflow-hidden bg-black">
            <img
              src={planetImages[featured.name]}
              alt={featured.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_44%,rgba(0,0,0,0.82)_100%)]" />
            <figcaption className="absolute bottom-6 left-6 right-6">
              <p className="text-[12px] uppercase text-white/42">NASA Blue Marble</p>
              <h3 className="mt-2 text-[34px] font-semibold text-white">{featured.name}</h3>
              <p className="mt-2 max-w-lg text-[14px] leading-7 text-white/58">
                太阳系中的岩质行星之一，也是当前已知唯一拥有稳定液态水海洋与复杂生命系统的行星。
              </p>
            </figcaption>
          </div>
        </motion.figure>

        <div className="grid grid-cols-2 gap-4">
          {archivePlanets.map((p, i) => (
            <motion.figure
              key={p.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
              className="photo-card overflow-hidden rounded-lg text-left"
            >
              <div className="relative aspect-square overflow-hidden bg-black">
                <img
                  src={planetImages[p.name]}
                  alt={p.name}
                  className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.76))]" />
                <figcaption className="absolute bottom-3 left-3 right-3">
                  <p className="text-[11px] uppercase text-white/36">{p.en}</p>
                  <h3 className="mt-1 text-[18px] font-semibold text-white">{p.name}</h3>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </Section>
  )
}
