import styles from "@/styles/components/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="flex justify-start items-center mb-2">
                <div className="simple-logo flex justify-between">
                  <Image
                    width={16}
                    height={16}
                    src="svg/logo-white.svg"
                    alt="Logo white"
                  />
                  <span>Renan Theodoro</span>
                </div>

                <p className="ml-6">renan.b.theodoro@gmail.com</p>
              </div>

              <div className="flex flex-row">
                <p>Front-end and mobile developer</p>
              </div>
            </div>

            <div className="flex flex-col justify-start">
              <h3>Media</h3>
              <ul className="flex justify-start">
                <li className="mr-4">
                  <Link href="https://github.com/renantheodoro" target="_blank">
                    <Image
                      src="/svg/github.svg"
                      alt="github"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/renantheodoro/"
                    target="_blank"
                  >
                    <Image
                      src="/svg/linkedin.svg"
                      alt="linkedin"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-row text-center mt-12">
            <p className="w-full">© Copyright 2025. Made by Renan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
