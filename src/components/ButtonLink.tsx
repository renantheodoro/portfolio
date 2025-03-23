"use client";

import style from "@/styles/components/ButtonLink.module.scss";
import Link from "next/link";

interface ButtonProps {
  path: string;
  text: string;
  type?: string;
  onClick?: () => void;
}

export default function Button({ path, text, type, onClick }: ButtonProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div onClick={handleClick}>
      <Link
        href={path}
        className={`${style.button} ${style[`button--${type ?? "primary"}`]}`}
      >
        {text}
      </Link>
    </div>
  );
}
