import React from 'react'

const MagicButton = ({word,position,icon}:any) => {
  return (
    <button aria-label='magicButton' className="w-full md:w-fit relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-0.5 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary mt-4">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--primary)_0%,var(--secondary)_50%,var(--primary)_100%)]" />
    <span className="inline-flex z-10 h-full w-full cursor-pointer items-center justify-center rounded-xl bg-secondary px-10 py-1 text-sm font-medium text-secondary-foreground backdrop-blur-3xl gap-3">
      {position === "left" && icon}
      {word}
      {position === "right" && icon}
    </span>
  </button>
  )
}

export default MagicButton