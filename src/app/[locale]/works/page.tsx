import { useTranslations } from "next-intl";
import ButtonLink from "@/components/ButtonLink";
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
            {/* NEXT PORTFOLIO WEBSITE */}
            <ProjectItem
              title={t("complete_apps_section.projects_list.project1.title")}
              description={t(
                "complete_apps_section.projects_list.project1.description"
              )}
              techs={["React", "Next.js", "TypeScript", "SCSS", "i18n"]}
              mediaPath="/images/project-1.png"
            >
              <ButtonLink path="https://renantheodoro.dev/" text="Live <~>" />
              <ButtonLink
                path="https://github.com/renantheodoro/portfolio"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* URL SHORTENER */}
            <ProjectItem
              title={t("complete_apps_section.projects_list.project2.title")}
              description={t(
                "complete_apps_section.projects_list.project2.description"
              )}
              techs={[
                "Flutter",
                "Dart",
                "Clean Architeture",
                "Provider Testings",
                "API Rest Integration",
              ]}
              mediaPath="/images/thumb-url-shortener.jpg"
            >
              <ButtonLink
                path="https://url-shortener-app-f8e57.web.app/"
                text="Live <~>"
              />
              <ButtonLink
                path="https://github.com/renantheodoro/url_shortener"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* PJZEN WEBSITE */}
            <ProjectItem
              title={t("complete_apps_section.projects_list.project3.title")}
              description={t(
                "complete_apps_section.projects_list.project3.description"
              )}
              techs={[
                "Vuejs",
                "HTML5",
                "SASS",
                "Node.js",
                "Express",
                "Axios",
                "RESTful API",
                "JSON",
                "CORS",
                "MVC",
                "Firebase Hosting",
                "Firebase Functions",
                "Lazyload",
              ]}
              mediaPath="/images/thumb-pjzen-website.jpg"
            >
              <ButtonLink path="https://pjzen-v2.web.app/" text="Live <~>" />
              <ButtonLink
                path="https://github.com/renantheodoro/pjzen-2.0"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* SUA SEDE WEBSITE */}
            <ProjectItem
              title={t("complete_apps_section.projects_list.project4.title")}
              description={t(
                "complete_apps_section.projects_list.project4.description"
              )}
              techs={[
                "Vuejs",
                "HTML5",
                "SASS",
                "MVC",
                "Firebase Hosting",
                "Materialize css",
              ]}
              mediaPath="/images/thumb-sua-sede.jpg"
            >
              <ButtonLink
                path="https://sua-sede-f1f32.web.app/"
                text="Live <~>"
              />
              <ButtonLink
                path="https://github.com/renantheodoro/sua-sede"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* PJZEN PLATFORM */}
            <ProjectItem
              title={t("complete_apps_section.projects_list.project5.title")}
              description={t(
                "complete_apps_section.projects_list.project5.description"
              )}
              techs={[
                "Vue.js",
                "Node.js",
                "Express",
                "Firebase",
                "Firebase Functions",
                "Firestore",
                "Plug Notas API",
              ]}
              mediaPath="/images/thumb-pjzen-platform.jpg"
            >
              <ButtonLink
                path="https://pjzen-plataform-dev.web.app/"
                text="Live <~>"
              />
              <ButtonLink
                path="https://github.com/renantheodoro/pjzen-platform"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* INDFER WEBSITE */}
            <ProjectItem
              title={t("complete_apps_section.projects_list.project6.title")}
              description={t(
                "complete_apps_section.projects_list.project6.description"
              )}
              techs={["Vue.js", "SCSS", "GraphQL", "Prismic CMS"]}
              mediaPath="/images/thumb-indfer-website.jpg"
            >
              <ButtonLink path="https://indfer.com.br/" text="Live <~>" />
              <ButtonLink
                path="https://github.com/renantheodoro/indfer"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* INCIPIT WEBSITE */}
            <ProjectItem
              title={t("complete_apps_section.projects_list.project7.title")}
              description={t(
                "complete_apps_section.projects_list.project7.description"
              )}
              techs={["Vue.js", "SCSS", "GraphQL", "Prismic CMS"]}
              mediaPath="/images/thumb-incipit-website.jpg"
            >
              <ButtonLink
                path="https://incipit-1e948.web.app/"
                text="Live <~>"
              />
              <ButtonLink
                path="https://github.com/renantheodoro/indfer"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* OLD PORTFOLIO */}
            <ProjectItem
              title={t("complete_apps_section.projects_list.project8.title")}
              description={t(
                "complete_apps_section.projects_list.project8.description"
              )}
              techs={["HTML5", "SASS", "Photoshop", "UX"]}
              mediaPath="/images/thumb-old-portfolio.jpg"
            >
              <ButtonLink
                path="https://mysite-fdf87.web.app/"
                text="Live <~>"
              />
              <ButtonLink
                path="https://github.com/renantheodoro/personal-website"
                text="Github >="
                type="secondary"
              />
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
            {/* CORONA VIRUS */}
            <ProjectItem
              title={t("small_projects_section.projects_list.project1.title")}
              description={t(
                "small_projects_section.projects_list.project1.description"
              )}
              techs={["Vuejs", "AWS", "SASS", "Axios", "API REST"]}
            >
              {/* <ButtonLink path="/" text="Live <~>" /> */}
              <ButtonLink
                path="https://github.com/renantheodoro/coronavirus-casos-brasil"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* LEAFLET MAP ANGULAR */}
            <ProjectItem
              title={t("small_projects_section.projects_list.project2.title")}
              description={t(
                "small_projects_section.projects_list.project2.description"
              )}
              techs={["Angular", "Materialize css", "Leaflet", "Mock"]}
            >
              {/* <ButtonLink path="/" text="Live <~>" /> */}
              <ButtonLink
                path="https://github.com/renantheodoro/leaflet-map-test"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* MAP LIST NAVIGATOR FLUTTER */}
            <ProjectItem
              title={t("small_projects_section.projects_list.project3.title")}
              description={t(
                "small_projects_section.projects_list.project3.description"
              )}
              techs={["Angular", "Materialize css", "Leaflet", "Mock"]}
            >
              {/* <ButtonLink path="/" text="Live <~>" /> */}
              <ButtonLink
                path="https://github.com/renantheodoro/map_list_navigator"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* URL SHORTENER API */}
            <ProjectItem
              title={t("small_projects_section.projects_list.project4.title")}
              description={t(
                "small_projects_section.projects_list.project4.description"
              )}
              techs={[
                "Node.js",
                "Expressjs",
                "API Rest",
                "Firebase Functions",
                "Firestore Database",
              ]}
            >
              {/* <ButtonLink path="/" text="Live <~>" /> */}
              <ButtonLink
                path="https://github.com/renantheodoro/multi-talentos"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>

            {/* MULTI TALENTOS */}
            <ProjectItem
              title={t("small_projects_section.projects_list.project5.title")}
              description={t(
                "small_projects_section.projects_list.project5.description"
              )}
              techs={["Angular", "CSS3", "Local Storage"]}
            >
              {/* <ButtonLink path="/" text="Live <~>" /> */}
              <ButtonLink
                path="https://github.com/renantheodoro/multi-talentos"
                text="Github >="
                type="secondary"
              />
            </ProjectItem>
          </div>
        </div>
      </section>
    </>
  );
}
