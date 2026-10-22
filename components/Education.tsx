'use client'
import React from 'react'
import { FlipWords } from './magicui/flip-words';
import { BoxReveal } from './magicui/box-reveal';

const Education = () => {
    const education = [
        {
            degree: 'Web Development',
            institution: 'Self-taught',
            duration: 'In progress',
            details: [
                'Learning modern web technologies and frameworks',
                'Building full-stack applications with React and Node.js',
                'Creating RESTful APIs for backend development',
                'Using Git and GitHub for project management',
            ],
        },
        {
            degree: 'B.VOC — Software Development',
            institution: 'St. Aloysius College',
            duration: '2021 — 2023',
            details: [
                'Studied programming basics and data structures',
                'Learned software development fundamentals',
                'Discontinued education to pursue self learning',
                'Focused on self-learning after second year',
            ],
        },
        {
            degree: 'Higher Secondary',
            institution: 'AKGVHSS, Payyannur',
            duration: '2019 — 2021',
            details: [
                'Completed science-focused education'
            ],
        },
    ];
    return (
      <section id="education" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24 lg:px-12">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            06 / Learning
          </span>
          <span className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-10 max-w-2xl overflow-x-hidden text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-4xl lg:text-5xl">
          This is how <br />I started to
          <FlipWords words={['learn', 'grow']} className="text-primary" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {edu.duration}
                </span>
                <span className="size-2 rounded-full bg-accent" />
              </div>

              <BoxReveal boxColor={"var(--accent)"} duration={0.5}>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-foreground">
                  {edu.degree} <span className="text-primary">.</span>
                </h3>
              </BoxReveal>

              <h4 className="mt-1 text-sm font-medium text-primary">
                {edu.institution}
              </h4>

              <ul className="mt-5 space-y-2 border-t border-border pt-5">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent ring-1 ring-foreground/10" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    )
}

export default Education
