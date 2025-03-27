import styles from "@/styles/components/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-1/2 flex flex-col mb-2 lg:mb-0">
              <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start mb-2">
                <div className="simple-logo flex flex-row justify-between mb-4 lg:mb-0">
                  <Image
                    width={16}
                    height={16}
                    src="/svg/logo-white.svg"
                    alt="Logo white"
                  />
                  <span>Renan Theodoro</span>
                </div>

                <p className="ml-6">renan.b.theodoro@gmail.com</p>
              </div>

              <div className="flex justify-center lg:justify-start text-center lg:text-left mt-2 mb-2 lg:mt-0 lg:mb-0">
                <p>Front-end and mobile developer</p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex flex-col items-start mt-4 lg:mt-0">
              <h3 className="w-full lg:w-auto text-center lg:text-left ">
                Media
              </h3>

              <div className="w-full lg:w-auto flex flex-row flex-wrap justify-center lg:justify-start items-center lg:items-start gap-4 mt-2">
                <Link
                  href="https://www.instagram.com/renantheodoro"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  <Image
                    src="/svg/instagram.svg"
                    alt="instagram"
                    width={32}
                    height={32}
                  />
                  <span className="ml-2">Instagram</span>
                </Link>

                <Link
                  href="https://github.com/renantheodoro"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  <Image
                    src="/svg/github.svg"
                    alt="github"
                    width={32}
                    height={32}
                  />
                  <span className="ml-2">Github</span>
                </Link>

                <Link
                  href="https://www.linkedin.com/in/renantheodoro/"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  <Image
                    src="/svg/linkedin.svg"
                    alt="linkedin"
                    width={32}
                    height={32}
                  />
                  <span className="ml-2">Linkedin</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-row text-center mt-12">
            <p className="w-full">
              © Copyright 2025. Made by{" "}
              <a href="https://github.com/renantheodoro/" target="_blank">
                Renan Theodoro
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
