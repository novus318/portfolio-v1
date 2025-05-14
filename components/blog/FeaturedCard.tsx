'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Clock } from "lucide-react"
import Image from 'next/image'

const FeaturedCard = ({ title, description, image, date, category, icon, slug = "" }:any) => {
  return (
    <Card className="border overflow-hidden transition-colors !pt-0 !gap-3">
    <div className="relative h-48">
      <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
    </div>
    <CardHeader>
      <div className="flex items-center gap-2 text-sm text-primary mb-2">
        {icon}
        <span>{category}</span>
      </div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground">{description}</CardDescription>
    </CardContent>
    <CardFooter className="flex justify-between text-sm">
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        <span>{date}</span>
      </div>
      <Link href={`/blog/${slug}/`} className="text-primary hover:text-primary/80">
        Read more →
      </Link>
    </CardFooter>
  </Card>
  )
}

export default FeaturedCard
