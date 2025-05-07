"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileUser, User, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeSwitcher } from "./ThemeSwitcher"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: FileUser,
  },
  {
    name: "Skills",
    href: "/skills",
    icon: User,
  },
  {
    name: "Works",
    href: "/works",
    icon: Briefcase,
  },
  {
    name: "Contact",
    href: "mailto:dev@nizamudheen.com",
    icon: Mail,
  },
]

export function TopNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 border-b bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
        <ThemeSwitcher />
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md",
                    isActive 
                      ? "text-primary bg-primary/10" 
                      : "text-muted-foreground hover:bg-primary/5"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
} 