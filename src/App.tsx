import { About } from './components/About'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { Services } from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-ground">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  )
}

export default App
