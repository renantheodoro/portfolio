"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import styles from "@/styles/components/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps({ locale }: { locale: string }) {
  const initialLanguage = locale || "EN";

  return {
    props: {
      initialLanguage,
    },
  };
}

export default function Header({
  initialLanguage,
}: {
  initialLanguage: string;
}) {
  const t = useTranslations("header_menu");
  const language = useTranslations("language");

  const [languageMenuActive, setLanguageMenuActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguageMenu = () => {
    setLanguageMenuActive((prev) => !prev);
  };

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageMenuActive(false);

    // Pega o caminho atual da URL
    const currentPath = pathname;

    const languagePrefix = lang === "EN" ? "/en" : "/pt";

    if (currentPath.startsWith("/en") || currentPath.startsWith("/pt")) {
      router.push(`${languagePrefix}${currentPath.replace(/^\/(en|pt)/, "")}`);
    } else {
      router.push(`${languagePrefix}${currentPath}`);
    }
  };

  useEffect(() => {
    setSelectedLanguage(language("current_language"));
  }, [language]);

  return (
    <header className={styles.header}>
      <div className="container flex justify-between">
        <Link href="/">
          <div className="simple-logo flex justify-between">
            <Image
              width={16}
              height={16}
              src="/svg/logo-white.svg"
              alt="Logo white"
            />
            <span>Renan Theodoro</span>
          </div>
        </Link>

        <nav className={styles["header__menu"]}>
          <ul>
            <li className={styles["header__menu__item"]}>
              <Link href="/" passHref>
                <span>#</span>
                {t("links.home")}
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/about-me" passHref>
                <span>#</span>
                {t("links.about_me")}
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/experiences" passHref>
                <span>#</span>
                {t("links.experiences")}
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/works" passHref>
                <span>#</span>
                {t("links.works")}
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/contacts" passHref>
                <span>#</span>
                {t("links.contacts")}
              </Link>
            </li>
            <li>
              <button
                className={`${styles["header__language"]} ${
                  languageMenuActive ? styles["header__language--active"] : ""
                }`}
                onClick={toggleLanguageMenu}
              >
                {selectedLanguage}
                <Image
                  src="/svg/angle-down.svg"
                  alt="angle"
                  width={10}
                  height={10}
                />

                {languageMenuActive && (
                  <ul className={styles["header__language__menu"]}>
                    <li onClick={() => changeLanguage("EN")}>EN</li>
                    <li onClick={() => changeLanguage("PT-BR")}>PT-BR</li>
                  </ul>
                )}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
