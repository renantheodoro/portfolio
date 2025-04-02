import { useTranslations } from "next-intl";

import CustomMarkdown from "@/components/molecules/CustomMarkdown";
import { Link } from "@/i18n/natigation";

interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
  linkSection?: string;
}

export default function SectionBlock({
  title,
  children,
  linkSection,
}: SectionBlockProps) {
  const t = useTranslations("section_block");

  return (
    <section className="section-block">
      <div className="container">
        <div className="section-block__header">
          <div className="flex flex-row justify-start items-center">
            <CustomMarkdown tag="h2" hasHashtag>
              {title}
            </CustomMarkdown>
          </div>
          {linkSection ? (
            <Link href={linkSection}>{t("view_all")} ~~&gt;</Link>
          ) : null}
        </div>

        <div className="section-block__content gap-4">{children}</div>
      </div>
    </section>
  );
}
