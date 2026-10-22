import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
  id: any;
  title: string;
  description: string;
  dates: string;
  location: string;
  image?: string;
  jobType?: string;
  links?: readonly {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[];
}

export function ExperienceCard({
  id,
  title,
  description,
  dates,
  location,
  image,
  jobType,
  links,
}: Props) {
  return (
    <li id={id} className="relative scroll-mt-24 py-5">
      <div className="absolute -left-12 top-5 grid size-8 place-items-center rounded-full border border-border bg-background">
        <Avatar className="size-6">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback className="text-[10px]">{title[0]}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-col gap-2">
        <time className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          {dates}
        </time>
        <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
        <div className="flex flex-wrap items-center gap-2">
          {location && (
            <p className="text-sm text-muted-foreground">{location}</p>
          )}
          {jobType && (
            <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-accent-foreground">
              {jobType}
            </span>
          )}
        </div>
        {description && (
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {links && links.length > 0 && (
        <div className="mt-3 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} target="_blank" key={idx}>
              <Badge
                key={idx}
                title={link.title}
                variant="outline"
                className="flex gap-2 bg-card transition-colors hover:border-primary hover:text-primary"
              >
                {link.icon}
                {link.title}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
