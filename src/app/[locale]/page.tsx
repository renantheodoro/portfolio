import { useTranslations } from "next-intl";
import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import Button from "@/components/atoms/ButtonLink";
import CustomMarkdown from "@/components/molecules/CustomMarkdown";
import WorksSection from "@/components/organisms/WorksSection";
import SkillsSection from "@/components/organisms/SkillsSection";
import ContactContent from "@/components/molecules/ContactContent";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const t = useTranslations("home_page");

  return (
    <div className="flex flex-col">
      <section
        className={`
          ${styles["main-section"]} 
        `}
      >
        <div className="container flex flex-col md:flex-row lg:flex-rowjustify-between items-center">
          <div className="w-full md:w-1/2 lg:w-1/2 pl-1">
            <CustomMarkdown
              tag="h2"
              customClass={`${styles["main-section__title"]}`}
            >
              {t("main_section.title")}
            </CustomMarkdown>

            <p className={`${styles["main-section__text"]}`}>
              {t("main_section.text")}
            </p>
            <Button path="/contacts" text={t("main_section.button_text")} />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col pl-1">
            <Image
              src="/images/main-profile-image.png"
              alt="Renan Theodoro"
              width={500}
              height={500}
            />

            <div className="text-frame text-frame--center">
              <div className="text-frame__shape"></div>
              <CustomMarkdown>
                {t("main_section.current_job_info")}
              </CustomMarkdown>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`
          ${styles["quote-section"]} 
            flex justify-center items-center
        `}
      >
        <div className="flex flex-col justify-center items-end">
          <h3
            className={`${styles["quote-section__sentence"]} ${styles["quote-section__sentence--bigger"]}`}
          >
            {t("quote_section.quote")}
          </h3>
          <h3
            className={`${styles["quote-section__sentence"]} ${styles["quote-section__sentence--smaller"]}`}
          >
            {t("quote_section.author")}
          </h3>
        </div>
      </section>

      <WorksSection
        showSummary={true}
        completeAppsSectionTitle={t("projects_section.title")}
      />

      <SkillsSection />

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <CustomMarkdown tag="h2" hasHashtag>
                {t("about_section.title")}
              </CustomMarkdown>
              <div className="hidden md:block lg:block section-block__header__line"></div>
            </div>
          </div>

          <div className="section-block__content justify-between">
            <div className="w-full flex-col md:w-1/2 lg:w-1/2">
              <CustomMarkdown>{t("about_section.content")}</CustomMarkdown>

              <div className="mt-8">
                <Button
                  path="/about-me"
                  text={`${t("about_section.button_text")} ->`}
                />
              </div>
            </div>
            <div className="hidden md:flex w-full md:w-1/2 lg:w-1/2 justify-end">
              <Image
                src="/images/about-me-home.png"
                alt="Renan Theodoro"
                width={327}
                height={450}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <CustomMarkdown tag="h2" hasHashtag>
                {t("contacts_section.title")}
              </CustomMarkdown>

              <div className="hidden md:block section-block__header__line"></div>
            </div>
          </div>

          <div className="section-block__content justify-between">
            <ContactContent />
          </div>
        </div>
      </section>
    </div>
  );
}
