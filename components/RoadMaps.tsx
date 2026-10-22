import React from 'react'
import { ArrowUpRight, Cloud, Code2, Server } from 'lucide-react'

const roadmaps = [
  {
    title: 'Frontend Mastery',
    description: 'From HTML/CSS fundamentals to advanced React patterns and state management.',
    icon: Code2,
    color: 'from-primary to-primary/30',
    href: '/road-maps/frontend',
  },
  {
    title: 'Backend Development',
    description: 'Learn server-side programming, databases, APIs, and deployment strategies.',
    icon: Server,
    color: 'from-accent to-accent/30',
    href: '/road-maps/backend',
  },
  {
    title: 'DevOps & Cloud',
    description: 'Master Docker, CI/CD, cloud platforms, and infrastructure as code.',
    icon: Cloud,
    color: 'from-foreground to-foreground/20',
    href: '/road-maps/devops',
  },
]

const RoadMaps = () => {
  return (
    <section id="roadmaps" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          07 / Roadmaps
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-5xl">
          <span className="text-primary">Learning</span> roadmaps
        </h2>
        <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          Structured paths to master full-stack development and build applications
          that hold up in the real world.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {roadmaps.map((roadmap, index) => {
          const Icon = roadmap.icon

          return (
            <a
              key={index}
              href={roadmap.href}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <div className={`h-1.5 bg-gradient-to-r ${roadmap.color}`} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="grid size-11 place-items-center rounded-2xl bg-secondary text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                  {roadmap.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {roadmap.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Explore path
                  <span className="grid size-7 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default RoadMaps
