"use client";

import { Check, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useTheme } from "@/hooks/useTheme";
import { ColorTheme } from "@/context/ThemeContext";

const colorOptions: { name: string; value: ColorTheme; color: string }[] = [
  { name: "Zinc", value: "zinc", color: "bg-zinc-600" },
  { name: "Red", value: "red", color: "bg-red-600" },
  { name: "Rose", value: "rose", color: "bg-rose-600" },
  { name: "Orange", value: "orange", color: "bg-orange-600" },
  { name: "Green", value: "green", color: "bg-green-600" },
  { name: "Blue", value: "blue", color: "bg-blue-600" },
  { name: "Yellow", value: "yellow", color: "bg-yellow-600" },
  { name: "Violet", value: "violet", color: "bg-violet-600" },
];

export function ThemeSwitcher() {
  const { theme, toggleTheme, colorTheme, toggleColorTheme } = useTheme();

  const handleThemeToggle = () => {
    toggleTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex flex-row gap-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-10 w-10 rounded-full border bg-background shadow-lg"
              onClick={handleThemeToggle}
            >
              {theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{theme === "dark" ? "light" : "dark"} mode</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <TooltipProvider>
        <Tooltip>
          <DropdownMenu>
            <TooltipContent>
              <p>Change color</p>
            </TooltipContent>
            <DropdownMenuTrigger asChild>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-10 w-10 rounded-full border bg-background shadow-lg"
                >
                  <div className={`h-4 w-4 rounded-full ${colorOptions.find(opt => opt.value === colorTheme)?.color}`} />
                </Button>
              </TooltipTrigger>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-fit">
              <div className="grid grid-cols-2 gap-1">
                {colorOptions.map((option) => (
                  <Button
                    key={option.value}
                    size="sm"
                    variant={colorTheme === option.value ? "default" : "outline"}
                    className={cn(
                      "flex items-center gap-1 text-[0.6rem]",
                      colorTheme === option.value && "bg-secondary text-secondary-foreground"
                    )}
                    onClick={() => toggleColorTheme(option.value)}
                  >
                    <span className={`${colorTheme === option.value ? "rounded-full h-4 w-2" : "rounded-full h-4 w-4"} ${option.color}`} />
                    <span>{option.name}</span>
                    {colorTheme === option.value && (
                      <Check className="ml-auto h-4 w-4" />
                    )}
                  </Button>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}