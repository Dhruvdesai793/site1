import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import AboutSection from "@/sections/AboutSection"
import ProjectsSection from "@/sections/ProjectsSection"
import ContactSection from "@/sections/ContactSection"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </>
  )
}
