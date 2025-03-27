import { useTranslations } from "next-intl";
import Image from "next/image";

import SectionBlock from "@/components/molecules/SectionBlock";
import SkillBlock from "@/components/molecules/SkillBlock";

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

export default function SkillsSection() {
  const t = useTranslations("home_page");

  return (
    <SectionBlock title={t("skills_section.title")}>
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
          title={t("skills_section.skills_list.languages_title")}
          skills={["Javascript", "Dart", "Typescript"]}
        />
        <SkillBlock
          title={t("skills_section.skills_list.frameworks_title")}
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
          title={t("skills_section.skills_list.tools_devops_title")}
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
          title={t("skills_section.skills_list.databases_title")}
          skills={["Firebase"]}
          skillDescription="Firestore, Realtime Database"
        />
      </div>
      <div className="flex flex-col flex-1 basis-full md:basis-[calc(25%-4rem)] lg:basis-[calc(20%-4rem)] space-y-4">
        <SkillBlock
          title={t("skills_section.skills_list.arch_best_practices_title")}
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
          title={t("skills_section.skills_list.other_skills_title")}
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
          title={t("skills_section.skills_list.testings_title")}
          skills={["Jest Provider", "BLoC", "Jasmine"]}
        />
      </div>
    </SectionBlock>
  );
}
