import React, { useState } from 'react'
import { BlurFade } from './magicui/blur-fade'
import { ProjectCard } from './project-card';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { Button } from './ui/button';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';

const Projects = () => {
    const BLUR_FADE_DELAY = 0.04;
    const [showAll, setShowAll] = useState(false);
    const DATA = {
        projects: [
          {
            title: "Rental Management System",
            href: "https://vellapmahal.in",
            active: true,
            description:
              "streamlines Jamaath operations with an interface, designed to help you manage your accounts, members, and staff and Payments with ease.",
            technologies: [
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Typescript",
              "TailwindCSS",
              "Whatsapp API",
              "Razorpay"
            ],
            links: [
              {
                type: "Website",
                href: "https://vellapmahal.in",
                icon: <FaGlobe className="size-3" />,
              }
            ],
            image: "",
            video:
              "1https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/8.mp4",
          },
          {
            title: "Jamath Management System",
            href: "https://vellapmahal.in",
            active: true,
            description:
              "streamlines Jamaath operations with an interface, designed to help you manage your accounts, members, and staff and Payments with ease.",
            technologies: [
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Typescript",
              "TailwindCSS",
              "Whatsapp API",
              "Razorpay"
            ],
            links: [
              {
                type: "Website",
                href: "https://vellapmahal.in",
                icon: <FaGlobe className="size-3" />,
              }
            ],
            image: "",
            video:
              "https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/8.mp4",
          },
          {
            title: "Devecta | Ask with PDF AI",
            href: "https://devecta.nizamudheen.com",
            active: true,
            description:
              "Developed an AI-powered application that allows users to upload PDFs, vectorize them using Google Generative AI, and store them in Pinecone for Interaction.",
            technologies: [
              "Next.js",
              "Node.js",
              "LangchainJS",
              "Express",
              "MongoDB",
              "Typescript",
              "TailwindCSS",
              "GSAP",
              "Pinecone",
              "Google Generative AI"
            ],
            links: [
              {
                type: "Website",
                href: "https://devecta.nizamudheen.com",
                icon: <FaGlobe className="size-3" />,
              },
              {
                type: "Source",
                href: "https://github.com/novus318/devecta.git",
                icon: <FaGithub className="size-3" />,
              },
            ],
            image: "",
            video:
              "https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/7.mp4",
          },
          {
            title: "TL E-commerce Application",
            href: "https://www.tlonline.store",
            active: true,
            description:
              "Developed a comprehensive e-commerce application using NextJs for the frontend and Node.js for the backend to provide an exceptional shopping experience",
            technologies: [
              "Next.js",
              "Node.js",
              "Express",
              "MongoDB",
              "Typescript",
              "TailwindCSS",
              "GDrive",
              "GMaps"
            ],
            links: [
              {
                type: "Website",
                href: "https://www.tlonline.store",
                icon: <FaGlobe className="size-3" />,
              }
            ],
            image: "",
            video:
              "https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/6.mp4",
          },
          {
            title: "IT Solutions Company Website",
            href: "https://www.winndeal.com",
            active: true,
            description:
              "This website was designed and developed with nextJS,Typescript and tailwind with attractive animations using gsap,framer with visually appealing user interface",
            technologies: [
              "Next.js",
              "Typescript",
              "TailwindCSS",
              "GSAP"
            ],
            links: [
              {
                type: "Website",
                href: "https://www.winndeal.com",
                icon: <FaGlobe className="size-3" />,
              },
            ],
            image: "",
            video:
              "https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/5.mp4",
          },
            {
              title: "Austagreg Web3 solutions",
              href: "https://austagreg.vercel.app",
              active: true,
              description:
                "Utilized Tailwind CSS for styling and NextJs for the frontend to ensure a SEO optimised, responsive and visually appealing user interface for Web3 solutions company.",
              technologies: [
                "Next.js",
                "Typescript",
                "TailwindCSS"
              ],
              links: [
                {
                  type: "Website",
                  href: "https://austagreg.vercel.app",
                  icon: <FaGlobe className="size-3" />,
                },
              ],
              image: "",
              video:
                "https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/4.mp4",
            },
            {
              title: "All-in-one platform for plant lovers.",
              href: "https://www.abyzplants.com",
              active: true,
              description:
                "This e-commerce platform was designed and developed from the ground up to provide an exceptional shopping experience for those who appreciate the beauty of greenery.",
              technologies: [
                "Next.js",
                "Typescript",
                "MongoDB",
                "Express",
                "NodeJs",
                "TailwindCSS",
                "Stripe",
              ],
              links: [
                {
                  type: "Website",
                  href: "https://www.abyzplants.com",
                  icon: <FaGlobe className="size-3" />,
                },
                {
                  type: "Source",
                  href: "https://github.com/novus318/Abyzplants.git",
                  icon: <FaGithub className="size-3" />,
                },
              ],
              image: "",
              video: "https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/p3.mp4",
            },
            {
              title: "Netflix small clone",
              href: "https://netfi.netlify.app",
              active: true,
              description:
                "Developed a comprehensive Landing page with ReactJs for the frontend and TMDB movie database provides a lateat movie and tv shows.",
              technologies: [
                "ReactJs",
                "css",
                "Bootstrap",
                "javascript",
                "TMDB API",
              ],
              links: [
                {
                  type: "Website",
                  href: "https://netfi.netlify.app",
                  icon: <FaGlobe className="size-3" />,
                },
                {
                  type: "Source",
                  href: "https://github.com/novus318/netflix-clone.git",
                  icon: <FaGithub className="size-3" />,
                },
              ],
              image: "",
              video: "https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/p2.mp4",
            },
            {
              title: "Confident company website",
              href: "https://confidentuae.com",
              active: true,
              description:
                "Created a company assets from logo to company profile and website using html,css and javascript for a building materials company in UAE and also implemented a contact form",
              technologies: [
                "html",
                "css",
                "javascript",
                "EmailJS",
              ],
              links: [
                {
                  type: "Website",
                  href: "https://confidentuae.com",
                  icon: <FaGlobe className="size-3" />,
                },
              ],
              image: "",
              video:
                "https://pub-3840d435126b4ae082be2973bc27befb.r2.dev/p1.mp4",
            },
          ],
        }

  return (
       <section className="max-w-full px-4 md:px-8 lg:px-20 mt-7 md:mt-16">
    <div className="py-5 md:py-8">
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex items-center space-y-4 mb-4 md:mb-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my <span className="text-primary">latest</span> work
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I&apos;ve worked on a variety of projects, from simple
              websites to complex web applications. Here are a few of my
              favorites.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 relative">
        {(showAll ? DATA.projects : DATA.projects.slice(0, 3)).map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 12 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
        {!showAll && DATA.projects.length > 3 && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background via-background/70 to-transparent" />
          </div>
        )}
      </div>
      {!showAll && DATA.projects.length > 3 && (
        <div className="relative w-full flex justify-center bg-background py-4">
          <InteractiveHoverButton className="relative z-10 group" onClick={() => setShowAll(true)}>See more..</InteractiveHoverButton>
        </div>
      )}
    </div>
  </section>
  )
}

export default Projects