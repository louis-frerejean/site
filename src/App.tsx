import { About } from './components/About'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Reveal } from './components/Reveal'
import { Services } from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-ground">
      <Nav />
      <main>
        <Hero />
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
    </div>
  )
}

export default App
