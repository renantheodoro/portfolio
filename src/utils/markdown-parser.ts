export default function parseMarkdownToHTML(text: string) {
  // Replace line breaks with <br />
  let result = text.replace(/\n/g, "<br />");

  // Convert bold (**text** or __text__) to <strong>
  result = result.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  result = result.replace(/__(.*?)__/g, "<strong>$1</strong>");

  // Convert italic (*text* or _text_) to <em>
  result = result.replace(/\*(.*?)\*/g, "<em>$1</em>");
  result = result.replace(/_(.*?)_/g, "<em>$1</em>");

  // Convert underline (~text~) to <u>
  result = result.replace(/~(.*?)~/g, "<u>$1</u>");

  // Convert inline code (`text`) to <code>
  result = result.replace(/`(.*?)`/g, "<code>$1</code>");

  // Convert ordered lists (1. item) to <ol><li>...</li></ol>
  result = result.replace(/^\d+\.\s+(.*)/gm, "<ol><li>$1</li></ol>");

  // Convert unordered lists (* item or - item) to <ul><li>...</li></ul>
  result = result.replace(/^[\*\-\+] (.*)/gm, "<ul><li>$1</li></ul>");

  // Convert headers (#, ##, ###) to <h1>, <h2>, <h3>...
  result = result.replace(/^(#{1,6})\s+(.*)/gm, (match, hashes, content) => {
    const level = hashes.length;
    return `<h${level}>${content}</h${level}>`;
  });

  // Convert links ([text](url)) to <a href="url">text</a>
  result = result.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Convert images (![alt](url)) to <img src="url" alt="alt" />
  result = result.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img src="$2" alt="$1" />'
  );

  // Convert code blocks (``` code```) to <pre><code>...</code></pre>
  result = result.replace(/```(.*?)```/gs, "<pre><code>$1</code></pre>");

  // Convert blockquotes (">") to <blockquote>...</blockquote>
  result = result.replace(/^>\s+(.*)$/gm, "<blockquote>$1</blockquote>");

  return result;
}
