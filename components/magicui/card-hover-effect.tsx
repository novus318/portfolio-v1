'use client'
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);


export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    id: number,
    title: string;
    icon: any;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  useGSAP (() => {
    gsap.from('.skills', { opacity: 0, y: 50, duration: 0.2, stagger: 0.1, scrollTrigger: { trigger: '.skills', start: 'top 80%' } });
    }, [])
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2",
        className
      )}
    >
      {items.map((item, id) => (
        <div
        key={id}
          className="relative group  block p-1 md:p-1.5 h-full w-full"
          onMouseEnter={() => setHoveredIndex(id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === id && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-2xl bg-accent/40"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle icon={item.icon}>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "skills relative z-20 h-full w-full overflow-hidden rounded-2xl border border-border bg-card p-1 transition-all duration-300 group-hover:border-primary/40 group-hover:shadow-md md:p-4",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
  icon
}: {
  className?: string;
  children: React.ReactNode;
  icon?: any;
}) => {
  return (
    <h4 className={cn("flex items-center", className)}>
      <span className="mr-3 text-xl text-primary md:text-2xl lg:text-3xl">{icon}</span>
      <p className="text-sm font-semibold text-foreground md:text-base lg:text-lg">{children}</p>
    </h4>
  );
}
