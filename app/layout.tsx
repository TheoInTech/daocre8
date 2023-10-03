import "@/app/globals.css";
import meta from "@/lib/metadata.json";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Next13NProgress } from "nextjs13-progress";

// components
import { Navbar } from "@/app/Navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { Particles } from "@/components/ui/particles";
import { Toaster } from "@/components/ui/toaster";
import { ProgramProvider, WalletConnectProvider } from "@/lib/providers";
// styles
import "@solana/wallet-adapter-react-ui/styles.css";

const montserrat = localFont({
  src: [
    {
      path: "../fonts/montserrat/Montserrat-Italic-VariableFont_wght.ttf",
    },
    {
      path: "../fonts/montserrat/Montserrat-VariableFont_wght.ttf",
    },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

const gordita = localFont({
  src: [
    {
      path: "../fonts/gordita/Gordita-Light.otf",
      weight: "300",
    },
    {
      path: "../fonts/gordita/Gordita-Regular.otf",
      weight: "400",
    },
    {
      path: "../fonts/gordita/Gordita-Medium.otf",
      weight: "500",
    },
    {
      path: "../fonts/gordita/Gordita-Bold.otf",
      weight: "600",
    },
    {
      path: "../fonts/gordita/Gordita-Black.otf",
      weight: "700",
    },
  ],
  variable: "--font-gordita",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URL ?? ""),
  title: {
    default: meta.longName,
    template: `%s | ${meta.longName}`,
  },
  description: meta.description,
  keywords: meta.keywords,
  openGraph: {
    title: meta.longName,
    description: meta.description,
    url: process.env.NEXT_PUBLIC_HOST_URL,
    siteName: meta.longName,
    locale: "en-US",
    type: "website",
    // images: [
    //   {
    //     url: `${process.env.NEXT_PUBLIC_HOST_URL ?? ""}/og-image.png`,
    //     width: 2560,
    //     height: 1440,
    //   },
    // ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: meta.longName,
    card: "summary_large_image",
    description: meta.description,
    creator: "@_theindiehacker",
    // images: [`${process.env.NEXT_PUBLIC_HOST_URL ?? ""}/og-image.png`],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/logo-icon.svg",
    apple: "/logo-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${gordita.variable}`}>
        <WalletConnectProvider>
          <ProgramProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <Next13NProgress color="#E416F9" height={5} />
              <Navbar />
              <Particles />
              <main className="flex min-h-screen h-full flex-col z-10">
                {children}
                <Toaster />
                <Analytics />
              </main>
            </ThemeProvider>
          </ProgramProvider>
        </WalletConnectProvider>
      </body>
    </html>
  );
}
