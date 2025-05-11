'use client'
import React from 'react'
import Link from 'next/link'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { ArrowBigRightDash } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  
  return (
    <div className='mb-20 md:pt-36'>
        <div className="h-screen w-full bg-background flex items-center justify-center absolute top-0 left-0">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        <div className='flex justify-center relative my-20 z-10'>
            <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                <div className="text-left">
                    <TextGenerateEffect className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-foreground mb-3"
                    words='Muhammed'/>
                    <TextGenerateEffect className="text-5xl md:text-6xl lg:text-8xl font-extrabold text-foreground"
                    words='Nizamudheen.'/>
                    <TextGenerateEffect className="text-xl md:text-2xl lg:text-4xl mt-4 md:mt-6 lg:mt-8 tracking-normal text-secondary-foreground font-light font-sans"
                    words='Full Stack Developer.'/>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <Link href='#works'>
                            <MagicButton word={'Show my work'} position={'left'} icon={<ArrowBigRightDash className='w-5 h-5 text-primary'/>}/>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero