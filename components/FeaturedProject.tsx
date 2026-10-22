import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const modules = [
  { number: "01", title: "Businesses", description: "Local storefronts and their offers" },
  { number: "02", title: "Customers", description: "Nearby people ready to buy" },
  { number: "03", title: "Campaigns", description: "Offline acquisition, tracked end to end" },
]

const tags = ["Local business", "Customer acquisition", "Offline network", "Product design"]

export default function FeaturedProject() {
  return (
    <section id="featured" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          01 / Featured project
        </span>
        <span className="h-px flex-1 bg-border" />
        <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-foreground">
          <span className="size-1.5 rounded-full bg-accent-foreground" />
          In progress
        </span>
      </div>

      <div className="mt-10 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <h2 className="text-5xl font-semibold tracking-[-0.045em] text-foreground md:text-6xl">
            <a
              href="https://gohublink.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              goHublink<span className="text-primary">.</span>
            </a>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
            Connecting local businesses with nearby customers through an offline customer acquisition network.
            A product built around real-world discovery, not another feed.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="https://gohublink.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 text-sm font-semibold text-foreground"
          >
            Explore the concept
            <span className="grid size-8 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[2rem] border border-border bg-card p-3 shadow-[0_30px_80px_-50px_rgba(13,13,13,0.45)]">
            <div className="rounded-[1.55rem] bg-background p-5 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Product dashboard
                </span>
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-accent" />
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="size-2 rounded-full border border-border" />
                </div>
              </div>

              <div className="mt-8 space-y-1.5">
                {modules.map((module) => (
                  <div
                    key={module.number}
                    className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 transition-colors hover:border-border hover:bg-card"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[11px] text-muted-foreground">{module.number}</span>
                      <div>
                        <p className="text-sm font-semibold text-foreground md:text-base">{module.title}</p>
                        <p className="text-xs text-muted-foreground">{module.description}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-primary p-5 text-primary-foreground">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground/70">
                      Product direction
                    </p>
                    <p className="mt-1 text-xl font-semibold tracking-tight">Built for local growth.</p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-accent-foreground">
                    Concept
                  </span>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Concept preview · palette and component styling
          </p>
        </div>
      </div>
    </section>
  )
}
