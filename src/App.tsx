import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { NoCode } from './components/NoCode'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="min-h-screen bg-[#08090c]">
      <Nav />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <NoCode />
        <Contact />
      </main>
    </div>
  )
}

export default App
