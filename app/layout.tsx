import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Toaster } from "@/components/ui/sonner";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import { QueryProvider } from "@/providers/query";
import localFont from "next/font/local";

import "@/styles/globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

const trap = localFont({
  src: [
    {
      path: "./fonts/Trap/Trap-Light.otf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/Trap/Trap-Regular.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/Trap/Trap-Medium.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/Trap/Trap-SemiBold.otf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./fonts/Trap/Trap-Bold.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/Trap/Trap-ExtraBold.otf",
      style: "normal",
      weight: "800",
    },
    {
      path: "./fonts/Trap/Trap-Black.otf",
      style: "normal",
      weight: "900",
    },
  ],
  variable: "--font-trap", // renamed for semantic clarity
  weight: "300 400 500 600 700 800 900",
});

const transforma = localFont({
  src: [
    {
      path: "./fonts/Transforma_Sans/TransformaVariable-Sans.ttf",
      style: "normal",
      weight: "100",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-Extralight.ttf",
      style: "normal",
      weight: "200",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-Light.ttf",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-Bold.ttf",
      style: "normal",
      weight: "700",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-ExtraBold.ttf",
      style: "normal",
      weight: "800",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-Black.ttf",
      style: "normal",
      weight: "900",
    },
    {
      path: "./fonts/Transforma_Sans/TransformaSans_Trial-ExtraBlack.ttf",
      style: "normal",
      weight: "950",
    },
  ],
  variable: "--font-transforma-sans",
  weight: "100 200 300 400 500 600 700 800 900 950",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "Olorunfemi Daramola",
      url: "https://github.com/berryboylb",
    },
  ],
  creator: "Olorunfemi Daramola",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 121.15,
        height: 36.32,
        alt: siteConfig.description,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@pappychulow",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(
          "min-h-screen bg-background antialiased",
          montserrat.className,
          trap.variable,
          transforma.variable
        )}
      >
        <QueryProvider>
          {children} <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
