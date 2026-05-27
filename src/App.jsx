import StarBackground from './components/StarBackground'
import Hero from './components/Hero'
import GalaxyOverview from './components/GalaxyOverview'
import SolarSystem from './components/SolarSystem'
import MilkyWay from './components/MilkyWay'
import FamousGalaxies from './components/FamousGalaxies'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent text-[#f5f5f7]">
      <StarBackground />
      <Hero />
      <GalaxyOverview />
      <SolarSystem />
      <MilkyWay />
      <FamousGalaxies />
      <Footer />
    </main>
  )
}
