import styles from "@/styles/components/Header.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container flex justify-between">
        <div className="simple-logo flex justify-between">
          <Image
            width={16}
            height={16}
            src="svg/logo-white.svg"
            alt="Logo white"
          />
          <span>Renan Theodoro</span>
        </div>

        <nav className={styles["header__menu"]}>
          <ul>
            <li className={styles["header__menu__item"]}>
              <Link href="/" passHref>
                <span>#</span>home
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/works" passHref>
                <span>#</span>works
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/about-me" passHref>
                <span>#</span>about-me
              </Link>
            </li>
            <li className={styles["header__menu__item"]}>
              <Link href="/contacts" passHref>
                <span>#</span>contacts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
