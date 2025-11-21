import ThemeToggle from "../components/ThemeToggle"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden transition-colors duration-300">
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
    </div>
  )
}

export default Home