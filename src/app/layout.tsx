import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Teyj Krishnan | CS @ UMich", template: "%s | Teyj Krishnan" },
  description: "Computer Science student at the University of Michigan focusing on ML, data, and product.",
  metadataBase: new URL("https://teyj.dev"),
  openGraph: {
    title: "Teyj Krishnan | CS @ UMich",
    description: "Portfolio showcasing projects in ML, research, and development.",
    url: "https://teyj.dev",
    siteName: "Teyj Krishnan",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    type: "website"
  },
  twitter: { card: "summary_large_image", images: ["/og.jpg"] },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  alternates: { canonical: "https://teyj.dev" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Teyj Krishnan",
    url: "https://teyj.dev",
    jobTitle: "Student",
    affiliation: { "@type": "CollegeOrUniversity", name: "University of Michigan" },
    sameAs: ["https://www.linkedin.com/in/teyj-krishnan"]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="border-b border-white/10">
          <nav className="container flex h-16 items-center justify-between">
            <a href="/" className="font-semibold tracking-tight">Teyj Krishnan</a>
            <ul className="flex gap-6 text-sm text-white/70">
              <li><a href="#projects" className="hover:text-white transition">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition">Skills</a></li>
              <li><a href="#education" className="hover:text-white transition">Education</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="container py-8 text-xs text-white/50">
          © {new Date().getFullYear()} Teyj Krishnan
        </footer>
      </body>
    </html>
  );
}