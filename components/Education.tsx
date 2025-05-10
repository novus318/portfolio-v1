import Image from 'next/image'
import React from 'react'
import { FlipWords } from './magicui/flip-words';
import { BoxReveal } from './magicui/box-reveal';

const Education = () => {
    const education = [
        {
            degree: 'Web Development',
            institution: 'Self-taught',
            duration: '[Progress]',
            details: [
                'Learning modern web technologies and frameworks',
                'Building full-stack applications with React and Node.js',
                'Creating RESTful APIs for backend development',
                'Using Git and GitHub for project management',
            ],
        },
        {
            degree: 'B.VOC-Software Development',
            institution: 'St.Aloysius College',
            duration: '[2021-2023 (March)]',
            details: [
                'Studied programming basics and data structures',
                'Learned software development fundamentals',
                'Discontinued education to pursue self learning',
                'Focused on self-learning after second year',
            ],
        },
        {
            degree: 'Higher Secondary',
            institution: 'AKGVHSS (Payyannur)',
            duration: '[2019-2021]',
            details: [
                'Completed science-focused education'
            ],
        },
    ];
    return (
      <section className="max-w-full px-4 md:px-8 lg:px-20 mt-7 md:mt-16">
        <div>
          <div className="text-2xl md:text-4xl font-semibold overflow-x-hidden mb-4">
            This is how <br/>I started to
            <FlipWords words={['learn','grow']} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {education.map((edu, index) => (
              <div key={index} className="relative group">
                  <div className="h-full rounded-xl  backdrop-blur-sm transition-all duration-300">
                    <div className="space-y-2">
                    <BoxReveal boxColor={"var(--primary)"} duration={0.5}>
                      <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-semibold font-sans">
                          {edu.degree} <span className="text-primary">.</span>
                        </h3>
                        <span className="text-xs">
                          {edu.duration}
                        </span>
                      </div>
                      </BoxReveal>
                      
                      <h4 className="text-sm font-medium text-[var(--primary)]">
                        {edu.institution}
                      </h4>

                      <ul className="space-y-1 list-disc pl-4">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-xs md:text-sm">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Education