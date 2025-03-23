"use client";

import styles from "@/styles/components/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [languageMenuActive, setLanguageMenuActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const toggleLanguageMenu = () => {
    setLanguageMenuActive((prev) => !prev);
  };

  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
    setLanguageMenuActive(false);
  };

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
                <span>#</span>home
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/about-me" passHref>
                <span>#</span>about-me
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/experiences" passHref>
                <span>#</span>experiences
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/works" passHref>
                <span>#</span>works
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/contacts" passHref>
                <span>#</span>contacts
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
