import { ArrowUpRight } from "lucide-react"

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "Tailwind CSS"]

const Grid = () => {
  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          02 / About
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-6">
        <div className="rounded-3xl border border-border bg-card p-8 md:col-span-4 md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-foreground">
            <span className="size-1.5 rounded-full bg-accent-foreground" />
            About me
          </span>
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-foreground md:text-4xl lg:text-5xl">
            I turn complex problems into clean, useful products.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I&apos;m Muhammed Nizamudheen, a full-stack developer and product builder.
            I care about the whole experience — from the architecture underneath to
            the small interaction that makes a product feel considered.
          </p>
        </div>

        <div className="flex flex-col justify-between rounded-3xl bg-foreground p-8 text-background md:col-span-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/60">
            Currently
          </span>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Building{' '}
              <a
                href="https://gohublink.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                goHublink
              </a>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-background/70">
              An offline customer acquisition network for local businesses.
            </p>
          </div>
          <div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.14em] text-background/60">
            <span className="size-2 rounded-full bg-accent" />
            In progress
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card p-8 md:col-span-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            The stack
          </span>
          <div className="mt-5 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-border bg-card p-8 md:col-span-3">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Based in
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">
              India · Remote worldwide
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              GMT+5:30 · Open to full-time and freelance collaborations.
            </p>
          </div>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            <span className="size-2 rounded-full bg-accent" />
            Available for work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Grid
