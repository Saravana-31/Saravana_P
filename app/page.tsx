import CyberNavbar from "@/components/cyber-navbar"
import CyberHero from "@/components/cyber-hero"
import CyberAbout from "@/components/cyber-about"
import CyberSkills from "@/components/cyber-skills"
import CyberProjects from "@/components/cyber-projects"
import CyberContact from "@/components/cyber-contact"
import CyberFooter from "@/components/cyber-footer"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <ScrollProgress />
      <CyberNavbar />
      <div className="relative z-10">
        <CyberHero />
        <CyberAbout />
        <CyberSkills />
        <CyberProjects />
        <CyberContact />
        <CyberFooter />
      </div>
    </main>
  )
}
