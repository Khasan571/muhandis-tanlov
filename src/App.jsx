import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Prizes from './components/Prizes'
import Participants from './components/Participants'
import Directions from './components/Directions'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Directions />
      <Prizes />
      <Participants />
      <Stats />
      <About />
      <Footer />
    </>
  )
}
