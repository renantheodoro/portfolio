import React, { JSX } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CustomMarkdownProps {
  tag?: keyof JSX.IntrinsicElements;
  customClass?: string;
  children: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({
  tag,
  customClass,
  children,
}) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        [tag ?? "p"]: ({ ...props }) =>
          React.createElement(tag ?? "p", {
            className: customClass ?? "",
            ...props,
          }),
      }}
    >
      {children}
    </Markdown>
  );
};

export default CustomMarkdown;
