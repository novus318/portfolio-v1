import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Contact from "@/components/Contact";
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
import Blog from "@/components/Blog";
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
      <Hero/>
      <Grid/>
      <div className="text-start w-full max-w-4xl px-4 md:px-8 lg:px-20 mt-4 md:mt-10">
<div className="text-2xl md:text-4xl font-semibold">
        This is my
        <FlipWords words={words} />
      </div>
</div>
<div className="max-w-full px-4 md:px-8 lg:px-20 mt-2 md:mt-4">
      <HoverEffect items={skills} />
    </div>
    <Education/>
    <Works/>
    <Projects/>
    <Blog/>
    <RoadMaps/>
    <Contact/>
    </main>
    <BottomNav />
    </WebsiteContextMenu>
  );
}
