'use client'
import { BrainCircuit, Cpu, Eye } from 'lucide-react'
import React from 'react'
import FeaturedCard from './blog/FeaturedCard'
import { PulsatingButton } from './magicui/pulsating-button'
import { FlickeringGrid } from './magicui/flickering-grid'

const Blog = () => {
  return (
    <section className="max-w-full px-4 md:px-8 lg:px-20 mt-7 md:mt-16">
    <div className="relative">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          From the <span className="text-primary">Blog</span>
        </h2>
        <p className="text-lg md:text-xl max-w-2xl">
          Dive into my latest articles about software development, coding tips, and tech insights.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
            <FeaturedCard
              title="The Evolution of Generative Adversarial Networks: From GAN to StyleGAN-3"
              description="Explore the development of GAN architectures, highlighting key milestones like Progressive GAN, StyleGAN-1, StyleGAN-2, and the latest advancements in StyleGAN-3."
              image="https://images.unsplash.com/photo-1617791160505-6f00504e3519?q=80&w=600&h=400&auto=format&fit=crop"
              date="May 15, 2023"
              category="GenAI"
              icon={<BrainCircuit className="h-5 w-5" />}
              slug="evolution-of-gans"
            />
            <FeaturedCard
              title="AI in 2025: Transforming Daily Life"
              description="Discuss how generative AI has integrated into everyday activities by 2025, providing personal style tips, translating conversations, analyzing diets, and more."
              image="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&h=400&auto=format&fit=crop"
              date="June 2, 2023"
              category="Future Tech"
              icon={<Cpu className="h-5 w-5" />}
              slug="ai-in-2025"
            />
            <FeaturedCard
              title="The Rise of Multimodal AI Models: Bridging Text, Image, and Beyond"
              description="Examine the emergence of multimodal AI models that process and generate multiple data types, such as text, images, and videos, and their applications in various industries."
              image="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&h=400&auto=format&fit=crop"
              date="June 28, 2023"
              category="AI Research"
              icon={<Eye className="h-5 w-5" />}
              slug="multimodal-ai-models"
            />
          </div>
      
      <div className="mt-4 py-5">
      <PulsatingButton className='mx-auto' onClick={() => window.location.href = "/blog"}>View All Articles</PulsatingButton>
      </div>
    </div>
  </section>
  )
}

export default Blog