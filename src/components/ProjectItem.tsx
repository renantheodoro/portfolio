"use client";

import style from "@/styles/components/ProjectItem.module.scss";
import Image from "next/image";
import CustomMarkdown from "./CustomMarkdown";

interface ProjectItemProps {
  mediaPath?: string;
  techs: Array<string>;
  title: string;
  description: string;
  children: React.ReactNode;
}

function buildTechs(techs: Array<string>) {
  return techs.map((tech, index) => (
    <div key={index} className="text-frame">
      <p>{tech}</p>
    </div>
  ));
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

      <div className={`${style["project-item__content"]}`}>
        <div>
          <CustomMarkdown tag="h3">{title}</CustomMarkdown>
          <CustomMarkdown tag="p">{description}</CustomMarkdown>

          <div className={`${style["project-item__techs"]}`}>
            {buildTechs(techs)}
          </div>
        </div>

        <div className={`${style["project-item__content__bottom"]}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
