import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Raghu Samreddy — Senior DevOps & Platform Engineer",
  description:
    "12+ years building scalable, resilient, and automated infrastructure platforms. Expert in Kubernetes, Terraform, AWS, Azure, and DevOps at enterprise scale.",
  keywords: [
    "DevOps Engineer",
    "Platform Engineer",
    "Site Reliability Engineer",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Azure",
    "Infrastructure Engineer",
    "Raghu Samreddy",
  ],
  authors: [{ name: "Raghu Samreddy" }],
  openGraph: {
    title: "Raghu Samreddy — Senior DevOps & Platform Engineer",
    description: "12+ years building scalable, resilient, and automated infrastructure platforms.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghu Samreddy — Senior DevOps & Platform Engineer",
    description: "12+ years building scalable, resilient, and automated infrastructure platforms.",
  },
  robots: { index: true, follow: true },
}

const themeScript = `(function(){try{var s=localStorage.getItem('theme');var p=s||(window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',p)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})();`

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-[var(--color-background)] text-[var(--color-text-primary)] min-h-screen transition-colors duration-300">
        {children}
      </body>
    </html>
  )
}
