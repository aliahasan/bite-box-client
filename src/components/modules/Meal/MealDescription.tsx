import markdownIt from "markdown-it";
const MealDescription = ({ description }: any) => {
  const md = markdownIt();
  const parsedContent = md.render(description);
  return (
    <div>
      {parsedContent ? (
        <article
          className="prose max-w-none markdown-content"
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      ) : (
        <p>There is no content</p>
      )}
    </div>
  );
};

export default MealDescription;
