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

export function TopNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={item.onClick}
                className={cn(
                  "group relative px-3 py-2 text-sm font-medium transition-colors hover:text-foreground",
                  isActive ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {item.name}
                <span className="absolute inset-x-3 -bottom-px h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
