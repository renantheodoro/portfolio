import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/layout.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Renan Theodoro | Front-End & Mobile Developer",
  description:
    "Welcome to my developer portfolio. I specialize in front-end and mobile development, building dynamic web and mobile applications using React, Next.js, Flutter, and more.",
  keywords:
    "front-end developer, mobile developer, React, Next.js, Flutter, web development, UI/UX, JavaScript, HTML, CSS, TypeScript, app development, software development, clean code, responsive design, mobile apps, user interfaces, web applications",
  author: "Your Name",
  robots: "index, follow", // Ensures the page is indexed and followed by search engines
  og: {
    title: "Renan Theodoro | Front-End & Mobile Developer",
    description:
      "Explore my work in front-end and mobile development. View projects, skills, and my approach to building modern applications.",
    image: "/path-to-your-image.jpg", // Add your image for social sharing
    url: "https://yourwebsite.com", // Replace with your actual website URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio | Front-End & Mobile Developer",
    description: "Explore my work in front-end and mobile development.",
    image: "/path-to-your-image.jpg", // Add your image for Twitter card
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <head>
        {/* Meta tags for SEO */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Add any other SEO-related meta tags here */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
