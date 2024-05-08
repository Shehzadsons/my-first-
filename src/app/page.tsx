
import Project from "./components/Project"
import About from "./components/about"
import Contact from "./components/contact"
import Hero from "./components/hero"
import Skill from "./components/skill"

export default function () {
  return (
    <div>
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  )
}