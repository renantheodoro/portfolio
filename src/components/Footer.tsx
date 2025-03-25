import styles from "@/styles/components/Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="flex flex-col">
          <div className="flex flex-row justify-between">

            <div className="w-1/2 flex flex-col">
              <div className="flex justify-start items-center mb-2">
                <div className="simple-logo flex justify-between">
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

              <div className="flex flex-row">
                <p>Front-end and mobile developer</p>
              </div>
            </div>

            <div className="w-1/2 flex flex-col items-start">
              <h3>Media</h3>

              <div className="flex flex-row flex-wrap items-start gap-4 mt-2">
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
            <p className="w-full">© Copyright 2025. Made by Renan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
