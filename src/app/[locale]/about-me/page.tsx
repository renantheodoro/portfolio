import { useTranslations } from "next-intl";
import styles from "@/styles/pages/AboutMe.module.scss";
import Image from "next/image";
import CustomMarkdown from "@/components/molecules/CustomMarkdown";
import SkillsSection from "@/components/organisms/SkillsSection";

export const dynamic = "force-dynamic";

export default function AboutMePage() {
  const t = useTranslations("about_me_page");

  return (
    <div
      className={`
      ${styles["about-me-page"]}
    `}
    >
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
          <div className="section-block__content justify-between items-start">
            <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col pr-1">
              <CustomMarkdown>{t("content")}</CustomMarkdown>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col justify-start pl-1">
              <Image
                src="/images/main-profile-image.png"
                alt="Renan Theodoro"
                width={500}
                height={500}
                className="-mt-15"
              />
            </div>
          </div>
        </div>
      </section>

      <SkillsSection />

      <section className="section-block">
        <div className={`${styles["background-logo-shape"]} container`}>
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <CustomMarkdown tag="h2" hasHashtag={true}>
                {t("fun_facts_section.title")}
              </CustomMarkdown>
            </div>
          </div>

          <div className="section-block__content justify-start gap-4">
            <div className="text-frame text-frame--white-highlights">
              <CustomMarkdown>
                {t("fun_facts_section.fun_fact_1")}
              </CustomMarkdown>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <CustomMarkdown>
                {t("fun_facts_section.fun_fact_2")}
              </CustomMarkdown>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <CustomMarkdown>
                {t("fun_facts_section.fun_fact_3")}
              </CustomMarkdown>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <CustomMarkdown>
                {t("fun_facts_section.fun_fact_4")}
              </CustomMarkdown>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <CustomMarkdown>
                {t("fun_facts_section.fun_fact_5")}
              </CustomMarkdown>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <CustomMarkdown>
                {t("fun_facts_section.fun_fact_6")}
              </CustomMarkdown>
            </div>

            <div className="text-frame flex text-frame--white-highlights">
              <CustomMarkdown>
                {t("fun_facts_section.fun_fact_7")}
              </CustomMarkdown>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
