import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import localeEn from "../../../public/messages/en.json";
import localePt from "../../../public/messages/pt.json";
import '../../styles/globals.css';
import '../../styles/layout.scss';

// Use `generateStaticProps` instead of `getStaticProps` in the new app structure
export const generateStaticProps = async ({
  params,
}: {
  params: { locale: string };
}) => {
  const { locale } = params;

  const metadata = {
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

  let translations;

  if (locale === "en") {
    translations = localeEn;
  } else if (locale === "pt") {
    translations = localePt;
  }

  return {
    props: {
      messages: translations, // Translation messages
      seo: metadata, // SEO data
    },
  };
};

export async function generateStaticParams() {
  return ["en", "pt"].map((locale) => ({
    locale,
  }));
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: React.ReactNode;
  params: { locale: string };
  messages: Record<string, string>;
  seo: {
    title: string;
    description: string;
    keywords: string;
    author: string;
    robots: string;
    og: {
      title: string;
      description: string;
      image: string;
      url: string;
      type: string;
    };
    twitter: {
      card: string;
      title: string;
      description: string;
      image: string;
    };
  };
};

export default function RootLayout({
  children,
  params,
  messages,
  seo,
}: RootLayoutProps) {
  const { locale } = params;

  // Verificação do locale
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const seoData = seo || {
    description: "Default description",
    keywords: "default, keywords",
    author: "Your Name",
    robots: "index, follow",
    og: {
      title: "Default Title",
      description: "Default Open Graph description",
      image: "/default-image.jpg",
      url: "https://yourwebsite.com",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Default Twitter Title",
      description: "Default Twitter description",
      image: "/default-image.jpg",
    },
  };

  return (
    <html lang={locale}>
      <head>
        {/* Meta tags for SEO */}
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <meta name="author" content={seoData.author} />
        <meta name="robots" content={seoData.robots} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seoData.og.title} />
        <meta property="og:description" content={seoData.og.description} />
        <meta property="og:image" content={seoData.og.image} />
        <meta property="og:url" content={seoData.og.url} />
        <meta property="og:type" content={seoData.og.type} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={seoData.twitter.card} />
        <meta name="twitter:title" content={seoData.twitter.title} />
        <meta name="twitter:description" content={seoData.twitter.description} />
        <meta name="twitter:image" content={seoData.twitter.image} />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header initialLanguage={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
