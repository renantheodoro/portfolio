import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import localeEn from "../../../public/messages/en.json";
import localePt from "../../../public/messages/pt.json";
import "../../styles/globals.scss";
import "../../styles/layout.scss";

// Gerar metadados dinâmicos com base no idioma
export const generateMetadata = async ({
  params,
}: {
  params: { locale: string };
}) => {
  const { locale } = params;
  const metadataBase = new URL("https://www.renantheodoro.dev");

  const title =
    locale === "en"
      ? "Renan Theodoro | Front-End & Mobile Developer"
      : "Renan Theodoro | Desenvolvedor Front-End & Mobile";
  const description =
    locale === "en"
      ? "Welcome to my developer portfolio. I specialize in front-end and mobile development, building dynamic web and mobile applications using React, Next.js, Flutter, and more."
      : "Bem-vindo ao meu portfólio de desenvolvedor. Eu me especializo no desenvolvimento front-end e mobile, criando aplicações dinâmicas para web e mobile usando React, Next.js, Flutter, e mais.";

  return {
    title,
    description,
    keywords:
      "front-end developer, mobile developer, React, Next.js, Flutter, web development, UI/UX, JavaScript, HTML, CSS, TypeScript, app development, software development, clean code, responsive design, mobile apps, user interfaces, web applications",
    author: "Renan Theodoro",
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: "https://www.renantheodoro.dev",
      siteName: "Renan Theodoro",
      images: [{ url: "/path-to-your-image.jpg", width: 1200, height: 630 }],
      locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/path-to-your-image.jpg"],
    },
    icons: {
      icon: [
        {
          url: "/favicon/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          url: "/favicon/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        { url: "/favicon/favicon.ico", type: "image/x-icon" },
      ],
      other: [
        { rel: "manifest", url: "/manifest.json" },
        { rel: "msapplication-config", url: "/browserconfig.xml" },
        {
          rel: "msapplication-TileImage",
          url: "/ms-icon-144x144.png",
          sizes: "144x144",
        },
      ],
    },
    metadataBase,
  };
};

export async function generateStaticParams() {
  return ["en", "pt"].map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = locale === "en" ? localeEn : localePt;

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header initialLanguage={locale} />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
