import markdownIt from "markdown-it";
const MealDescription = ({ description }: any) => {
  const md = markdownIt();
  const parsedContent = md.render(description);

  return (
    <div>
      {parsedContent ? (
        <article
          className={` markdown-content text-gray-800 dark:text-gray-300 leading-relaxed`}
          dangerouslySetInnerHTML={{ __html: parsedContent }}
        />
      ) : (
        <p>There is no content</p>
      )}
    </div>
  );
};

export default MealDescription;
