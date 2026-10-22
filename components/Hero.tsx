'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '10+', label: 'Projects shipped' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-14 md:px-8 md:pt-24 lg:px-12">
      <div className="grid items-end gap-14 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[clamp(3rem,9vw,7.25rem)] font-semibold leading-[0.92] tracking-[-0.045em] text-foreground"
          >
            I build things
            <br />
            for the{' '}
            <span className="relative inline-block">
              <span
                aria-hidden
                className="absolute inset-x-[-0.04em] bottom-[0.08em] h-[0.3em] -rotate-1 bg-accent"
              />
              <span className="relative">real world.</span>
            </span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Full-stack developer and product builder. Currently building{' '}
            <a
              href="https://gohublink.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-primary"
            >
              goHublink
            </a>
            , an offline customer acquisition network for local businesses.
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-5"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-primary py-1.5 pl-6 pr-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Explore my work
              <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-4" />
              </span>
            </Link>
            <Link
              href="#about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              About me
              <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
            </Link>
          </motion.div>

          <motion.dl
            custom={4}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-16 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-6"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold tracking-tight text-foreground md:text-xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  )
}

export default Hero
