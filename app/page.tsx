import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Education from "@/components/Education"
import TechStack from "@/components/TechStack"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Contact from "@/components/Contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />
      <About />
      <Experience />
      <Education />
      <TechStack />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  )
}
