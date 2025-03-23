import styles from "@/styles/pages/AboutMe.module.scss";
import Image from "next/image";
import SkillBlock from "@/components/SkillBlock";

export default function AboutMePage() {
  return (
    <div
      className={`
      ${styles["about-me-page"]}
    `}
    >
      <div className="page-title">
        <div className="container">
          <h1>
            <span>/</span>about-me
          </h1>
        </div>
      </div>

      <section className="section-block">
        <div className="container">
          <div className="section-block__content justify-between items-start">
            <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col pr-1">
              <p>
                <strong>Who am I?</strong>
              </p>

              <p>
                With over <strong>10 years of experience</strong> in software
                development, I specialize in web and mobile applications using{" "}
                <strong>Flutter, React, Angular</strong>, and{" "}
                <strong>Vue.js</strong>. My focus is on{" "}
                <strong>performance</strong>, <strong>scalability</strong>, and
                <strong>clean architecture</strong>, delivering{" "}
                <strong>high-quality</strong>,{" "}
                <strong>user-friendly experiences</strong>.{" "}
              </p>

              <p>
                I’m passionate about <strong>Clean Code</strong>,{" "}
                <strong>SOLID principles</strong>, and ensuring my code is
                <strong>maintainable</strong> and <strong>scalable</strong>. I
                also have experience with backend technologies like{" "}
                <strong>Node.js</strong>, <strong>Firebase</strong>, and{" "}
                <strong>PHP</strong>, allowing me to create{" "}
                <strong>full-stack solutions</strong>. Currently, I’m expanding
                my knowledge in <strong>Next.js</strong> and{" "}
                <strong>React Native</strong> to further enhance the
                applications I build.
              </p>

              <p>
                <strong> Let’s create something amazing together!</strong>{" "}
              </p>
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
        <div className={`${styles["background-logo-shape"]} container`}>
          <div className="section-block__header">
            <div className="flex flex-row justify-start items-center">
              <h2>
                <span>#</span>my-fun-facts
              </h2>
            </div>
          </div>

          <div className="section-block__content justify-start gap-4">
            <div className="text-frame text-frame--white-highlights">
              <p>
                I <strong>play guitar</strong> in my spare time
              </p>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <p>
                I’m a huge fan of <strong>coffee</strong>
              </p>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <p>
                I love <strong>churrasco</strong>, the Brazilian barbecue
              </p>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <p>I know how to solve a Rubik&apos;s cube </p>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <p>
                My favorite game is <strong>The Last of Us</strong>
              </p>
            </div>

            <div className="text-frame text-frame--white-highlights">
              <p>
                I have two adorable <strong>cats</strong>
              </p>
            </div>

            <div className="text-frame flex text-frame--white-highlights">
              <p>
                I believe in the power of <strong>simplicity</strong>, which is
                why <strong>minimalism</strong> influences me.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
