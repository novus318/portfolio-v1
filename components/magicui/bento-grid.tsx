'use client'
import { useState } from "react";
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  //   remove unecessary things here
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS","NextJs","Vite", "Typescript", "TailwindCSS"];
  const rightLists = ["FastAPI","NodeJS", "SQL", "MongoDB","ExpressJS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        `row-span-1 relative overflow-hidden rounded-xl border border-primary/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4`,
        className
      )}
      style={{
        background: "linear-gradient(90deg, var(--background) 1%, var(--card) 15%, var(--popover) 71%, var(--card) 86%, var(--background) 96%)",
      }}
    >
      {/* add img divs */}
      <div className={`h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              //   width={220}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col p-2 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-base md:text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>
          {/* Tech stack list div */}
          {id === 2 && (
            <div className="flex gap-2 lg:gap-3 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-1 px-2 md:py-2 md:px-3 text-[0.6rem] md:text-xs opacity-50 
                    lg:opacity-100 rounded-lg text-center  bg-secondary ring-1"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3  rounded-lg text-center bg-[#10132e2f]"></span>
              </div>
              <div className="flex flex-col gap-4 md:gap-4">
                <span className="py-4 px-3  rounded-lg text-center bg-[#10132e6c]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-1 px-2 md:py-2 md:px-3 text-[0.6rem] md:text-xs opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-secondary ring-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};