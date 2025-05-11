"use client"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import { Share2, Mail, User, Briefcase, Info, Home, FileUser } from "lucide-react"
import Link from "next/link"

export function WebsiteContextMenu({ children }: { children: React.ReactNode }) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Muhammed Nizamudheen | Software developer",
          text: "Check out Muhammed Nizamudheen's portfolio website!",
          url: "https://nizamudheen.com",
        })
      } catch (error) {
      }
    }
  }

  const handleEmail = () => {
    window.location.href = "mailto:dev@nizamudheen.com"
  }

  return (
    <ContextMenu>
      <ContextMenuTrigger className="h-full w-full">
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem asChild>
          <Link href="#" className="flex items-center gap-2">
            <Home className="h-4 w-4 text-primary" />
            Home
          </Link>
        </ContextMenuItem>
        <ContextMenuItem asChild>
          <Link href="#" 
          onClick={() => {
            window.open('/resume.pdf', '_blank');
          }}
          className="flex items-center gap-2">
            <FileUser className="h-4 w-4 text-primary" />
            Resume
          </Link>
        </ContextMenuItem>
        <ContextMenuItem asChild>
          <Link href="#skills" className="flex items-center gap-2">
            <User className="h-4 w-4 text-primary" />
            Skills
          </Link>
        </ContextMenuItem>
        <ContextMenuItem asChild>
          <Link href="#works" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            Works
          </Link>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem onClick={handleShare} className="flex items-center gap-2">
          <Share2 className="h-4 w-4 text-primary" />
          Share Website
        </ContextMenuItem>
        <ContextMenuItem onClick={handleEmail} className="flex items-center gap-2">
          <Mail className="h-4 w-4 text-primary" />
          Email
        </ContextMenuItem>
        {/* <ContextMenuSeparator />
        <ContextMenuItem asChild>
          <Link href="/privacy" className="flex items-center gap-2">
            <Info className="h-4 w-4 text-primary" />
            Privacy Policy
          </Link>
        </ContextMenuItem> */}
      </ContextMenuContent>
    </ContextMenu>
  )
} 