import WorksSection from "@/components/organisms/WorksSection";
import { useTranslations } from "next-intl";

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

export default function WorksPage() {
  const t = useTranslations("works_page");

  return (
    <>
      <div className="page-title">
        <div className="container">
          <h1>
            <span>/</span>
            {t("title")}
          </h1>
          <p>{t("subtitle")}</p>
        </div>
      </div>

      <WorksSection />
    </>
  );
}
