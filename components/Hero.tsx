'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import MemojiHeroVideo from '@/components/MemojiHero'

const stats = [
  { value: '3+', label: 'Years building' },
  { value: '10+', label: 'Projects shipped' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 md:px-8 md:pt-24 lg:px-12">
      <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">

        {/* Main content */}
        <div className="min-w-0 lg:col-span-8">

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-[clamp(3rem,9vw,7.25rem)] font-semibold leading-[0.92] tracking-[-0.055em] text-foreground"
          >
            I build things
            <br />
            for the{' '}
            <span className="relative inline-flex flex-col align-bottom">
              <span className="relative inline-block">
                <span
                  aria-hidden
                  className="absolute inset-x-[-0.04em] bottom-[0.08em] h-[0.3em] -rotate-1 bg-accent"
                />
                <span className="relative">real world.</span>
              </span>
            </span>
          </motion.h1>

          {/* Desktop Memoji stays in the right column */}
          <div className="hidden">
            <MemojiHeroVideo />
          </div>

          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg"
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
            className="mt-8 flex flex-wrap items-center gap-5 md:mt-10"
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
            className="mt-12 grid max-w-lg grid-cols-2 gap-6 border-t border-border pt-6 md:mt-16"
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

        {/* Desktop-only Memoji */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="hidden justify-center lg:col-span-4 lg:flex lg:justify-end"
        >
          <MemojiHeroVideo />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero