"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, FileUser, User, Briefcase, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

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

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden">
      <div className="flex h-16 items-center justify-around">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 px-3 py-2 text-xs font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
} 