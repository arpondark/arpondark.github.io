import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectShowcase3D from '@/components/ProjectShowcase3D';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <section id="projects" className="section-padding bg-gradient-to-b from-gray-900 to-black">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text">
              Featured Projects
            </h2>
            <ProjectShowcase3D />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
