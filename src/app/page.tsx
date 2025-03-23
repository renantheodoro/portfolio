import Image from "next/image";
import styles from "@/styles/pages/Home.module.scss";
import Link from "next/link";
import Button from "@/components/ButtonLink";
import ProjectItem from "@/components/ProjectItem";
import SkillBlock from "@/components/SkillBlock";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section
        className={`
          ${styles["main-section"]} 
        `}
      >
        <div className="container flex flex-col md:flex-row lg:flex-row w-full justify-between items-center">
          <div className="w-full md:w-1/2 lg:w-1/2 pl-1">
            <h2 className={`${styles["main-section__title"]}`}>
              Renan is a <strong>front-end</strong> and <strong>mobile</strong>{" "}
              developer
            </h2>
            <p className={`${styles["main-section__text"]}`}>
              He builds scalable and efficient solutions using modern
              technologies.
            </p>
            <Button path="/contacts" text="GET IN TOUCH" />
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
              <p>
                Currently working at <strong>Santander</strong>
              </p>
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
            The only way to go fast is to go well.
          </h3>
          <h3
            className={`${styles["quote-section__sentence"]} ${styles["quote-section__sentence--smaller"]}`}
          >
            - Robin C. Martin
          </h3>
        </div>
      </section>

      <section className="section-block">
        <div className="container">
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <h2>
                <span>#</span>projects
              </h2>
              <div className="hidden md:block section-block__header__line"></div>
            </div>
            <Link href="/works">View all ~~&gt;</Link>
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
              techs={["HTML", "SCSS", "Python"]}
              mediaPath="/images/project-1.png"
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python"]}
              mediaPath="/images/project-1.png"
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python"]}
              mediaPath="/images/project-1.png"
            >
              <Button path="/" text="Live <~>" />
              <Button path="/" text="Cached >=" type="secondary" />
            </ProjectItem>
            <ProjectItem
              title="ChertNodes"
              description="Minecraft servers hosting"
              techs={["HTML", "SCSS", "Python"]}
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
                <span>#</span>skills
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
                title="Languages"
                skills={["Javascript", "Dart", "Typescript"]}
              />
              <SkillBlock
                title="Frameworks & Libraries"
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
                title="Tools & Devops"
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
                title="Databases"
                skills={["Firebase"]}
                skillDescription="Firestore, Realtime Database"
              />
            </div>
            <div className="flex flex-col flex-1 basis-full md:basis-[calc(25%-4rem)] lg:basis-[calc(20%-4rem)] space-y-4">
              <SkillBlock
                title="Architecture & Best Practices"
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
                title="Other Skills"
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
                title="Testings"
                skills={["Jest Provider", "BLoC", "Jasmine"]}
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
                <span>#</span>about-me
              </h2>
              <div className="hidden md:block lg:block section-block__header__line"></div>
            </div>
          </div>

          <div className="section-block__content justify-between">
            <div className="w-full flex-col md:w-1/2 lg:w-1/2">
              <p>
                <strong>Who am I?</strong>
              </p>

              <p>Hello, i’m Renan Theodoro!</p>

              <p>
                I’m a Senior Software Developer with{" "}
                <strong>over 10 years of experience</strong>
                in <strong>web and mobile</strong> app development, I specialize
                in frameworks like <strong>Flutter, React, Angular</strong>, and{" "}
                <strong>Vue.js</strong>, focusing on{" "}
                <strong>performance</strong>,<strong>scalability</strong>, and{" "}
                <strong>clean software architecture</strong>. I’m passionate
                about
                <strong>Clean Code</strong>, <strong>SOLID principles</strong>,
                and creating <strong>maintainable</strong>,{" "}
                <strong>high-quality</strong>
                solutions. My skills extend to <strong>API integration</strong>,
                <strong>state management</strong>, and{" "}
                <strong>full-stack development</strong> with technologies like
                <strong>Node.js, Firebase</strong>, and <strong>PHP</strong>.
                Currently, I’m expanding my expertise in{" "}
                <strong>Next.js</strong> and <strong>React Native</strong>.{" "}
                <strong>Let’s build something amazing together</strong>!
              </p>

              <div className="mt-8">
                <Button path="/about-me" text="Read more ->" />
              </div>
            </div>
            <div className="hidden md:flex w-full md:w-1/2 lg:w-1/2 justify-end">
              <Image
                src="/images/about-me-home.png"
                alt="Renan Theodoro"
                width={327} // Defina a largura desejada
                height={450} // Defina a altura desejada
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
                <span>#</span>contacts
              </h2>
              <div className="hidden md:block section-block__header__line"></div>
            </div>
          </div>

          <div className="section-block__content justify-between">
            <div className="flex w-full md:w-1/2 lg:w-1/2">
              <p>
                If you&apos;re seeking an{" "}
                <strong>experienced software developer</strong>, I&apos;d love
                to connect and discuss how I can{" "}
                <strong>contribute to your team</strong>. With expertise in
                <strong>front-end development</strong>,{" "}
                <strong>modern web frameworks</strong>, and{" "}
                <strong>mobile app development</strong>, I&apos;m confident in
                delivering <strong>scalable</strong>,{" "}
                <strong>high-quality solutions</strong>. <br />
                Let’s connect and explore opportunities to work together!
              </p>
            </div>
            <div className="flex items-center justify-end w-full md:w-1/2 lg:w-1/2 ">
              <div className="text-frame text-frame--medium-pad flex-shrink-0 flex flex-col items-start justify-start">
                <p>
                  <strong>Message me here</strong>
                </p>

                <div className="flex flex-row mt-4">
                  <div className="flex flex-col justify-center items-start gap-1">
                    <Link
                      href="mailto:renan.b.theodoro@gmail.com"
                      target="_blank"
                      className="flex flex-row items-center"
                    >
                      <Image
                        src="/svg/email.svg"
                        alt="email"
                        width={32}
                        height={32}
                      />
                      <span className="ml-2">renan.b.theodoro@gmail.com</span>
                    </Link>

                    <Link
                      href="tel:5511936190701"
                      target="_blank"
                      className="flex flex-row items-center"
                    >
                      <Image
                        src="/svg/telegram.svg"
                        alt="telegram"
                        width={32}
                        height={32}
                      />
                    <span className="ml-2">+55 (11) 93619-0701</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
