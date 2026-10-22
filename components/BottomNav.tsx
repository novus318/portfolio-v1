"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileUser, User, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  {
    name: "Home",
    href: "#",
    icon: Home,
  },
  {
    name: "Resume",
    href: "#",
    icon: FileUser,
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.open('/resume.pdf', '_blank');
    },
  },
  {
    name: "Skills",
    href: "#skills",
    icon: User,
  },
  {
    name: "Works",
    href: "#projects",
    icon: Briefcase,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.name}
              href={item.href}
              onClick={item.onClick}
              className={cn(
                "relative flex flex-col items-center justify-center gap-1 px-3 py-2 text-xs font-medium transition-colors",
                isActive ? "text-foreground" : "text-muted-foreground hover:text-primary"
              )}
            >
              {isActive && (
                <span className="absolute -top-0.5 h-0.5 w-8 rounded-full bg-accent" />
              )}
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
