import { useTranslations } from "next-intl";

import Link from "next/link";
import Image from "next/image";
import CustomMarkdown from "@/components/CustomMarkdown";

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
            <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col pr-1">
              <CustomMarkdown>{t("content")}</CustomMarkdown>
            </div>
            <div className="flex items-center justify-end w-full md:w-1/2 lg:w-1/2 ">
              <div className="text-frame text-frame--medium-pad flex-shrink-0 flex flex-col items-start justify-start">
                <p>
                  <strong>{t("message_me")}</strong>
                </p>

                <div className="flex flex-row mt-4">
                  <div className="flex flex-col justify-center items-start gap-1">
                    <Link
                      href="mailto:renan.b.theodoro@gmail.com"
                      target="_blank"
                      className="flex flex-row items-center"
                    >
                      <Image
                        src="/svg/email.svg"
                        alt="email"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2">renan.b.theodoro@gmail.com</span>
                    </Link>

                    <Link
                      href="tel:5511936190701"
                      target="_blank"
                      className="flex flex-row items-center"
                    >
                      <Image
                        src="/svg/telegram.svg"
                        alt="telegram"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2">+55 (11) 93619-0701</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
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
