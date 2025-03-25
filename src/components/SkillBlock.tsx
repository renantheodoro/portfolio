import style from "@/styles/components/SkillBlock.module.scss";

interface SkillBlockProps {
  title: string;
  skills: string[];
  skillDescription?: string;
  startsWithBold?: boolean;
}

function buildSkills(skills: string[], startsWithBold: boolean) {
  return skills.map((skill, index) =>
    startsWithBold ? (
      <span key={index}>
        {index % 2 === 0 ? <strong>{skill}</strong> : skill}
      </span>
    ) : (
      <span key={index}>
        {index % 2 !== 0 ? <strong>{skill}</strong> : skill}
      </span>
    )
  );
}

export default function SkillBlock({
  title,
  skills,
  skillDescription,
  startsWithBold,
}: SkillBlockProps) {
  return (
    <div className={`${style["skill-block"]}`}>
      <div className={`${style["skill-block__header"]}`}>
        <p>
          <strong>{title}</strong>
        </p>
      </div>
      <div className={`${style["skill-block__content"]}`}>
        {buildSkills(skills, startsWithBold ?? false)}
        {skillDescription ? <small>{skillDescription}</small> : ""}
      </div>
    </div>
  );
}
