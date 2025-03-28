"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import styles from "@/styles/components/Header.module.scss";
import Image from "next/image";
import { Link } from "@/i18n/natigation";

interface HeaderProps {
  currentLocation: string;
}

export default function Header({ currentLocation }: HeaderProps) {
  // i18n
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("header_menu");

  // hooks
  const [isBusy, setIsBusy] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [languageMenuActive, setLanguageMenuActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    currentLocation === "en" ? "EN" : "PT-BR"
  );

  const updateLanguage = (currentLanguage: string) => {
    setIsBusy(true);

    setLanguageMenuActive(false);

    setSelectedLanguage(currentLanguage === "en" ? "EN" : "PT-BR");

    const currentPath = pathname;
    const languagePrefix = currentLanguage === "en" ? "/en" : "/pt";

    if (currentPath.startsWith("/en") || currentPath.startsWith("/pt")) {
      router.push(`${languagePrefix}${currentPath.replace(/^\/(en|pt)/, "")}`);
    } else {
      router.push(`${languagePrefix}${currentPath}`);
    }

    setIsBusy(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const toggleLanguageMenu = () => setLanguageMenuActive((prev) => !prev);

  return (
    <>
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
            className={`
          ${styles["header__menu"]}
          ${isMenuOpen ? styles["header__menu--active"] : ""}
        `}
          >
            <ul>
              <li className={styles["header__menu__item"]} onClick={closeMenu}>
                <Link href="/" passHref>
                  <span>#</span>
                  {t("links.home")}
                </Link>
              </li>
              <li className={styles["header__menu__item"]} onClick={closeMenu}>
                <Link href="/about-me" passHref>
                  <span>#</span>
                  {t("links.about_me")}
                </Link>
              </li>
              <li className={styles["header__menu__item"]} onClick={closeMenu}>
                <Link href="/experiences" passHref>
                  <span>#</span>
                  {t("links.experiences")}
                </Link>
              </li>
              <li className={styles["header__menu__item"]} onClick={closeMenu}>
                <Link href="/works" passHref>
                  <span>#</span>
                  {t("links.works")}
                </Link>
              </li>
              <li className={styles["header__menu__item"]} onClick={closeMenu}>
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
                      <li onClick={() => updateLanguage("en")}>EN</li>
                      <li onClick={() => updateLanguage("pt")}>PT-BR</li>
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

      {isBusy ? (
        <div className="loading fixed inset-0 bg-[#282c33] flex justify-center items-center z-50">
          <div className="rounded-full animate-spin">
            <Image
              width={48}
              height={48}
              src="/svg/logo-white.svg"
              alt="Logo white"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
