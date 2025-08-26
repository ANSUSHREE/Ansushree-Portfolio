import './App.css'
import Navbar from './components/Nabvar.tsx'
import Background from './components/Background.tsx'
import HeroSection from './sections/HeroSection.tsx'
import TechStackSection from './sections/TechStackSection.tsx'
import AboutSection from './sections/AboutSection.tsx'
import ServicesSection from './sections/ServicesSection.tsx'
import SkillsSection from './sections/SkillsSection.tsx'
import ProjectsSection from './sections/ProjectsSection.tsx'
import ExperianceSection from './sections/ExperianceSection.tsx'
import ContactSection from './sections/ContactSection.tsx'
import Footer from './components/Footer.tsx'


function App() {
  return (
    <>
        <Background />
        <Navbar />
        {/* Main Content */}
        <HeroSection />
        <TechStackSection />  
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperianceSection />
        <ContactSection />
        {/* End of Main Content */}
        <Footer />
    </>
  )
}

export default App
