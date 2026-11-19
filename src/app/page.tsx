import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AutomationSandbox from '@/components/AutomationSandbox';
import Pipeline from '@/components/Pipeline';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <AutomationSandbox />
      <Pipeline />
      <Projects />
      <About />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
