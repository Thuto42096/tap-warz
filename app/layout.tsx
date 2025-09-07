import "./theme.css";
import "@coinbase/onchainkit/styles.css";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const URL = process.env.NEXT_PUBLIC_URL;
  return {
    title: "Tap Warz - Epic Tapping Battle Game",
    description:
      "Challenge your friends in the ultimate tapping war! Fast-paced competitive mini game built with OnchainKit.",
    icons: {
      icon: process.env.NEXT_PUBLIC_APP_ICON || "/tap-warz-logo.png",
      apple: process.env.NEXT_PUBLIC_APP_ICON || "/tap-warz-logo.png",
    },
    openGraph: {
      title: process.env.NEXT_PUBLIC_APP_OG_TITLE || "Tap Warz",
      description: process.env.NEXT_PUBLIC_APP_OG_DESCRIPTION || "Epic Tapping Battle Game",
      images: process.env.NEXT_PUBLIC_APP_OG_IMAGE ? [process.env.NEXT_PUBLIC_APP_OG_IMAGE] : [],
    },
    other: {
      "fc:frame": JSON.stringify({
        version: "next",
        imageUrl: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
        button: {
          title: `Launch ${process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME}`,
          action: {
            type: "launch_frame",
            name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
            url: URL,
            splashImageUrl: process.env.NEXT_PUBLIC_APP_SPLASH_IMAGE,
            splashBackgroundColor:
              process.env.NEXT_PUBLIC_SPLASH_BACKGROUND_COLOR,
          },
        },
      }),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
