import CustomMarkdown from "@/components/molecules/CustomMarkdown";

interface SectionBlockProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <section className="section-block">
      <div className="container">
        <div className="section-block__header">
          <div className="flex flex-row justify-start items-center">
            <CustomMarkdown tag="h2" hasHashtag={true}>
              {title}
            </CustomMarkdown>
          </div>
        </div>

        <div className="section-block__content gap-4">{children}</div>
      </div>
    </section>
  );
}
