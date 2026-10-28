import Image from "next/image";

export default function MemojiHeroVideo() {
  return (
    <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px] lg:mx-0 lg:max-w-full">
      <Image
        src="/memoji.png"
        alt="Memoji giving a thumbs up"
        width={1254}
        height={1254}
        priority
        sizes="(min-width: 1024px) 34vw, (min-width: 768px) 420px, (min-width: 640px) 360px, 320px"
        className="h-auto w-full select-none object-contain"
      />
    </div>
  );
}
