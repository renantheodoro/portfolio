import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import CustomMarkdown from "@/components/molecules/CustomMarkdown";

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

export default function ContactContent() {
  const t = useTranslations("home_page");

  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col pr-1">
        <CustomMarkdown>{t("contacts_section.content")}</CustomMarkdown>
      </div>
      <div className="flex items-center justify-end w-full md:w-1/2 lg:w-1/2 ">
        <div className="text-frame text-frame--medium-pad flex-shrink-0 flex flex-col items-start justify-start">
          <p>
            <strong>{t("contacts_section.message_me")}</strong>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
