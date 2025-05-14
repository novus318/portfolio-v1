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
    <section className="max-w-full px-4 md:px-8 lg:px-20 mt-7 md:mt-16">
    <div className="space-y-12 w-full py-12">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Professional <span className="text-primary">Journey</span>
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              With {3}+ years of experience in software development, I&apos;ve had the opportunity to work on various projects and collaborate with talented teams. My journey includes participating in events and building innovative solutions.
            </p>
          </div>
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 14}>
        <ul className="mb-4 ml-4 divide-y-2 divide-dashed border-l-4">
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