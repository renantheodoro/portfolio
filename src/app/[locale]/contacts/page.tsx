import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";
import ContactContent from "@/components/molecules/ContactContent";

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return [
    {
      locale: "pt",
    },
    {
      locale: "en",
    },
  ];
}

export default function ContactsPage() {
  const t = useTranslations("contacts_page");

  return (
    <>
      <div className="page-title">
        <div className="container">
          <h1>
            <span>/</span>
            {t("title")}
          </h1>
        </div>
      </div>

      <section className="section-block">
        <div className="container">
          <div className="section-block__content justify-between">
            <ContactContent />
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <h2>
                <span>#</span>
                {t("all_media_section.title")}
              </h2>
              <div className="hidden md:block section-block__header__line"></div>
            </div>
          </div>

          <div className="section-block__content flex flex-row flex-wrap items-start gap-8">
            <Link
              href="https://www.instagram.com/renantheodoro"
              target="_blank"
              className="flex flex-row items-center"
            >
              <Image
                src="/svg/instagram.svg"
                alt="instagram"
                width={32}
                height={32}
              />
              <span className="ml-2">Instagram</span>
            </Link>

            <Link
              href="https://github.com/renantheodoro"
              target="_blank"
              className="flex flex-row items-center"
            >
              <Image
                src="/svg/github.svg"
                alt="github"
                width={32}
                height={32}
              />
              <span className="ml-2">Github</span>
            </Link>

            <Link
              href="https://www.linkedin.com/in/renantheodoro/"
              target="_blank"
              className="flex flex-row items-center"
            >
              <Image
                src="/svg/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
              />
              <span className="ml-2">Linkedin</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
