"use client";

import style from "@/styles/components/ButtonLink.module.scss";
import { Link } from "@/i18n/natigation";

interface ButtonProps {
  path: string;
  text: string;
  type?: string;
  onClick?: () => void;
}

export default function ButtonLink({ path, text, type, onClick }: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const isExternal = /^(https?:\/\/|www\.)/.test(path);

  return (
    <div onClick={handleClick}>
      <Link
        href={path}
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={`${style.button} ${style[`button--${type ?? "primary"}`]}`}
      >
        {text}
      </Link>
    </div>
  );
}
