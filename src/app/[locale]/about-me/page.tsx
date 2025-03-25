import { useTranslations } from "next-intl";
import styles from "@/styles/pages/AboutMe.module.scss";
import Image from "next/image";
import SkillBlock from "@/components/SkillBlock";
import CustomMarkdown from "@/components/CustomMarkdown";

export default function AboutMePage() {
  const homeT = useTranslations("home_page");
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

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <h2>
                <span>#</span>
                {homeT("skills_section.title")}
              </h2>
              <div className="hidden md:block section-block__header__line"></div>
            </div>
          </div>

          <div className="section-block__content flex flex-wrap justify-between gap-4">
            <div className="hidden lg:flex flex-col flex-1 basis-full lg:basis-[calc(20%-4rem)] space-y-4">
              <Image
                src="/svg/skills-shapes.svg"
                alt="shapes"
                width={0}
                height={0}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  objectPosition: "0 0",
                }}
              />
            </div>
            <div className="flex flex-col flex-1 basis-full md:basis-[calc(25%-4rem)] lg:basis-[calc(20%-4rem)] space-y-4">
              <SkillBlock
                title={homeT("skills_section.skills_list.languages_title")}
                skills={["Javascript", "Dart", "Typescript"]}
              />
              <SkillBlock
                title={homeT("skills_section.skills_list.frameworks_title")}
                skills={[
                  "Flutter React",
                  "React Native",
                  "Next.js",
                  "Vuejs",
                  "Angular",
                  "Node.js",
                  "NestJS",
                ]}
              />
            </div>
            <div className="flex flex-col flex-1 basis-full md:basis-[calc(25%-4rem)] lg:basis-[calc(20%-4rem)] space-y-4">
              <SkillBlock
                title={homeT("skills_section.skills_list.tools_devops_title")}
                skills={[
                  "Git",
                  "Git Flow",
                  "Github Flow",
                  "Docker",
                  "Firebase Hosting & Functions",
                  "GitHub Actions",
                ]}
                startsWithBold={false}
              />
              <SkillBlock
                title={homeT("skills_section.skills_list.databases_title")}
                skills={["Firebase"]}
                skillDescription="Firestore, Realtime Database"
              />
            </div>
            <div className="flex flex-col flex-1 basis-full md:basis-[calc(25%-4rem)] lg:basis-[calc(20%-4rem)] space-y-4">
              <SkillBlock
                title={homeT(
                  "skills_section.skills_list.arch_best_practices_title"
                )}
                skills={[
                  "Clean Architecture",
                  "MVVM",
                  "BEM (SCSS)",
                  "SOLID Principles",
                  "Design Systems",
                ]}
              />
            </div>
            <div className="flex flex-col flex-1 basis-full md:basis-[calc(25%-4rem)] lg:basis-[calc(20%-4rem)] space-y-4">
              <SkillBlock
                title={homeT("skills_section.skills_list.other_skills_title")}
                skills={[
                  "REST API GraphQL",
                  "HTML5",
                  "SASS",
                  "Cordova Ionic",
                  "Agile (Scrum)",
                  "Clean Code",
                ]}
              />
              <SkillBlock
                title={homeT("skills_section.skills_list.testings_title")}
                skills={["Jest Provider", "BLoC", "Jasmine"]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className={`${styles["background-logo-shape"]} container`}>
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <h2>
                <span>#</span>
                {t("fun_facts_section.title")}
              </h2>
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
