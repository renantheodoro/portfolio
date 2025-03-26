import CustomMarkdown from "@/components/CustomMarkdown";
import { useTranslations } from "next-intl";

export const dynamic = 'force-dynamic';

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

function renderTechs(techs: string[]) {
  return (
    <div className="flex flex-row flex-wrap gap-4 mt-4">
      {techs.map((tech, index) => (
        <div key={index} className="text-frame">
          <p>{tech}</p>
        </div>
      ))}
    </div>
  );
}

export default function WorksPage() {
  const t = useTranslations("experiences_page");

  return (
    <>
      <div className="page-title">
        <div className="container">
          <h1>
            <span>/</span>
            {t("title")}
          </h1>

          <div className="flex flex-col mt-6">
            <p>
              <strong>{t("summary.title")}</strong>
            </p>
            <CustomMarkdown>{t("summary.text")}</CustomMarkdown>

            <p>
              <strong></strong>
            </p>
          </div>
        </div>
      </div>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-col justify-start items-start">
              <h2>{t("experiences_list.company1.name")}</h2>
              <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 md:gap-4">
                <h3>
                  <strong>{t("experiences_list.company1.role")}</strong>
                </h3>
                <h4>{t("experiences_list.company1.duration")}</h4>
              </div>
            </div>
          </div>

          <div className="section-block__content gap-4">
            <CustomMarkdown>
              {t("experiences_list.company1.description")}
            </CustomMarkdown>

            <div className="flex flex-row flex-wrap gap-4 mt-4">
              {renderTechs(t("experiences_list.company1.techs")?.split(","))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-col justify-start items-start">
              <h2>{t("experiences_list.company2.name")}</h2>
              <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 md:gap-4">
                <h3>
                  <strong>{t("experiences_list.company2.role")}</strong>
                </h3>
                <h4>{t("experiences_list.company2.duration")}</h4>
              </div>
            </div>
          </div>

          <div className="section-block__content gap-4">
            <CustomMarkdown>
              {t("experiences_list.company2.description")}
            </CustomMarkdown>

            <div className="flex flex-row flex-wrap gap-4 mt-4">
              {renderTechs(t("experiences_list.company2.techs")?.split(","))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-col justify-start items-start">
              <h2>{t("experiences_list.company3.name")}</h2>
              <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 md:gap-4">
                <h3>
                  <strong>{t("experiences_list.company3.role")}</strong>
                </h3>
                <h4>{t("experiences_list.company3.duration")}</h4>
              </div>
            </div>
          </div>

          <div className="section-block__content gap-4">
            <CustomMarkdown>
              {t("experiences_list.company3.description")}
            </CustomMarkdown>

            <div className="flex flex-row flex-wrap gap-4 mt-4">
              {renderTechs(t("experiences_list.company3.techs")?.split(","))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-col justify-start items-start">
              <h2>{t("experiences_list.company4.name")}</h2>
              <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 md:gap-4">
                <h3>
                  <strong>{t("experiences_list.company4.role")}</strong>
                </h3>
                <h4>{t("experiences_list.company4.duration")}</h4>
              </div>
            </div>
          </div>

          <div className="section-block__content gap-4">
            <CustomMarkdown>
              {t("experiences_list.company4.description")}
            </CustomMarkdown>

            <div className="flex flex-row flex-wrap gap-4 mt-4">
              {renderTechs(t("experiences_list.company4.techs")?.split(","))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-col justify-start items-start">
              <h2>{t("experiences_list.company5.name")}</h2>
              <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 md:gap-4">
                <h3>
                  <strong>{t("experiences_list.company5.role")}</strong>
                </h3>
                <h4>{t("experiences_list.company5.duration")}</h4>
              </div>
            </div>
          </div>

          <div className="section-block__content gap-4">
            <CustomMarkdown>
              {t("experiences_list.company5.description")}
            </CustomMarkdown>

            <div className="flex flex-row flex-wrap gap-4 mt-4">
              {renderTechs(t("experiences_list.company5.techs")?.split(","))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-col justify-start items-start">
              <h2>{t("experiences_list.company6.name")}</h2>
              <div className="flex flex-col md:flex-row justify-start md:items-center gap-2 md:gap-4">
                <h3>
                  <strong>{t("experiences_list.company6.role")}</strong>
                </h3>
                <h4>{t("experiences_list.company6.duration")}</h4>
              </div>
            </div>
          </div>

          <div className="section-block__content gap-4">
            <CustomMarkdown>
              {t("experiences_list.company6.description")}
            </CustomMarkdown>

            <div className="flex flex-row flex-wrap gap-4 mt-4">
              {renderTechs(t("experiences_list.company6.techs")?.split(","))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
