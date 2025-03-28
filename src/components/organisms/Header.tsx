"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { getStoredLanguage, setStoredLanguage } from "@/utils/local-storage";
import styles from "@/styles/components/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export async function getServerSideProps({ locale }: { locale: string }) {
  return {
    props: {
      initialLanguage: locale || "EN",
    },
  };
}

export default function Header({
  initialLanguage,
}: {
  initialLanguage: string;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languageMenuActive, setLanguageMenuActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(initialLanguage);

  const t = useTranslations("header_menu");
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = useCallback(
    (currentLanguage: string) => {
      setLanguageMenuActive(false);
      setSelectedLanguage(currentLanguage);
      setStoredLanguage(currentLanguage);

      const currentPath = pathname;
      const languagePrefix = currentLanguage === "EN" ? "/en" : "/pt";

      if (currentPath.startsWith("/en") || currentPath.startsWith("/pt")) {
        router.push(
          `${languagePrefix}${currentPath.replace(/^\/(en|pt)/, "")}`
        );
      } else {
        router.push(`${languagePrefix}${currentPath}`);
      }
    },
    [pathname, router]
  );

  useEffect(() => {
    const storedLanguage = getStoredLanguage();
    changeLanguage(storedLanguage || initialLanguage);
  }, [initialLanguage, changeLanguage]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLanguageMenu = () => setLanguageMenuActive((prev) => !prev);

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

        <nav
          className={`${styles["header__menu"]} ${
            isMenuOpen ? styles["header__menu--active"] : ""
          }`}
        >
          <ul>
            {["home", "about_me", "experiences", "works", "contacts"].map(
              (link) => (
                <li
                  key={link}
                  className={styles["header__menu__item"]}
                  onClick={closeMenu}
                >
                  <Link href={`/${link}`} passHref>
                    <span>#</span>
                    {t(`links.${link}`)}
                  </Link>
                </li>
              )
            )}
            <li>
              <button
                className={`${styles["header__language"]} ${
                  languageMenuActive ? styles["header__language--active"] : ""
                }`}
                onClick={toggleLanguageMenu}
              >
                <span>
                  {selectedLanguage}
                  <Image
                    src="/svg/angle-down.svg"
                    alt="angle"
                    width={10}
                    height={10}
                  />
                </span>
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

        <button
          className={`${styles["header__menu-button"]} ${
            isMenuOpen ? styles["header__menu-button--active"] : ""
          }`}
          onClick={toggleMenu}
        ></button>
      </div>
    </header>
  );
}
