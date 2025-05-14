import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContextProvider, { ColorTheme, Theme } from "@/context/ThemeContext";
import { cookies } from "next/headers";

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
  description: "Self-directed full-stack developer proficient in creating innovative web solutions. Skilled in both frontend and backend development with a creative approach to problem-solving.",
  keywords: 'nizamudheen,Muhammed Nizamudheen,web developer,software engineer,portfolio',
  metadataBase: new URL('https://nizamudheen.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Muhammed Nizamudheen | Software developer",
    description: "Self-directed full-stack developer proficient in creating innovative web solutions.",
    url: 'https://nizamudheen.com',
    siteName: 'Nizamudheen Portfolio',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },
  twitter: {
    card: 'summary_large_image',
    title: "Muhammed Nizamudheen | Software developer",
    description: "Self-directed full-stack developer proficient in creating innovative web solutions.",
    creator: '@nizamudheen',
    images: ['https://nizamudheen.com/opengraph-image.png'],
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
            <main className="min-h-screen pt-16 pb-16 md:pb-0">
              {children}
            </main>
        </ThemeContextProvider>
      </body>
    </html>
  );
}