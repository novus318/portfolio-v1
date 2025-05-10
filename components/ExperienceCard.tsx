import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Props {
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
  title,
  description,
  dates,
  location,
  image,
  jobType,
  links,
}: Props) {
  return (
    <li className="relative ml-[2.3rem] py-4">
      <div className="absolute -left-16 top-2 flex items-center justify-center rounded-full bg-white">
        <Avatar className="border size-12 m-auto">
          <AvatarImage src={image} alt={title} className="object-contain" />
          <AvatarFallback>{title[0]}</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {dates && (
          <time className="text-xs text-muted-foreground">{dates}</time>
        )}
        <h2 className="font-semibold leading-none">{title}</h2>
        <div className="flex items-center gap-2">
          {location && (
            <p className="text-sm text-muted-foreground">{location}</p>
          )}
          {jobType && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
              {jobType}
            </span>
          )}
        </div>
        {description && (
          <span className="prose dark:prose-invert text-sm text-muted-foreground">
            {description}
          </span>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} target="_blank" key={idx}>
              <Badge key={idx} title={link.title} className="flex gap-2">
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
