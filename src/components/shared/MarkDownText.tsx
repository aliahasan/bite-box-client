import MarkdownIt from "markdown-it";

const MarkDownText = ({ text }: { text: string }) => {
  const md = MarkdownIt();
  const parsedContent = md.render(text);
  return (
    <div>
      {parsedContent ? (
        <article
          className={`markdown-content text-gray-800 dark:text-gray-300 leading-relaxed`}
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      ) : (
        <p>There is no content</p>
      )}
    </div>
  );
};

export default MarkDownText;
