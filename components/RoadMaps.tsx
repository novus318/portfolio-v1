import React from 'react'

const RoadMaps = () => {
  return (
    <section className="relative overflow-hidden max-w-full px-4 md:px-8 lg:px-20 mt-7 md:mt-16 bg-radial-[at_3000%] from-background via-primary/10 to-background dark:bg-radial-[at_3000%] dark:from-background dark:via-secondary-foreground/10 dark:to-background">
    <div className="relative">
      <div className="md:mb-16 mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          <span className="text-primary">Learning</span> Roadmaps
        </h2>
        <p className="text-lg md:text-xl">
          Structured paths to master full-stack development and build amazing applications.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {[
          {
            title: 'Frontend Mastery',
            description: 'From HTML/CSS fundamentals to advanced React patterns and state management.',
            icon: '🚀',
            color: 'from-secondary to-primary/80',
            href: '/road-maps/frontend'
          },
          {
            title: 'Backend Development',
            description: 'Learn server-side programming, databases, APIs, and deployment strategies.',
            icon: '⚙️',
            color: 'from-primary to-primary-foreground/80',
            href: '/road-maps/backend'
          },
          {
            title: 'DevOps & Cloud',
            description: 'Master Docker, CI/CD, cloud platforms, and infrastructure as code.',
            icon: '☁️',
            color: 'from-primary to-secondary/80',
            href: '/road-maps/devops'
          }
        ].map((roadmap, index) => (
          <div 
            key={index}
            className="group bg-background rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col border"
          >
            <div className={`h-3 bg-gradient-to-r ${roadmap.color}`}></div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="text-4xl mb-4">{roadmap.icon}</div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {roadmap.title}
              </h3>
              <p className="mb-6 flex-1">
                {roadmap.description}
              </p>
              <a 
                href={roadmap.href}
                className="inline-flex items-center text-primary font-medium group-hover:underline mt-auto"
              >
                Explore Path
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default RoadMaps