'use client'

import { useTheme } from "@/hooks/useTheme";
import { BentoGrid, BentoGridItem } from "./magicui/bento-grid";

const Grid = () => {
  const { theme } = useTheme();
  const gridItems = [
    {
      id: 1,
      title: "Think different. Build better.",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] min-h-[25vh]",
      imgClassName: "w-full h-full opacity-75",
      titleClassName: "justify-end max-w-[70%] mt-16 md:mt-0 md:justify-end md:max-w-[75%]",
      img: theme === "dark" ? "/1.png" : "/2.png",
      spareImg: "",
    },
    {
      id: 2,
      title: "Technical Expertise",
      description: "I improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Experienced in both frontend and backend development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: theme === "dark" ? "/b4.svg" : "/b4-light.svg",
    },
    {
      id: 4,
      title: "Development",
      description: "end-to-end",
      className: "lg:col-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-86 w-56",
      titleClassName: "justify-end",
      img: theme === "dark" ? "/b5.svg" : "/b5-light.png",
      spareImg: "",
    },
  ];
  return (
    <section id="skills" className="px-4 md:px-8 lg:px-20">
      <BentoGrid className="w-full py-10">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;