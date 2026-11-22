import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyansh Pal — Visual Storyteller",
  description: "Photography, cinematography, video editing and visual design by Priyansh Pal.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Priyansh Pal — Visual Storyteller",
    description: "I create. I capture. I tell stories.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="grain">{children}</body></html>;
}
