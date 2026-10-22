"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const navItems = [
  { name: "Work", href: "#projects" },
  { name: "About", href: "#about" },
]

export function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">
        <Link
          href="#"
          aria-label="Nizam — home"
          className="group inline-flex items-baseline text-lg font-semibold leading-none tracking-[-0.04em] text-foreground"
        >
          nizam
          <span className="text-accent transition-transform duration-200 group-hover:translate-y-0.5">
            .
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </Link>
          ))}

          <Link
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground"
          >
            Let&apos;s talk
            <span className="grid size-6 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-200 group-hover:rotate-45">
              <ArrowUpRight className="size-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
