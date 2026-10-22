'use client'
import React from 'react'
import { BlurFade } from './magicui/blur-fade';
import { FaGlobe } from 'react-icons/fa';
import { ExperienceCard } from './ExperienceCard';

const Works = () => {
    const BLUR_FADE_DELAY = 0.04;
    const DATA = {
        experiences: [
            {
              id: 1,
              title: "Senior Frontend Developer",
              dates: "Jan 2025 - Present",
              location: "BLITE BREAL",
              jobType: "Remote",
              description: "Leading frontend development for a mental health platform, implementing modern React practices and ensuring optimal user experience. Collaborating with cross-functional teams to deliver scalable solutions.",
              image: "/exp/logo.png",
              links: [{
                title: "Website",
                icon: <FaGlobe className="h-4 w-4" />,
                href: "https://blitebreal.com/",
              }],
            },
            {
              id: 2,
              title: "Full Stack Developer",
              dates: "Mar 2023 - Jan 2025",
              location: "Winndeal (UAE)",
              jobType: "Hybrid",
              description: "Developed and maintained multiple e-commerce platforms using modern web technologies. Implemented responsive designs and optimized performance for better user engagement.",
              image: "/exp/title.png",
              links: [
                {
                  title: "Website",
                  icon: <FaGlobe className="h-4 w-4" />,
                  href: "https://www.winndeal.com/",
                },
              ],
            },
            {
              id: "works",
              title: "Freelance Web Developer",
              dates: "2023",
              location: "Home Town",
              jobType: "Remote",
              description: "Delivered custom web solutions for various clients using the MERN stack. Focused on creating responsive, user-friendly applications with clean code architecture.",
              image: "/exp/freelancer.png",
              win: "1st Place Winner",
              links: [],
            }
          ],
        }

  return (
    <section id="experience" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          04 / Experience
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-16">
        <BlurFade delay={BLUR_FADE_DELAY * 13} className="lg:col-span-4">
          <h2 className="text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-5xl">
            Professional <span className="text-primary">journey</span>
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
            With 3+ years of experience in software development, I&apos;ve worked
            on products across e-commerce, healthcare, and local business tools.
          </p>
        </BlurFade>

        <BlurFade delay={BLUR_FADE_DELAY * 14} className="lg:col-span-8">
          <ul className="border-l border-border pl-8">
            {DATA.experiences.map((project, id) => (
              <BlurFade
                key={project.title + project.dates}
                delay={BLUR_FADE_DELAY * 15 + id * 0.05}
              >
                <ExperienceCard
                  id={project.id}
                  title={project.title}
                  jobType={project.jobType}
                  description={project.description}
                  location={project.location}
                  dates={project.dates}
                  image={project.image}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </ul>
        </BlurFade>
      </div>
    </section>
  )
}

export default Works
