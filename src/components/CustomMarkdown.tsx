import React, { JSX } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CustomMarkdownProps {
  tag?: keyof JSX.IntrinsicElements;
  customClass?: string;
  children: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({
  tag = "p",
  customClass,
  children,
}) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        [tag]: ({ ...props }) =>
          React.createElement(tag, {
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
