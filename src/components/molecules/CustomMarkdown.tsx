import React, { JSX } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface CustomMarkdownProps {
  tag?: keyof JSX.IntrinsicElements;
  customClass?: string;
  children: string;
  hasHashtag?: boolean;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({
  tag = "p",
  customClass,
  children,
  hasHashtag = false,
}) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      components={{
        [tag]: ({ ...props }) =>
          React.createElement(
            tag,
            { className: customClass ?? "", ...props },
            hasHashtag ? <span className="hashtag">#</span> : null,
            props.children
          ),
      }}
    >
      {children}
    </Markdown>
  );
};

export default CustomMarkdown;
