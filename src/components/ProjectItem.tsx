"use client";

import style from "@/styles/components/ProjectItem.module.scss";
import Image from "next/image";

interface ProjectItemProps {
  mediaPath?: string;
  techs: Array<string>;
  title: string;
  description: string;
  children: React.ReactNode;
}

function buildTechs(techs: Array<string>) {
  return techs.map((tech, index) => <p key={index}>{tech}</p>);
}

export default function ProjectItem({
  mediaPath,
  techs,
  title,
  description,
  children,
}: ProjectItemProps) {
  return (
    <div className={`${style["project-item"]}`}>
      {mediaPath ? (
        <div className={`${style["project-item__media"]}`}>
          <Image
            src={mediaPath}
            alt={mediaPath.toString()}
            width={420}
            height={420}
          />
        </div>
      ) : null}
      <div className={`${style["project-item__techs"]}`}>
        {buildTechs(techs)}
      </div>
      <div className={`${style["project-item__content"]}`}>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className={`${style["project-item__content__bottom"]}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
