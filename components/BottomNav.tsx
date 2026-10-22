"use client"

import Link from "next/link"
import { Briefcase, Mail, User } from "lucide-react"

const navItems = [
  { name: "Work", href: "#projects", icon: Briefcase },
  { name: "About", href: "#about", icon: User },
  { name: "Talk", href: "#contact", icon: Mail },
]

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col items-center justify-center gap-1 px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Icon className="h-5 w-5 transition-colors group-hover:text-primary" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
