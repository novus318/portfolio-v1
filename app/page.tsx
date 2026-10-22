import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Contact from "@/components/Contact";
import FeaturedProject from "@/components/FeaturedProject";
import { FaLaptopCode, FaPython, FaDocker } from "react-icons/fa";
import { SiExpress, SiGit, SiMongodb, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiFastapi, SiPostgresql, SiVite, SiTypescript, SiRedis } from "react-icons/si";
import { FlipWords } from "@/components/magicui/flip-words";
import { HoverEffect } from "@/components/magicui/card-hover-effect";
import Education from "@/components/Education";
import Works from "@/components/Works";
import Projects from "@/components/Projects";
import { WebsiteContextMenu } from "@/components/WebsiteContextMenu";
import { TopNav } from "@/components/TopNav";
import { BottomNav } from "@/components/BottomNav";
import RoadMaps from "@/components/RoadMaps";

export default function Home() {

  const skills = [
    // Frontend
    { id: 1, title: 'React', icon: <SiReact /> },
    { id: 2, title: 'Next.js', icon: <SiNextdotjs /> },
    { id: 3, title: 'TypeScript', icon: <SiTypescript /> },
    { id: 4, title: 'Redux', icon: <SiRedux /> },
    { id: 5, title: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { id: 6, title: 'Vite', icon: <SiVite /> },
    
    // Backend
    { id: 7, title: 'Node.js', icon: <SiNodedotjs /> },
    { id: 8, title: 'Express.js', icon: <SiExpress /> },
    { id: 9, title: 'FastAPI', icon: <SiFastapi /> },
    { id: 10, title: 'Python', icon: <FaPython /> },
    
    // Databases
    { id: 11, title: 'MongoDB', icon: <SiMongodb /> },
    { id: 12, title: 'PostgreSQL', icon: <SiPostgresql /> },
    { id: 13, title: 'Redis', icon: <SiRedis /> },
    
    // DevOps & Testing
    { id: 14, title: 'Docker', icon: <FaDocker /> },
    
    // Tools & Others
    { id: 17, title: 'Git', icon: <SiGit /> },
    { id: 18, title: 'RESTful APIs', icon: <FaLaptopCode /> },
];

const words = ["skills", "ability", "knowledge"];
  return (
    <WebsiteContextMenu>
      <TopNav />
      <main>
        <Hero />
        <FeaturedProject />
        <Grid />
        <section id="skills" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24 lg:px-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              03 / Skills
            </span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="mt-10 overflow-x-hidden text-3xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl lg:text-5xl">
            This is my
            <FlipWords words={words} className="text-primary" />
          </div>
          <div className="mt-6">
            <HoverEffect items={skills} />
          </div>
        </section>
        <Works />
        <Projects />
        <Education />
        <RoadMaps />
        <Contact />
      </main>
      <BottomNav />
    </WebsiteContextMenu>
  );
}
