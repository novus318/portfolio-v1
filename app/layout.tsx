import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContextProvider, { ColorTheme, Theme } from "@/context/ThemeContext";
import { cookies } from "next/headers";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { WebsiteContextMenu } from "@/components/WebsiteContextMenu";
import { BottomNav } from "@/components/BottomNav";
import { TopNav } from "@/components/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammed Nizamudheen | Software developer",
  description: "Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.",
  keywords:'nizamudheen,Muhammed Nizamudheen,web developer,web development,software,software engineer',
  metadataBase: new URL('https://nizamudheen.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const initialTheme = (cookieStore.get("theme")?.value as Theme) || "light";
  const initialColorTheme = (cookieStore.get("colorTheme")?.value as ColorTheme) || "zinc";

  const isDarkMode =
    initialTheme === "dark" ||
    (initialTheme === "system" && false); // Update this to use system preference

  return (
    <html lang="en" suppressHydrationWarning>
           <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content='Muhammed Nizamudheen | Software developer' />
        <meta property="og:description" content='Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.' />
        <meta property="og:image" content='https://nizamudheen.com/opengraph-image.png' />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nizamudheen.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content='Muhammed Nizamudheen | Software developer' />
        <meta name="twitter:description" content='Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving. Also passionate about creating customised solutions for my clients.' />
        <meta name="twitter:image" content='https://nizamudheen.com/opengraph-image.png' />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${isDarkMode ? "dark" : ""}`}
        data-color-theme={initialColorTheme}
      >
        <ThemeContextProvider initialTheme={initialTheme} initialColorTheme={initialColorTheme}>
          <WebsiteContextMenu>
            <TopNav />
            <div className="fixed right-4 top-20 z-50 md:top-20">
            </div>
            <main className="min-h-screen pt-16 pb-16 md:pb-0">
              {children}
            </main>
            <BottomNav />
          </WebsiteContextMenu>
        </ThemeContextProvider>
      </body>
    </html>
  );
}