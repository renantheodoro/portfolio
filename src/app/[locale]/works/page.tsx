import { useTranslations } from "next-intl";
import Button from "@/components/ButtonLink";
import ProjectItem from "@/components/ProjectItem";

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

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <h2>
                <span>#</span>
                {t("complete_apps_section.title")}
              </h2>
            </div>
          </div>

          <div className="section-block__content gap-4">
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
              mediaPath="/images/project-1.png"
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
              mediaPath="/images/project-1.png"
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
              mediaPath="/images/project-1.png"
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
              mediaPath="/images/project-1.png"
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
              mediaPath="/images/project-1.png"
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <h2>
                <span>#</span>
                {t("small_projects_section.title")}
              </h2>
            </div>
          </div>

          <div className="section-block__content gap-4">
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python", "HTML", "SCSS", "Python"]}
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
          </div>
        </div>
      </section>
    </>
  );
}
