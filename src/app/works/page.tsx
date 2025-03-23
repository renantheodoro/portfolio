import Button from "@/components/ButtonLink";
import ProjectItem from "@/components/ProjectItem";

export default function WorksPage() {
  return (
    <>
      <div className="page-title">
        <div className="container">
          <h1>
            <span>/</span>projects
          </h1>
          <p>List of my projects</p>
        </div>
      </div>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <h2>
                <span>#</span>complete-apps
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
                <span>#</span>small-projects
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
