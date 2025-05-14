'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface PulsatingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  pulseColor?: string;
  duration?: number; // Changed to number for Framer Motion's animation duration in seconds
}

export const PulsatingButton = React.forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(
  (
    {
      className,
      children,
      pulseColor = 'var(--primary)',
      duration = 1.5,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'relative flex cursor-pointer items-center justify-center rounded-lg bg-primary px-4 py-2 text-center text-primary-foreground',
          className,
        )}
        {...props}
      >
        <div className="relative z-10">{children}</div>
        <motion.div
          className="absolute left-1/2 top-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-lg"
          style={{ backgroundColor: pulseColor }}
          animate={{
            scale: [1, 1.1, 1], // Scale up and back for pulsating effect
            opacity: [0.3, 0.6, 0.3], // Fade in and out
          }}
          transition={{
            duration,
            repeat: Infinity, // Repeat indefinitely
            ease: 'easeInOut', // Smooth easing
          }}
        />
      </button>
    );
  },
);

PulsatingButton.displayName = 'PulsatingButton';