'use client'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { label: 'Whatsapp', icon: FaWhatsapp, href: 'https://wa.me/+917560845014' },
  { label: 'Email', icon: FaEnvelope, href: 'mailto:dev@nizamudheen.com' },
  { label: 'Linkedin', icon: FaLinkedin, href: 'https://www.linkedin.com/in/muhammednizamudheen' },
  { label: 'Github', icon: FaGithub, href: 'https://github.com/novus318' },
  {
    label: 'Instagram',
    icon: FaInstagram,
    href: 'https://instagram.com/n_i_zam___?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D',
  },
]

const Contact = () => {
  return (
    <footer id="contact" className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-16 pt-8 md:px-8 md:pb-24 lg:px-12">
      <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-14 text-background md:px-12 md:py-20">
        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/10 blur-3xl" />

        <span className="relative font-mono text-[11px] uppercase tracking-[0.22em] text-background/60">
          08 / Contact
        </span>

        <h2 className="relative mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] md:text-6xl">
          Let&apos;s take <span className="text-primary">your</span> ideas to the{' '}
          <span className="relative inline-block">
            <span aria-hidden className="absolute inset-x-0 bottom-[0.06em] h-[0.28em] -rotate-1 bg-accent" />
            <span className="relative text-background">next level.</span>
          </span>
        </h2>

        <div className="relative mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:dev@nizamudheen.com"
            className="group inline-flex items-center gap-3 rounded-full bg-accent py-1.5 pl-6 pr-1.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Start a conversation
            <span className="grid size-9 place-items-center rounded-full bg-foreground text-background transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 rounded-full border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:border-background/40 hover:bg-background/5"
          >
            View resume
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="relative mt-12 flex flex-col gap-6 border-t border-background/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-background/60">
            Based in India · Remote worldwide · Open to full-time and freelance
          </p>

          <div className="flex gap-2">
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <button
                  key={social.label}
                  aria-label={social.label}
                  onClick={() => window.open(social.href, '_blank')}
                  className="grid size-10 cursor-pointer place-items-center rounded-full border border-background/15 text-background/70 transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
                >
                  <Icon className="size-4" />
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
