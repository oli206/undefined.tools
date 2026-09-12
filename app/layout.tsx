import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://undefined.tools"),
  title: {
    default: "undefined.tools — Projects by Oliver Carabia",
    template: "%s — undefined.tools",
  },
  description:
    "Software projects and early-stage ideas by Oliver Carabia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "undefined.tools",
    description:
      "Software projects and early-stage ideas by Oliver Carabia.",
    siteName: "undefined.tools",
    type: "website",
    url: "https://undefined.tools",
  },
  twitter: {
    card: "summary",
    title: "undefined.tools",
    description:
      "Software projects and early-stage ideas by Oliver Carabia.",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
