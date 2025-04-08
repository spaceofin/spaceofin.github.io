import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navigation from "./components/navigation";
import { PostProvider } from "./contexts/PostContext";

export const metadata: Metadata = {
  title: "Spaceofin Logs",
  description: "A blog for study logs",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <PostProvider>
        <body>
          <Navigation />
          <div className="flex justify-center py-10">
            <div className="page-background">{children}</div>
          </div>
        </body>
      </PostProvider>
    </html>
  );
}
